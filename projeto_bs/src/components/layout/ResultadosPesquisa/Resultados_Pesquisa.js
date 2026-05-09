import style from './Resultados_Pesquisa.module.css';

import MainLayout from '../MainLayout/MainLayout';

import pesquisaFiltro_IA from '../PesquisaDados/PesquisaDados.js';

import { LAYOUT_TYPE } from '../../../constants/layoutTypes.js';

function PesquisaResultado({ tipo }) {

    if (tipo === LAYOUT_TYPE.NONE) return null;

    return (
        <MainLayout>

            <section className={style.secaoResultado}>

                {tipo === LAYOUT_TYPE.PRE_LOGIN && (
                    <div className={style.cardResultado}>
                        {/* SIDEBAR DIREITA */}
                        <aside className="rightbar-area">
                            <pesquisaFiltro_IA tipo={LAYOUT_TYPE.PRE_LOGIN} />
                        </aside>
                    </div>
                )}

                {tipo === LAYOUT_TYPE.POST_LOGIN && (
                    <div className={style.cardResultado}>
                        <pesquisaFiltro_IA tipo={LAYOUT_TYPE.POST_LOGIN} />
                    </div>
                )}

            </section>

        </MainLayout>
    );
}

export default PesquisaResultado;