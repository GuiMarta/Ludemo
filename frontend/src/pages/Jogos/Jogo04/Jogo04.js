import React, { useState } from "react";
import "./jogo.css";

const emotionsList = ["Feliz", "Triste", "Bravo", "Com Medo", "Ansioso", "Calmo"];

function App() {
  const [selectedEmotions, setSelectedEmotions] = useState([]);
  const [step, setStep] = useState(1);

  const handleEmotionToggle = (emotion) => {
    setSelectedEmotions((prev) =>
      prev.includes(emotion) ? prev.filter((e) => e !== emotion) : [...prev, emotion]
    );
  };

  const startGame = () => setStep(2);
  const showFeedback = () => setStep(3);
  const restartGame = () => {
    setSelectedEmotions([]);
    setStep(1);
  };

  return (
    <div className="App">
      {step === 1 && (
        <div className="start-screen">
          <h1>Construtor de Sentimentos</h1>
          <p>Ajude nosso personagem a identificar suas emoções!</p>
          <button onClick={startGame}>Iniciar</button>
        </div>
      )}

      {step === 2 && (
        <div className="game-screen">
          <h2>Como nosso amigo está se sentindo?</h2>
          <div className="character">
            <img src="/character.png" alt="Personagem" />
          </div>
          <div className="emotions">
            {emotionsList.map((emotion) => (
              <button
                key={emotion}
                onClick={() => handleEmotionToggle(emotion)}
                className={selectedEmotions.includes(emotion) ? "selected" : ""}
              >
                {emotion}
              </button>
            ))}
          </div>
          <button onClick={showFeedback}>Próximo</button>
        </div>
      )}

      {step === 3 && (
        <div className="feedback-screen">
          <h2>Emoções Escolhidas</h2>
          {selectedEmotions.length > 0 ? (
            <ul>
              {selectedEmotions.map((emotion, index) => (
                <li key={index}>{emotion}</li>
              ))}
            </ul>
          ) : (
            <p>Nenhuma emoção foi selecionada.</p>
          )}
          <p>
            Lembre-se: todas as emoções são importantes e naturais. Vamos pensar
            em como lidar com elas!
          </p>
          <button onClick={restartGame}>Jogar Novamente</button>
        </div>
      )}
    </div>
  );
}

export default App;
