import React from 'react';
import { useEffect} from 'react';
import './Dashboard.css';
import {Link} from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


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
    
    
    const nome = localStorage.getItem('nome');

    return (
    <div>



        <div>
            <h1>Bem vindo de volta, {nome}!</h1>
        </div>


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
    </div>
        

    );
}

export default Dashboard;