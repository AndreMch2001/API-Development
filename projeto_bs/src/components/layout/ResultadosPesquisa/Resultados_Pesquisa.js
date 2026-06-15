import style from './Resultados_Pesquisa.module.css';
import styleCard from './cardResultado.module.css';

import { LAYOUT_TYPE } from '../../../constants/layoutTypes.js';

function PrintResultados({ pessoa }) {
    return (
        <section className={styleCard.cardResultado}>

            <div className={styleCard.Nome}>
                <h3 className={styleCard.cardResultado_Titulo}>
                    Nome do Favorecido:
                </h3>

                <p className={styleCard.cardResultado_Texto}>
                    {pessoa.nomeFavorecido}
                </p>
            </div>

            <div className={styleCard.NIS}>
                <h3 className={styleCard.cardResultado_Titulo}>
                    NIS do Favorecido:
                </h3>

                <p className={styleCard.cardResultado_Texto}>
                    {pessoa.nisFavorecido}
                </p>
            </div>

            <div className={styleCard.Municipio}>
                <h3 className={styleCard.cardResultado_Titulo}>
                    Nome do Município:
                </h3>

                <p className={styleCard.cardResultado_Texto}>
                    {pessoa.nomeMunicipio}
                </p>
            </div>

            <div className={styleCard.UF}>
                <h3 className={styleCard.cardResultado_Titulo}>
                    UF:
                </h3>

                <p className={styleCard.cardResultado_Texto}>
                    {pessoa.uf}
                </p>
            </div>

            <div className={styleCard.MesReferencia}>
                <h3 className={styleCard.cardResultado_Titulo}>
                    Mês de Referência:
                </h3>

                <p className={styleCard.cardResultado_Texto}>
                    {pessoa.mesReferencia}
                </p>
            </div>

            <div className={styleCard.Competencia}>
                <h3 className={styleCard.cardResultado_Titulo}>
                    Competência:
                </h3>

                <p className={styleCard.cardResultado_Texto}>
                    {pessoa.competencia}
                </p>
            </div>

            <div className={styleCard.ValorBeneficio}>
                <h3 className={styleCard.cardResultado_Titulo}>
                    Valor da Parcela:
                </h3>

                <p className={styleCard.cardResultado_Texto}>
                    R$ {pessoa.valorParcela}
                </p>
            </div>

        </section>
    );
}

function ResultadosPesquisa({
    resultados,
    loading,
    erro,
    paginaAtual = 0,
    totalPaginas = 0,
    onPaginaChange,
    tipo = LAYOUT_TYPE.PRE_LOGIN
}) {

    if (tipo === LAYOUT_TYPE.NONE) return null;

    const primeiraPagina = () => {
        onPaginaChange(0);
    };

    const ultimaPagina = () => {
        onPaginaChange(totalPaginas - 1);
    };

    const paginaAnterior = () => {
        if (paginaAtual > 0) {
            onPaginaChange(paginaAtual - 1);
        }
    };

    const proximaPagina = () => {
        if (paginaAtual >= totalPaginas - 1) {
            onPaginaChange(0);
            return;
        }

        onPaginaChange(paginaAtual + 1);
    };

    return (
        <section className={style.content_area}>

            <section className={style.secaoResultado}>

                <header className={style.headerResultado}>

                    <h2 className={style.secaoResultado_Titulo}>
                        Os resultados da sua pesquisa aparecerão aqui.
                    </h2>

                    <p className={style.secaoResultado_Texto}>
                        na palma da sua mão.
                    </p>

                </header>

                {loading && (
                    <div>
                        <p className={style.loadingTexto}>
                            ↻
                        </p>

                        <p className={style.secaoResultado_Texto}>
                            Carregando resultados...
                        </p>
                    </div>
                )}

                {!loading && resultados.length === 0 && (
                    <p className={style.secaoResultado_Texto}>
                        Nenhum resultado encontrado.
                    </p>
                )}

                <div className={style.cardResultadoArea}>

                    {resultados.map((pessoa, index) => (
                        <PrintResultados
                            key={`${pessoa.nisFavorecido}-${index}`}
                            pessoa={pessoa}
                        />
                    ))}

                </div>

                {!loading && totalPaginas > 0 && (
                    <div className={style.paginacao}>

                        <button
                            className={style.botaoPagina}
                            onClick={primeiraPagina}
                        >
                            {"<<"}
                        </button>

                        <button
                            className={style.botaoPagina}
                            onClick={paginaAnterior}
                        >
                            {"<"}
                        </button>

                        <span className={style.numeroPagina}>
                            {paginaAtual + 1}
                        </span>

                        <button
                            className={style.botaoPagina}
                            onClick={proximaPagina}
                        >
                            {">"}
                        </button>

                        <button
                            className={style.botaoPagina}
                            onClick={ultimaPagina}
                        >
                            {">>"}
                        </button>

                    </div>
                )}

            </section>

        </section>
    );
}

export default ResultadosPesquisa;