import style from './PesquisaResultado.module.css';

function PesquisaResultado({ tipo }) {
  return (
    <>

      {tipo === 0 && null}

      {tipo === 1 && (
        <section className={style.SecaoFiltro}>
          
        </section>
      )}

      {tipo === 2 && (
        <section className={style.SectionResultadosPesquisa}>
          <div className={style.inputWrapper}>
            <input
              placeholder="Pesquise aqui..."
              type="text"
              name="text"
              className={style.input}
            />
            <button className={style.button}>
              ➤
            </button>
          </div>
        </section>
      )}
      

    </>
  );
}

export default PesquisaResultado;