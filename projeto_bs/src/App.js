import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CadastroPage from './components/pages/CadastroPage.js';
import LoginPage from './components/pages/LoginPage.js';
import UsuarioPage from './components/pages/UsuarioPage.js';

import Container from "./components/layout/Container/container.js";


/*--------------------------------------------------------------------------*/

function App() {
  return (
    <BrowserRouter>
      <main className="App-header"> {/* seção Principal */}

        {/* Seção do APP o que realmente vai ser renderizado */}
        <section className="App">
            {/* Rotas do sistema */}
            <Container>
              <Routes>
                <Route path="/" element={<></>} />
                <Route path="/cadastroage" element={<CadastroPage />} />
                <Route path="/loginpage" element={<LoginPage />} />
                <Route path="/usuariopage" element={<UsuarioPage />} />
              </Routes>
            </Container> 

          {/* texto central */}
          <h1 className="txt_pg_principal">Seja Bem-vindo(a)</h1> 

          {/* painel lateral */}
          <section className="painelLateral" id="painelLateral">
          </section>

        </section>

      </main>
    </BrowserRouter>
  );
}

export default App;