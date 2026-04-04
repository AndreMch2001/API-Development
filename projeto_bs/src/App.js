import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import CadastroPage from './components/pages/Cadastro/CadastroPage.js';
import LoginPage from './components/pages/Login/LoginPage.js';
import UsuarioPage from './components/pages/Usuario/UsuarioPage.js';

import Container from "./components/layout/Container/Container.js";
import Navbar from "./components/layout/Navbar/Navbar.js";
import PainelLateral from "./components/layout/PainelLateral/PainelLateral.js";

function App() {
  const [tipo, setTipo] = useState(1); // 1 = público | 2 = privado

  return (
    <BrowserRouter>
      <main className="App-header">
        <div className="layout">
          <section className="App">

            {tipo === 2 && <Navbar tipo={tipo} />}
            {tipo === 2 && <PainelLateral tipo={tipo} />}

            <Container>
              <Routes>
                <Route path="/" element={<h1 className="txt_pg_principal">Seja Bem-vindo(a)</h1>} />
                <Route path="/cadastroage" element={<CadastroPage />} />
                <Route path="/loginpage" element={<LoginPage />} />
                <Route path="/usuariopage" element={<UsuarioPage />} />
              </Routes>
            </Container> 

          </section>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;