import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';
import { FaSync } from 'react-icons/fa'; // Ícone de recarregar da FontAwesome
const INFOcontainer = () => {

    const [Data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const idProfissional = localStorage.getItem('idProfissional');


    const fetchData = async () => {
        setLoading(true);
        try {
            console.log(idProfissional);

            // const response = await axios.get(`http://localhost:5000/sessoes/list/${idProfissional}`)
            const response = await axios.get(`https://ludemo-api.vercel.app/sessoes/list/${idProfissional}`);

            // Corrigido: Use `response.data` ao invés de `response.Data`
            if (response.data.length === 0 || response.data === undefined) {
                setData(["Nenhuma sessão encontrada"]);
            } else {
                console.log('Sessões encontradas:', response.data);
                setData(response.data);
            }
        } catch (error) {
            console.error('Erro ao buscar sessões:', error);
            setData(["Sessões não encotradas."]); // Mostra erro amigável para o usuário
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="border border-gray-300 rounded-lg shadow-lg p-6 min-h-96 max-w-prose mx-auto bg-white">
            {/* Cabeçalho */}
            <div className="border-b-2 pb-4 flex justify-between items-center">
                <button className="opacity-0">
                    <FaSync className="text-xl" />
                </button>
                <h2 className="text-2xl font-bold text-gray-800">Histórico de Sessões</h2>
                {/* Botão de recarregar */}
                <button
                    onClick={fetchData}
                    className="bg-blue-500 text-white p-2 rounded-full hover:bg-yellow-500 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50 transition duration-200 ease-in-out"
                >
                    <FaSync className="text-xl" />
                </button>
            </div>

            {/* Conteúdo */}
            <div className="mt-4 overflow-y-auto max-h-60 scrollbar-hide">
                {loading ? (
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Carregando...</span>
                    </Spinner>
                ) : (
                    <ul className="space-y-4">
    {Data.length > 0 && typeof Data[0] === "object" ? (
        Data.map((item) => (
            <li key={item.id} className="border p-6 rounded-md shadow-md bg-white">
                <div className="grid grid-cols-2 gap-y-4 text-center">
                    <div>
                        <p className="font-bold text-gray-700">Apelido:</p>
                        <p className="text-gray-600">{item.apelido}</p>
                    </div>
                    <div>
                        <p className="font-bold text-gray-700">Jogo:</p>
                        <p className="text-gray-600">{item.jogo}</p>
                    </div>
                    <div>
                        <p className="font-bold text-gray-700">Cliques:</p>
                        <p className="text-gray-600">{item.contadorCliques}</p>
                    </div>
                    <div>
                        <p className="font-bold text-gray-700">Início:</p>
                        <p className="text-gray-600">{new Date(item.inicio).toLocaleString()}</p>
                    </div>
                    <div>
                        <p className="font-bold text-gray-700">Fim:</p>
                        <p className="text-gray-600">{new Date(item.fim).toLocaleString()}</p>
                    </div>
                    <div>
                        <p className="font-bold text-gray-700">Duração:</p>
                        <p className="text-gray-600">{item.duracao} segundos</p>
                    </div>
                </div>
            </li>
        ))
    ) : (
        <p className="text-center text-gray-600">{Data[0]}</p>
    )}
</ul>


                )}
            </div>
        </div>
    );






};
export default INFOcontainer;


