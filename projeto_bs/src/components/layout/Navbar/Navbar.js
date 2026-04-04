import style from './Navbar.module.css';
import { Link } from 'react-router-dom';

function Navbar({ tipo }) {
  return (
    <section className={style.painelSuperior}>

      {tipo === "1" && (
        <ul className={style.listaNO}>
          <li className={style.elementoListaNO1}>
            <Link className={style.linkElemento1} to="/loginpage">
              Entrar
            </Link>
          </li>

          <li className={style.elementoListaNO2}>
            <Link className={style.linkElemento2} to="/cadastroage">
              Cadastrar
            </Link>
          </li>
        </ul>
      )}

      {tipo === "2" && (
        <ul className={style.listaNO}>
          <li className={style.elementoListaNO1}>
            <Link className={style.linkElemento1} to="/usuariopage">
              Usuário
            </Link>
          </li>

          <li className={style.elementoListaNO2}>
            <Link className={style.linkElemento2} to="/dashboardpage">
              Dashboard
            </Link>
          </li>
        </ul>
      )}

    </section>
  );
}

export default Navbar;