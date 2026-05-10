import style from './Resultados_Pesquisa.module.css';
import styleCard from './cardResultado.module.css';
//import PesquisaDados from '../PesquisaDados/PesquisaDados.js';

import { LAYOUT_TYPE } from '../../../constants/layoutTypes.js';

function PrintResultados() {
    return (
        <div className={styleCard.cardResultado}>
            <h3 className={styleCard.cardResultado_Titulo}>Nome do Favorecido:<p className={styleCard.cardResultado_Texto}>Maria da Silva</p></h3>
            <h3 className={styleCard.cardResultado_Titulo}>NIS:<p className={styleCard.cardResultado_Texto}>123456789</p></h3>
            <h3 className={styleCard.cardResultado_Titulo}>Mês de Referência:<p className={styleCard.cardResultado_Texto}>Janeiro</p></h3>
            <h3 className={styleCard.cardResultado_Titulo}>Valor do Benefício:<p className={styleCard.cardResultado_Texto}>R$ 500,00</p></h3>
        </div>
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
                    </div>
                </section>

            )
            }

            {
                tipo === LAYOUT_TYPE.POST_LOGIN && (
                    <section className={style.secaoResultado}>
                        <div className={style.cardResultado}>

                        </div>
                    </section>
                )
            }
        </section>
    );
}

export default PesquisaResultado;