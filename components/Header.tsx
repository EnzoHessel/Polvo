"use client";

import React from 'react';
import { Button } from './ui/button';
import Logo from './Logo';
import { motion } from 'framer-motion';
import styles from '@/styles/header.module.css';

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
            COMEÇAR AGORA
          </Button>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;