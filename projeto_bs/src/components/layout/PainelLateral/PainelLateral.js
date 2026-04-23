import style from './PainelLateral.module.css';

function PainelLateral({ tipo }) {
    return (
        <>
            {tipo === 0 && (
                <></>
            )}
            {tipo === 1 &&(
               <></>
            )}
            {tipo === 2 && (
                <section className={style.painelLateral} id="painelLateral">
                    {/*<ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>*/}
                </section>
            )}
        </>
    );  
}

export default PainelLateral;