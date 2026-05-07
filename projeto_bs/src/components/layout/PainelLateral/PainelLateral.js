import style from './PainelLateral.module.css';

import { Link } from 'react-router-dom';

import { LAYOUT_TYPE } from '../../../constants/layoutTypes.js';

const navLinks = [
  { id: 1, label: 'Dashboard', to: '/dashboard' },
  { id: 2, label: 'Pesquisas', to: '/pesquisa' },
  { id: 3, label: 'Relatórios', to: '/relatorios' },
  { id: 4, label: 'Usuários', to: '/usuarios' },
  { id: 5, label: 'Configurações', to: '/configuracoes' },
];

function PainelLateral({
  tipo,
  nomeUsuario = 'Usuário'
}) {

  if (tipo !== LAYOUT_TYPE.POST_LOGIN) return null;

  return (
    <aside className={style.painelLateral}>

      {/* LINKS */}

      <nav className={style.navLinks}>

        <ul className={style.lista}>

          {navLinks.map((link) => (

            <li
              key={link.id}
              className={style.item}
            >

              <Link
                className={style.link}
                to={link.to}
              >
                <span className={style.linkIcone}>
                  &#9632;
                </span>

                {link.label}
              </Link>

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