"use client";

import Image from 'next/image';
import { useState } from 'react';
import { Button } from './ui/button';
import styles from '@/styles/hero.module.css';
import Link from 'next/link';

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className={styles.hero}>

      <div className={styles.heroContent}>
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
          <div className={styles.image} style={{ display: isHovered ? 'none' : 'block' }}>
            <Image
              src="/hero.svg"
              alt="Hero"
              fill
              style={{ objectFit: 'cover' }}
              priority
              draggable="false"
            />
          </div>
          <div className={styles.image} style={{ display: isHovered ? 'block' : 'none' }}>
            <Image
              src="/hero-2.svg"
              alt="Hero Colorido"
              fill
              style={{ objectFit: 'cover' }}
              quality={100}
              priority
              draggable="false"
            />
          </div>
        </div>
      </div>

      <div className={styles.heroFooter}>
        <p>
          Unleashing the <span className="text-secondary">Future_</span> of Innovation. <br /><br /> <span className="text-secondary">#We are Polvo</span>
        </p>
      </div>
    </section>
  );
};

export default Hero;
