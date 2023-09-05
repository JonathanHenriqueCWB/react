import './App.css';
import Input from './components/Input';
import { useState } from 'react';

function App() {

    // Estado que receberá informações do input
    const [text, setTexto] = useState('default')

    return (
        <div className="App">
            <div className='App-container'>
                <h1>Compoente controlado</h1>
                <p>
                    Comunmente utilizado em formularios, pois os mesmo precisam
                    persistir esses dados em um estado. Isso somente é possivel por conta
                    de um evento <storng> onChange </storng>, o mesmo é responsavel de passar
                    as informações para o servidor.
                </p>
                <p>
                    Ao digitar um texto no componente input o envento
                    <strong> onChange</strong> será chamado, e começará a
                    passar as informações para o estado persistir.
                </p>
                <p>
                    O componente também deverá receber um valor inicial em
                    <strong> value</strong>, esse valor deve ser o valor inicial
                    do estado.
                </p>
                <Input funcao={setTexto} value={text} />
                {text}
                <br /><small>Existem outros tipos de input, os não controlados</small>
            </div>
        </div>
    );
}

export default App;
