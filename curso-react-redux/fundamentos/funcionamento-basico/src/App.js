import './App.css'
import Componente from './components/Component'

export default function App(){
    return (
        <main className='App'>
            <div className='Container'>

                <div className='Block BgPrimary'>
                    <h1>Funcionamento básico do React</h1>
                    <p>
                        React é um biblioteca single page aplication, sua unica página HTML
                        se encontra dentro do diretório <strong>public</strong>, 
                        todo os componentes serão renderizado dentro desse HTML, em uma div com indentificador
                        único de nome <strong>root</strong>
                    </p>
                    <p>
                        O start da aplicação começa no <strong>index.js </strong>
                        que é responsavel da manipulação do <strong>DOM</strong> do 
                        HTML graças ao sua biblioteca <strong>react-dom</strong>,
                        no arquivo index.js deverá ser informado o primeiro componete a ser renderizado
                        <strong> App.js</strong>, e informado o template HTML,
                        localizado dentro do diretorio públic (div root).
                    </p>
                    <p>
                        Componentes React são como <strong> funções JavaScript.</strong>  Eles
                        aceitam entradas como propriedades <strong> (chamadas “props”)</strong> 
                        e retornam novos elementos React, os chamados <strong> JSX.</strong>  
                        Os componentes permitem que a UI seja dividida em partes independentes e reutilizáveis, 
                        ou seja, trata cada parte da aplicação como um bloco isolado, livre de outras dependências externas.
                    </p>
                    <p>
                        O react usa do <strong>JSX</strong> para
                        construção de seus componentes, logo o mesmo dever ser importado para
                        utlização do JSX em um componente.
                    </p>
                </div>

                <div className='Block BgSecondary'>
                    <h1>Carregamento de estilo</h1>
                    <p>
                        Como por padrão o javascript usa a palavra <strong>class</strong>,
                        e preciso usar a palavra <strong>className </strong> para referenciar
                        as páginas de estilo externas.
                    </p>
                    <p>
                        Também por padrão o React, utiliza o nome de seu componente
                        como nome dado as página de estilo externas, exemplo: 
                        <strong> index.css </strong> tera um link com 
                        <strong > index.js</strong>
                    </p>
                </div>

                <div className='Block BgPrimary'>
                    <Componente />
                </div>

            </div>
        </main>
    )
}