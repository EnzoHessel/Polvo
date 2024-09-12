import Image from 'next/image';
import React from 'react';
import styles from '@/styles/team.module.css';

const Team = () => {
  return (
    <div className={styles.teamContainer}>
      <div className={styles.imageWrapper}>
        <Image
          src="/teamImage.png"
          alt="Equipe"
          width={336}
          height={306}
          className="object-cover rounded-2xl"
          quality={100}
        />
      </div>
      <div className={styles.textContainer}>
        <h2 className={styles.heading}>A JÓIA QUE FALTAVA PARA SUA EMPRESA!</h2>
        <h3 className={styles.subheading}>
          Desenvolvimento de Sites Institucionais, Landing Pages, Aplicativos e Sistemas WEB
        </h3>
        <p className={styles.paragraph}>
          Sabemos que a área da tecnologia é uma área em constante evolução e difícil para encontrar um fornecedor confiável. Em virtude disto, separamos os times para que facilite não apenas a compreensão do trabalho, mas também que exista o envolvimento de nosso cliente (como deve ser).
        </p>
      </div>
    </div>
  );
};

export default Team;
