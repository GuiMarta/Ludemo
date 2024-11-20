import React, { useState, useEffect } from "react";
import axios from "axios";

const EmotionGame = () => {
  const emojiMap = {
    '😊': ['feliz', 'alegre', 'contente'],
    '😢': ['triste', 'chateado', 'desanimado'],
    '😠': ['raiva', 'irritado', 'bravo'],
    '😱': ['surpreso', 'surpresa' , 'assustado', 'chocado'],
    '😴': ['cansado', 'sonolento', 'dormindo']
  };

  const totalEmojis = Object.keys(emojiMap).length;
  const idProfissional = localStorage.getItem("idProfissional");
  const apelido = localStorage.getItem("apelido");
  const jogo = "Qual o Sentimento?";

  const [currentEmoji, setCurrentEmoji] = useState('');
  const [usedEmojis, setUsedEmojis] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [feedback, setFeedback] = useState('');
  const [isFinished, setIsFinished] = useState(false);
  const [sessionData, setSessionData] = useState({
    inicioSessao: new Date(),
    fimSessao: null,
    contadorCliques: 0,
    dadosEnviados: false,
  });

  const displayRandomEmoji = () => {
    const availableEmojis = Object.keys(emojiMap).filter(emoji => !usedEmojis.includes(emoji));
    if (availableEmojis.length === 0) {
      setFeedback('Parabéns, você completou o jogo!');
      setIsFinished(true);
      return;
    }
    const randomEmoji = availableEmojis[Math.floor(Math.random() * availableEmojis.length)];
    setCurrentEmoji(randomEmoji);
    setUsedEmojis([...usedEmojis, randomEmoji]);
  };

  const checkAnswer = () => {
    setSessionData((prevData) => ({
      ...prevData,
      contadorCliques: prevData.contadorCliques + 1,
    }));

    const correctAnswers = emojiMap[currentEmoji];
    if (correctAnswers && correctAnswers.includes(userInput.trim().toLowerCase())) {
      setFeedback('Correto! Muito bem!');
    } else {
      setFeedback('Tente novamente.');
    }

    setUserInput('');
    displayRandomEmoji();
  };

  const enviarDadosSessao = async (fimSessao) => {
    const { inicioSessao, contadorCliques } = sessionData;
    const dadosSessao = {
      idProfissional,
      apelido,
      jogo,
      contadorCliques,
      inicio: inicioSessao,
      fim: fimSessao,
      duracao: fimSessao ? (fimSessao - inicioSessao) / 1000 : 0, // Duração em segundos
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

  useEffect(() => {
    if (isFinished && !sessionData.dadosEnviados) {
      const fimSessao = new Date(); // Define o fim da sessão
      setSessionData((prevData) => ({
        ...prevData,
        fimSessao,
        dadosEnviados: true,
      }));

      // Envia os dados
      enviarDadosSessao(fimSessao);
    }
  }, [isFinished, sessionData]);

  useEffect(() => {
    displayRandomEmoji(); // Exibe o primeiro emoji ao carregar o jogo
  }, []);

  const handleRestart = () => {
    setUsedEmojis([]);
    setIsFinished(false);
    setFeedback('');
    setSessionData({
      inicioSessao: new Date(),
      fimSessao: null,
      contadorCliques: 0,
      dadosEnviados: false,
    });
    displayRandomEmoji();
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.gameContainer}>
        <h1>Qual é o sentimento?</h1>
        {!isFinished ? (
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
            <button onClick={handleRestart} style={styles.button}>Jogar novamente</button>
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
  }
};

export default EmotionGame;
