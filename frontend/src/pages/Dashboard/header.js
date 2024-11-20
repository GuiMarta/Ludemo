import { Link } from 'react-router-dom';
<<<<<<< Updated upstream
import logo from '../Home/imgs/LUDEMO.png';
=======
import logo from '../Home/imgs/LogoLudemo.png';
>>>>>>> Stashed changes

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
            <Link to='/' className='dois'>Página Incial</Link>
            </div>
        </header>
    );
}

export default Header;