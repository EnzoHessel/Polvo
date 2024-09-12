import Image from 'next/image';
import styles from '@/styles/card.module.css';

interface CardProps {
  image: string;
  title: string;
}

const Card = ({ image, title }: CardProps) => {
  return (
    <div className={styles.card}>
      <Image
        src={image}
        alt={`Imagem do card ${title}`}
        className={styles.image}
        width={40}
        height={40}
        draggable="false"
      />
      <p className={styles.title}>{title}</p>
    </div>
  );
}

export default Card;
