import React from 'react'
import styles from '@/styles/footer.module.css';
import Logo from './Logo'
import Image from 'next/image';
import { Button } from './ui/button';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Image src="/background-2.png" alt="Instagram" fill objectFit="cover" quality={100}/>
      <div className={styles.footerContent}>
        <div className={styles.footerText}>
          <Logo />
          <h2 className={styles.title}>Unleashing the <span className="text-secondary">Future_</span> of Innovation.</h2>
          <Button variant="default" size="default">
            CONSTRUIR PRESENÇA DIGITAL AGORA
          </Button>
        </div>
      </div>
    </footer>
  )
}

export default Footer;