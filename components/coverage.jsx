import Image from "next/image";

const Coverage = () => {
    return (
        <section className="relative flex w-full flex-col bg-black px-6 py-12 md:p-12 lg:p-24">
            <Image
                className="opacity-[70%]"
                priority={true}
                style={{ objectFit: "cover" }}
                fill={true}
                src="/laptop.jpg"
                alt="Teclado de computadora"
            />
            <div className="z-10 flex flex-col gap-2 text-white">
                <div className="flex justify-center items-center">
                    <h1 className="text-white text-4xl lg:text-5xl font-bold pb-6">
                        Cobertura de servicio
                    </h1>
                </div>
                <h2 className="pt-6 font-semibold text-2xl">
                    EMPRESAS PRIVADAS
                </h2>
                <p className="text-lg font-normal text-white/90 md:w-[65%]">
                    Atención a toda escala en los sectores de SERVICIOS,
                    COMERCIO e INDUSTRIA
                </p>
                <h2 className="pt-6 font-semibold text-2xl">
                    SECTOR PUBLICO (GOBIERNO)
                </h2>
                <p className="text-lg font-normal text-white/90 md:w-[65%]">
                    Brindamos nuestros servicios a Ministerios, Municipalidades,
                    Fuerzas Armadas, Hospitales y en general, a toda entidad
                    pública que requiera de nuestros servicios cumpliendo con
                    todas las normas de Contrataciones del Estado
                </p>
                <h2 className="pt-6 font-semibold text-2xl">
                    ORGANIZACIONES INTERNACIONALES
                </h2>
                <p className="text-lg font-normal text-white/90 md:w-[65%]">
                    Antendemos a Embajadas, Consulados, Fundaciones, ONGs, y en
                    general a toda organización internacional que requiera
                    nuestros servicios.
                </p>
            </div>
        </section>
    );
};

export default Coverage;
