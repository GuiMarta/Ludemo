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
                <Link to='/Login' className='um'>Login</Link>

                <Link to='/Cadastrar' className='um'>Cadastrar</Link>
                
                <Link to='/Dashboard' className='dois'>Área do psicólogo</Link>
                </div>
            </header>
            
            <main>
                
                <ImageCarousel />
                
            </main>


            <footer className='pb-5 pt-5 bg-dark text-white' >
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <p className='text-center'>@Ludemo - Todos os direitos reservados.</p>
                        </div>
                    </div>
                </div>
            </footer>

        </div>



     );
}

export default Home;