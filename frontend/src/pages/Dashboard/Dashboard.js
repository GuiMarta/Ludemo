import React from 'react';
import { useEffect} from 'react';
import './Dashboard.css';
import {Link} from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import jogomemoria from '../Home/imgs/side-view-kids-playing-memory-game.jpg'
import jogo2 from '../Home/imgs/medium-shot-kids-playing-memory-game.jpg';
import jogo3 from '../Home/imgs/siblings-playing-with-brain-teaser-toys.jpg';
import jogo4 from '../Home/imgs/ana-klipper-r8R_uJjA_mU-unsplash.jpg'
import jogo5 from '../Home/imgs/robo-wunderkind--_QpJv4J_AA-unsplash.jpg'
import jogo6 from '../Home/imgs/robo-wunderkind-3EuPcI31MQU-unsplash.jpg'
import Header from '../../components/header';


function Dashboard() {
    const navigate = useNavigate();  // Inicializa o useNavigate

    useEffect(() => {
        const validarToken = async () => {
            const token = localStorage.getItem("token");
            if (!token) {
                console.error("TOKEN NÃO ENCONTRADO");
                navigate('/Login');  // Redireciona para a página de login se o token não tiver no localStorage
                return;
            }

            try {
                const res = await axios.get('http://localhost:5000/verifyToken', {
                    headers: {
                        'authorization': token //manda o token do localStorage para o backend
                    }
                });

                if (res.data.valid) {
                    console.log('Token válido');
                    //se der tudo certo
                } else {
                    console.error('Token inválido');
                    navigate('/login');  // Redireciona para a página de login se voltar token inválido
                }
            } catch (error) {
                console.error('Erro ao verificar o token:', error);
                navigate('/login');  // Redireciona para a página de login em caso de erro
            }
        };

        validarToken();  // Chama a função de validação do token ao carregar a página
    }, [navigate]);  // O hook será executado uma vez ao montar o componente, devido à dependência `navigate`
    
    
    return (
    <div>

        <Header />

        <div className="teste">
            <p>JOGANDO COM AS EMOÇÕES</p>
        </div>
        
        <div className="grid">
            <Link to="/jogo" className="card-link">
                <div className="card1"><img src={jogomemoria} /></div>
            </Link>
            <Link to="/jogo" className="card-link">
                <div className="card1"><img src={jogo2} /></div>
            </Link>
            <Link to="/jogo" className="card-link">
                <div className="card1"><img src={jogo3} /></div>
            </Link>
            <Link to="/jogo" className="card-link">
                <div className="card1"><img src={jogo4} /></div>
            </Link>
            <Link to="/jogo" className="card-link">
                <div className="card1"><img src={jogo5} /></div>
            </Link>
            <Link to="/jogo" className="card-link">
                <div className="card1"><img src={jogo6} /></div>
            </Link>
        </div>
            
        </div>
        

    );
}

export default Dashboard;