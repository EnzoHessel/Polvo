import Image from "next/image";

interface cardProps {
  image: string;
  title: string;
}


const Card = ({ image, title }: cardProps) => {
  return (
    <div className="flex flex-col gap-6 px-8 pt-6 pb-9 bg-[#121212] border-[#363636] border rounded-[8px] w-[232px] hover:-translate-y-1 duration-200 hover:border-secondary">
      <Image src={image} alt="Card Image" className="object-cover" width={40} height={40} />
      <p className="text-sm text-[#EEEEEE]">{title}</p>
    </div>
  )
}

export default Card