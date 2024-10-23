import React from 'react';
import jogo6 from './image.png';
import './gameboard.css';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom'
import HeaderGameBoard from './header';
import Footer from '../../../components/footer';
import { isMobile } from 'react-device-detect';


const GameBoard = () => {
    const navigate = useNavigate();
    const params = new URLSearchParams(window.location.search);
    const encryptedData = params.get('data');

    console.log("data:"+encryptedData); //testar se está pegando os dados dos parametros da requisição

    useEffect(() => {

        if (isMobile) {
            navigate('/Mobile');
        }
    }, [navigate]);
    
    useEffect(() => {
    if (encryptedData) {
        try {
        const { idProfissional, apelido } = decryptParams(encryptedData);
        localStorage.setItem('idProfissional', idProfissional);
        localStorage.setItem('apelidoPaciente', apelido);
        } catch (e) {
        navigate('/sessao/notfound');
        }
    } else {
        navigate('/sessao/notfound');
    }

    function decryptParams(encryptedData) {
        const decryptedData = atob(encryptedData);
        return JSON.parse(decryptedData);
    }





    }, []);
    

    

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