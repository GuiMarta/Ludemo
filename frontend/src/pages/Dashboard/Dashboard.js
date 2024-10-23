import React from "react";
import { useEffect } from "react";
import "./Dashboard.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DashboardURLContainer from "../../pages/Dashboard/URLcontainer";
import HeaderDashboard from "../../pages/Dashboard/header";
import Footer from "../../components/footer";
import DashboardInfoContainer from "../../pages/Dashboard/INFOcontainer";

function Dashboard() {
  const navigate = useNavigate(); // Inicializa o useNavigate

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

  return (
    <div>

        <HeaderDashboard />

        <div className="dashboard p-5">

        <h1>Painel de controle do profissional</h1>
        <div className="dashboard-body mt-5 d-flex ">
            <div className="w-50">
            <DashboardURLContainer />
            </div>

            <div className="w-50">
            <DashboardInfoContainer />
            </div>
        </div>

        </div>
        <Footer />
    </div>
  );
}

export default Dashboard;
