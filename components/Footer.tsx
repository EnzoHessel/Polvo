import Logo from './Logo';
import SectionLinks from './SectionLinks';
import FooterCopyright from './FooterCopyright';
import { Button } from './ui/button';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="relative flex flex-col">
      <Image src="/background-2.png" alt="Footer Background" layout="fill" className="-z-10 object-cover"/>
      <div className="footer-image flex justify-between gap-16 text-white">
        <div className="flex flex-col gap-8">
          <Logo />
          <p>Unleashing the <span className="text-secondary">Future_</span> of Innovation.</p>
          <div>
            <Button variant="default" size="default">
              CONSTRUIR PRESENÇA DIGITAL AGORA
            </Button>
          </div>
        </div>
        <SectionLinks />
      </div>
      <FooterCopyright />
    </footer>
  );
};

export default Footer;