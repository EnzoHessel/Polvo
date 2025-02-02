import Image from 'next/image';
import React from 'react';
import { Fredoka } from 'next/font/google';

const Fredo = Fredoka({ subsets: ['latin'] });

const Logo = () => (
  <div className="flex gap-3 select-none">
    <Image src="/logo.svg" alt="Logo da Polvo" width={32} height={32} draggable="false"/>
    <p className={`${Fredo.className} font-normal text-2xl text-white`}>Polvo</p>
  </div>
);

export default Logo;