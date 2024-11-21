import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import Header from '../../../pages/Jogos/JogoDaMemoria/header';
import Footer from '../../../components/footer';
import { Spinner } from "react-bootstrap";
import AdivinharEmocao from './AdivinharEmocao';
import Confetti from "react-confetti";

const Jogo4 = () => {
    const [render, setRender] = useState(true);
    const [showConfetti, setShowConfetti] = useState(false); // Estado para gerenciar os confetes
    const navigate = useNavigate();
    const params = new URLSearchParams(window.location.search);
    const encryptedData = params.get('data');

    useEffect(() => {
        if (isMobile) {
            navigate('/Mobile');
        }
    }, [navigate]);

    const handleLoad = () => {
        try {
            const { idProfissional, apelido, jogo } = JSON.parse(atob(encryptedData));
        
            const newEncryptedData = btoa(JSON.stringify({ idProfissional, apelido, jogo }));
        
            if (jogo === 'JogoDaMemoria' || localStorage.getItem('jogo') === 'JogoDaMemoria') {
                navigate(`/sessao/ingame/jogo?data=${newEncryptedData}`);
                console.log('Redirecionado para Jogo da Memória');
            } else if (jogo === 'JogoQuiz' || localStorage.getItem('jogo') === 'JogoQuiz') {
                navigate(`/sessao/ingame/quiz?data=${newEncryptedData}`);
                console.log('Redirecionado para Jogo Quiz');
            }
        } catch (e) {
            Notfound();
        }
    };

    function Notfound() {
        navigate('/sessao/notfound');
    }

    const handleGameCompletion = () => {
        setShowConfetti(true); // Ativa os confetes ao final do jogo
        setTimeout(() => setShowConfetti(false), 5000); // Remove os confetes após 5 segundos
    };

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
                        <div>
                            {showConfetti && <Confetti />} {/* Exibe confetes quando ativado */}
                            <AdivinharEmocao onGameComplete={handleGameCompletion} /> {/* Callback para finalização do jogo */}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
};

export default Jogo4;
