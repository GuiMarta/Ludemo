import React, { useState, useEffect } from "react";
import axios from "axios";
import Confetti from "react-confetti"; // Adicionando a biblioteca de confetes

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
      {isFinished && <Confetti />} {/* Renderiza confetes ao finalizar */}
      <h1 style={styles.title}>Jogo de Ligar Emoções</h1>
      <p style={styles.instructions}>Arraste o emoji até o sentimento correspondente!</p>

      <div style={styles.gameContainer}>
        {emojis.map((emoji) => (
          <div style={styles.row} key={emoji.id}>
            <div
              draggable={!isMatched(emoji.id)}
              onDragStart={() => handleDragStart(emoji.id)}
              style={{
                ...styles.emoji,
                opacity: isMatched(emoji.id) ? 0.5 : 1,
              }}
            >
              {emoji.emoji}
            </div>
            <div
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => handleDrop(emoji.id)}
              style={{
                ...styles.feelingBox,
                backgroundColor: isMatched(emoji.id) ? "#d4edda" : "#f8d7da",
              }}
            >
              {emoji.feeling}
            </div>
          </div>
        ))}
      </div>

      {isFinished && (
        <div style={styles.successMessage}>Parabéns! Você acertou todas!</div>
      )}
    </div>
  );
};

const styles = {
  
  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "10px",
  },
  instructions: {
    fontSize: "1rem",
    color: "#666",
    marginBottom: "20px",
  },
  gameContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  row: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
  },
  emoji: {
    fontSize: "40px",
    cursor: "grab",
    backgroundColor: "#fff",
    padding: "10px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    transition: "transform 0.2s, box-shadow 0.2s",
  },
  feelingBox: {
    width: "150px",
    height: "50px",
    border: "2px dashed #007bff",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "18px",
    fontWeight: "bold",
    backgroundColor: "#f8f9fa",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    transition: "background-color 0.3s, transform 0.2s",
  },
  successMessage: {
    marginTop: "20px",
    padding: "15px 25px",
    color: "#155724",
    backgroundColor: "#d4edda",
    border: "1px solid #c3e6cb",
    borderRadius: "10px",
    display: "inline-block",
    fontSize: "18px",
    fontWeight: "bold",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
};

export default LigarEmocoesGame;
