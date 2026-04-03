import styles from './Navbar.module.css';

function Navbar() {
  return (
    <>
      {/* Seção painelSuperior usada como uma navegação clássica */}
      <section className={styles.painelSuperior}>
        
        {/* Div usada pra encapsular uma imagem de hamburger */}
        <div className={styles.elementoHamburger} id="elementoHamburger">
          <img 
            className={styles.imgElementoHamburger} 
            src="/hamburger.png" 
            alt="Menu" 
          />
        </div>

        {/* Lista de navegação */}
        <ul className={styles.listaNO} id="listaNO">

          {/* Botão de login */}
          <li className={styles.elementoListaNOEntrar}>
            <a 
              className={styles.linkElementoEntrar}
              href="/loginpage"
            >
              Entrar
            </a>
          </li>

          {/* Botão de cadastro */}
          <li className={styles.elementoListaNOCadastrar}>
            <a 
              className={styles.linkElementoCadastrar}
              href="/cadastroage"
            >
              Cadastrar
            </a>
          </li>

        </ul>
      </section>
    </>
  );
}

export default Navbar;