import Image from "next/image";

const Coverage = () => {
    return (
        <section className="relative flex w-full flex-col bg-black px-6 py-12 md:p-12 lg:p-24">
            <Image
                className="opacity-[70%]"
                priority={true}
                style={{ objectFit: "cover" }}
                fill={true}
                src="/hero.jpg"
                alt="Hombre trabajando"
            />
            <div className="flex justify-center items-center z-10">
                <h1 className="text-white text-4xl lg:text-5xl font-bold pb-12">
                    Cobertura de servicio
                </h1>
            </div>
        </section>
    );
};

export default Coverage;
