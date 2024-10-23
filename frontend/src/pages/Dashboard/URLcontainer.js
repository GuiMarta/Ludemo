import React, { useState } from 'react';

const URLContainer = () => {
    const [apelido, setApelido] = useState('');
    const [url, setUrl] = useState('');         
    const [idProfissional, setIdProfissional] = useState('');  
   
    const handleGenerate = () => {

    setIdProfissional(localStorage.getItem('idProfissional')); 

        if (!idProfissional) {
            alert('ID do profissional não encontrado no localStorage.');
            return;
        }

        const encryptedParams = encryptParams(idProfissional, apelido);

        setUrl(`https://ludemo.vercel.app/gameboard?data=${encryptedParams}`);
    };

    function encryptParams(idProfissional, apelido) {
        const data = JSON.stringify({ idProfissional, apelido });
        return btoa(data);  
    }

    return (
        <div className="border text-start">
            <div className=' d-block rounded p-6'>
                <h2 className="text-2xl text-center font-bold mb-4">Nova Sessão</h2>
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

                    
                    {url && (
                        <div className="mt-4">
                            <p className="text-sm font-medium text-gray-700">Sessão Disponivel no Link:</p>
                            <a href={url} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800">
                                {url}
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default URLContainer;
