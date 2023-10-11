"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

const Hero = () => {

  const handleScroll = () => {
    alert("Scroll");
  }

  return (
    <div className="flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="2xl:text-[68px] sm:text-[52px] text-[36px] font-bold leading-snug">
          Soluciones de alquiler de laptops para tu negocio
        </h1>
        <p className="text-lg text-blue-600 font-bold mt-10">
          ¡Contáctanos para ayudarte a encontrar los que necesitas!
        </p>
        <p className="text-lg text-black-100 font-light mt-2">
          Rendimiento y flexibilidad para tu empresa
        </p>
        <Button 
          onClick={handleScroll}
          className="mt-5"
        >
          Contáctanos
        </Button>
      </div>
      <div className="xl:flex-[1.5] flex justify-end items-end w-full xl:h-[80vh] lg:mt-10">
        <div className="relative xl:w-full w-[90%] xl:h-full h-[590px] z-0">
          <Image 
            src="/laptop.png" 
            alt="hero" fill 
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={true}
          />
        </div> 
        <div className="absolute xl:-top-40 xl:-right-1/2 -right-1/4 bg-hero-bg bg-repeat-round -z-10 w-full xl:h-screen h-[590px] overflow-hidden" />
      </div>
    </div>
  )
}

export default Hero;