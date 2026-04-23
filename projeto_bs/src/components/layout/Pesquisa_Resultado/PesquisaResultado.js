/*import { useCallback, useEffect, useMemo, useState } from 'react';


const DEFAULT_API =
  process.env.REACT_APP_SEARCH_API ||
  'http://localhost:8080/api/Bolsafamiliamodel/todos';
const PAGE_SIZE = Math.max(
  1,
  Number(process.env.REACT_APP_PAGE_SIZE) || 20
);
const SEARCH_QUERY_PARAM =
  process.env.REACT_APP_SEARCH_QUERY_PARAM || 'nomeFavorecido';

const COLUNAS_BOLSA_ORDEM = [
  'id',
  'nomeFavorecido',
  'cpfFavorecido',
  'nisFavorecido',
  'valorParcela',
  'competência',
  'mesReferencia',
  'nomeMunicipio',
  'codigoMunicipioSiafi',
  'uf',
];

const LABEL_CAMPO = {
  id: 'ID',
  nomeFavorecido: 'Nome',
  cpfFavorecido: 'CPF',
  nisFavorecido: 'NIS',
  valorParcela: 'Valor parcela',
  competência: 'Competência',
  mesReferencia: 'Mês referência',
  nomeMunicipio: 'Município',
  codigoMunicipioSiafi: 'Cód. município SIAFI',
  uf: 'UF',
};

function normalizeSearchResponse(json, indicePaginaZeroBased, limit) {
  const bfLista = json.contente ?? json.content;
  if (bfLista != null) {
    const items = Array.isArray(bfLista) ? bfLista : [];
    const pag = json.paginação ?? json.paginacao ?? {};
    const numeroDaPagina =
      pag['númeroDaPágina'] ??
      pag.númeroDaPágina ??
      pag.numeroDaPagina ??
      indicePaginaZeroBased;
    let totalPages =
      json['totalPáginas'] ?? json.totalPáginas ?? json.totalPaginas ?? null;
    if (totalPages == null && json.totalElementos != null) {
      const tam =
        pag['tamanhoDaPágina'] ??
        pag.tamanhoDaPágina ??
        json.tamanho ??
        limit;
      totalPages = Math.ceil(
        Number(json.totalElementos) / Math.max(1, Number(tam) || limit)
      );
    }
    if (totalPages == null || totalPages < 1) {
      totalPages = 1;
    }
    return {
      items,
      page: Number(numeroDaPagina),
      totalPages: Number(totalPages),
    };
  }

  if (Array.isArray(json)) {
    const totalPages = Math.max(1, Math.ceil(json.length / limit));
    const start = indicePaginaZeroBased * limit;
    const items = json.slice(start, start + limit);
    return { items, page: indicePaginaZeroBased, totalPages };
  }

  const items =
    json.items ??
    json.results ??
    json.data ??
    json.records ??
    json.rows ??
    [];

  const page = json.page ?? json.currentPage ?? indicePaginaZeroBased;
  const total = json.total ?? json.count ?? json.totalCount;
  const pageSize = json.pageSize ?? json.limit ?? json.perPage ?? limit;

  let totalPages =
    json.totalPages ??
    json.pages ??
    json.lastPage ??
    (total != null && pageSize
      ? Math.ceil(Number(total) / Number(pageSize))
      : null);

  if (!totalPages || totalPages < 1) {
    totalPages = Math.max(1, Math.ceil((items.length || 1) / limit));
  }

  return { items: Array.isArray(items) ? items : [], page, totalPages };
}

function collectKeys(rows) {
  const keys = new Set();
  rows.forEach((row) => {
    if (row && typeof row === 'object' && !Array.isArray(row)) {
      Object.keys(row).forEach((k) => keys.add(k));
    }
  });
  const ordered = COLUNAS_BOLSA_ORDEM.filter((k) => keys.has(k));
  const rest = Array.from(keys).filter((k) => !ordered.includes(k)).sort();
  return [...ordered, ...rest];
}

function formatarValor(campo, valor) {
  if (valor == null) return '—';
  if (typeof valor === 'object') return JSON.stringify(valor);
  if (campo === 'valorParcela' && typeof valor === 'number') {
    return valor.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    });
  }
  return String(valor);
}

function NomeComDestaque({ texto, trecho }) {
  const t = texto != null ? String(texto) : '—';
  const q = (trecho ?? '').trim();
  if (!q) {
    return <span className={style.nomeTexto}>{t}</span>;
  }
  const lower = t.toLocaleLowerCase('pt-BR');
  const lq = q.toLocaleLowerCase('pt-BR');
  const idx = lower.indexOf(lq);
  if (idx < 0) {
    return <span className={style.nomeTexto}>{t}</span>;
  }
  const antes = t.slice(0, idx);
  const match = t.slice(idx, idx + q.length);
  const depois = t.slice(idx + q.length);
  return (
    <span className={style.nomeTexto}>
      {antes}
      <mark className={style.nomeMark}>{match}</mark>
      {depois}
    </span>
  );
}

function PesquisaResultado({ tipo }) {
  const [termo, setTermo] = useState('');
  const [sessaoAtiva, setSessaoAtiva] = useState(false);
  const [indicePagina, setIndicePagina] = useState(0);
  const [itens, setItens] = useState([]);
  const [totalPaginas, setTotalPaginas] = useState(1);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState(null);
  const [colunas, setColunas] = useState([]);
  const [termoDaConsulta, setTermoDaConsulta] = useState('');

  const colunasDetalhe = useMemo(
    () => colunas.filter((c) => c !== 'nomeFavorecido'),
    [colunas]
  );

  const buscar = useCallback(async (indicePaginaAlvo, textoBusca) => {
    const api = DEFAULT_API.trim();
    const base = api.startsWith('http')
      ? new URL(api)
      : new URL(api.startsWith('/') ? api : `/${api}`, window.location.origin);
    base.searchParams.set('pagina', String(indicePaginaAlvo));
    base.searchParams.set('tamanho', String(PAGE_SIZE));
    const q = (textoBusca ?? '').trim();
    if (q && SEARCH_QUERY_PARAM) {
      base.searchParams.set(SEARCH_QUERY_PARAM, q);
    }

    setCarregando(true);
    setErro(null);
    setSessaoAtiva(true);
    setTermoDaConsulta(q);

    try {
      const res = await fetch(base.toString(), {
        headers: { Accept: 'application/json' },
      });
      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }
      const json = await res.json();
      const { items, page, totalPages } = normalizeSearchResponse(
        json,
        indicePaginaAlvo,
        PAGE_SIZE
      );
      setItens(items);
      setColunas(collectKeys(items));
      setIndicePagina(page);
      setTotalPaginas(totalPages);
    } catch (e) {
      setErro(
        e?.message
          ? `Não foi possível carregar os dados (${e.message}). Verifique a API e o CORS.`
          : 'Não foi possível carregar os dados. Verifique a API e o CORS.'
      );
      setItens([]);
      setColunas([]);
    } finally {
      setCarregando(false);
    }
  }, []);

  useEffect(() => {
    if (!sessaoAtiva) return;
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setSessaoAtiva(false);
        setItens([]);
        setColunas([]);
        setErro(null);
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [sessaoAtiva]);

  const onKeyDownInput = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      setIndicePagina(0);
      buscar(0, termo);
    }
  };

  const irAnterior = () => {
    if (indicePagina <= 0 || carregando) return;
    buscar(indicePagina - 1, termo);
  };

  const irProxima = () => {
    if (indicePagina >= totalPaginas - 1 || carregando) return;
    buscar(indicePagina + 1, termo);
  };

  const rotuloConsulta =
    termoDaConsulta.trim() !== ''
      ? termoDaConsulta.trim()
      : 'Lista geral (sem filtro de nome)';

  const paginaHumana = indicePagina + 1;

  return (
    <>
      {tipo === 0 && <></>}

      {tipo === 1 && (
        
      )}
    </>
  );
}


*/
import style from './PesquisaResultado.module.css';

function PesquisaResultado({ tipo }) {
  return (
    <>
      {tipo === 0}(
      <></>
      )
      {tipo === 1}(
      <div className={style.layoutContainer}>

        {/* FILTROS */}
        <section className={style.filterPanel}>
          <h2 className={style.filterTitle}>Filtro de Beneficiários</h2>

          <form className={style.filterForm}>

            <div className={style.fieldGroup}>
              <label>Nome</label>
              <input type="text" placeholder="Nome da pessoa" />
            </div>

            <div className={style.fieldGroup}>
              <label>Estado (UF)</label>
              <input type="text" placeholder="Ex: SC, RJ, SP" maxLength={2} />
            </div>

            <div className={style.fieldGroup}>
              <label>Cidade</label>
              <input type="text" placeholder="Cidade" />
            </div>

            <div className={style.fieldGroup}>
              <label>Valor da Parcela</label>
              <input type="number" placeholder="R$ 0,00" />
            </div>

            <div className={style.fieldGroup}>
              <label>NIS</label>
              <input type="text" placeholder="Número do NIS" />
            </div>

            <div className={style.actions}>
              <button type="submit">Filtrar</button>
              <button type="reset">Limpar</button>
            </div>

          </form>
        </section>

        {/* RESULTADOS */}
        <section className={style.resultsPanel}>

          <header className={style.resultsHeader}>
            <h3>Resultados</h3>
            <span>0 registros encontrados</span>
          </header>

          <div className={style.resultList}>

            <article className={style.resultCard}>
              <h4 className={style.resultName}>Nome da Pessoa</h4>

              <div className={style.resultGrid}>
                <div>
                  <span>Estado</span>
                  <p>SC</p>
                </div>

                <div>
                  <span>Cidade</span>
                  <p>Florianópolis</p>
                </div>

                <div>
                  <span>Valor</span>
                  <p>R$ 600,00</p>
                </div>

                <div>
                  <span>NIS</span>
                  <p>12345678900</p>
                </div>
              </div>
            </article>

          </div>

        </section>
      </div>
      )
      {tipo === 2}(
      <></>
      )
    </>
  );
}

export default PesquisaResultado;