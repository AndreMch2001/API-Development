import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CadastroPage from './components/pages/CadastroPage.js';
import LoginPage from './components/pages/LoginPage.js';
import UsuarioPage from './components/pages/UsuarioPage.js';

/*--------------------------------------------------------------------------*/

function App() {
  return (
    <BrowserRouter>
      <main className="App-header"> {/* seção Principal */}

        {/* Seção do APP o que realmente vai ser renderizado */}
        <section className="App">

          {/* Seção painelSuperior usada como uma navegação clássica */}
          <section className="painelSuperior" id="painelSuperior">
            
            {/* Div usada pra encapsular uma imagem de hamburger */}
            <div className="elementoHamburger" id="elementoHamburger">
              <img className="imgElemento-hamburger" src="/hamburger.png" alt="Menu" />
            </div>

            {/* Lista de navegação */}
            <ul className="listaNO" id="listaNO">

              {/* Botão de login */}
              <li className="elementoListaNO-Entrar">
                <a className="linkElemento-Entrar"
                   href="/loginpage">
                  Entrar
                </a>
              </li>

              {/* Botão de cadastro */}
              <li className="elementoListaNO-Cadastrar">
                <a className="linkElemento-Cadastrar" 
                   href="/cadastroage">
                  Cadastrar
                </a>
              </li>
            
            </ul>

            {/* Rotas do sistema */}
            <Routes>
              <Route path="/" element={<></>} />
              <Route path="/cadastroage" element={<CadastroPage />} />
              <Route path="/loginpage" element={<LoginPage />} />
              <Route path="/usuariopage" element={<UsuarioPage />} />
            </Routes> 
          </section>

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