import React from 'react';
import desn2 from '../imgs/Imagem do WhatsApp de 2024-08-15 à(s) 20.18.46_7a774215.jpg';
import desn1 from '../imgs/larissa.jpg';

const AboutUs = () => {
  return (
    <div className="bg-gray-50 py-12 px-6 text-center shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-[#19466B] underline mb-8">Sobre Nós</h2>
      
      <div className="desenvolvedores flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
        <div className="foto text-center">
          <img src={desn2} alt="Guilherme Marta" className="w-40 h-40 rounded-full object-cover border-4 border-[#19466B] mb-4 mx-auto" />
          <p className="text-lg text-[#335374] font-semibold">Guilherme Marta</p>
        </div>
        
        <div className="foto text-center">
          <img src={desn1} alt="Larissa Gewehr" className="w-40 h-40 rounded-full object-cover border-4 border-[#19466B] mb-4 mx-auto" />
          <p className="text-lg text-[#335374] font-semibold">Larissa Gewehr</p>
        </div>
      </div>

      <div className="texto max-w-3xl mx-auto text-justify text-gray-700 leading-relaxed">
        <p>
          Há alguns anos, tem-se falado sobre a importância da educação emocional das crianças desde a primeira infância, visto que além de auxiliá-las a desenvolver empatia, caráter e autonomia, a inteligência emocional também é imprescindível para o aprimoramento das capacidades de interação social e de crescimento pessoal.
          Por esse motivo, a Ludemo, plataforma de auxílio aos profissionais da área da psicologia, busca facilitar o acesso à terapia online através de um recurso que contém as ferramentas lúdicas utilizadas em uma sessão psicológica.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
