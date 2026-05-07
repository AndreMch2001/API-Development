import style from './Resultados_Pesquisa.module.css';

import MainLayout from '../MainLayout/MainLayout';
import Container from '../Container/Container';

import { LAYOUT_TYPE } from '../../../constants/layoutTypes.js';

function PesquisaResultado({ tipo }) {

    if (tipo === LAYOUT_TYPE.NONE) return null;

    /* =========================================
       PRÉ LOGIN
    ========================================= */

    if (tipo === LAYOUT_TYPE.PRE_LOGIN) {
        return (
            <section className={style.secaoResultado}>
                <Container>

                    <div className={style.cardResultado}>
                        Resultado público
                    </div>

                </Container>
            </section>
        );
    }

    /* =========================================
       PÓS LOGIN
    ========================================= */

    return (
        <MainLayout>

            <Container>

                <section className={style.secaoResultado}>

                    <div className={style.cardResultado}>
                        Resultado do usuário logado
                    </div>

                </section>

            </Container>

        </MainLayout>
    );
}

export default PesquisaResultado;