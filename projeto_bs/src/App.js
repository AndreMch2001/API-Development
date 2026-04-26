import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
 
import CadastroPage   from './components/pages/Cadastro/CadastroPage.js';
import LoginPage      from './components/pages/Login/LoginPage.js';
import UsuarioPage    from './components/pages/Usuario/UsuarioPage.js';
 
import Container         from './components/layout/Container/Container.js';
import Navbar            from './components/layout/Navbar/Navbar.js';
import PainelLateral     from './components/layout/PainelLateral/PainelLateral.js';
import PesquisaResultado from './components/layout/PesquisaResultado/PesquisaResultado.js';
import Footer            from './components/layout/Footer/Footer.js';
import PrivateRoute      from './components/layout/PrivateRoute/PrivateRoute.js';
 
const LAYOUT_TYPE = {
  NONE: 0,
  PRE_LOGIN: 1,
  POST_LOGIN: 2,
};
 
function App() {
  return (
    <BrowserRouter>
      <div className="app-root">
 
        <Navbar tipo={LAYOUT_TYPE.PRE_LOGIN} />
 
        <main className="app-main">
          <div className="app-layout">
            <section className="app-content">
              <Container>
 
                <PainelLateral tipo={LAYOUT_TYPE.POST_LOGIN} nomeUsuario="Usuário" />
                <PesquisaResultado tipo={LAYOUT_TYPE.PRE_LOGIN} />
 
                <Routes>
                  <Route path="/"         element={<Navigate to="/login" replace />} />
                  <Route path="/cadastro" element={<CadastroPage />} />
                  <Route path="/login"    element={<LoginPage />} />
                  <Route
                    path="/usuario"
                    element={
                      <PrivateRoute>
                        <UsuarioPage />
                      </PrivateRoute>
                    }
                  />
                </Routes>
 
              </Container>
            </section>
          </div>
        </main>
 
        <Footer />
 
      </div>
    </BrowserRouter>
  );
}
 
export default App;
 