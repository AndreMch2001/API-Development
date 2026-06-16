import { useState, useEffect, useCallback } from 'react';

import style from './PesquisaDados.module.css';
import { LAYOUT_TYPE } from '../../../constants/layoutTypes.js';

function InputFiltro({ label, id, type = "text", name, className, placeholder, value, onChange }) {
  return (
    <div className={style.div_InputFiltro}>

      <label htmlFor={id}>
        {label}
      </label>

      <input type={type} id={id} name={name} value={value} onChange={onChange} className={className} placeholder={placeholder} aria-label={label} />

    </div>
  );
}

function PesquisaDados({ setResultados, setLoading, setErro, tipo = LAYOUT_TYPE.POST_LOGIN, modoPesquisa }) {

  const [filtros, setFiltros] = useState({ nome: '', nisFavorecido: '', nomeMunicipio: '', uf: '', competencia: '' });
  const [pagina, setPagina] = useState(0);
  const [totalPaginas, setTotalPaginas] = useState(0);
  // =========================
  // ATUALIZAR FILTROS
  // =========================

  function atualizarFiltro(event) {
    const { name, value } = event.target;

    setFiltros((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  // =========================
  // BUSCAR TODOS
  // =========================

  const buscarTodos = useCallback(async (paginaAtual = 0) => {

    try {

      setLoading(true);
      setErro(null);

      const params = new URLSearchParams();

      params.append('pagina', paginaAtual);
      params.append('tamanho', 20);

      const response = await fetch(
        `http://localhost:8081/api/Bolsafamiliamodel/todos?${params.toString()}`
      );

      if (!response.ok) {
        throw new Error('Erro ao buscar todos os dados');
      }

      const data = await response.json();

      setPagina(data.number);
      setTotalPaginas(data.totalPages);

      setResultados(data.content);

    } catch (error) {

      console.error(error);
      setErro(error.message);

    } finally {

      setLoading(false);

    }

  }, [setErro, setLoading, setResultados]);

  // =========================
  // Mudar de pagina
  // =========================
  async function mudarPagina(novaPagina) {

    if (novaPagina < 0 || novaPagina >= totalPaginas) {
      return;
    }

    if (modoPesquisa === 'TODOS') {
      await buscarTodos(novaPagina);
    } else {
      await buscarFiltro(null, novaPagina);
    }
  }
  // =========================
  // PESQUISA COM FILTROS
  // =========================

  async function buscarFiltro(event = null, paginaAtual = 0) {

    if (event) {
      event.preventDefault();
    }

    try {

      setLoading(true);
      setErro(null);

      const params = new URLSearchParams();

      params.append('pagina', paginaAtual);
      params.append('tamanho', 20);
      if (filtros.nome.trim()) {
        params.append('nome', filtros.nome);
      }

      if (filtros.nisFavorecido.trim()) {
        params.append('nisFavorecido', filtros.nisFavorecido);
      }

      if (filtros.nomeMunicipio.trim()) {
        params.append('nomeMunicipio', filtros.nomeMunicipio);
      }

      if (filtros.uf.trim()) {
        params.append('uf', filtros.uf);
      }

      if (filtros.competencia.trim()) {
        params.append('competencia', filtros.competencia);
      }

      const response = await fetch(
        `http://localhost:8081/api/Bolsafamiliamodel/busca?${params.toString()}`
      );

      if (!response.ok) {
        throw new Error('Erro ao buscar dados');
      }

      const data = await response.json();

      setPagina(data.number);
      setTotalPaginas(data.totalPages);

      setResultados(data.content);

    } catch (error) {

      console.error(error);
      setErro(error.message);

    } finally {

      setLoading(false);

    }
  }

  if (tipo === LAYOUT_TYPE.NONE) return null;

  if (modoPesquisa === 'TODOS') {
    return (
      //<center>
      <section className={style.secaoFiltro}>
        <h2 className={style.secaoFiltro_Titulo}>
          Você está Pesquisando Todos os Resultados
        </h2>
        <br></br>
        <p className={style.secaoFiltro_Texto}>
          nessa pesuisa Encontrara todos os dados que temos disponiveis em nossa posse
        </p>
        <p className={style.secaoFiltro_Texto}>
          podendo usar o navegador de paginas para ir e voltar na sua pesquisa
        </p>
        <p className={style.secaoFiltro_Texto}>
          caso queira voltar para os filtros aperte no botão "Pesquisar com Filtros para retornar ao filtro"
        </p>
        {totalPaginas > 0 && (

          <div className={style.paginacao}>

            <button
              type="button"
              className={style.botaoPagina}
              onClick={() => mudarPagina(pagina - 1)}
              disabled={pagina === 0}
            >
              ←
            </button>

            <span className={style.infoPagina}>
              Página {pagina + 1} de {totalPaginas}
            </span>

            <button
              type="button"
              className={style.botaoPagina}
              onClick={() => mudarPagina(pagina + 1)}
              disabled={pagina >= totalPaginas - 1}
            >
              →
            </button>

          </div>

        )}
      </section>
      //</center>
    );
  }
  return (
    <>

      {tipo === LAYOUT_TYPE.POST_LOGIN && (

        <section className={style.secaoFiltro}>

          <h2 className={style.secaoFiltro_Titulo}>
            Filtros de Pesquisa
          </h2>

          <p className={style.secaoFiltro_Texto}>
            Use os filtros para refinar sua busca.
          </p>

          <form className={style.secaoFiltro_Lista} onSubmit={(e) => buscarFiltro(e, 0)}>
            <InputFiltro
              label="Filtrar pelo Nome"
              id="filtroNome"
              name="nome"
              value={filtros.nome}
              onChange={atualizarFiltro}
              className={style.secaoFiltro_Input}
              placeholder="Nome do favorecido"
            />

            <InputFiltro
              label="Filtrar pelo NIS"
              id="filtroNIS"
              name="nisFavorecido"
              value={filtros.nisFavorecido}
              onChange={atualizarFiltro}
              className={style.secaoFiltro_Input}
              placeholder="NIS"
            />

            <InputFiltro
              label="Município"
              id="filtroMunicipio"
              name="nomeMunicipio"
              value={filtros.nomeMunicipio}
              onChange={atualizarFiltro}
              className={style.secaoFiltro_Input}
              placeholder="Município"
            />

            <InputFiltro
              label="UF"
              id="filtroUF"
              name="uf"
              value={filtros.uf}
              onChange={atualizarFiltro}
              className={style.secaoFiltro_Input}
              placeholder="Ex: SC"
            />

            <InputFiltro
              label="Competência"
              id="filtroCompetencia"
              name="competencia"
              value={filtros.competencia}
              onChange={atualizarFiltro}
              className={style.secaoFiltro_Input}
              placeholder="2025-01"
            />

            {modoPesquisa === 'FILTRO' && (
              <button
                type="submit"
                className={style.button}
                aria-label="Pesquisar"
              >
                ➤
              </button>
            )}

          </form>
          {totalPaginas > 0 && (

            <div className={style.paginacao}>

              <button
                type="button"
                className={style.botaoPagina}
                onClick={() => mudarPagina(pagina - 1)}
                disabled={pagina === 0}
              >
                ←
              </button>

              <span className={style.infoPagina}>
                Página {pagina + 1} de {totalPaginas}
              </span>

              <button
                type="button"
                className={style.botaoPagina}
                onClick={() => mudarPagina(pagina + 1)}
                disabled={pagina >= totalPaginas - 1}
              >
                →
              </button>

            </div>

          )}
        </section>

      )}

    </>
  );
}

export default PesquisaDados;