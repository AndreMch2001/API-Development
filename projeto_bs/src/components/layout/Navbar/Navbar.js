import Style from './Navbar.module.css';
import { Link } from 'react-router-dom';

function Navbar({ tipo }) {
  return (
    <>
      {tipo === 0 && (
        <></>
      )}

      {tipo === 1 && (
<<<<<<< HEAD
        <section className={Style.painelSuperior}>
        <ul className={Style.listaNO}>
          <li className={Style.elementoListaNO1}>
            <Link className={Style.linkElemento1} to="/loginpage">
=======
        <ul className={style.listaNO}>
          <li className={style.elementoListaNO1}>
            <Link className={style.linkElemento1} to="/loginpage">
>>>>>>> c455510776df89da86e2eb2a95ef043d8ad74f0b
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
<<<<<<< HEAD
      <section className={Style.painelSuperior}>
        <ul className={Style.listaNO}>
          <li className={Style.elementoListaNO1}>
            <Link className={Style.linkElemento1} to="/usuariopage">
=======
        <ul className={style.listaNO}>
          <li className={style.elementoListaNO1}>
            <Link className={style.linkElemento1} to="/usuariopage">
>>>>>>> c455510776df89da86e2eb2a95ef043d8ad74f0b
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