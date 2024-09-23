import Image from 'next/image';
import React from 'react';

const FooterCopyright = () => (
  <div className="flex justify-center items-center w-full py-12 px-6 text-[#98A2B3] bg-[#040300]">
    <div className="max-w-[1000px] w-full flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
      <p className="text-center md:text-left">© 2024 Polvo. All rights reserved.</p>
      <div className="flex gap-6">
        {['twitter', 'Linkedin', 'Github'].map(platform => (
          <Image
            key={platform}
            src={`/icons/${platform}.svg`}
            alt={`Logo do ${platform}`}
            width={24}
            height={24}
            draggable="false"
          />
        ))}
      </div>
    </div>
  </div>
);

export default FooterCopyright;
