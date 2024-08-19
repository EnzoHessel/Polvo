import React from 'react'
import Link from 'next/link';
import { Button } from './ui/button';
import Logo from './Logo';


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
    <header className="flex justify-center items-center bg-primary text-white py-5 border-b-[#363636] border-b">
      <div className="flex items-center justify-between max-w-[1000px] w-full">
        <Logo />
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
    </header>
  )
}

export default Header;