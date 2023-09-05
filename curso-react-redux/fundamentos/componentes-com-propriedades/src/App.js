import './App.css';
import ComPropriedades from './components/ComPropriedades';

function App() {

    const titulo = <h1>Componente com propriedades</h1>
    const texto = <div>
        <p>
                Componentes React aceitam receber <strong>propriedades</strong>,
                para isso basta passar a propriedade inline no prórpio <strong>componente</strong>.
                As propriedades devem ser recebidas como <strong>parametros</strong> nos Componentes
                que as recebem.
            </p>
            <p>O react adota uma nomeclatura para os parametros em seus componentes
                denominadas de <strong>props</strong>, para a leitura deve ser utilizado
                um par de chaves, assim o engine irá entender que se trata de uma propriedade
                e mostrará seu valor e não uma string.
            </p>
            <p>
                Exemplo: <strong>"props.titulo"</strong>
                Obs: não esquecer de colocar entre chaves.
            </p>
            <p>
                Uma propriedade pode ser <strong>desconstruida</strong> em seu
                parametro, basta colocar entre <strong>chaves</strong> o nome
                exato das prpriedades que estão senda passadas, tirando assim a necessidade
                de chamar <strong>props.nomePropriedade</strong>.
            </p>
    </div>


    return (
        <div className="App">
            <ComPropriedades titulo={titulo} texto={texto}  />
        </div>
    );
}

export default App;
