import './App.css';
import Familia from './components/Famila';
import Membro from './components/Membro'

function App() {
    return (
        <div className="App">
            <div className='App-container'>
                <h2>Componentes aninhados e Childrem</h2>
                <p>
                    Quando temos dois componentes aninhados, um encapsulando o outro, devemos
                    utilizar o children para poder renderizar o componente mais interno, nesse
                    exemplo temos no <strong> App componente </strong> dois componentes, o componente
                    Familia e o componente Membro. O componente Familia está envolvendo o componente Membro,
                    logo para que o conteúdo do componente Membro seja renderizado é necessario a utilização 
                    do childrem nos parametros do componente Familia, basta referenciar esse parametro
                    do componente Familia dentro do componente que o componente Membro será renderizado corretamente.
                </p>
                <p>
                    O children é uma propriedade <strong>default</strong> do React,
                    basta apenas chamar o <strong>props.children </strong>, ou o desconstruir em seus 
                    parametros.
                </p>

                <h2>Tratamento das propriedades</h2>
                <p>
                    Nesse caso por um componente estar envolvendo o outro, não será possivel
                    acessar as propriedades do componente <strong>Familia </strong> no componente
                    <strong> Menbro</strong>, pois as propriedades do componente Familia estão sendo
                    pasados somente ao componente Familia e não ao componente Membro.
                </p>
                <p>
                    Isso não siguinifica que o componente Membro não podera utilizar das 
                    propriedades do parent componente <strong>(Componente Familia) </strong>.
                </p>
                <p>
                    Para que o componente <strong>Membro </strong> possa ter
                    acesso as propriedades do compoente pai, deverá ser utilizado
                    uma biblioteca do React, <strong>React.cloneElement</strong>,
                    em caso de apenas um compoente filho basta chamar a biblioteca
                    passando so <strong>props.children</strong> e um
                    spread javascript para copiar as propriedades do componente
                    pai. Caso tenha multiplos elementos filho utilizar o map do javascript
                    para retornar todos os filhos utilizando o cloneElement.
                </p>
                <h2>Exemplo abaixo:</h2>
                <Familia sobrenome={'Lima'}>
                    <Membro nome={'Jonas'}/>
                    <Membro nome={'Ana'}/>
                </Familia>
            </div>
        </div>
    );
}

export default App;
