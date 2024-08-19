import Logo from './Logo';
import SectionLinks from './SectionLinks';
import FooterCopyright from './FooterCopyright';
import { Button } from './ui/button';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="relative">
      <Image src="/background-2.png" alt="Footer Background" layout="fill" className="-z-10 object-cover"/>
      <div className="flex justify-center items-center pt-16 pb-12">
        <div className='max-w-[1000px]'>
          <div className="footer-image flex gap-16 text-white">
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
        </div>
      </div>
      <FooterCopyright />
    </footer>
  );
};

export default Footer;