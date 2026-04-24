import style from './PesquisaResultado.module.css';
import { LAYOUT_TYPE } from '../../../constants/layoutTypes.js';
 
function PesquisaResultado({ tipo, onPesquisar }) {
  if (tipo === LAYOUT_TYPE.NONE) return null;
 
  return (
    <>
      {/* Seção de filtros (tipo 1) */}
      {tipo === LAYOUT_TYPE.PRE_LOGIN && (
        <section className={style.secaoFiltro}>
          {/* filtros futuros aqui */}
        </section>
      )}
 
      {/* Barra de pesquisa (tipo 2) */}
      {tipo === LAYOUT_TYPE.POST_LOGIN && (
        <section className={style.secaoPesquisa}>
          <div className={style.inputWrapper}>
            <input
              placeholder="Pesquise aqui..."
              type="text"
              name="pesquisa"
              className={style.input}
              aria-label="Campo de pesquisa"
            />
            <button
              className={style.button}
              aria-label="Pesquisar"
              onClick={onPesquisar}
            >
              ➤
            </button>
          </div>
        </section>
      )}
    </>
  );
}
 
export default PesquisaResultado;