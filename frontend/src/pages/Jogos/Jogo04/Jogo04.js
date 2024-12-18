import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import Header from '../../Jogos/JogoDaMemoria/header';
import Footer from '../../../components/footer';
import './jogo.css';
import { Spinner } from "react-bootstrap";
import LigarEmocoes from './LigarEmocoes';

const Jogo4 = () => {
    const [render, setRender] = useState(true);
    const navigate = useNavigate();
    const params = new URLSearchParams(window.location.search);
    const encryptedData = params.get('data');

    useEffect(() => {
        if (isMobile) {
            navigate('/Mobile');
        }
    }, [navigate]);

    
    if (!render) {
        return (
            <div className="d-flex justify-content-center align-items-center vh-100">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Carregando...</span>
                </Spinner>
            </div>
        );
    } else {
        return (
            <div>
                <Header />
                <div className="flex justify-center items-center h-screen bg-gray-100">
                    <div className="min-w-[600px] min-h-[600px] border-2 border-[#335374] rounded-md overflow-hidden text-center p-5 max-w-[500px] mx-auto flex items-center justify-center">
                        <div>
                            <LigarEmocoes /> 
                        </div>


                    </div>
                </div>
                <Footer />
            </div>
        );
    }
};

export default Jogo4;
