import React from 'react';
import { Link } from 'react-router-dom';
import './homePage.css';
import ImageCarousel from './carrossel';
import './carrossel.css';

function Home() {
    return ( 

        <div> 
            <header>

                <div className='slogan'>
                Ludemo: Plataforma de auxílio aos profissionais.
                </div>

                <Link to='/Login' className='um'>Login</Link>
    
                <Link to='/Cadastrar' className='um'>Cadastrar</Link>
                
                <Link to='/Dashboard' className='dois'>Área do psicólogo</Link>

                    
            </header>
            
            <main>
                
                <ImageCarousel />
                
            </main>


            <footer>
                <div className='footer'>
                    <div className='footer-item'>
                        <p>@Ludemo - Todos os direitos reservados.</p>
                    </div>
                </div>
            </footer>

        </div>



     );
}

export default Home;