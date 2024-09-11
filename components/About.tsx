"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section
      className="flex gap-8"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <div className="w-[400px] h-[235px] relative flex justify-center items-center">
        <Image
          src="/background-2.png"
          alt="Imagem de fundo sobre a seção"
          fill
          className="absolute object-cover rounded-[8px]"
        />
        <Image
          src="/logo.svg"
          alt="Logo da Polvo"
          width={142}
          height={142}
          className="z-10"
          draggable="false"
        />
      </div>
      <div className="flex flex-col gap-[10px]">
        <h2 className="text-sm font-normal">CASES DE EXCELÊNCIA</h2>
        <h3 className="font-medium text-2xl text-[#EEE]">Tenha sucesso conosco</h3>
        <p className="max-w-[568px] text-[#A7A6A6] text-sm">
          Atendendo desde startups até multinacionais, a Polvo oferece soluções completas para atender às necessidades de cada cliente. Seja desenvolvendo projetos do zero, terceirizando squads especializados ou potencializando estratégias de marketing digital, estamos prontos para impulsionar o crescimento e o sucesso do seu negócio no mundo digital.
        </p>
      </div>
    </motion.section>
  );
};

export default About;