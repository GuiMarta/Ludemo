import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Confetti from 'react-confetti'; // Importando o componente de confetes

const EmotionGame = () => {
    const emojiMap = {
        '😊': ['feliz', 'alegre', 'contente'],
        '😢': ['triste', 'chateado', 'desanimado'],
        '😠': ['raiva', 'irritado', 'brabo'],
        '😱': ['surpreso', 'surpresa', 'assustado', 'chocado'],
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
        <div>
            {isFinished && <Confetti />} {/* Confetes aparecem ao final do jogo */}
            <h1 style={styles.title}>{!isFinished ? 'Qual é o sentimento?' : ''}</h1> {/* Remove título ao terminar */}
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
                    <button onClick={checkAnswer} style={styles.button}>
                        Enviar
                    </button>
                    <p
                        style={
                            feedback === 'Correto! Muito bem!'
                                ? styles.correctFeedback
                                : styles.incorrectFeedback
                        }
                    >
                        {feedback}
                    </p>
                </>
            ) : (
                <div style={styles.celebrationContainer}>
                    <p style={styles.congratsMessage}>{feedback}</p>
                    <button onClick={handleRestart} style={styles.button}>
                        Jogar novamente
                    </button>
                </div>
            )}
        </div>
    );
};

const styles = {
    title: {
        fontSize: '2.5rem',
        fontWeight: 'bold',
        textShadow: '2px 2px #f0f8ff',
        color: '#335374',
        marginBottom: '20px',
    },
    emojiDisplay: {
        fontSize: '80px',
        marginBottom: '20px',
    },
    input: {
        padding: '10px',
        fontSize: '1em',
        borderRadius: '10px',
        border: '1px solid #ddd',
        width: '100%',
        maxWidth: '300px',
        marginBottom: '15px',
    },
    button: {
        padding: '12px 20px',
        fontSize: '1em',
        border: 'none',
        backgroundColor: '#4CAF50',
        color: '#fff',
        borderRadius: '10px',
        cursor: 'pointer',
    },
    correctFeedback: {
        marginTop: '15px',
        fontSize: '1.2em',
        color: 'green',
    },
    incorrectFeedback: {
        marginTop: '15px',
        fontSize: '1.2em',
        color: 'red',
    },
    celebrationContainer: {
        marginTop: '20px',
        textAlign: 'center',
    },
    congratsMessage: {
        fontSize: '1.5em',
        color: '#4CAF50',
        marginBottom: '10px',
    },
};

export default EmotionGame;
