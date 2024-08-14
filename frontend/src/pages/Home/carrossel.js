import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './carrossel.css';
import img1 from "./imgs/Crianças-brincando-3.jpg";
import img2 from "./imgs/Dia-das-Criancas-com-brincadeiras-e-jogos-cooperativos.jpg";
import img3 from "./imgs/como-brincar-com-criancas-de-3-anos.jpg";

const ImageCarousel = () => {
    return (
        <div className="carousel-container">
            <Carousel 
                showThumbs={false}
                infiniteLoop
                autoPlay
                interval={3000}
                stopOnHover
                showStatus={false}
                showIndicators={true}
            >
                <div>
                    <img src= {img1} alt="Imagem 1" />
                    <div className="quadrado">
                        <h1>Seja bem-vindo à Ludemo!</h1>
                        <p>Uma plataforma de auxílio aos profissionais que trabalham com crianças.</p>
                        <button class="cta-button">Entrar em sala</button>
                    </div>
                </div>
                <div>
                    <img src={img2} alt="Imagem 2" />
                    <div className="quadrado">
                        <h1>Seja bem-vindo à Ludemo!</h1>
                        <p>Uma plataforma de auxílio aos profissionais que trabalham com crianças.</p>
                        <button class="cta-button">Entrar em sala</button>
                    </div>
                </div>
                <div>
                    <img src={img3} alt="Imagem 3" />
                    <div className="quadrado">
                        <h1>Seja bem-vindo à Ludemo!</h1>
                        <p>Uma plataforma de auxílio aos profissionais que trabalham com crianças.</p>
                        <button class="cta-button">Entrar em sala</button>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default ImageCarousel;