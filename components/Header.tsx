"use client";

import React from 'react';
import { Button } from './ui/button';
import Logo from './Logo';
import { motion } from 'framer-motion';
import styles from '@/styles/header.module.css';
import Link from 'next/link';

const Header = () => {
  return (
    <motion.header
      className={styles.header}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.header__content}>
        <Logo />
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={styles.button}
        >
          <Button variant="default" size="default">
            <Link href="https://api.whatsapp.com/send?phone=5511996232675&text=Ol%C3%A1,%20vim%20pela%20Polvo%20e%20gostaria%20de%20um%20or%C3%A7amento%20personalizado." target='_blank'>
              COMEÇAR AGORA
            </Link>
          </Button>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;