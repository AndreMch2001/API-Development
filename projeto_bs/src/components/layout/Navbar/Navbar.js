import style from './Navbar.module.css';
import { Link } from 'react-router-dom';
import { LAYOUT_TYPE } from '../../../constants/layoutTypes';
 
function Navbar({ tipo }) {
  if (tipo === LAYOUT_TYPE.NONE) return null;
 
  return (
    <nav className={style.painelSuperior}>
      <ul className={style.listaNO}>
 
        {tipo === LAYOUT_TYPE.PRE_LOGIN && (
          <>
            <li className={style.elementoLista}>
              <Link className={style.linkElemento} to="/login">
                Entrar
              </Link>
            </li>
            <li className={style.elementoLista}>
              <Link className={style.linkElementoCTA} to="/cadastro">
                Cadastrar
              </Link>
            </li>
          </>
        )}
 
        {tipo === LAYOUT_TYPE.POST_LOGIN && (
          <>
            <li className={style.elementoLista}>
              <Link className={style.linkElemento} to="/usuario">
                Usuário
              </Link>
            </li>
            <li className={style.elementoLista}>
              <Link className={style.linkElemento} to="/dashboard">
                Dashboard
              </Link>
            </li>
          </>
        )}
 
      </ul>
    </nav>
  );
}
 
export default Navbar;