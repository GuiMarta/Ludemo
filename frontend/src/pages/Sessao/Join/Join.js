import React, { useState } from 'react';
import './style.css';
import logo from './LogoLudemo.png';
import { Link } from 'react-router-dom';

function Id() {
    const [erroMsg, setErroMsg] = useState('');
    const [confirmaMsg, setConfirmaMsg] = useState('');
    const [link, setLink] = useState('');

    const handleInputChange = (event) => {
        setLink(event.target.value); // Atualiza o estado com o valor do input
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (link) {
            setConfirmaMsg('Redirecionando!');
            setErroMsg('');
            window.location.href = link; // Redireciona para o link fornecido
        } else {
            setConfirmaMsg('');
            setErroMsg('Preencha todos os campos!');
        }
    };

    return (
        <div>
            <header>
                <div>
                    <img className='logo-header' src={logo} alt="" />
                </div>
                <div className="slogan">
                    Ludemo: Plataforma de auxílio aos profissionais.
                </div>
                <div>
                    <Link to='/' className='dois'>Página Inicial</Link>
                </div>
            </header>

            <div className="container-form">
                <form className="form" onSubmit={handleSubmit}>
                    <p className="confirma-msg" style={{ color: 'green' }}>{confirmaMsg}</p>
                    <h3 className="title">Insira o link fornecido pelo Profissional:</h3>
                    <input 
                        className="input"
                        type="text"
                        onChange={handleInputChange} // Chama a função para atualizar o estado
                        placeholder="Digite o ID"
                    />
                    <p className="erro-msg" style={{ color: 'red' }}>{erroMsg}</p>
                    
                    <button className="submit-btn" type="submit">Redirecionar</button>
                </form>
            </div>
        </div>
    );
}

export default Id;
