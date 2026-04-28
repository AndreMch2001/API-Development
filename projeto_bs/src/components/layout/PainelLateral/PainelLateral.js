import style from './PainelLateral.module.css';
import { Link } from 'react-router-dom';
import { LAYOUT_TYPE } from '../../../constants/layoutTypes.js';
 
const navLinks = [
  { id: 1, label: 'Link 1', to: 'https://chatgpt.com/' },
  { id: 2, label: 'Link 2', to: '/link2' },
  { id: 3, label: 'Link 3', to: '/link3' },
  { id: 4, label: 'Link 4', to: '/link4' },
  { id: 5, label: 'Link 5', to: '/link5' },
];
 
function PainelLateral({ tipo, nomeUsuario = 'Usuário' }) {
  if (tipo !== LAYOUT_TYPE.POST_LOGIN) return null;
 
  return (
    <aside className={style.painelLateral} id="painelLateral">
 
      {/* LINKS DE NAVEGAÇÃO */}
      <nav className={style.navLinks}>
        <ul className={style.lista}>
          {navLinks.map((link) => (
            <li key={link.id} className={style.item}>
              <Link className={style.link} to={link.to}>
                <span className={style.linkIcone}>&#9632;</span>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
 
      {/* RODAPÉ DO PAINEL — usuário */}
      <div className={style.rodape}>
        <div className={style.divisor} />
        <div className={style.usuario}>
          <div className={style.avatar}>
            {nomeUsuario.charAt(0).toUpperCase()}
          </div>
          <span className={style.nomeUsuario}>{nomeUsuario}</span>
        </div>
      </div>
 
    </aside>
  );
}

export default PainelLateral;