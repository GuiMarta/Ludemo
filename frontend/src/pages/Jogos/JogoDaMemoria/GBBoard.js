import React from "react";
import { Navigate } from "react-router-dom";
import Card from "./Card.js";
import "./Board.css";
import Confetti from "react-confetti";
import axios from 'axios';
import axiosRetry from "axios-retry";
import Header from "./header.js";
import Footer from "../../../components/footer.js";
import { isMobile } from 'react-device-detect';
import emojiApaixonado from "./imgs/emoji apaixonado.jpg";
import emojiDesapontado from "./imgs/emoji desapontado.jpg";
import emojiEmocionado from "./imgs/emoji emocionado.jpg";
import emojiEnvergonhado from "./imgs/emoji envergonhado.jpg";
import emojiPensando from "./imgs/emoji pensando.jpg";
import emojiRaivoso from "./imgs/emoji raivoso.jpg";
import emojiRindo from "./imgs/emoji rindo.jpg";
import emojiTriste from "./imgs/emoji triste.jpg";




class GBBoard extends React.Component {
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
        redirectToMobile: false,
        dadosEnviados: false, 
      };
    }
 
    
  
    componentDidUpdate(prevProps, prevState) {
      if (
        !prevState.jogoFinalizado &&
        this.state.deck.every((card) => card.faceUp)
      ) ;
    }
  
    
  
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
    if (this.state.redirectToMobile) {
      return <Navigate to="/Mobile" />; // Redireciona para a página de dispositivos móveis
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

export default GBBoard;
