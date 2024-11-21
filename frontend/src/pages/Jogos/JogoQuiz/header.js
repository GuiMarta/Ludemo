import { Link } from 'react-router-dom';
import logo from '../../Home/imgs/LUDEMO.png';

function Header() {
    

    return (
        <header>
            <div>
                <img className='logo-header' src={logo} alt="" />
            </div>
            <div class="slogan">
                Bom jogo!
            </div>
            <div>
            <Link to='/' className='dois'>Página Inicial</Link>
            </div>
        </header>
    );
}

export default Header;