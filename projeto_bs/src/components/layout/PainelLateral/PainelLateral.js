import style from './PainelLateral.module.css';

function PainelLateral({ tipo }) {
    return (
        <>
            {tipo === "1" &&(
               <></>
            )}
            {tipo === "2" && (
                <section
                className={style.painelLateral}
                id="painelLateral">
                {/*conteudo do painel lateral*/}
                </section>
            )}
        </>
    );  
}

export default PainelLateral;