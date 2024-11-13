import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { isMobile } from 'react-device-detect';


const InGame = () => {

    // const navigate = useNavigate();
    // const params = new URLSearchParams(window.location.search);
    // const encryptedData = params.get('data');

    // useEffect(() => {
    //     if (isMobile) {
    //         navigate('/Mobile');
    //     }
    // }, [navigate]);

    // useEffect(() => {
    //     if (encryptedData) {
    //         try {
    //             const { idProfissional, apelido, jogo } = decryptParams(encryptedData);
    //             localStorage.setItem('idProfissional', idProfissional);
    //             localStorage.setItem('apelidoPaciente', apelido);
    //             localStorage.setItem('jogo', jogo);
    //         } catch (e) {
    //             navigate('/sessao/notfound');
    //         }
    //     } else {
    //         navigate('/sessao/notfound');
    //     }

    //     function decryptParams(encryptedData) {
    //         const decryptedData = atob(encryptedData);
    //         return JSON.parse(decryptedData);
    //     }
    // }, [encryptedData, navigate]);






    return (
        <div>
            <h1>In-Game Component</h1>
            <p>This is a fictional component for the InGame page.</p>
        </div>
    );
};

export default InGame;