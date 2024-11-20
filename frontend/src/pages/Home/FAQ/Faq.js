import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const FAQ = () => {
 

  return (
    <div class="min-w-full mx-auto px-5 bg-white min-h-sceen">

      <div className='flex justify-center pt-5' >
                <h2 className="text-3xl font-bold text-[#335374] mb-8 ">Perguntas Frequentes</h2>
      </div>
      
      <div class="grid divide-y divide-neutral-200 max-w-xl mx-auto mt-8 pb-5">

        <div class="py-5 border-t border-neutral-200 ">
          <details class="group">
            <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
              <span> O que é a Ludemo?</span>
              <span class="transition group-open:rotate-180">
                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
    </svg>
                  </span>
            </summary>
            <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
            A Ludemo é uma plataforma digital desenvolvida para auxiliar psicólogos no atendimento infantil remoto, oferecendo jogos interativos e relatórios para análise emocional e social das crianças.
            </p>
          </details>
        </div>


        <div class="py-5">
          <details class="group">
            <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
              <span> Quem pode usar a Ludemo?</span>
              <span class="transition group-open:rotate-180">
                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
    </svg>
                  </span>
            </summary>
            <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
            A plataforma é voltada para psicólogos e profissionais de saúde mental que trabalham com crianças, proporcionando ferramentas lúdicas para consultas online.
            </p>
          </details>
        </div>
        <div class="py-5">
          <details class="group">
            <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
              <span> Como funciona a criação de sessões?</span>
              <span class="transition group-open:rotate-180">
                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
    </svg>
                  </span>
            </summary>
            <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
            O psicólogo cria uma sessão na plataforma, seleciona um jogo interativo e gera um link único para o paciente acessar. Durante a sessão, os dados de interação são coletados para análise posterior.
            </p>
          </details>
        </div>
        <div class="py-5">
          <details class="group">
            <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
              <span> Quais jogos estão disponíveis na Ludemo?</span>
              <span class="transition group-open:rotate-180">
                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
    </svg>
                  </span>
            </summary>
            <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
            Atualmente, a Ludemo oferece quatro jogos, todos projetados para estimular habilidades emocionais e sociais nas crianças.
            </p>
          </details>
        </div>
        <div class="py-5">
          <details class="group">
            <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
              <span> Como os relatórios são gerados?</span>
              <span class="transition group-open:rotate-180">
                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
    </svg>
                  </span>
            </summary>
            <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
            Após a conclusão de uma sessão, o sistema da Ludemo processa os dados coletados (como cliques e tempo de interação) e gera um relatório disponível temporariamente ao psicólogo.


            </p>
          </details>
        </div>
        <div class="py-5">
          <details class="group">
            <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
              <span> É necessário ter conexão à internet para usar a Ludemo?
              </span>
              <span class="transition group-open:rotate-180">
                    <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path>
    </svg>
                  </span>
            </summary>
            <p class="text-neutral-600 mt-3 group-open:animate-fadeIn">
            Sim, a Ludemo é uma plataforma online, então é necessário ter acesso à internet para utilizar seus recursos e realizar as sessões remotamente.</p>
          </details>
        </div>
        
        
        
      </div>
    </div>
  
    
  );
};

export default FAQ;
