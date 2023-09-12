import { Link } from 'react-router-dom'
import './Card.css'

export default function Card() {
    return (
        <div className="Card">
            <h1>Navegação em React.</h1>
            <p>
            Para que seja possivel a navegação em <strong> React </strong>
            se utiliza uma biblioteca, o <strong>React Router DOM</strong>, 
            que é responsavel pela parte do roteamento.
            </p>

            <h3>Instalação:</h3>
            <p>Instalação <strong>npm install react-router-dom</strong></p>
            
            <h3>Arquivo de roteamento</h3>
            <ul>
                <li>Criar um diretório para o arquivo de configuração (opcional)</li>
                <li>Criar o arquivo de configruação, nesse caso o <strong>configRoutes.js</strong></li>
                <li>Importar o <strong>Routes e Route</strong> nesse mesmo arquivo de configuração.</li>
                <li>Criar o diretório <strong>views</strong> para as páginas</li>
                <li>Criar as <strong>páginas</strong> que representarão as rotas no diretório <strong>view</strong></li>
                <li>
                    Agora basta importar as <strong>páginas</strong> criadas em
                    <strong> views </strong> no arquivo de configuração das rotas,
                    e configurar o <strong>path</strong>, que representará
                    a url daquela rota, e o <strong>element</strong>, que retornará a página para essa mesmo
                    URL.
                </li>
            </ul>

            <h3>Utilização das rotas</h3>
            <p>
                Agora na <strong>App compoente</strong>, importar o arquivo de configuração,
                o <strong> BrowserRouter</strong> do react router dom
                e <strong>encapsular </strong> toda a aplicação nela, inclusive 
                componentes utilizados na raiz da aplicação, como por exemplo o
                header ou footer.
            </p>

            <h3>Navegação Link</h3>
            <p>
                Para poder navegar por essas rotas criadas, o react utiliza o
                <strong> Link</strong> no lugar da arcora <strong>(tag a)</strong>,
                logo será necessário substituir todos os links da aplicação per esse
                compoente Link do React router dom.
            </p>

            <h3>Rota com parametros</h3>
            <p>
                Parametros são passadas pelas <strong>URL</strong>, 
                diferente das prpriedades passadas para os componentes
            </p>
            <p>
                Basta criar a rota normalmente no arquivo de configurações de rotas,
                e adicionar um <strong>/:nomeParametro</strong>. Exemplo: 
                <strong>products/:id</strong>, nesse exemplo a urle espera receber um
                parametro de nome id
            </p>
            <p>
                O parametro deve ser adicionado a URL para a nevagação, o mesmo pode ser
                passado diretamente pela URL, definida como no caso desse link react router dom
                <strong><Link to={'/products/10'}> products/10</Link></strong>, lebrando que uma rota deverá
                ser redirecionada para uma view e não componente.
            </p>
            <p>
                Para receber os parametros na view, não será utilizado as props
                convencional do react, e sim um hook do react router dom,
                o <strong>useParams</strong>, basta fazer a desfragmentação do javascript
                para uma constante. O mesmo pode ser utilizado para uma requisição ao banco
                de dados.
            </p>
        </div>
    )
}