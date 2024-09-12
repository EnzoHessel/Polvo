import Logo from './Logo';
import SectionLinks from './SectionLinks';
import FooterCopyright from './FooterCopyright';
import { Button } from './ui/button';
import Image from 'next/image';
import styles from "@/styles/footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Image
        src="/background-2.png"
        alt="Footer Background"
        fill
        style={{ objectFit: 'cover' }}
        className={`${styles.backgroundImage} -z-10`}
        quality={100}
      />
      <div className={styles.footerContainer}>
        <div className={styles.contentContainer}>
          <div className={styles.footerContent}>
            <div className={styles.leftContent}>
              <Logo />
              <p>Unleashing the <span className={styles.textSecondary}>Future_</span> of Innovation.</p>
              <div>
                <Button variant="default" size="default">
                  CONSTRUIR PRESENÇA DIGITAL AGORA
                </Button>
              </div>
            </div>
            <SectionLinks />
          </div>
        </div>
      </div>
      <FooterCopyright />
    </footer>
  );
};

export default Footer;