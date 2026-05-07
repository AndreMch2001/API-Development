import style from './Pesquisar.Page.module.css';
import PesquisaResultado from '../../layout/PesquisaFIltro_IA/PesquisaFIltro_IA';
import ResultadosPesquisa from '../../layout/ResultadosPesquisa/Resultados_Pesquisa';
import { LAYOUT_TYPE } from '../../../constants/layoutTypes';

function PesquisaPage() {

  return (

    <section className={style.pesquisaPage}>

      {/* FILTRO IA */}

      <PesquisaResultado
        tipo={LAYOUT_TYPE.PRE_LOGIN}
      />

      {/* RESULTADOS */}

      <ResultadosPesquisa
        tipo={LAYOUT_TYPE.POST_LOGIN}
      />

    </section>

  );
}

export default PesquisaPage;