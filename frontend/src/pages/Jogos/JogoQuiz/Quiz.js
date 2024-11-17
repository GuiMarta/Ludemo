import React, { useState, useEffect } from "react";
import axios from "axios";
import questions from "./Questoes.js";
import './Quiz.css';
import Header from "./header.js";
import Footer from "../../../components/footer.js";

function Quiz() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [questionsCorrect, setQuestionsCorrect] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [sessionData, setSessionData] = useState({
    inicioSessao: new Date(),
    fimSessao: null,
    contadorCliques: 0,
    dadosEnviados: false,
  });

  const idProfissional = localStorage.getItem("idProfissional");
  const apelido = localStorage.getItem("apelido");
  const jogo = "Quiz Emoções";

  const handleAnswerClick = (isCorrect) => {
    setSessionData((prevData) => ({
      ...prevData,
      contadorCliques: prevData.contadorCliques + 1,
    }));

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
    setSessionData({
      inicioSessao: new Date(),
      fimSessao: null,
      contadorCliques: 0,
      dadosEnviados: false,
    });
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
      const fimSessao = new Date(); // Define fimSessao
      setSessionData((prevData) => ({
        ...prevData,
        fimSessao,
        dadosEnviados: true,
      }));

      // Aguarda fimSessao ser definido antes de enviar
      enviarDadosSessao(fimSessao);
    }
  }, [isFinished]);

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
            ) : (
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
