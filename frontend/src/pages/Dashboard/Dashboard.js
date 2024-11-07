import React from "react";
import { useEffect } from "react";
import "./Dashboard.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import NovaSessao from "./NovaSessao";
import HeaderDashboard from "../../pages/Dashboard/header";
import Footer from "../../components/footer";
import HistoricoSessoes from "./HistoricoSessoes";
import { useState } from "react";
import { Spinner } from "react-bootstrap";
import GameBoard from "../Sessao/GameBoard/gameboard";
import JogosDisponiveis from "./JogosDisponiveis";

function Dashboard() {
  const navigate = useNavigate(); // Inicializa o useNavigate
  const [render, setRender] = useState(false);

  useEffect(() => {
    const validarToken = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("TOKEN NÃO ENCONTRADO");
        navigate("/Login"); // Redireciona para a página de login se o token não tiver no localStorage
        return;
      }

      try {
        const res = await axios.get(
          "https://ludemo-api.vercel.app/verifyToken",
          {
            headers: {
              authorization: token, //manda o token do localStorage para o backend
            },
          }
        );

        if (res.data.valid) {
          console.log("Token válido");
          setRender(true);
          //se der tudo certo
        } else {
          console.error("Token inválido");
          navigate("/login"); // Redireciona para a página de login se voltar token inválido
        }
      } catch (error) {
        console.error("Erro ao verificar o token:", error);
        navigate("/login"); // Redireciona para a página de login em caso de erro
      }
    };

    validarToken(); // Chama a função de validação do token ao carregar a página
  }, [navigate]); // O hook será executado uma vez ao montar o componente, devido à dependência `navigate`

  if(!render) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Carregando...</span>
      </Spinner>
      </div>
    );
  } 
  else {
    return (
      <div>
        <HeaderDashboard />
        <div className="dashboard p-5 min-h-fit ">
        <h1 className="text-3xl font-semibold text-center text-gray-800">Painel de Controle do Profissional</h1>
          <div className=" mt-8 flex">
            <div className="w-50">  
              <NovaSessao />
            </div>

            <div className="w-50">
              <HistoricoSessoes /> 
            </div>
          </div>
          <div>
            <JogosDisponiveis />
          </div>



        </div>
        <Footer />
      </div>
    );
  }
}
export default Dashboard;


