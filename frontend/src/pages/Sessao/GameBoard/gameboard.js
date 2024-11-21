import React, { useEffect } from 'react';
import jogo01 from '../GameBoard/imgs/memoria.png';
import jogo6 from '../GameBoard/imgs/image.png';
import jogo4 from '../GameBoard/imgs/ligar.png';
import jogo02 from './imgs/quiz - jogo 02.jpg' ;  
import './gameboard.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import HeaderGameBoard from './header';
import Footer from '../../../components/footer';
import { isMobile } from 'react-device-detect';

const GameBoard = () => {
    
    // const navigate = useNavigate();
    // const params = new URLSearchParams(window.location.search);
    // const encryptedData = params.get('data');

    // useEffect(() => {
    //     if (isMobile) {
    //         navigate('/Mobile');
    //     }
    // }, [navigate]);

    // useEffect(() => {
    //     if (encryptedData) {
    //         try {
    //             const { idProfissional, apelido, jogo } = decryptParams(encryptedData);
    //             localStorage.setItem('idProfissional', idProfissional);
    //             localStorage.setItem('apelidoPaciente', apelido);
    //             localStorage.setItem('jogo', jogo);
    //         } catch (e) {
    //             navigate('/sessao/notfound');
    //         }
    //     } else {
    //         navigate('/sessao/notfound');
    //     }

    //     function decryptParams(encryptedData) {
    //         const decryptedData = atob(encryptedData);
    //         return JSON.parse(decryptedData);
    //     }
    // }, [encryptedData, navigate]);

   
    

    

    return (
        <div>
              <HeaderGameBoard />

        <div className="teste">
            <p>JOGANDO COM AS EMOÇÕES</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 justify-center items-center">
  <Link to="/sessao/ingame/jogo" className="card-link">
    <div className="card1">
      <img src={jogo01} alt="jogo" className="rounded-lg shadow-md hover:scale-105 transition-transform" />
    </div>
  </Link>
  <Link to="/sessao/ingame/quiz" className="card-link">
    <div className="card1">
      <img src={jogo02} alt="jogo" className="rounded-lg shadow-md hover:scale-105 transition-transform" />
    </div>
  </Link>
  <Link to="/gameboard/adivinharEmocao" className="card-link">
    <div className="card1">
      <img src={jogo6} alt="jogo" className="rounded-lg shadow-md hover:scale-105 transition-transform" />
    </div>
  </Link>
  <Link to="/gameboard/LigarEmocoes" className="card-link">
    <div className="card1">
      <img src={jogo4} alt="jogo" className="rounded-lg shadow-md hover:scale-105 transition-transform" />
    </div>
  </Link>
</div>


        <div>
            <Footer/ >
        </div>

        </div>
    );
};

export default GameBoard;