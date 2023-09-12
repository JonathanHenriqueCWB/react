import { Link } from 'react-router-dom'
import './header.css'

export default function Header() {
    return (
        <header className='Header'>
            <h1>Logo</h1>
            <div>
                <nav>
                    <ul>
                        <li><Link to={'/'} style={{color: 'white'}}>Home</Link></li>
                        <li><Link to={'/about'} style={{color: 'white'}}>About</Link></li>
                        <li><Link to={'contact'} style={{color: 'white'}}>Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}