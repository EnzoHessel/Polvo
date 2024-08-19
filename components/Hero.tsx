

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

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
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative w-[616px] h-[452px]"
      >
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: isHovered ? 0 : 1 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <Image
            src="/hero.svg"
            alt="Hero"
            layout="fill"
            objectFit="cover"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <Image
            src="/hero-2.svg"
            alt="Hero Colorido"
            layout="fill"
            objectFit="cover"
          />
        </motion.div>
      </div>
      <div className="max-w-40">
        <p className="text-2xl">
          Unleashing the <span className="text-secondary">Future_</span> of Innovation. <br/><br/> <span className="text-secondary">#We are Polvo</span>
        </p>
      </div>
    </section>
  );
};

export default Hero;