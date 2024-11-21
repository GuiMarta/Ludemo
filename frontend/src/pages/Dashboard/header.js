import { Link } from 'react-router-dom';

import logo from '../Home/imgs/LUDEMO.png'
import  '../../components/header.css';

function Header() {
    const nome = localStorage.getItem('nome');

    return (
        <header>
            <div>
                <img className='logo-header' src={logo} alt="" />
            </div>
            <div class="slogan">
                Bem-vindo de volta, {nome}!
            </div>
            <div>
            <Link to='/' className='dois'>Página Inicial</Link>
            </div>
        </header>
    );
}

export default Header;