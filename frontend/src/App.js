import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
//pages:
import Login from './pages/Login/Login';
import Cadastro from './pages/Cadastro/Cadastro';
import Dashboard from './pages/Dashboard/Dashboard';
import Home from './pages/Home/homePage';
import Board from './pages/Jogo/Board';

function App() {
  return (
    <div className='app'>
      <div className='border'>

      </div>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/Login' element={<Login />}></Route>
            <Route path='/Cadastrar' element={<Cadastro />}></Route>
            <Route path='/dashboard' element={<Dashboard />}></Route>
            <Route path='/jogo' element={<Board/>}></Route>
          </Routes>
        </BrowserRouter>  
      </div>
    </div>
    );
  }

export default App;