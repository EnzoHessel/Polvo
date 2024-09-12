import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';
import styles from '@/styles/ticker.module.css';

const Ticker = () => {
  const images = ['Bradesco.svg', 'Bradesco.svg', 'Bradesco.svg', 'Bradesco.svg', 'Bradesco.svg', 'Bradesco.svg'];

  return (
    <div className={styles.tickerContainer}>
      <Marquee className={styles.marquee}>
        {images.map((image, index) => (
          <div key={index} className={styles.imageWrapper}>
            <Image
              src={`/Ticker/${image}`}
              alt={`Ícone ${index + 1}`}
              width={148}
              height={38}
              draggable="false"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Ticker;
