import './App.css';

import Opcao1 from './components/Opicao1';
import Child from './components/Child';
import Parent from './components/Parent';

function App() {
    return (
        <div className="App">
            <div className='App-container'>

                <div>
                    <h2>Primeira Opção de renderização condicional</h2>
                    <p>
                        Basta criar o componente, passar uma propriedade do tipo
                        booleano e testar em um operador ternario.
                    </p>
                    <p>
                        Com base no resultado é possivel renderizar um ou mais
                        componentes diferentes.
                    </p>
                    <Opcao1 renderizar />
                </div>

                <div>
                    <h2>Segunda opção de renderização condicional</h2>
                    <p>
                        Pode ser aplicada quando temos dois componente aninhados, nesse
                        caso precisaria do props.children para poder renderizar o componente
                        interno. Então basta aplicar uma condicional if em uma propriedade pasada
                        para o parent componente (componente de mais alto nivel que encapsula)
                    </p>
                    <Parent teste={false}>
                        <Child />
                    </Parent>
                </div>


            </div>
        </div>
    );
}

export default App;
