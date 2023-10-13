"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import { cn } from "@/lib/utils";

const Hero = (props) => {

  const router = useRouter();

  function scrollToElement(elementId) {
    const targetElement = document.getElementById(elementId);

    if (targetElement) {
      const elementTop = targetElement.getBoundingClientRect().top;
      const scrollY = window.scrollY;
      const targetY = elementTop + scrollY;

      window.scrollTo({
        top: targetY,
        behavior: 'smooth',
      });
    } else {
      router.push('/');
    }
  }
  console.log(props.text);
  return (

    <div className="flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto">
      <div className="flex-1 pt-44 padding-x">
        <h1 className="2xl:text-[68px] sm:text-[52px] text-[36px] font-bold leading-snug">
          {props.title}
        </h1>
        <p className={cn("text-lg font-bold mt-10", props.text)}>
          {props.subtitle}
        </p>
        <p className="text-lg text-black-100 font-light mt-2">
          {props.desc}
        </p>
        {props.button && 
          <Button onClick={() => scrollToElement('form')} className="mt-5">
            Contáctanos
          </Button>
        }
      </div>
      <div className="xl:flex-[1.5] flex justify-end items-end w-full xl:h-[80vh] lg:mt-10">
        <div className="relative xl:w-full w-[90%] xl:h-full h-[590px] z-0">
          <Image 
            src={props.image} 
            alt="hero" 
            fill 
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={true}
          />
        </div> 
        <div className={cn("absolute xl:-top-40 xl:-right-1/2 -right-1/4 bg-repeat-round -z-10 w-full xl:h-screen h-[590px] overflow-hidden", props.color)} />
      </div>
    </div>
  )
}

export default Hero;