import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import Header from './header';
import Footer from '../../../components/footer';
import './jogo.css';
import { Spinner } from "react-bootstrap";
import React, { useState } from "react";

const InGame = () => {
    const [render, setRender] = useState(false);
    const navigate = useNavigate();
    const params = new URLSearchParams(window.location.search);
    const encryptedData = params.get('data');

    useEffect(() => {
        if (isMobile) {
            navigate('/Mobile');
        }
    }, [navigate]);

    useEffect(() => {
        if (encryptedData) {
            try {
                localStorage.clear();
                const { idProfissional, apelido, jogo } = decryptParams(encryptedData);
                localStorage.setItem('idProfissional', idProfissional);
                localStorage.setItem('apelido', apelido);
                localStorage.setItem('jogo', jogo);
                setRender(true); // Agora chamado corretamente após o armazenamento
            } catch (e) {
                navigate('/sessao/notfound');
            }
        } else {
            Notfound();
        }

        function decryptParams(encryptedData) {
            const decryptedData = atob(encryptedData);
            return JSON.parse(decryptedData);
        }

        function Notfound() {
            navigate('/sessao/notfound');
        };
    }, [encryptedData, navigate]);

    const handleLoad = () => {
        try {
            const { idProfissional, apelido, jogo } = JSON.parse(atob(encryptedData));
        
            const newEncryptedData = btoa(JSON.stringify({ idProfissional, apelido, jogo }));
        
            if (jogo === 'JogoDaMemoria' || localStorage.getItem('jogo') === 'JogoDaMemoria') { // alterar caso altere o nome do jogo
                navigate(`/sessao/ingame/jogo?data=${newEncryptedData}`);
                console.log('Redirecionado para Jogo da Memória');
            }
            
            else if (jogo === 'JogoQuiz' || localStorage.getItem('jogo') === 'JogoQuiz') { // alterar caso altere o nome do jogo
                navigate(`/sessao/ingame/quiz?data=${newEncryptedData}`);
                console.log('Redirecionado para Jogo Quiz');
            }



        } catch (e) {
            Notfound();
        }
    };

    function Notfound() {
        navigate('/sessao/notfound');
    }

    if (!render) {
        return (
            <div className="d-flex justify-content-center align-items-center vh-100">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Carregando...</span>
                </Spinner>
            </div>
        );
    } else {
        return (
            <div>
                <Header />
                <div className="flex justify-center items-center h-screen bg-gray-100">
                    <div className="min-w-[600px] min-h-[600px] border-2 border-[#335374] rounded-md overflow-hidden text-center p-5 max-w-[500px] mx-auto flex items-center justify-center">
                        <div> 
const App = () => {
  const [matches, setMatches] = useState([]);
  const [draggedItem, setDraggedItem] = useState(null);

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
  };

  const handleDrop = (feelingId) => {
    if (draggedItem === feelingId) {
      setMatches([...matches, feelingId]);
    }
    setDraggedItem(null);
  };

  const isMatched = (id) => matches.includes(id);

  return (
    <div style={styles.container}>
      <h1>Jogo de Ligar Emoções</h1>
      <p>Arraste o emoji até o sentimento correspondente!</p>

      <div style={styles.gameContainer}>
        <div style={styles.column}>
          <h2>Emojis</h2>
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
          <h2>Sentimentos</h2>
          {feelings.map((feeling) => (
            <div
              key={feeling.id}
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => handleDrop(feeling.id)}
              style={{
                ...styles.feelingBox,
                backgroundColor: isMatched(feeling.id) ? "#d4edda" : "#f8d7da",
              }}
            >
              {feeling.text}
            </div>
          ))}
        </div>
      </div>

      {matches.length === emojis.length && (
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

export default App;

                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
};

export default InGame;
