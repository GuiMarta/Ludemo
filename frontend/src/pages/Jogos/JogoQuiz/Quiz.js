import React, { useState } from "react";
import questions from "./Questoes.js"; // Importa o arquivo de perguntas que você criará abaixo
import './Quiz.css';
import Header from "./header.js";
import Footer from "../../../components/footer.js";

function Quiz() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [questionsCorrect, setQuestionsCorrect] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) setQuestionsCorrect(questionsCorrect + 1);

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setQuestionsCorrect(0);
    setIsFinished(false);
  };

  return (
    <div>
    <Header />

    <div className="quiz-container">
    <div className="quiz-board">
      <h2>Responda:</h2>
      <main>
        {!isFinished ? (
          
          <div className="content">
            <span className="spnQtd">
              {currentIndex + 1}/{questions.length}
            </span>
            <span className="question">{questions[currentIndex].question}</span>
            <div className="answers">
              {questions[currentIndex].answers.map((answer, index) => (
                <button
                  key={index}
                  className="answer"
                  onClick={() => handleAnswerClick(answer.correct)}
                >
                  {answer.option}
                </button>
              ))}
            </div>
          </div>
        ) : 
        (
          <div className="finish">
            <span>
              Você acertou {questionsCorrect} de {questions.length}
            </span>
            <button onClick={handleRestart}>Reiniciar</button>
          </div>
        )}
      </main>
      </div>
    </div>
    <Footer />
    </div>
  );
}

export default Quiz;
