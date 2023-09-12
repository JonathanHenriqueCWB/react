import {Routes, Route} from 'react-router-dom'

// Paginas
import Home from '../views/Home'
import About from '../views/About'
import Contact from '../views/Contact'
import Products from '../views/Products'

export default function ConfigRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home></Home>} />
            <Route path='/about' element={<About></About>} />
            <Route path='/contact' element={<Contact></Contact>} />
            <Route path='/products/:id' element={<Products></Products>} />
            <Route path='*' element={<h1>Página Não Encontrada!</h1>} />
        </Routes>
    )
}