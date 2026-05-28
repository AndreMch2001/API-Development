import style from './PainelLateral.module.css';

import { LAYOUT_TYPE } from '../../../constants/layoutTypes.js';

const navLinks = [
  { id: 1, label: 'Pesquisar Todos', modo: 'TODOS' },
  { id: 2, label: 'Pesquisas Com Filtros', modo: 'FILTRO' },
];

function PainelLateral({ tipo, nomeUsuario = 'Jonas Tillmann Junior', modoPesquisa, setModoPesquisa }) {
  
  if (tipo !== LAYOUT_TYPE.POST_LOGIN) return null;

  return (
    <aside className={style.painelLateral}>

      {/* LINKS */}

      <nav className={style.navLinks}>
        <ul className={style.lista}>
          
          {navLinks.map((link) => (

            <li key={link.id} className={style.item}>

              <button type="button" className={`${style.link} ${modoPesquisa === link.modo ? style.linkAtivo : style.link}`} onClick={() => setModoPesquisa(link.modo)}>
                
                <span className={style.linkIcone}>&#9632;</span>
                
                {link.label}
              </button>

            </li>
          ))}
        </ul>
      </nav>

      {/* RODAPÉ USUÁRIO */}
      <div className={style.rodape}>
        <div className={style.divisor}></div>
        <div className={style.usuario}>
          {/* IMG USUÁRIO */}
          <div className={style.avatar}>
            IMG
          </div>
          {/* NOME */}
          <div className={style.infoUsuario}>
            <span className={style.nomeUsuario}>
              {nomeUsuario}
            </span>
            <span className={style.statusUsuario}>
              Online
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
}
export default PainelLateral;