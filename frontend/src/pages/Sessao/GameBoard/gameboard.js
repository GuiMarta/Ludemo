import React from 'react';
import jogo6 from './image.png';
import './gameboard.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom'
import HeaderGameBoard from './header';
import Footer from '../../../components/footer';
import { isMobile } from 'react-device-detect';


const params = new URLSearchParams(window.location.search);
const encryptedData = params.get('data');




if (encryptedData) {
    // Descriptografa os parâmetros e armazena no localStorage
    const { idProfissional, apelido } = decryptParams(encryptedData);
    localStorage.setItem('idProfissional', idProfissional);
    localStorage.setItem('apelidoPaciente', apelido);
}

// Pega o valor criptografado da URL




// Função para descriptografar (em Base64)
function decryptParams(encryptedData) {
const decryptedData = atob(encryptedData);  // Descriptografa os dados Base64
return JSON.parse(decryptedData);  // Converte a string de volta para objeto JSON
}







const GameBoard = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (isMobile) {
            navigate('/Mobile');
        }
    }, [navigate]);
    

    

    return (
        <div>
              <HeaderGameBoard />

        <div className="teste">
            <p>JOGANDO COM AS EMOÇÕES</p>
        </div>
        
        <div className="grid mb-5">
            <Link to="/jogo" className="card-link">
                <div className="card1"><img src={jogo6} /></div>
            </Link>
            <Link to="/jogo" className="card-link">
                <div className="card1"><img src={jogo6} /></div>
            </Link>
            <Link to="/jogo" className="card-link">
                <div className="card1"><img src={jogo6} /></div>
            </Link>
            <Link to="/jogo" className="card-link">
                <div className="card1"><img src={jogo6} /></div>
            </Link>
            <Link to="/jogo" className="card-link">
                <div className="card1"><img src={jogo6} /></div>
            </Link>
            <Link to="/jogo" className="card-link">
                <div className="card1"><img src={jogo6} /></div>
            </Link>
        </div  >

        <div>
            <Footer/ >
        </div>

        </div>
    );
};

export default GameBoard;