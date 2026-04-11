import style from './ResultadosPesquisa.module.css';

function Pesquisa_Resultado(ValorTipo_Pesquisa_Resultado){
    return(
        <>
            {tipo === 0 && (
                <></>
            )}
            
            {tipo === 1 && (
                <section className={style.SectionResultadosPesquisa}>
                    <input placeholder="Searth the internet..." type="text" name="text" class="input"></input>
                </section>
            )}

        </>
    );
}

export default Pesquisa_Resultado