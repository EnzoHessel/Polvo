import Image from "next/image"
import { Button } from "./ui/button"

const Hero = () => {
  return (
    <section className="flex justify-between gap-8">
      <div className="max-w-40 flex flex-col gap-8">
        <h2 className="text-xl">
          Ninguém inova sozinho. Do Agro ao Varejo. De Fintech a Anytech. A maneira como desenvolvemos software é única.
        </h2>
        <Button variant="default" size="default">
          COMEÇAR AGORA
        </Button>
      </div>
      <div className="">
        <Image src="/hero.svg" alt="Hero" width={616} height={452} className="object-cover"/>
      </div>
      <div className="max-w-40">
        <p className="text-2xl">Unleashing the <span className="text-secondary">Future_</span> of Innovation. <br/><br/> <span className="text-secondary">#We are Polvo</span></p>
      </div>
    </section>
  )
}

export default Hero