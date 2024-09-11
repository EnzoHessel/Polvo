import Image from 'next/image';
import React from 'react';

const Team = () => {
  return (
    <div className="flex gap-6 bg-[#121212] p-8 rounded-[8px] border-[#363636] border">
      <div>
        <Image src="/teamImage.png" alt="Equipe" width={336} height={306} className="object-cover rounded-2xl" quality={100} draggable="false" />
      </div>
      <div className="flex flex-col justify-center max-w-[576px]">
        <h2 className="text-sm text-[#EEE]">A JÓIA QUE FALTAVA PARA SUA EMPRESA!</h2>
        <h3 className="text-2xl font-medium text-[#EEE] py-[10px]">Desenvolvimento de Sites Institucionais, Landing Pages, Aplicativos e Sistemas WEB</h3>
        <p className="text-sm text-[#A7A6A6]">
          Sabemos que a área da tecnologia é uma área em constante evolução e difícil para encontrar um fornecedor confiável. Em virtude disto, separamos os times para que facilite não apenas a compreensão do trabalho, mas também que exista o envolvimento de nosso cliente (como deve ser).
        </p>
      </div>
    </div>
  );
};

export default Team;