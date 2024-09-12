"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
import Logo from './Logo';
import { motion } from 'framer-motion';
import styles from '@/styles/header.module.css';

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
      className={styles.header}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.header__content}>
        <Logo />
        <div className={styles.link}>
          {Links.map((link, index) => (
            <Link href={link.href} key={index}>
              <motion.p
                className={styles.p__link}
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
          className={styles.button}
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