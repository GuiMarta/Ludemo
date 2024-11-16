import React, { useEffect, useState } from 'react';
import axios from 'axios';

const INFOcontainer = () => {

    const [data, setData] = useState([]);

    const idProfissional = localStorage.getItem('idProfissional');


    const fetchData = async () => {
        try {
            console.log(idProfissional);

            const response = await axios.get(`http://localhost:5000/sessoes/list/${idProfissional}`)
            // const response = await axios.get(`https://ludemo-api.vercel.app/sessoes/list/${idProfissional}`)

            if (response.data.length === 0 || response.data === undefined) {
                setData(["Nenhuma sessão encontrada"]);
            } else {
                console.log('Sessoes encontradas:', response.data);
                setData(response.data);
            }

        } catch (error) {
            console.error('Erro ao buscar sessões:', error);
            throw error;
        }
    };


    return (
        <div>

            <div className='border border-gray-300 rounded-lg shadow-lg p-6 min-h-96 max-w-prose mx-auto bg-white' >
                <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">Histórico de Sessões</h2>
                <button
                    onClick={() => fetchData()}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Atualizar Sessões
                </button>
            </div>

            <div>
               

            </div>

        </div>
    );
};

export default INFOcontainer;


