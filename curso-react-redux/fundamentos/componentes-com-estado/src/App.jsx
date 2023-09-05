import { useState } from 'react';
import './App.css';
import Suport from './components/Suporte';

function App() {

    const [valor, setValor] = useState('Valor default')

    return (
        <div className="App">
            <h1>Componente com estado</h1>
            <p>
                Para que seja possivel alterar e atualizar a interface
                dinamicamente, utilizamos um hook para o controle do estado.
                <strong> useState </strong> com ele é possivel refletir alterações
                no servidor na tela do cliente.
            </p>
            <p>Observe que o valor esta sendo auterado pelo evnto de click do botão
                botão esse que está implementado no componente do suporte
            </p>
            <Suport funcao={setValor} />
            <span>{valor}</span>
        </div>
    );
}

export default App;
