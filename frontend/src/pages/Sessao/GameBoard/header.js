import { Link } from 'react-router-dom';
import logo from './imgs/LogoLudemo.png';

function Header() {
    const nome = localStorage.getItem('nome');

    return (
        <header className='' >
            <div>
                <img className='logo-header' src={logo} alt="" />
            </div>
            <div class="slogan">
                Bem-vindo de volta, {nome}!
            </div>
            <div className="flex gap-3">
                <Link to="/" className="dois">Página Inicial</Link>
                <Link to="/dashboard" className="dois">Área do Profissional</Link>
            </div>

        </header>
    );
}

export default Header;