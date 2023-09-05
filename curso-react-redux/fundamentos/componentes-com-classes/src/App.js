import './App.css';
import Exemplo1 from './components/Exemplo1';
import Exemplo2 from './components/Exemplo2';

function App() {
    return (
        <div className="App">
            <Exemplo1 numeroInicial={10} />
            <Exemplo2 numeroInicial={20} />
        </div>
    );
}

export default App;
