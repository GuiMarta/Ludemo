import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import { isMobile } from 'react-device-detect';
import { useEffect } from 'react';

// pages:
import Login from './pages/Login/Login';
import Cadastro from './pages/Cadastro/Cadastro';
import Dashboard from './pages/Dashboard/Dashboard';
import Home from './pages/Home/homePage';
import Board from './pages/Jogo/Board';
import Mobile from './components/mobile';

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
          <Route path='/jogo' element={<Board />} />
          <Route path='/Mobile' element={<Mobile />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;