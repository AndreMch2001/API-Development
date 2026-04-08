import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CadastroPage from './components/pages/Cadastro/CadastroPage.js';
import LoginPage from './components/pages/Login/LoginPage.js';
import UsuarioPage from './components/pages/Usuario/UsuarioPage.js';

import Container from "./components/layout/Container/Container.js";
import Navbar from "./components/layout/Navbar/Navbar.js";
import PainelLateral from "./components/layout/PainelLateral/PainelLateral.js";
/*
Antes do Login = 1
Depois do Login = 2
*/
const ValorTipo = 2;

function App() {
  return (
    <BrowserRouter>
      <main className="App-header">
        <div className="layout">
          <section className="App">
            <Container>
            
              <Navbar tipo={1}/>
              <PainelLateral tipo={ValorTipo}/>
        
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