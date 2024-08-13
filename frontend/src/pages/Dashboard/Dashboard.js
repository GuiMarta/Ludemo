import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate

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
            <h1>Dashboard</h1>
            {/* Aqui pode colocar outros elementos do seu dashboard */}
        </div>
    );
}

export default Dashboard;