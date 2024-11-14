import React from "react";
import Quiz from "./Quiz.css";

const questions = [
    {
      question: "Imagine que você perdeu o seu brinquedo favorito e não consegue encontrá-lo em lugar nenhum. Como você provavelmente está se sentindo?",
      answers: [
        { option: "Feliz", correct: false },
        { option: "Triste", correct: true },
        { option: "Animado", correct: false },
      ],
    },
    {
      question: "Você está brincando com seus amigos no parque e de repente eles começam a correr sem te chamar para ir junto. Como você provavelmente está se sentindo?",
      answers: [
        { option: "Excluído", correct: true },
        { option: "Orgulhoso", correct: false },
        { option: "Aliviado", correct: false },
      ],
    },
    {
      question: "É seu aniversário e seus amigos te deram uma festa surpresa. Todos estão lá e você ganhou presentes que adora. Como você provavelmente está se sentindo?",
      answers: [
        { option: "Entediado", correct: false },
        { option: "Chateado", correct: false },
        { option: "Agradecido", correct: true },
      ],
    },
    {
      question: "Você estava preparado para apresentar um trabalho na escola, mas quando chegou a sua vez, deu um 'branco' e você esqueceu o que tinha que falar. Como você provavelmente está se sentindo?",
      answers: [
        { option: "Confiante", correct: false },
        { option: "Envergonhado", correct: true },
        { option: "Contente", correct: false },
      ],
    },
  ];
  
  export default questions;
  