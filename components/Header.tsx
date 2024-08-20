"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
import Logo from './Logo';
import { motion } from 'framer-motion';

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
  ];

  return (
    <motion.header
      className="flex justify-center items-center bg-primary sticky top-0 z-50 text-white py-5 border-b-[#363636] border-b"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between max-w-[1000px] w-full">
        <Logo />
        <div className="flex gap-12">
          {Links.map((link, index) => (
            <Link href={link.href} key={index}>
              <motion.p
                className='text-base font-normal uppercase hover:-translate-y-0.5 duration-200'
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {link.name}
              </motion.p>
            </Link>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: Links.length * 0.1 }}
        >
          <Button variant="default" size="default">
            ENTRAR EM CONTATO AGORA
          </Button>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;