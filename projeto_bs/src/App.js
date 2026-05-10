import './App.css';

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

const LAYOUT_TYPE = {
  NONE: 0,
  PRE_LOGIN: 1,
  POST_LOGIN: 2,
};

function App() {

  return (
    <BrowserRouter>

      <div className="app-layout">

        <content className="content_area">
          <ResultadosPesquisa
            tipo={LAYOUT_TYPE.PRE_LOGIN}
          />
        </content>

        {/* NAVBAR */}
        <header className="navbar-area">
          <Navbar tipo={LAYOUT_TYPE.POST_LOGIN} />
        </header>
        
        {/*Painel de filtros*/}
        <aside className="rightbar-area">
          <PesquisaDados
            tipo={LAYOUT_TYPE.PRE_LOGIN}
          />
        </aside>

        
        {/* SIDEBAR ESQUERDA */}
        <aside className="sidebar-area">
          <PainelLateral
            tipo={LAYOUT_TYPE.POST_LOGIN}
            nomeUsuario="Usuário"
          />
        </aside>

        {/* CONTEÚDO */}
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