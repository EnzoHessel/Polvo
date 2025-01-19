"use client";

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import styles from '@/styles/hero.module.css';
import Link from 'next/link';

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.section
      className={styles.hero}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.heroText}>
        <div className={styles.heroTitle}>
          <h2>
            Ninguém inova sozinho.
            <br />
            <br />
            A maneira como desenvolvemos software é única.
          </h2>
        </div>
        <Button variant="default" size="default">
          <Link href="https://api.whatsapp.com/send?phone=5511996232675&text=Ol%C3%A1,%20vim%20pela%20Polvo%20e%20gostaria%20de%20um%20or%C3%A7amento%20personalizado." target='_blank'>
            COMEÇAR AGORA
          </Link>
        </Button>
      </div>

      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={styles.imageContainer}
      >
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: isHovered ? 0 : 1 }}
          transition={{ duration: 0.5 }}
          className={styles.image}
        >
          <Image
            src="/hero.svg"
            alt="Hero"
            fill
            style={{ objectFit: 'cover' }}
            draggable="false"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className={styles.image}
        >
          <Image
            src="/hero-2.svg"
            alt="Hero Colorido"
            fill
            style={{ objectFit: 'cover' }}
            quality={100}
            draggable="false"
          />
        </motion.div>
      </div>

      <div className={styles.heroFooter}>
        <p>
          {/* TODO fix this text to `Unleashing the Future_ of Innovation.` and make a transition*/}
          Unleashing the{' '}
          {' '}of Innovation. <br /><br /> <span className="text-secondary">#We are Polvo</span>
        </p>
      </div>
    </motion.section>
  );
};

export default Hero;