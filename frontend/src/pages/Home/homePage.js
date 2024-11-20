import React from 'react';
import { Link } from 'react-router-dom';
import './homePage.css';
import Main from './Main';
import logo from './imgs/LUDEMO.png';
import Footer from '../../components/footer';
import AboutUs from './AboutUs/About';
import Contato from './Contato/contato';
import { useNavigate } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import { useEffect } from 'react';
import Features from './Features/Features';
import FAQ from './FAQ/Faq';
function Home() {

    const navigate = useNavigate();

    useEffect(() => {
        if (isMobile) {
            navigate('/Mobile');
        }
    }, [navigate]);


    return (

        <div>
            <header>
                <div>
                    <img className='logo-header logo-large w-32 h-32' src={logo} alt="" />
                </div>
                <div className='slogan'>
                </div>
                <div>
                    <a href='#aboutus' className='um'>Sobre nós</a>
                    <a href='#contato' className='um'>Contato</a>
                    <Link to='/Dashboard' className='dois'>Área do Profissional</Link>
                </div>
            </header>

            <main>
                <Main />   
            </main>
            <div>
                <Features />
            </div>
            <div>
                <FAQ />
            </div>
            <div id='aboutus'>
                <AboutUs />
            </div>
            
            <div id='contato'>
                <Contato />
            </div>

            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default Home;
