import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import jogomemoria from '../Home/imgs/side-view-kids-playing-memory-game.jpg';
import jogo2 from '../Home/imgs/medium-shot-kids-playing-memory-game.jpg';
import jogo3 from '../Home/imgs/siblings-playing-with-brain-teaser-toys.jpg';
import jogo4 from '../Home/imgs/ana-klipper-r8R_uJjA_mU-unsplash.jpg';
import jogo5 from '../Home/imgs/robo-wunderkind--_QpJv4J_AA-unsplash.jpg';
import jogo6 from '../Home/imgs/robo-wunderkind-3EuPcI31MQU-unsplash.jpg';
import HeaderDashboard from '../../pages/Dashboard/header';
import Footer from '../../components/footer';

function Dashboard() {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);  // Estado de carregamento

    useEffect(() => {
        const validarToken = async () => {
            const token = localStorage.getItem("token");
            if (!token) {
                console.error("TOKEN NÃO ENCONTRADO");
                navigate('/Login');  // Redireciona para a página de login se o token não existir
                return;
            }

            try {
                const res = await axios.get('https://ludemo-api.vercel.app/verifyToken', {
                    headers: {
                        'authorization': token
                    }
                });

                if (res.data.valid) {
                    console.log('Token válido');
                    setIsLoading(false);  // Habilita o render quando o token for válido
                } else {
                    console.error('Token inválido');
                    navigate('/login');
                }
            } catch (error) {
                console.error('Erro ao verificar o token:', error);
                navigate('/login');
            }
        };

        validarToken();
    }, [navigate]);

    if (isLoading) {
        // Exibe algo enquanto verifica o token
        return <div>Carregando...</div>;
    }

    return (
        <div>
            <HeaderDashboard />

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
            </div>

            <Footer />
        </div>
    );
}

export default Dashboard;
