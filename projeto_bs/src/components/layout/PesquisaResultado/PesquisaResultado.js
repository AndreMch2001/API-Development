import style from './PesquisaResultado.module.css';
import { LAYOUT_TYPE } from '../../../constants/layoutTypes.js';

function InputFiltro({label, id, type = "text", name, className, placeholder}) {
  return (
    <div className='div_InputFiltro'>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} name={name} className={className} placeholder={placeholder} aria-label={label}
      />
    </div>
  );
}

function PesquisaResultado({ tipo, onPesquisar }) {
  if (tipo === LAYOUT_TYPE.NONE) return null;

  return (
    <>
      {tipo === LAYOUT_TYPE.PRE_LOGIN && (
        <section className={style.secaoFiltro}>
          <h2 className={style.secaoFiltro_Titulo}>Filtros de Pesquisa</h2>
          <p className={style.secaoFiltro_Texto}>
            Use os filtros para refinar sua busca por informações do Bolsa Família.
          </p>

          <form className={style.secaoFiltro_Lista}>

            <InputFiltro label="Filtrar pelo Nome"
              id="filtroNomeFavorecido"
              name="filtroNomeFavorecido"
              className={style.secaoFiltro_Input}
              placeholder="Nome do favorecido"
            />

            <InputFiltro label="Filtrar pelo NIS"
              id="filtroNIS"
              name="filtroNIS"
              className={style.secaoFiltro_Input}
              placeholder="NIS"
            />

            <InputFiltro label="Mês de Referência"
              id="filtroMesReferencia"
              type="number"
              name="filtroMesReferencia"
              className={style.secaoFiltro_Input}
              placeholder="Ex: 01"
            />

            <InputFiltro label="Município"
              id="filtroNomeMunicipio"
              name="filtroNomeMunicipio"
              className={style.secaoFiltro_Input}
              placeholder="Nome do município"
            />

            <InputFiltro label="UF"
              id="filtroUF"
              name="filtroUF"
              className={style.secaoFiltro_Input}
              placeholder="Ex: SC"
            />
          </form>
        </section>
      )}

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