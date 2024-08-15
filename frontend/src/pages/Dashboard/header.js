import { Link } from 'react-router-dom';
import logo from '../Home/imgs/LogoLudemo.png';

function Header() {
    const nome = localStorage.getItem('nome');

    return (
        <header>
            <div>
                <img className='logo-header' src={logo} alt="" />
            </div>
            <div className='slogan'>
                Bem-vindo de volta, {nome}!
            </div>
            <div>
            <Link to='/' className='dois'>Página Incial</Link>
            </div>
        </header>
    );
}

export default Header;