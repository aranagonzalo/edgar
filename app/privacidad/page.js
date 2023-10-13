import React from "react";
import Whatsapp from "@/components/whatsapp";
import Hero from "@/components/hero";
import { politicaDePrivacidad } from "@/constants";

const Home = () => {
    return (
        <main className="overflow-hidden">
            <Whatsapp countryCode="51" phoneNumber="987654321" animated />
            <Hero
                title="Política de privacidad"
                subtitle="Nuestro compromiso con la privacidad en línea"
                desc="Estamos comprometidos a mantener la confidencialidad de la información personal que nos proporciones. Esta política de privacidad explica cómo recopilamos, utilizamos y protegemos tus datos personales."
                button={false}
                text="text-yellow-500"
                color="bg-hero-yellow"
                image="/privacy.png"
            />
            <div className="max-w-[1440px] mx-auto pb-12 bg-stacked-waves-yellow bg-cover bg-no-repeat">
                <div className="flex flex-wrap justify-start padding-x max-w-6xl gap-5">
                    <h1 className="2xl:text-[58px] sm:text-[40px] text-[36px] font-bold leading-snug">
                        Terminos generales
                    </h1>
                    <div className="w-[100%]">
                        <p className="pt-10 text-yellow-500 font-bold text-lg">
                            Última actualización: 11 de Octubre 2023
                        </p>
                        <p className="text-lg text-black-100 font-light mt-3">
                            Gracias por visitar [Nombre de tu Sitio Web]. En
                            [Nombre de tu Sitio Web], tu privacidad es de suma
                            importancia para nosotros. Esta Política de
                            Privacidad describe cómo recopilamos, utilizamos y
                            protegemos la información personal que nos
                            proporcionas. Al utilizar nuestros servicios,
                            aceptas los términos y condiciones de esta política.
                        </p>
                    </div>
                    {politicaDePrivacidad.map((p) => {
                        return (
                            <div key={p.id} className="w-[calc(50%-20px)]">
                                <p className="mt-10 text-yellow-500 font-bold text-lg">
                                    {p.title}
                                </p>
                                <p className="text-lg text-black-100 font-light mt-3">
                                    {p.desc}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </main>
    );
};

export default Home;
