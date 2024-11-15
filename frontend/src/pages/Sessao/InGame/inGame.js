import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import Header from './header';
import Footer from '../../../components/footer';
import './inGame.css';
import { Spinner } from "react-bootstrap";

const InGame = () => {
    const [render, setRender] = useState(false);
    const navigate = useNavigate();
    const params = new URLSearchParams(window.location.search);
    const encryptedData = params.get('data');

    useEffect(() => {
        if (isMobile) {
            navigate('/Mobile');
        }
    }, [navigate]);

    useEffect(() => {
        if (encryptedData) {
            try {
                localStorage.clear();
                const { idProfissional, apelido, jogo } = decryptParams(encryptedData);
                localStorage.setItem('idProfissional', idProfissional);
                localStorage.setItem('apelidoPaciente', apelido);
                localStorage.setItem('jogo', jogo);
                setRender(true); // Agora chamado corretamente após o armazenamento
            } catch (e) {
                navigate('/sessao/notfound');
            }
        } else {
            Notfound();
        }

        function decryptParams(encryptedData) {
            const decryptedData = atob(encryptedData);
            return JSON.parse(decryptedData);
        }

        function Notfound() {
            navigate('/sessao/notfound');
        };
    }, [encryptedData, navigate]);

    const handleLoad = () => {
        try {
            const { jogo } = JSON.parse(atob(encryptedData));

            // Redirecionar para o Jogo da Memória
            if (jogo === 'JogoDaMemoria' || localStorage.getItem('jogo') === 'JogoDaMemoria') {
                navigate('/sessao/ingame/jogo');
                console.log('Redirecionado para Jogo da Memória');
            }

            // Redirecionar para o Jogo de Quiz
            else if (jogo === 'JogoQuiz' || localStorage.getItem('jogo') === 'JogoQuiz') {
                navigate('/sessao/ingame/quiz');
                console.log('Redirecionado para Jogo Quiz');
            }
        } catch (e) {
            Notfound();
        }
    };

    function Notfound() {
        navigate('/sessao/notfound');
    }

    if (!render) {
        return (
            <div className="d-flex justify-content-center align-items-center vh-100">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Carregando...</span>
                </Spinner>
            </div>
        );
    } else {
        return (
            <div>
                <Header />
                <div className="flex justify-center items-center h-screen bg-gray-100">
                    <div className="min-w-[600px] min-h-[600px] border-2 border-[#335374] rounded-md overflow-hidden text-center p-5 max-w-[500px] mx-auto flex items-center justify-center">
                        <button
                            className="bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-105 focus:outline-none focus:ring-4 focus:ring-indigo-300 animate-bounce"
                            onClick={handleLoad}
                        >
                            Jogar
                        </button>


                    </div>
                </div>
                <Footer />
            </div>
        );
    }
};

export default InGame;
