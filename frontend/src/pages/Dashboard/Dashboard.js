import React from 'react';
import { useEffect} from 'react';
import './Dashboard.css';
import {Link} from 'react-router-dom'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import HeaderDashboard from '../../pages/Dashboard/header';
import Footer from '../../components/footer';


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
                const res = await axios.get('https://ludemo-api.vercel.app/verifyToken', {
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
        <HeaderDashboard />

        <div className="dashboard">
            <div className="dashboard-container pt-5">
                <div className="dashboard-content">
                    <p>Seja bem-vindo ao seu painel de controle!</p>
                    <h1>Dashboard</h1>
                    <div className="dashboard-buttons">
                        <Link to="/Dashboard/Profile" className="dashboard-button">Perfil</Link>
                        <Link to="/Dashboard/Orders" className="dashboard-button">Pedidos</Link>
                        <Link to="/Dashboard/Products" className="dashboard-button">Produtos</Link>
                    </div>
                </div>
            </div>
        
           <Footer /> 
        </div>

    </div>
        

    );
}

export default Dashboard;