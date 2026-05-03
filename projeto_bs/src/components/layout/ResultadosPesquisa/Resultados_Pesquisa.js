import style from './Resultados_Pesquisa.module.css';
import { LAYOUT_TYPE } from '../../../constants/layoutTypes.js';

function PesquisaResultado(tipo) {
    if (tipo === LAYOUT_TYPE.NONE) return null

    return (
        <>
            {tipo === LAYOUT_TYPE.PRE_LOGIN && (
                <section className={style.secaoResultado}>
                    <div>
                        a
                    </div>
                </section>
            )}

            {tipo === LAYOUT_TYPE.POST_LOGIN && (
                <section className={style.secaoResultado}>

                </section>
            )}
        </>
    );
}

export default PesquisaResultado;