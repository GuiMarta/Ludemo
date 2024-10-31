import React, { useState } from 'react';

const URLContainer = () => {
    const [apelido, setApelido] = useState('');
    const [url, setUrl] = useState('');         
    const [idProfissional, setIdProfissional] = useState('');  
    const [error, setError] = useState('');

    const handleGenerate = () => {

        if (!apelido || apelido.trim() === '' || apelido.length === 0) {
            setError('Por favor, informe o apelido do paciente.');
            setUrl('');
            return; 
        }

       
        const id = localStorage.getItem('idProfissional'); // pegando o ID do profissional do localStorage
        setIdProfissional(id);

        if (!id) {
            alert('ID do profissional não encontrado no localStorage.');
            return;
        }

        const encryptedParams = encryptParams(id, apelido);
        // setUrl(`https://ludemo.vercel.app/sessao/gameboard?data=${encryptedParams}`);
        setUrl(`http://localhost:3000/sessao/gameboard?data=${encryptedParams}`);
        setError('');
    };

    const copyToClipboard = () => {
        if (url) {
            navigator.clipboard.writeText(url).then(() => {
                alert('URL copiada para a área de transferência!');
            }).catch(err => {
                console.error('Erro ao copiar a URL: ', err);
            });
        } else {
            alert('Nenhuma URL disponível para copiar.');
        }
    };

    function encryptParams(idProfissional, apelido) {
        const data = JSON.stringify({ idProfissional, apelido });
        return btoa(data);  
    }

    return (
        <div className="border h-50 text-start">
            <div className='d-block rounded p-6'>
                <h2 className="text-2xl text-center font-bold mb-4">Nova Sessão</h2>
                <p className=' text-center text-danger mt-3' >{error}</p>
                
                <div className="space-y-4 text-center">
                    <div>
                        <label htmlFor="apelidoPaciente" className="block text-sm font-medium text-gray-700">Apelido Paciente:</label>
                        <input 
                            type="text" 
                            id="apelidoPaciente" 
                            name="apelidoPaciente" 
                            value={apelido}
                            onChange={(e) => setApelido(e.target.value)}  // Atualiza o valor do apelido
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
                        />
                    </div>
                    <div>
                        <button 
                            className="mt-4 w-full mb-4 bg-indigo-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            onClick={handleGenerate}  
                        >
                            Gerar
                        </button>
                    </div>

                    {url && ( // Exibe a URL gerada
                        <div className="mt-4">
                            <p className="text-sm font-medium text-gray-700">Sessão Disponível no Link:</p>
                            <a href={url} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800">
                                {url}
                            </a>
                        </div>
                    )}

                    {url && ( // vai exibir  o botão so se a URL estiver pronta
                        <div className="mt-4">
                            <button 
                                className="mt-4 w-full mb-4 bg-green-600 text-white py-2 px-4 rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                                onClick={copyToClipboard}
                            >
                                Copiar URL
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default URLContainer;
