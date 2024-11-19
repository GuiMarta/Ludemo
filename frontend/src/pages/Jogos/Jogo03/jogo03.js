import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';

const EmotionGame = () => {
  const emojiMap = {
    '😊': ['feliz', 'alegre', 'contente'],
    '😢': ['triste', 'chateado', 'desanimado'],
    '😠': ['raiva', 'irritado', 'bravo'],
    '😱': ['surpreso', 'assustado', 'chocado'],
    '😴': ['cansado', 'sonolento', 'dormindo']
  };

  const totalEmojis = Object.keys(emojiMap).length;
  const [currentEmoji, setCurrentEmoji] = useState('');
  const [usedEmojis, setUsedEmojis] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [feedback, setFeedback] = useState('');
  const [score, setScore] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  // Obter as dimensões da tela diretamente
  const width = window.innerWidth;
  const height = window.innerHeight;

  const displayRandomEmoji = () => {
    const availableEmojis = Object.keys(emojiMap).filter(emoji => !usedEmojis.includes(emoji));
    if (availableEmojis.length === 0) {
      setFeedback('Parabéns, você completou o jogo!');
      setShowConfetti(true); // Ativar confete no final do jogo
      return;
    }
    const randomEmoji = availableEmojis[Math.floor(Math.random() * availableEmojis.length)];
    setCurrentEmoji(randomEmoji);
    setUsedEmojis([...usedEmojis, randomEmoji]);
  };

  const checkAnswer = () => {
    const correctAnswers = emojiMap[currentEmoji];
    if (correctAnswers && correctAnswers.includes(userInput.trim().toLowerCase())) {
      setFeedback('Correto! Muito bem!');
      setScore(score + 1);
    } else {
      setFeedback('Tente novamente.');
    }
    setUserInput(''); // Limpa o input
    displayRandomEmoji(); // Exibe um novo emoji
  };

  useEffect(() => {
    displayRandomEmoji();
  }, []);

  return (
    <div style={styles.pageContainer}>
      {/* Confetti animation and winning message */}
      {showConfetti && <Confetti width={width} height={height} />}
      <div style={styles.gameContainer}>
        <h1>Qual é o sentimento?</h1>
        {!showConfetti ? (
          <>
            <div style={styles.emojiDisplay}>{currentEmoji}</div>
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Escreva o sentimento"
              style={styles.input}
            />
            <button onClick={checkAnswer} style={styles.button}>Enviar</button>
            <p style={feedback === 'Correto! Muito bem!' ? styles.correctFeedback : styles.incorrectFeedback}>{feedback}</p>
          </>
        ) : (
          <div style={styles.celebrationContainer}>
            <p style={styles.congratsMessage}>{feedback}</p>
            <p style={styles.score}>Você acertou {score} de {totalEmojis}!</p>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  
  pageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f8ff'
  },
  gameContainer: {
    textAlign: 'center',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    border: '2px solid #335374',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    margin: 'auto'
  },
  emojiDisplay: {
    fontSize: '80px',
    marginBottom: '20px'
  },
  input: {
    padding: '10px',
    fontSize: '1em',
    borderRadius: '5px',
    border: '1px solid #ddd',
    width: '80%',
    marginBottom: '15px'
  },
  button: {
    padding: '10px 20px',
    fontSize: '1em',
    border: 'none',
    backgroundColor: '#4CAF50',
    color: '#fff',
    borderRadius: '5px',
    cursor: 'pointer'
  },
  correctFeedback: {
    marginTop: '15px',
    fontSize: '1.2em',
    color: 'green'
  },
  incorrectFeedback: {
    marginTop: '15px',
    fontSize: '1.2em',
    color: 'red'
  },
  celebrationContainer: {
    marginTop: '20px',
    textAlign: 'center'
  },
  congratsMessage: {
    fontSize: '1.5em',
    color: 'blue',
    marginBottom: '10px'
  },
  score: {
    fontSize: '1.2em',
    color: '#333',
    marginTop: '15px'
  }
};

export default EmotionGame;
