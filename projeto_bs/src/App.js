import './App.css';

import { useState } from 'react';

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

import CadastroPage from './components/pages/Cadastro/CadastroPage.js';
import LoginPage from './components/pages/Login/LoginPage.js';
import UsuarioPage from './components/pages/Usuario/UsuarioPage.js';
import PesquisarPage from './components/pages/Pesquisar/Pesquisar.Page.js';

import Navbar from './components/layout/Navbar/Navbar.js';
import PainelLateral from './components/layout/PainelLateral/PainelLateral.js';

import PesquisaDados from './components/layout/PesquisaDados/PesquisaDados.js';
import ResultadosPesquisa from './components/layout/ResultadosPesquisa/Resultados_Pesquisa.js';

import Footer from './components/layout/Footer/Footer.js';

import PrivateRoute from './components/layout/PrivateRoute/PrivateRoute.js';

const LAYOUT_TYPE = { NONE: 0, PRE_LOGIN: 1, POST_LOGIN: 2, };

function App() {

  // =========================
  // ESTADOS GLOBAIS DA PESQUISA
  // =========================
  const [rightbarAberta, setRightbarAberta] = useState(true);
  const [modoPesquisa, setModoPesquisa] = useState('TODOS');
  const [resultados, setResultados] = useState([]);
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState(null);
  const [pagina, setPagina] = useState(0);
  const [dados, setDados] = useState(null);



  return (
    <BrowserRouter>

      <div className="app-layout">

        {/* RESULTADOS */}

        <section className="content_area">

          <ResultadosPesquisa
    resultados={resultados}
    loading={loading}
    erro={erro}
/>

        </section>

        {/* NAVBAR */}

        <header className="navbar-area">

          <Navbar
            tipo={LAYOUT_TYPE.POST_LOGIN}
          />

        </header>

        {/* FILTROS */}

        <aside
          className={`rightbar-area ${rightbarAberta ? '' : 'rightbar-fechada'
            }`}
        >
          <PesquisaDados
            tipo={LAYOUT_TYPE.POST_LOGIN}
            setResultados={setResultados}
            setLoading={setLoading}
            setErro={setErro}
            modoPesquisa={modoPesquisa}
          />
        </aside>

        <button className={`toggle-rightbar ${rightbarAberta ? '' : 'toggle-fechada'}`} onClick={() => setRightbarAberta(!rightbarAberta)}>
          {rightbarAberta ? '▶' : '◀'}
        </button>

        {/* SIDEBAR */}

        <aside className="sidebar-area">

          <PainelLateral
            tipo={LAYOUT_TYPE.POST_LOGIN}
            nomeUsuario="Usuário"
            modoPesquisa={modoPesquisa}
            setModoPesquisa={setModoPesquisa}
          />

        </aside>

        {/* ROTAS */}

        <main className="content-area">

          <Routes>

            <Route
              path="/"
              element={<Navigate to="/login" replace />}
            />

            <Route
              path="/cadastro"
              element={<CadastroPage />}
            />

            <Route
              path="/login"
              element={<LoginPage />}
            />

            <Route
              path="/usuario"
              element={
                <PrivateRoute>
                  <UsuarioPage />
                </PrivateRoute>
              }
            />

            <Route
              path="/pesquisa"
              element={<PesquisarPage />}
            />

          </Routes>

        </main>

        {/* FOOTER */}

        <footer className="footer-area">
          <Footer />
        </footer>

      </div>

    </BrowserRouter>
  );
}

export default App;