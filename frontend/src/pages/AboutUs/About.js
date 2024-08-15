import React from 'react';
import './About.css';
import desn1 from '../Home/imgs/Imagem do WhatsApp de 2024-07-17 à(s) 09.18.50_bc4ed73a.jpg'
import desn2 from '../Home/imgs/Imagem do WhatsApp de 2024-08-15 à(s) 20.18.46_7a774215.jpg'

const AboutUs = () => {
  return (
    <div className="sobre-nos">
      <h2>Sobre Nós</h2>
      <div className="desenvolvedores">
        <div className="foto">
          <img src={desn2} alt="Desenvolvedor 1" />
          <p>Guilherme Marta</p>
        </div>
        <div className="foto">
          <img src={desn1} alt="Desenvolvedor 2" />
          <p>Larissa Gewehr</p>
        </div>
      </div>

      <div className="texto">
        <p>
            Há alguns anos, tem-se falado sobre a importância da educação emocional das crianças desde a primeira infância, visto que além de auxiliá-las a desenvolver empatia, caráter e autonomia, a inteligência emocional também é imprescindível para o aprimoramento das capacidades de interação social e de crescimento pessoal. 
            Por esse motivo, a Ludemo, plataforma de auxílio aos profissionais da área da psicologia, busca facilitar o acesso à terapia online através de um recurso que contém as ferramentas lúdicas utilizadas em uma sessão psicológica. 
        </p>
      </div>


    </div>
  );
};

export default AboutUs;
