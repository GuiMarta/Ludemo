import React from 'react';
import JogoDaMemoria from './imgs/JogoDaMemoria.png';
import JogoQuiz from './imgs/JogoQuiz.png';
import Jogo03 from './imgs/Jogo03.png';

const handleEvent = () => {
  window.location.href = '/sessao/gameboard';
};


const JogosDisponiveis = () => {
  return (
    <div className=" pl-16 pr-16 mb-5 mt-10 border border-gray-300 rounded-lg shadow-lg p-6 min-h-full max-w-full  bg-white">
      <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">Jogos Disponiveis</h2>
      <div className='flex justify-around' >


      <div className='text-center flex flex-col items-center gap-4'>
  <img className='max-w-40 border border-stone-600 rounded-md shadow-lg hover:scale-105 transition-transform' src={JogoDaMemoria} alt='JogoDaMemoria' />
  <h3 className='text-xl font-semibold'>Jogo da Memória</h3>
  <p className='max-w-md text-sm text-gray-600'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </p>
</div>


<div className='text-center flex flex-col items-center gap-4'>
  <img className='max-w-40 border border-stone-600 rounded-md shadow-lg hover:scale-105 transition-transform' src={JogoQuiz} alt='JogoDaMemoria' />
  <h3 className='text-xl font-semibold'>Jogo Quiz</h3>
  <p className='max-w-md text-sm text-gray-600'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </p>
</div>

<div className='text-center flex flex-col items-center gap-4'>
  <img className='max-w-40 border border-stone-600 rounded-md shadow-lg hover:scale-105 transition-transform' src={Jogo03} alt='JogoDaMemoria' />
  <h3 className='text-xl font-semibold'>Jogo da Memória</h3>
  <p className='max-w-md text-sm text-gray-600'>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </p>
</div>


      </div>

    <div className='min-w-full' >
      <button className="w-full bg-indigo-600 text-white font-medium py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition ease-in-out duration-150" onClick={handleEvent} >
        Conhcer Jogos
      </button>
    </div>
    </div>
  );
};

export default JogosDisponiveis;