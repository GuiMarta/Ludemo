import React from 'react';
import './Dashboard.css';
import {Link} from 'react-router-dom'


function Dashboard() {
    return (
        <>
        <div className="teste">
            <h1>Página de jogos</h1>
        </div>
        
        <div className="grid">
            <Link to="/jogo" className="card-link">
                <div className="card1"><img src='https://th.bing.com/th/id/OIP.kK0Ds6EgW61cY-nTI5cC4gHaE7?w=1000&h=666&rs=1&pid=ImgDetMain' /></div>
            </Link>
            <Link to="/jogo" className="card-link">
                <div className="card1"></div>
            </Link>
            <Link to="/jogo" className="card-link">
                <div className="card1"></div>
            </Link>
            <Link to="/jogo" className="card-link">
                <div className="card1"></div>
            </Link>
            <Link to="/jogo" className="card-link">
                <div className="card1"></div>
            </Link>
            <Link to="/jogo" className="card-link">
                <div className="card1"></div>
            </Link>
        </div>
        </>
        

    );
}

export default Dashboard;