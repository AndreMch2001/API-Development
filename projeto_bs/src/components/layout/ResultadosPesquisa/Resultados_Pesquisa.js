import style from './Resultados_Pesquisa.module.css';
import styleCard from './cardResultado.module.css';
//import PesquisaDados from '../PesquisaDados/PesquisaDados.js';

import { LAYOUT_TYPE } from '../../../constants/layoutTypes.js';

function PrintResultados() {
    return (
        <section className={styleCard.cardResultado}>
            <div className={styleCard.ID}>
                <h3 className={styleCard.cardResultado_Titulo}>
                    ID:
                    <p className={styleCard.cardResultado_Texto}>1</p>
                </h3>
            </div>

            <div className={styleCard.NomeFavorecido}>
                <h3 className={styleCard.cardResultado_Titulo}>
                    Nome do Favorecido:
                    <p className={styleCard.cardResultado_Texto}>Maria da Silva</p>
                </h3>
            </div>

            <div className={styleCard.CPF}>
                <h3 className={styleCard.cardResultado_Titulo}>
                    CPF do Favorecido:
                    <p className={styleCard.cardResultado_Texto}>000.000.000-00</p>
                </h3>
            </div>

            <div className={styleCard.NIS}>
                <h3 className={styleCard.cardResultado_Titulo}>
                    NIS do Favorecido:
                    <p className={styleCard.cardResultado_Texto}>123456789</p>
                </h3>
            </div>

            <div className={styleCard.Municipio}>
                <h3 className={styleCard.cardResultado_Titulo}>
                    Nome do Município:
                    <p className={styleCard.cardResultado_Texto}>São Paulo</p>
                </h3>
            </div>

            <div className={styleCard.CodigoMunicipio}>
                <h3 className={styleCard.cardResultado_Titulo}>
                    Código Município SIAFI:
                    <p className={styleCard.cardResultado_Texto}>7107</p>
                </h3>
            </div>

            <div className={styleCard.UF}>
                <h3 className={styleCard.cardResultado_Titulo}>
                    UF:
                    <p className={styleCard.cardResultado_Texto}>SP</p>
                </h3>
            </div>

            <div className={styleCard.MesReferencia}>
                <h3 className={styleCard.cardResultado_Titulo}>
                    Mês de Referência:
                    <p className={styleCard.cardResultado_Texto}>Janeiro</p>
                </h3>
            </div>

            <div className={styleCard.Competencia}>
                <h3 className={styleCard.cardResultado_Titulo}>
                    Competência:
                    <p className={styleCard.cardResultado_Texto}>2025-01</p>
                </h3>
            </div>

            <div className={styleCard.ValorBeneficio}>
                <h3 className={styleCard.cardResultado_Titulo}>
                    Valor da Parcela:
                    <p className={styleCard.cardResultado_Texto}>R$ 500,00</p>
                </h3>
            </div>
        </section>
    );
}

function PesquisaResultado({ tipo }) {

    if (tipo === LAYOUT_TYPE.NONE) return null;

    return (
        <section className={style.content_area}>
            {tipo === LAYOUT_TYPE.PRE_LOGIN && (
                <section className={style.secaoResultado}>
                    <header className={style.headerResultado}>
                        <h2 className={style.secaoResultado_Titulo}>Resultados da Pesquisa</h2>
                        <p className={style.secaoResultado_Texto}>
                            Os resultados da sua pesquisa aparecerão aqui. Use os filtros ao lado para refinar sua busca.
                        </p>
                    </header>
                    <div className={style.cardResultadoArea}>
                        <PrintResultados />
                        <PrintResultados />
                        <PrintResultados />
                        <PrintResultados />
                        <PrintResultados />
                        <PrintResultados />
                        <PrintResultados />
                        <PrintResultados />
                        <PrintResultados />
                        <PrintResultados />
                        <PrintResultados />
                        <PrintResultados />
                        <PrintResultados />
                        <PrintResultados />
                        <PrintResultados />
                        <PrintResultados />
                        <PrintResultados />
                        <PrintResultados />
                        <PrintResultados />
                        <PrintResultados />
                        <PrintResultados />
                        <PrintResultados />
                    </div>
                </section>

            )
            }

            {
                tipo === LAYOUT_TYPE.POST_LOGIN && (
                    <section className={style.secaoResultado}>
                        <section className={style.cardResultado}>

                        </section>
                    </section>
                )
            }
        </section>
    );
}

export default PesquisaResultado;