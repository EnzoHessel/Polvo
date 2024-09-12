"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from "@/styles/faq.module.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Quais serviços de software vocês oferecem?',
      answer: 'Nós oferecemos uma ampla gama de soluções de software personalizadas, incluindo desenvolvimento de sistemas sob demanda, automação de processos, aplicativos web e móveis, além de integração com APIs e outras plataformas'
    },
    {
      question: 'Vocês desenvolvem sites e landing pages?',
      answer: 'Sim! Criamos sites institucionais, e-commerce e landing pages otimizadas para conversão. Cada projeto é responsivo, rápido e focado em oferecer a melhor experiência de usuário, com atenção à performance e SEO.'
    },
    {
      question: 'Como funciona o processo de UI/UX Design?',
      answer: 'Nosso processo de UI/UX começa com uma pesquisa detalhada sobre as necessidades dos usuários e as metas do projeto. A partir disso, criamos wireframes, protótipos interativos e iteramos com base no feedback até chegar em uma interface funcional, intuitiva e esteticamente atraente.'
    },
    {
      question: 'Vocês oferecem serviços de Product Design?',
      answer: 'Sim, oferecemos Product Design com foco em todo o ciclo de vida do produto. Desde a concepção da ideia e pesquisa de mercado, até prototipagem, validação com usuários e colaboração com equipes de desenvolvimento para garantir a entrega de soluções robustas.'
    },
    {
      question: 'Como vocês garantem que os sites são otimizados para SEO?',
      answer: 'Utilizamos as melhores práticas de SEO, desde a estrutura do código, otimização de velocidade e usabilidade, até o uso correto de tags, meta descrições e palavras-chave. Nossa equipe também realiza auditorias periódicas para assegurar que o site continua competitivo nos rankings de busca.'
    },
    {
      question: 'Como funciona o suporte e manutenção após a entrega do projeto?',
      answer: 'após a entrega do projeto? Oferecemos suporte contínuo e manutenção técnica para todos os nossos projetos. Isso inclui atualizações de segurança, melhorias de performance e ajustes baseados em feedback de usuários. Nosso time está disponível para garantir que seu produto digital funcione de forma estável e eficiente após a implementação.'
    }
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={styles.content}>
      <div className={styles.container}>
        <h2 className={styles.title}>Perguntas Frequentes <br/>(FAQ)</h2>
        <p className={styles.subtitle}>Tudo o que você precisa saber sobre nossos serviços de software, design e desenvolvimento digital.</p>
      </div>
      <div >
        {faqs.map((faq, index) => (
          <div key={index} className={styles.accordion}>
            <button
              className={styles.button}
              onClick={() => toggleAccordion(index)}
            >
              <p className={styles.p}>
                {faq.question}
              </p>
              <span>
                <motion.img
                  src={activeIndex === index ? '/icons/open.svg' : '/icons/close.svg'}
                  alt={activeIndex === index ? 'Collapse' : 'Expand'}
                  width={24}
                  height={26}
                  className={styles.icon}
                  draggable="false"
                  initial={{ rotate: 0 }}
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </span>
            </button>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: activeIndex === index ? 'auto' : 0, opacity: activeIndex === index ? 1 : 0 }}
              transition={{ duration: 0.3 }}
              className={styles.overflowHidden}
            >
              <div className={styles.answer}>
                {faq.answer}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;