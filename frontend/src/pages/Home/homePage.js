import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { isMobile } from 'react-device-detect';

import Main from './Main';
import logo from './imgs/LUDEMO.png';
import Footer from '../../components/footer';
import AboutUs from './AboutUs/About';
import Contato from './Contato/contato';
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
        <div className='p-0 m-0 '>
            {/* Envolvendo o Main em um container para limitar o comportamento sticky */}
            <div className="">
                <header className="bg-white h-11vh flex justify-between items-center px-6 z-1000 sticky top-0 w-full border-none shadow-none m-0 p-0">
                    <div>
                        <img className="logo-header logo-large w-32 h-32" src={logo} alt="Logo" />
                    </div>
                    <div className="hidden md:block text-black text-sm font-medium">
                        {/* Adicione conteúdo do slogan, se necessário */}
                    </div>
                    <div className="flex items-center">
                        <a
                            href="#aboutus"
                            className="text-black no-underline mx-2 px-2 py-1 text-base transition-all duration-300 hover:underline hover:text-gray-600"
                        >
                            Sobre nós
                        </a>
                        <a
                            href="#contato"
                            className="text-black no-underline mx-2 px-2 py-1 text-base transition-all duration-300 hover:underline hover:text-gray-600"
                        >
                            Contato
                        </a>
                        <Link
                            to="/Dashboard"
                            className="text-black no-underline border border-gray-600 px-4 py-2 rounded-md text-base transition-all duration-300 hover:bg-gray-600 hover:!text-white mr-6"
                        >
                            Área do Profissional
                        </Link>
                    </div>
                </header>


                <main>
                    <Main />
                </main>
            </div>

            <div>
                <Features />
            </div>
            <div>
                <FAQ />
            </div>
            <div id="aboutus">
                <AboutUs />
            </div>
            <div id="contato">
                <Contato />
            </div>

            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default Home;
