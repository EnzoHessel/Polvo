import React from 'react'
import styles from '@/styles/footer.module.css';
import Logo from './Logo'
import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerText}>
          <Logo />
          <h2 className={styles.title}>Unleashing the <span className="text-secondary">Future_</span> of Innovation.</h2>
          <Button variant="default" size="default">
            CONSTRUIR PRESENÇA DIGITAL AGORA
          </Button>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className={styles.footerBottomContent}>
          <p>© 2024 Polvo. Todos os direitos reservados.</p>
          <Link href={"https://www.linkedin.com/company/polvosoftwarehouse/posts/?feedView=all"} target='_blank' className={styles.socials}>
            <Image src={"/icons/Linkedin.svg"} fill alt='linkedin'/>
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer;