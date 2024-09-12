"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '@/styles/about.module.css';

const About = () => {
  return (
    <motion.section
      className={styles.container}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className={styles.imageContainer}>
        <Image
          src="/background-2.png"
          alt="Imagem de fundo sobre a seção"
          fill
          className={styles.backgroundImage}
        />
        <Image
          src="/logo.svg"
          alt="Logo da Polvo"
          width={142}
          height={142}
          className={styles.logoImage}
          draggable="false"
        />
      </div>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>CASES DE EXCELÊNCIA</h2>
        <h3 className={styles.subtitle}>Tenha sucesso conosco</h3>
        <p className={styles.description}>
          Atendendo desde startups até multinacionais, a Polvo oferece soluções completas para atender às necessidades de cada cliente. Seja desenvolvendo projetos do zero, terceirizando squads especializados ou potencializando estratégias de marketing digital, estamos prontos para impulsionar o crescimento e o sucesso do seu negócio no mundo digital.
        </p>
      </div>
    </motion.section>
  );
};

export default About;