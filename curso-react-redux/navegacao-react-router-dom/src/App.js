import {BrowserRouter} from 'react-router-dom'

// Componentes
import Header from './components/Header';
import ConfigRoutes from './config/configRoutes';

function App() {
    return (
        <main>
            <BrowserRouter>
                <Header />
                <ConfigRoutes />
            </BrowserRouter>
        </main>
    );
}

export default App;
