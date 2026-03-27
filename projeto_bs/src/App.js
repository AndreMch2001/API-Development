import logo from './logo.svg';
import './App.css';

function BtnTest(){ /*Função para Mostrar o Botão na tela*/
  function FuncBtnTest(){ /*caso de tudo certo*/
    try {/*Try caso tudo de certo*/
      return(
         confirm("Deu Certo"),
         console.log("FuncBtnTest Try - 200")
      );
    } catch (error) { /*Catch caso algo de errado*/
      return(
        alert("Deu Certo Motivo : "),
        console.log("FuncBtnTest Erro:" + error)
        
      );
    } finally { /*caso de certo ou errado ele vai executar isso*/
      return(
        console.log("FuncBtnTest Finally - 200")
      );  
    }
  }
  return(
    <button onClick={FuncBtnTest}>Clique em Mim Para testar o Sistema</button>
  );
}

/*--------------------------------------------------------------------------*/
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BtnTest />
      </header>
    </div>
  );
}

export default App;
