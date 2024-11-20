import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import './jogo.css';
import { Spinner } from "react-bootstrap";
import LigarEmocoes from './LigarEmocoes';

const Jogo4 = () => {
    const [render, setRender] = useState(true);
    const navigate = useNavigate();
    const params = new URLSearchParams(window.location.search);
    const encryptedData = params.get('data');

    useEffect(() => {
        if (isMobile) {
            navigate('/Mobile');
        }
    }, [navigate]);

    // useEffect(() => {
    //     if (encryptedData) {
    //         try {
    //             localStorage.clear();
    //             const { idProfissional, apelido, jogo } = decryptParams(encryptedData);
    //             localStorage.setItem('idProfissional', idProfissional);
    //             localStorage.setItem('apelido', apelido);
    //             localStorage.setItem('jogo', jogo);
    //             setRender(true); // Agora chamado corretamente após o armazenamento
    //         } catch (e) {
    //             navigate('/sessao/notfound');
    //         }
    //     } else {
    //         Notfound();
    //     }

    //     function decryptParams(encryptedData) {
    //         const decryptedData = atob(encryptedData);
    //         return JSON.parse(decryptedData);
    //     }

    //     function Notfound() {
    //         navigate('/sessao/notfound');
    //     };
    // }, [encryptedData, navigate]);

    const handleLoad = () => {
        try {
            const { idProfissional, apelido, jogo } = JSON.parse(atob(encryptedData));
        
            // Recriptografar os parâmetros para o redirecionamento
            const newEncryptedData = btoa(JSON.stringify({ idProfissional, apelido, jogo }));
        
            // Redirecionar para o Jogo da Memória com os parâmetros criptografados
            if (jogo === 'JogoDaMemoria' || localStorage.getItem('jogo') === 'JogoDaMemoria') { // alterar caso altere o nome do jogo
                navigate(`/sessao/ingame/jogo?data=${newEncryptedData}`);
                console.log('Redirecionado para Jogo da Memória');
            }
            
            // Redirecionar para o Jogo de Quiz com os parâmetros criptografados
            else if (jogo === 'JogoQuiz' || localStorage.getItem('jogo') === 'JogoQuiz') { // alterar caso altere o nome do jogo
                navigate(`/sessao/ingame/quiz?data=${newEncryptedData}`);
                console.log('Redirecionado para Jogo Quiz');
            }


            // add else ifs pros proximos jogos


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
                        <div>
                            <LigarEmocoes /> 
                        </div>


                    </div>
                </div>
                <Footer />
            </div>
        );
    }
};

export default Jogo4;
