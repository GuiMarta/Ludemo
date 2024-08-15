import React from 'react';
import { Link } from 'react-router-dom';
import './homePage.css';
import ImageCarousel from './carrossel';
import './carrossel.css';
import logo from './imgs/LogoLudemo.png'



function Home() {
    return ( 

        <div> 

            <header>
                <div>
                <img className='logo-header' src={logo} alt="" ></img>
                </div>
                <div className='slogan'>
                Ludemo: Plataforma de auxílio aos profissionais.
                </div>
                <div>
                <Link to='/' className='um'>Home</Link>

                <Link to='/' className='um'>Sobre nós</Link>

                <Link to='/' className='um'>Conatato</Link>
                
                <Link to='/Dashboard' className='dois'>Área do psicólogo</Link>
                </div>
            </header>
            
            <main>
                
                <ImageCarousel />
                
            </main>

        </div>



     );
}

export default Home;