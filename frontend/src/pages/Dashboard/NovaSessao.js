import React, { useState } from "react";

const URLContainer = () => {
  const [apelido, setApelido] = useState("");
  const [url, setUrl] = useState("");
  const [IdProfissional, setIdProfissional] = useState("");
  const [error, setError] = useState("");

  const [jogo, setjogo] = useState(null);

  const handleGameSelection = (game) => {
    urlReset(); // Limpa o URL atual ao selecionar outro jogo pra sumir o link e evitar confusão
    setjogo(game);
    console.log(`Jogo selecionado: ${game}`);

  };
  function urlReset() {
    setUrl("");
  };


  const handleGenerate = () => {
    console.log('Gerando Link de Sessão');
    if (!apelido || apelido.trim() === "" || apelido.length === 0 || !jogo || jogo.trim() === "" || jogo.length === 0) {
      setError("Por favor, preencha o apelido e o jogo desejado.");
      setUrl("");
      return;
    }

    const id = localStorage.getItem("idProfissional"); // pegando o ID do profissional do localStorage
    setIdProfissional(id);

    if (!id) {
      alert("ID do profissional não encontrado no localStorage, erro no dashboard.");
      return;
    }

    const encryptedParams = encryptParams(id, apelido, jogo);
    //alterar para testes de produção e desenvolvimento aqui:

    setUrl(`https://ludemo.vercel.app/sessao/ingame?data=${encryptedParams}`);
    // setUrl(`http://localhost:3000/sessao/ingame?data=${encryptedParams}`);


    setError("");
  };


  function encryptParams(idProfissional, apelido, jogo) {
    const data = JSON.stringify({ idProfissional, apelido, jogo });
    return btoa(data);
  }

  const copyToClipboard = () => {
    if (url) {
      navigator.clipboard
        .writeText(url)
        .then(() => {
          alert("URL copiada para a área de transferência!");
        })
        .catch((err) => {
          console.error("Erro ao copiar a URL: ", err);
        });
    } else {
      alert("Nenhuma URL disponível para copiar.");
    }
  };




  return (
    <div className="border border-gray-300 rounded-lg shadow-lg p-6 min-h-96 max-w-prose mx-auto bg-white">
      <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">Nova Sessão</h2>

      {error && (
        <p className="text-center text-red-600 mt-3 font-medium">{error}</p>
      )}

      <div className="space-y-6">
        <div>
          <label
            htmlFor="apelidoPaciente"
            className="block text-sm font-medium text-gray-700"
          >
            Apelido Paciente:
          </label>
          <input
            type="text"
            id="apelidoPaciente"
            name="apelidoPaciente"
            value={apelido}
            onChange={(e) => setApelido(e.target.value)}
            className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            placeholder="Digite o apelido do paciente"
          />




        </div>
        <div>
          <div >
            <p className="font-medium text-gray-700">Selecione o jogo para a sessão:</p>
            <div className="space-y-2 mt-2">

              {/* checkbox dos jogos */}

              {/* jogo da JogoMemoria */}
              <div className="space-y-2 mt-2">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="JogoDaMemoria" // ID exclusivo para cada jogo
                    name="game"
                    value="JogoDaMemoria" // Valor associado ao jogo
                    checked={jogo === 'JogoDaMemoria'} // Comparação com o valor
                    onChange={() => handleGameSelection('JogoDaMemoria')}
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label htmlFor="JogoDaMemoria" className="ml-2 text-gray-700">Jogo da Memória</label>
                </div>
              </div>
              {/* jogo Quiz */}
              <div className="flex items-center">
                <input
                  type="radio"
                  id="JogoQuiz"
                  name="game"
                  value="JogoQuiz"
                  checked={jogo === 'JogoQuiz'}
                  onChange={() => handleGameSelection('JogoQuiz')}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="JogoQuiz" className="ml-2 text-gray-700">Jogo Quiz Sentimentos</label>
              </div>

              {/* jogo Qual o Sentimento*/}
              <div className="flex items-center">
                <input
                  type="radio"
                  id="QualSentimento"
                  name="game"
                  value="QualSentimento"
                  checked={jogo === 'QualSentimento'}
                  onChange={() => handleGameSelection('QualSentimento')}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="QualSentimento" className="ml-2 text-gray-700">Jogo Qual o Sentimento</label>
              </div>

              {/* jogo Qual o Sentimento*/}
              <div className="flex items-center">
                <input
                  type="radio"
                  id="LigarEmocoes"
                  name="game"
                  value="LigarEmocoes"
                  checked={jogo === 'LigarEmocoes'}
                  onChange={() => handleGameSelection('LigarEmocoes')}
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label htmlFor="LigarEmocoes" className="ml-2 text-gray-700">Jogo Ligar Emoções </label>
              </div>



              {/* adiconar mais jogos aqui depois */}


            </div>
          </div>


        </div>
        <button
          className="w-full bg-indigo-600 text-white font-medium py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition ease-in-out duration-150"
          onClick={handleGenerate}
        >
          Gerar Sessão
        </button>

        {url && (
          <div className="text-center">
            <p className="text-sm font-medium text-gray-700">
              Sessão Disponível no Link:
            </p>


            <div className="flex items-center justify-center space-x-2">
              <input
                className="w-3/4 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                type="text"
                value={url}
                readOnly
              />
              <button
                className="bg-green-600 text-white font-medium py-2 px-4 rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition ease-in-out duration-150"
                onClick={copyToClipboard}
              >
                Copiar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default URLContainer;
