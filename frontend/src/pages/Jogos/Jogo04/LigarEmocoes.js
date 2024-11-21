import React, { useState, useEffect } from "react";
import axios from "axios";

const LigarEmocoesGame = () => {
  const [matches, setMatches] = useState([]);
  const [draggedItem, setDraggedItem] = useState(null);
  const [isFinished, setIsFinished] = useState(false);
  const [sessionData, setSessionData] = useState({
    inicioSessao: new Date(),
    fimSessao: null,
    contadorCliques: 0,
    dadosEnviados: false,
  });

  const idProfissional = localStorage.getItem("idProfissional");
  const apelido = localStorage.getItem("apelido");
  const jogo = "Ligar Emoções";

  const emojis = [
    { id: 1, emoji: "😊", feeling: "Feliz" },
    { id: 2, emoji: "😢", feeling: "Triste" },
    { id: 3, emoji: "😡", feeling: "Bravo" },
  ];

  const feelings = [
    { id: 1, text: "Feliz" },
    { id: 2, text: "Triste" },
    { id: 3, text: "Bravo" },
  ];

  const handleDragStart = (id) => {
    setDraggedItem(id);
    setSessionData((prevData) => ({
      ...prevData,
      contadorCliques: prevData.contadorCliques + 1,
    }));
  };

  const handleDrop = (feelingId) => {
    if (draggedItem === feelingId) {
      setMatches([...matches, feelingId]);
    }
    setDraggedItem(null);
  };

  const isMatched = (id) => matches.includes(id);

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
    if (matches.length === emojis.length && !sessionData.dadosEnviados) {
      const fimSessao = new Date();
      setSessionData((prevData) => ({
        ...prevData,
        fimSessao,
        dadosEnviados: true,
      }));

      enviarDadosSessao(fimSessao);
      setIsFinished(true);
    }
  }, [matches, emojis.length, sessionData]);

  return (
    <div style={styles.container}>
      <h1>Jogo de Ligar Emoções</h1>
      <p>Arraste o emoji até o sentimento correspondente!</p>

      <div style={styles.gameContainer}>
        <div style={styles.column}>
          {emojis.map((emoji) => (
            <div
              key={emoji.id}
              draggable={!isMatched(emoji.id)}
              onDragStart={() => handleDragStart(emoji.id)}
              style={{
                ...styles.emoji,
                opacity: isMatched(emoji.id) ? 0.5 : 1,
              }}
            >
              {emoji.emoji}
            </div>
          ))}
        </div>

        <div style={styles.column}>
          {feelings.map((feeling) => (
            <div
              key={feeling.id}
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => handleDrop(feeling.id)}
              style={{
                ...styles.feelingBox,
                backgroundColor: isMatched(feeling.id)
                  ? "#d4edda"
                  : "#f8d7da",
              }}
            >
              {feeling.text}
            </div>
          ))}
        </div>
      </div>

      {isFinished && (
        <div style={styles.successMessage}>Parabéns! Você acertou todas!</div>
      )}
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    textAlign: "center",
    padding: "20px",
  },
  gameContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "50px",
    marginTop: "20px",
  },
  column: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  emoji: {
    fontSize: "40px",
    cursor: "grab",
    marginBottom: "10px",
  },
  feelingBox: {
    width: "150px",
    height: "50px",
    border: "2px dashed #007bff",
    borderRadius: "5px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "10px",
    fontSize: "18px",
  },
  successMessage: {
    marginTop: "20px",
    padding: "10px",
    color: "#155724",
    backgroundColor: "#d4edda",
    border: "1px solid #c3e6cb",
    borderRadius: "5px",
    display: "inline-block",
  },
};

export default LigarEmocoesGame;
