import React from 'react';

import { FaChalkboardTeacher, FaGamepad, FaFileAlt } from 'react-icons/fa';

const Features = () => {
    const features = [
        {
            icon: <FaChalkboardTeacher className="text-4xl text-blue-600" />,
            title: "Criação de Sessões",
            description: "Psicólogos podem criar sessões personalizadas para cada paciente, com um código de acesso único que facilita a entrada segura das crianças.",
        },
        {
            icon: <FaGamepad className="text-4xl text-blue-600" />,
            title: "Jogos Interativos",
            description: "Sessões incluem jogos interativos focados em habilidades emocionais e sociais, proporcionando um ambiente lúdico e educativo.",
        },
        {
            icon: <FaFileAlt className="text-4xl text-blue-600" />,
            title: "Relatórios de Sessão",
            description: "Após cada sessão, é gerado uma breve descrição da sessão para análise, permitindo que os psicólogos acompanhem o envolvimento das crianças.",
        },
    ];

    return (
        <div className="bg-gray-50 py-12">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-[#335374] mb-8">Funcionalidades do Ludemo</h2>
                <div className="grid gap-8 md:grid-cols-3">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="flex justify-center mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-semibold text-[#335374] mb-2">{feature.title}</h3>
                            <p className="text-gray-700">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Features;
