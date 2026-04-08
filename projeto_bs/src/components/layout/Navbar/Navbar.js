import Style from './Navbar.module.css';
import { Link } from 'react-router-dom';

function Navbar({ tipo }) {
  return (
    <>
      {tipo === 0 && (
        <></>
      )}

      {tipo === 1 && (
        <section className={Style.painelSuperior}>
        <ul className={Style.listaNO}>
          <li className={Style.elementoListaNO1}>
            <Link className={Style.linkElemento1} to="/loginpage">
              Entrar
            </Link>
          </li>

          <li className={Style.elementoListaNO2}>
            <Link className={Style.linkElemento2} to="/cadastroage">
              Cadastrar
            </Link>
          </li>
        </ul>
        </section>
      )}

      {tipo === 2 && (
      <section className={Style.painelSuperior}>
        <ul className={Style.listaNO}>
          <li className={Style.elementoListaNO1}>
            <Link className={Style.linkElemento1} to="/usuariopage">
              Usuário
            </Link>
          </li>

          <li className={Style.elementoListaNO2}>
            <Link className={Style.linkElemento2} to="/dashboardpage">
              Dashboard
            </Link>
          </li>
        </ul>
      </section>
      )}
    </>
  );
  
}

export default Navbar;