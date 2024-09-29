import React from 'react';
import jogo6 from './image.png';
import './gameboard.css';
import {Link} from 'react-router-dom'
import HeaderGameBoard from './header';
import Footer from '../../../components/footer';


const GameBoard = () => {
    // Lógica do componente GameBoard aqui
    const IdSessao = localStorage.getItem('IdSessao');
    const Apelido = localStorage.getItem('Apelido');
    
    if (!IdSessao || !Apelido || IdSessao === '' || Apelido === '') {
        window.location.href = '/sessao/id';
        return null;
    }

    // Renderização do componente GameBoard aqui

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