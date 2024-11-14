import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import Header from './header';
import Footer from '../../../components/footer';
import './inGame.css';
import { Spinner } from "react-bootstrap";
const InGame = () => {

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
               
            }             
            catch (e) {
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
    
        function handleLoad() {
    
            try{

            // redirecionando para o pré-jogo correspondende ao recebido no paramentro da url
                const { jogo } = decryptParams(encryptedData);
               

            //REDIRECIONAR PARA O JOGO DA MEMÓRIA
                if (jogo === 'JogoDaMemoria') {
                    navigate('/sessao/ingame/jogo');
                    console.log('if1')
                }
                else if (localStorage.getItem('jogo') === 'jogoDaMemoria') {
                    navigate('/sessao/ingame/jogo');
                    console.log('if2')
                }
            //REDIRECIONAR PARA O JOGO DE QUIZ
                if (jogo === 'JogoQuiz') {
                    navigate('/sessao/ingame/quiz');
                }
                else if (localStorage.getItem('jogo') === 'JogoQuiz') {
                    navigate('/sessao/ingame/quiz');
                }

                
            }
            catch (e) {
                Notfound();
            }   
        }

        handleLoad();

    }, [encryptedData, navigate]);


    

    return (
       <div className="d-flex justify-content-center align-items-center vh-100">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Carregando...</span>
      </Spinner>
      </div>
    );
};

export default InGame;