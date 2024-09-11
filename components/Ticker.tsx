import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';

const Ticker = () => {
  const images = ['Bradesco.svg', 'Bradesco.svg', 'Bradesco.svg', 'Bradesco.svg', 'Bradesco.svg', 'Bradesco.svg'];

  return (
    <div className="bg-[#10101080] px-[54px] py-6">
      <Marquee>
        {images.map((image, index) => (
          <div key={index} className="px-[38px]">
            <Image src={`/Ticker/${image}`} alt={`Ícone ${index + 1}`} width={148} height={38} draggable="false" />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Ticker;