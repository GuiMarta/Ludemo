import React from "react";
import { Navigate } from "react-router-dom";
import Card from "./Card.js";
import "./Board.css";
import Confetti from "react-confetti";
import axios from 'axios';
import axiosRetry from "axios-retry";
import Header from "./header.js";
import Footer from "../../../components/footer.js";

import emojiApaixonado from "./imgs/emoji apaixonado.jpg";
import emojiDesapontado from "./imgs/emoji desapontado.jpg";
import emojiEmocionado from "./imgs/emoji emocionado.jpg";
import emojiEnvergonhado from "./imgs/emoji envergonhado.jpg";
import emojiPensando from "./imgs/emoji pensando.jpg";
import emojiRaivoso from "./imgs/emoji raivoso.jpg";
import emojiRindo from "./imgs/emoji rindo.jpg";
import emojiTriste from "./imgs/emoji triste.jpg";



axiosRetry(axios, {
  retries: 3, // Número máximo de tentativas
  retryDelay: (retryCount) => {
    console.log(`Tentativa #${retryCount}`);
    return retryCount * 1000; // Aumenta o intervalo entre tentativas (1s, 2s, 3s...)
  },
  retryCondition: (error) => {
    // Condição para repetir a requisição (erros de rede ou códigos de status >= 500)
    return error.response?.status >= 500 || error.code === "ECONNABORTED";
  },
});

class Board extends React.Component {
  constructor(props) {
    super(props);

    const fronts = [
      emojiApaixonado,
      emojiDesapontado,
      emojiEmocionado,
      emojiEnvergonhado,
      emojiPensando,
      emojiRaivoso,
      emojiRindo,
      emojiTriste,
    ];

    const deck = fronts
      .concat(fronts)
      .sort(() => Math.random() - 0.5)
      .map((f) => ({
        content: f,
        faceUp: false,
      }));

      this.state = {
        deck: deck,
        firstCardIdx: null,
        lockBoard: false,
        showConfetti: false,
        contadorCliques: 0,
        inicioSessao: null,
        fimSessao: null,
        idProfissional: null,
        apelido: null,
        jogo: null,
        jogoFinalizado: false,
        redirectToNotFound: false,
        dadosEnviados: false, 
      };
    }
  
    componentDidMount() {
      const idProfissional = localStorage.getItem("idProfissional");
      const apelido = localStorage.getItem("apelido");
      const jogo = localStorage.getItem("jogo");
  
      if (!idProfissional || !apelido || !jogo) {
        console.error("Dados ausentes, redirecionando para notfound...");
        this.setState({ redirectToNotFound: true });
      } else {
        console.log("Dados da sessão recuperados:", idProfissional, apelido, jogo);
        this.setState({ idProfissional, apelido, jogo, inicioSessao: new Date() });
      }
    }
  
    componentDidUpdate(prevProps, prevState) {
      if (
        !prevState.jogoFinalizado &&
        this.state.deck.every((card) => card.faceUp)
      ) {
        console.log("Jogo concluído! Enviando dados...");
        this.setState({ jogoFinalizado: true, fimSessao: new Date(), showConfetti: true }, () => {
          if (!this.state.dadosEnviados) {
            this.enviarDadosSessao();
            this.setState({ dadosEnviados: true }); // Marca como enviado
          }
        });
      }
    }
  
    enviarDadosSessao = async () => {
      const { idProfissional, apelido, jogo, contadorCliques, inicioSessao, fimSessao } = this.state;
      const dadosSessao = {
        idProfissional,
        apelido,
        jogo,
        contadorCliques,
        inicio: inicioSessao,
        fim: fimSessao,
        duracao: fimSessao ? (fimSessao - inicioSessao) / 1000 : 0,
      };
  
      console.log("Enviando dados da sessão:", dadosSessao);
  
      try {
        const response = await axios.post("https://ludemo-api.vercel.app/add/relatory", dadosSessao, {
          headers: { "Content-Type": "application/json" },
        });
  
        if (response.status === 200) {
          console.log("Relatório enviado com sucesso:", dadosSessao);
        } else {
          console.error("Erro ao enviar relatório:", response.statusText);
        }
      } catch (error) {
        console.error("Erro de conexão ao enviar relatório:", error);
      }
    };
  
    virarCartaPara(cardIdx, faceUp) {
      this.setState((prevState) => ({
        deck: prevState.deck.map((card, index) =>
          index === cardIdx ? { ...card, faceUp: faceUp } : card
        ),
      }));
    }
  
    virarCarta(cardIdx) {
      if (this.state.lockBoard || this.state.deck[cardIdx].faceUp) return;
  
      this.setState((prevState) => ({ contadorCliques: prevState.contadorCliques + 1 }));
  
      this.virarCartaPara(cardIdx, true);
  
      if (this.state.firstCardIdx === null) {
        this.setState({ firstCardIdx: cardIdx });
      } else {
        this.setState({ lockBoard: true });
        const firstCardIdx = this.state.firstCardIdx;
        const firstCardContent = this.state.deck[firstCardIdx].content;
        const secondCardContent = this.state.deck[cardIdx].content;
  
        if (firstCardContent === secondCardContent) {
          this.setState({ firstCardIdx: null, lockBoard: false });
        } else {
          setTimeout(() => {
            this.virarCartaPara(firstCardIdx, false);
            this.virarCartaPara(cardIdx, false);
            this.setState({ firstCardIdx: null, lockBoard: false });
          }, 1000);
        }
      }
    }

  render() {
    if (this.state.redirectToNotFound) {
      return <Navigate to="/sessao/notfound" />;
    }

    return (
      <div>
        <Header />

        {this.state.showConfetti && (
          <>
            <Confetti />
            <div className="winning-message-top">Você ganhou! Parabéns!</div>
          </>
        )}

        <div className="game-container">
          <div className="game-board">
            {this.state.deck.map((card, index) => (
              <Card
                key={index}
                flip={() => this.virarCarta(index)}
                content={card.content}
                faceUp={card.faceUp}
              />
            ))}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Board;
