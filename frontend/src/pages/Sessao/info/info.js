import React, { useState } from 'react';
import './style.css';
import logo from './LogoLudemo.png';
import { Link } from 'react-router-dom';

function Id() {
    const [Apelido, setApelido] = useState('');
    const [IdSessao, setIdSessao] = useState('');

    const [erroMsg, seterroMsg] = useState('');
    const [confirmaMsg, setConfirmaMsg] = useState('');

    const handleInputChangeApelido = (event) => {
        setApelido(event.target.value);
    };

    const handleInputChangeIdSessao = (event) => {
        setIdSessao(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if(Apelido && IdSessao) {
            localStorage.setItem('Apelido', Apelido);
            localStorage.setItem('IdSessao', IdSessao);
            setConfirmaMsg('Dados salvos com sucesso!');
            seterroMsg('');
            window.location.href = '/sessao';
        }
        else {
            setConfirmaMsg('');
            seterroMsg('Preencha todos os campos!');
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
                    <Link to='/' className='dois'>Página Incial</Link>
                </div>
            </header>
            <div className="container-form">
                <form className="form" onSubmit={handleSubmit}>
                <p className="confirma-msg" style={{ color: 'green' }} >{confirmaMsg}</p>
                    <h3 className="title">Escolha seu apelido:</h3>
                    <input 
                        className="input"
                        type="text" 
                        value={Apelido} 
                        onChange={handleInputChangeApelido} 
                        placeholder="Digite seu apelido"
                    />
                    <h3 className="title">Insira o ID fornecido pelo Profissional:</h3>
                    <input 
                        className="input"
                        type="text"
                        value={IdSessao}
                        onChange={handleInputChangeIdSessao} 
                        placeholder="Digite o ID"
                    />
                    <p className="erro-msg" style={{ color: 'red' }}>{erroMsg}</p>
                    
                    <button className="submit-btn" type="submit">Continuar</button>
                </form>
            </div>
        </div>
    );
}

export default Id;