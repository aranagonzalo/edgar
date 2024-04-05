import {
    CalendarCheck,
    Users,
    Coins,
    CircuitBoard,
    Computer,
    Recycle,
} from "lucide-react";

const Cases = () => {
    return (
        <section className="px-6 py-12 md:p-12 lg:p-24">
            <h1 className="text-[#1f516d] text-4xl lg:text-5xl font-bold pb-12">
                En qué casos es conveniente alquilar?
            </h1>
            <div className="relative grid w-full grid-cols-1 grid-rows-6 justify-center gap-12 bg-white  md:grid-cols-3 md:grid-rows-2">
                <div className="relative flex aspect-square flex-col items-center justify-center lg:justify-between rounded-sm border-2 border-[#818181]/20 bg-[#efefef]/20 p-6 md:p-12 xl:p-16 gap-12 lg:gap-0">
                    <CalendarCheck size={70} color="#c92283" />
                    <p className="text-center text-sm lg:text-base">
                        Cuando tengas que implementar eventos, campañas,
                        capacitaciones o un proyecto de tiempo definido.
                    </p>
                </div>
                <div className="relative flex aspect-square flex-col items-center justify-center lg:justify-between rounded-sm border-2 border-[#818181]/20 bg-[#efefef]/20 p-6 md:p-12 xl:p-16 gap-12 lg:gap-0">
                    <Users size={70} color="#c92283" />

                    <p className="text-center text-sm lg:text-base">
                        En caso incremente tu personal inesperadamente y
                        necesitan producir ya!! el alquiler es la manera más
                        rápida y económica de lograr dicho objetivo.
                    </p>
                </div>
                <div className="relative flex aspect-square flex-col items-center justify-center lg:justify-between rounded-sm border-2 border-[#818181]/20 bg-[#efefef]/20 p-6 md:p-12 xl:p-16 gap-12 lg:gap-0">
                    <Coins size={70} color="#c92283" />

                    <p className="text-center text-sm lg:text-base">
                        Si inicias una empresa debes orientar tu capital o tus
                        lineas de crédito en el core del negocio y no en la
                        compra de equipos. Es mucho más eficiente alquilar
                        dichos equipos.
                    </p>
                </div>
                <div className="relative flex aspect-square flex-col items-center justify-center lg:justify-between rounded-sm border-2 border-[#818181]/20 bg-[#efefef]/20 p-6 md:p-12 xl:p-16 gap-12 lg:gap-0">
                    <CircuitBoard size={70} color="#c92283" />

                    <p className="text-center text-sm lg:text-base">
                        Si deseas tercerizar la infraestuctura de hardware de tu
                        empresa y olvidarte del soporte técnico, pérdida de
                        tiempo por averías, depreciación de tus equipos, el
                        alquiler es lo ideal.
                    </p>
                </div>
                <div className="relative flex aspect-square flex-col items-center justify-center lg:justify-between rounded-sm border-2 border-[#818181]/20 bg-[#efefef]/20 p-6 md:p-12 xl:p-16 gap-12 lg:gap-0">
                    <Computer size={70} color="#c92283" />

                    <p className="text-center text-sm lg:text-base">
                        En caso necesites una renovación tecnológica, es el
                        momemnto ideal para alquilar equipos de cómputo y
                        empezar a disfrutar de los beneficios.
                    </p>
                </div>
                <div className="relative flex aspect-square flex-col items-center justify-center lg:justify-between rounded-sm border-2 border-[#818181]/20 bg-[#efefef]/20 p-6 md:p-12 xl:p-16 gap-12 lg:gap-0">
                    <Recycle size={70} color="#c92283" />

                    <p className="text-center text-sm lg:text-base">
                        Si por el giro de mi negocio existen constantes cambios
                        en la cantidad de personal y en la configuración de
                        equipos reuqeridos; el alquiler es la mejor opción.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Cases;
