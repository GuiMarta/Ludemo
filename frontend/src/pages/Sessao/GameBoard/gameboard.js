import React, { useEffect } from 'react';
import jogo01 from '../GameBoard/imgs/memoria - jogo01.jpg';
import jogo6 from '../GameBoard/imgs/image.png';
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
        
        <div className="grid mb-5">
            <Link to="/sessao/jogo" className="card-link">
                <div className="card1"><img src={jogo01} alt='jogo' /></div>
            </Link>
            <Link to="/sessao/jogo02" className="card-link">
                <div className="card1"><img src={jogo02}  alt='jogo' /></div>
            </Link>
            <Link to="/jogo02" className="card-link">
                <div className="card1"><img src={jogo6}  alt='jogo' /></div>
            </Link>
            <Link to="/jogo02" className="card-link">
                <div className="card1"><img src={jogo6} alt='jogo'  /></div>
            </Link>
            <Link to="/jogo02" className="card-link">
                <div className="card1"><img src={jogo6}  alt='jogo' /></div>
            </Link>
            <Link to="/jogo02" className="card-link">
                <div className="card1"><img src={jogo6}  alt='jogo' /></div>
            </Link>
        </div  >

        <div>
            <Footer/ >
        </div>

        </div>
    );
};

export default GameBoard;