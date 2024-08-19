import Image from 'next/image';
import React from 'react';

const FooterCopyright = () => (
  <div className="flex justify-center items-center w-full py-12 px-[75px] text-[#98A2B3] bg-[#040300] ">
    <div className="max-w-[1000px] w-full flex justify-between">
      <p>© 2024 Polvo. All rights reserved.</p>
      <div className="flex gap-6">
        {['twitter', 'Linkedin', 'Github'].map(platform => (
          <Image
            key={platform}
            src={`/${platform}.svg`}
            alt={`${platform} logo`}
            width={24}
            height={24}
          />
        ))}
      </div>
    </div>
  </div>
);

export default FooterCopyright;