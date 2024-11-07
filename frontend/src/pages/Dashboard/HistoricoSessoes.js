import React, { useEffect, useState } from 'react';
import axios from 'axios';

const INFOcontainer = () => {
    const [data, setData] = useState([]);

    return (
        <div className='border border-gray-300 rounded-lg shadow-lg p-6 max-w-lg mx-auto bg-white' >
            <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">Histórico de Sessões</h2>
            <h3>pra cá vai vir os relatorios listadinhos bonitinhos</h3>
        </div>
    );
};

export default INFOcontainer;