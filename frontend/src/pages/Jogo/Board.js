import React from "react";
import Card from "./Card.js";
import "./Board.css";
import Confetti from "react-confetti"; // Importando a animação de confetes

import Header from "./header.js";
import emojiApaixonado from "./imgs/emoji apaixonado.jpg";
import emojiDesapontado from "./imgs/emoji desapontado.jpg";
import emojiEmocionado from "./imgs/emoji emocionado.jpg";
import emojiEnvergonhado from "./imgs/emoji envergonhado.jpg";
import emojiPensando from "./imgs/emoji pensando.jpg";
import emojiRaivoso from "./imgs/emoji raivoso.jpg";
import emojiRindo from "./imgs/emoji rindo.jpg";
import emojiTriste from "./imgs/emoji triste.jpg";
import Footer from "../../components/footer.js";

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
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      !this.state.showConfetti &&
      this.state.deck.every((card) => card.faceUp)
    ) {
      console.log("Todos os pares foram encontrados, ativando confetes!");
      this.setState({ showConfetti: true });
    }
  }

  flipCardTo(cardIdx, faceUp) {
    this.setState((prevState) => ({
      deck: prevState.deck.map((card, index) =>
        index === cardIdx ? { ...card, faceUp: faceUp } : card
      ),
    }));
  }

  flip(cardIdx) {
    if (this.state.lockBoard || this.state.deck[cardIdx].faceUp) return;

    this.flipCardTo(cardIdx, true);

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
          this.flipCardTo(firstCardIdx, false);
          this.flipCardTo(cardIdx, false);
          this.setState({ firstCardIdx: null, lockBoard: false });
        }, 1000);
      }
    }
  }

  render() {
    return (
      <div>
        <Header />

        {/* Confetti animation and winning message */}
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
                flip={() => this.flip(index)}
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
