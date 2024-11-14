import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "O que é o Ludemo?",
      answer: "Ludemo é uma plataforma que auxilia psicólogos no atendimento infantil remoto, oferecendo jogos interativos e recursos para o desenvolvimento emocional das crianças.",
    },
    {
      question: "Como funciona a criação de sessões?",
      answer: "Os psicólogos podem criar sessões personalizadas com um código único de acesso, que permite que as crianças entrem de forma segura e interativa.",
    },
    {
      question: "Quem pode usar a plataforma Ludemo?",
      answer: "A plataforma é destinada a psicólogos e profissionais que trabalham com o desenvolvimento emocional infantil, facilitando atendimentos remotos.",
    },
  ];

  return (
    <div className="bg-gray-50 py-12 px-6 shadow-lg  max-w-full mx-auto">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Perguntas Frequentes</h2>
      
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className={`border border-gray-200 rounded-lg ${openIndex === index ? 'bg-gray-100' : 'bg-white'}`}
          >
            <button 
              className="flex justify-between items-center w-full text-left text-lg bg-gray-50 text-gray-900 font-medium focus:outline-none  py-4 transition-all duration-300"
              onClick={() => toggleQuestion(index)}
            >
              <span  >{faq.question}</span>
              {openIndex === index ? <FaChevronUp className="text-gray-600" /> : <FaChevronDown className="text-gray-600" />}
            </button>
            {openIndex === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.3 }}
                className="px-6  text-gray-700 text-justify overflow-hidden"
              >
                <p className='mt-3 pb-0' >{faq.answer}</p>
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
