import './App.css';
import ListarAlunos from './components/ListarAlunos';

function App() {
  return (
    <div className="App">
      <div className='App-container'>
        <h1>Repetição com React</h1>
        <p>Para repejtição em javascript usamos uma função do javascript
            <strong> map </strong>, que retornará a quantidades de elementos
            conforme os dados recebidos
        </p>
        <ListarAlunos />
        <small>Esse exemplo foi feito a partir de um array de objetos javascript</small>
      </div>
    </div>
  );
}

export default App;
