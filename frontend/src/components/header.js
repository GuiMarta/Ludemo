import { Link } from 'react-router-dom';
import logo from '../pages/Home/imgs/LUDEMO.png'


function Header() {

    const nome = localStorage.getItem('nome');

    return (
        <header>
            <div>
            <img className='logo-header' src={logo} alt="" ></img>
            </div>
            <div className='slogan'>
            Bem-vindo de volta, {nome}!
            </div>
            <div>
            <Link to='/Login' className='um'>Login</Link>

            <Link to='/Cadastrar' className='um'>Cadastrar</Link>
            
            <Link to='/Dashboard' className='dois'>Área do psicólogo</Link>
            </div>
        </header>
    );
}

export default Header;
