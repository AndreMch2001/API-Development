import './App.css';
/*function BtnTest(){ /*Função para Mostrar o Botão na tela
  function FuncBtnTest(){ /*caso de tudo certo
    try {/*Try caso tudo de certo
      return(
         window.confirm("Tem certeza?"),
         console.log("FuncBtnTest - Try - 200")
      )
    } catch (error) { /*Catch caso algo de errado
      return(
        window.alert("Deu Certo Motivo : "),
        console.log("FuncBtnTest - catch - Erro:" + error)
        
      );
    } finally { /*caso de certo ou errado ele vai executar isso
      return(
        console.log("FuncBtnTest - Finally - 200")
      );  
    }
  }
    function btnOptLateral(){
  
}
 
  return(
    <button onClick={FuncBtnTest}>Clique em Mim Para testar o Sistema</button>
  );
}

/*--------------------------------------------------------------------------*/

function App() {
  return (
    <main class="App-header">

      <section class="App">

        <section class="painelSuperior" id="painelSuperior">
          <div class="elementoHamburger" id="elementoHamburger">
            <img class="imgElemento-hamburger"src="/hamburger.png" alt="Menu" />
          </div>
          <ul class="listaNO" id="listaNO"> 
            <li class="elementoListaNO-Entrar">
              <a class="linkElemento-Entrar" href="https://www.google.com.br/" target="_blank" rel="noopener noreferrer">Entrar</a>
            </li>
            <li class="elementoListaNO-Cadastrar">
              <a class="linkElemento-Cadastrar" href="https://www.google.com.br/" target="_blank" rel="noopener noreferrer">Cadastrar</a>
            </li>
          </ul>
        </section>

        <h1 class="txt_pg_principal">Seja Bem-vindo(a)</h1> 

        <section class="painelLateral" id="painelLateral">
        </section>
      </section>
    </main>
  );
}

export default App;
