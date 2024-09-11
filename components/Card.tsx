import Image from 'next/image';

interface CardProps {
  image: string;
  title: string;
}

const Card = ({ image, title }: CardProps) => {
  return (
    <div className="flex flex-col gap-6 px-8 pt-6 pb-9 bg-[#121212] border-[#363636] border rounded-[8px] w-[232px] hover:-translate-y-1 duration-200 hover:border-secondary">
      <Image
        src={image}
        alt={`Imagem do card ${title}`}
        className="object-cover"
        width={40}
        height={40}
        draggable="false"
      />
      <p className="text-sm text-[#EEEEEE] uppercase">{title}</p>
    </div>
  );
}

export default Card;