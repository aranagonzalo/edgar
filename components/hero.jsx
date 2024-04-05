"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const Hero = (props) => {
    return (
        <section className="relative flex w-full flex-col justify-center bg-black px-6 py-12 md:p-24 lg:px-24 lg:pb-40 lg:pt-28">
            <Image
                className="opacity-[70%]"
                priority={true}
                style={{ objectFit: "cover" }}
                fill={true}
                src="/hero.jpg"
                alt="Hombre trabajando"
            />
            <div className="z-10 h-[3px] w-16 bg-[#c92283]"></div>
            <h1 className="z-10 pt-8 pb-20 text-3xl font-bold text-white md:text-5xl lg:text-[64px] lg:w-1/2 lg:leading-none">
                Alquiler de Laptops y Computadoras
            </h1>
            <p className="z-10 w-full pb-4 text-lg font-normal text-white/90 md:w-[65%]">
                Reduce tus costos y aumenta tu productividad.
            </p>
            <p className="z-10 w-full pb-8 text-lg font-normal text-white/90 md:w-[50%]">
                Más del 90% de nuestros clientes consideran que alquilar es muy
                importante para el éxito de su negocio!
            </p>
            <Link
                className="z-10"
                href="https://api.whatsapp.com/send/?phone=51973145840"
            >
                <button className="flex w-max items-center justify-start bg-[#c92283] px-6 py-2 text-sm font-normal uppercase text-white">
                    Contacto <ChevronRight />
                </button>
            </Link>
        </section>
    );
};

export default Hero;
