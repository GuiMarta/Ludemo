import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import { isMobile } from 'react-device-detect';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


// pages:
import Login from './pages/Login/Login';
import Cadastro from './pages/Cadastro/Cadastro';
import Dashboard from './pages/Dashboard/Dashboard';
import Home from './pages/Home/homePage';
import Mobile from './components/mobile';
import GameBoard from './pages/Sessao/GameBoard/gameboard';
import NotFound from './pages/Sessao/NotFound/NotFound';
import Ingame from './pages/Sessao/InGame/inGame';


// Imports jogos:
import Quiz from './pages/Jogos/JogoQuiz/Quiz';
import Board from './pages/Jogos/JogoDaMemoria/Board';

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const navigate = useNavigate();

  useEffect(() => {
    if (isMobile) {
      navigate('/Mobile');
    }
  }, [navigate]);

  return (
    <div className='app'>
      <div className='border'></div>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Cadastrar' element={<Cadastro />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/Mobile' element={<Mobile />} />

          {/* Rota gameboard profissional */}
          <Route path='/sessao/gameboard' element={<GameBoard />} />
          
          {/* sessao paciente */}
          <Route path='/sessao/ingame' element={<Ingame />} />
          <Route path='/sessao/notfound' element={<NotFound />} />
          

          {/* jogos */}
          <Route path='/sessao/ingame/jogo' element={<Board />} />  {/* jogo da memoria */}
          <Route path='/sessao/ingame/quiz' element={<Quiz />} /> {/* jogo do quiz */}

        </Routes>
      </div>
    </div>
  );
}

export default App;