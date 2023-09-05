import './App.css';
import PaiDireta from './components/direta/Pai';
import PaiIndireta from './components/indireta/Pai';

function App() {
  return (
    <div className="App">
      <div className='App-direta'>
        <h1>Comnunicação direta</h1>
        <p>Comnunicaçao entre componentes diz respeito entre o 
          <strong> compartilhamento de informações</strong>.
        </p>
        <p>A maneira mais básica de comunicação entre componentes é a direta
          pois basta apenas passar valor como propriedades do compoente pai para 
          o componente filho.
        </p>
        <PaiDireta />
      </div>

      <div className='App-indireta'>
        <h1>Comunicação Indireta</h1>
        <p>Diferente da comuncação direta a indireta e mais complicada,
          já que a comunicação tem que acontecer em fluxo reverso, ou seja,
          o parametros deveriam ser passados do compoente filho para o compoente pai
        </p>
        <p>
          Isos só é posivel graças ao gerenciamento de estado de compoente,
          com isso devemos passar funções do componente pai, para ser disparada no componente
          filho de modo que possa auterar o estado no compoente pai.
        </p>
        <PaiIndireta />
      </div>

    </div>
  );
}

export default App;
