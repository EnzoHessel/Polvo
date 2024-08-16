import Image from 'next/image'
import React from 'react'
import { Fredoka } from 'next/font/google';
import Link from 'next/link';
import { Button } from './ui/button';

const Fredo = Fredoka({ subsets: ["latin"] });

const Header = () => {
  const Links = [
    {
      name: 'home',
      href: '#'
    },
    {
      name: 'serviços',
      href: '#'
    },
    {
      name: 'sobre',
      href: '#'
    }
  ]

  return (
    <div className="flex items-center justify-around w-full bg-primary text-white py-5 sticky border-b-[#363636] border-b">
      <div className="flex gap-3">
        <Image src="/logo.svg" alt="Logo" width={32} height={32} />
        <p className={`${Fredo.className} font-normal text-2xl`}>Polvo</p>
      </div>
      <div className="flex gap-12">
        {Links.map((link, index) => (
          <Link href="#" key={index}>
            <p className='text-base font-normal uppercase'>{link.name}</p>
          </Link>
        ))}
      </div>
      <div>
        <Button variant="default" size="default">
          ENTRAR EM CONTATO AGORA
        </Button>
      </div>
    </div>
  )
}

export default Header;