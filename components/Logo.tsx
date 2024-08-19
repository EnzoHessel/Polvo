import Image from 'next/image';
import React from 'react';
import { Fredoka } from 'next/font/google';

const Fredo = Fredoka({ subsets: ['latin'] });

const Logo = () => (
  <div className="flex gap-3">
    <Image src="/logo.svg" alt="Logo" width={32} height={32}/>
    <p className={`${Fredo.className} font-normal text-2xl`}>Polvo</p>
  </div>
);

export default Logo;