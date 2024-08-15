import React from 'react';
import './Card.css';
import logo from '../Home/imgs/LogoLudemo.png';

class Card extends React.Component { //mesma coisa que função

  render() { // obrigatório em componentes de classe

    let content; //variável do conteúdo da carta
    
    if(this.props.faceUp) { //verifica se a carta está virada ou não
      content = <img src={this.props.content} alt="Emoji" />;
    } else {
      content = ''
    }

    return (
      
      <div onClick={this.props.flip} className={`Card ${this.props.faceUp ? 'face-up': ''}`}>
        {content} 
      </div>
      
    );
  }
}

export default Card;
