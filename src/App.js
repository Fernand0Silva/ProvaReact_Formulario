import logoEtec from './img/logoEtec.jpeg';
import './App.css';
import Form from './Form';

function App() {
  return (
    <div>
      <h1>Prova Final - Luiz Fernando Vieira da Silva</h1>
      <img src={logoEtec} className="App-logoEtec" alt="logo" />
      <h1>Criando um Formulário de Endereço</h1>
      <Form></Form>
    </div>
  );
}
export default App;
