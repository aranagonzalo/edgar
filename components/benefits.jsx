import {
    TimerReset,
    CalendarDays,
    Headphones,
    PackageOpen,
    MonitorDown,
    DatabaseBackup,
    Recycle,
    ShieldCheck,
} from "lucide-react";

const Benefits = () => {
    return (
        <section className="px-6 py-12 md:p-12 lg:p-24 bg-gradient-to-b from-indigo-600 via-blue-600 to-blue-600">
            <h1 className="text-white text-4xl lg:text-5xl font-bold pb-12">
                Beneficios de alquilar con HELPCORP
            </h1>
            <div className="relative grid w-full grid-cols-1 grid-rows-8 justify-center gap-12 bg-gradient-to-b from-indigo-600 via-blue-600 to-blue-600  md:grid-cols-4 md:grid-rows-2">
                <div className="relative flex aspect-square flex-col items-center justify-center lg:justify-between rounded-sm border-2 border-[#efefef] bg-[#efefef]/10 p-6 md:p-12 xl:p-16 gap-12 lg:gap-0">
                    <TimerReset size={70} color="white" />
                    <p className="text-center text-sm lg:text-base text-white">
                        Despacho en tiempo record
                    </p>
                </div>
                <div className="relative flex aspect-square flex-col items-center justify-center lg:justify-between rounded-sm border-2 border-[#efefef] bg-[#efefef]/10 p-6 md:p-12 xl:p-16 gap-12 lg:gap-0">
                    <CalendarDays size={70} color="white" />

                    <p className="text-center text-sm lg:text-base text-white">
                        Alquiler por días, meses, años
                    </p>
                </div>
                <div className="relative flex aspect-square flex-col items-center justify-center lg:justify-between rounded-sm border-2 border-[#efefef] bg-[#efefef]/10 p-6 md:p-12 xl:p-16 gap-12 lg:gap-0">
                    <Headphones size={70} color="white" />

                    <p className="text-center text-sm lg:text-base text-white">
                        Soporte técnico permanente
                    </p>
                </div>
                <div className="relative flex aspect-square flex-col items-center justify-center lg:justify-between rounded-sm border-2 border-[#efefef] bg-[#efefef]/10 p-6 md:p-12 xl:p-16 gap-12 lg:gap-0">
                    <PackageOpen size={70} color="white" />

                    <p className="text-center text-sm lg:text-base text-white">
                        Envío y recojo de equipos
                    </p>
                </div>
                <div className="relative flex aspect-square flex-col items-center justify-center lg:justify-between rounded-sm border-2 border-[#efefef] bg-[#efefef]/10 p-6 md:p-12 xl:p-16 gap-12 lg:gap-0">
                    <MonitorDown size={70} color="white" />

                    <p className="text-center text-sm lg:text-base text-white">
                        Configuración y software definido por el usuario
                    </p>
                </div>
                <div className="relative flex aspect-square flex-col items-center justify-center lg:justify-between rounded-sm border-2 border-[#efefef] bg-[#efefef]/10 p-6 md:p-12 xl:p-16 gap-12 lg:gap-0">
                    <DatabaseBackup size={70} color="white" />

                    <p className="text-center text-sm lg:text-base text-white">
                        Mantenimiento preventivo
                    </p>
                </div>
                <div className="relative flex aspect-square flex-col items-center justify-center lg:justify-between rounded-sm border-2 border-[#efefef] bg-[#efefef]/10 p-6 md:p-12 xl:p-16 gap-12 lg:gap-0">
                    <Recycle size={70} color="white" />

                    <p className="text-center text-sm lg:text-base text-white">
                        Reemplazo inmediato de equipo ante avería
                    </p>
                </div>
                <div className="relative flex aspect-square flex-col items-center justify-center lg:justify-between rounded-sm border-2 border-[#efefef] bg-[#efefef]/10 p-6 md:p-12 xl:p-16 gap-12 lg:gap-0">
                    <ShieldCheck size={70} color="white" />

                    <p className="text-center text-sm lg:text-base text-white">
                        Cobertura a nivel nacional
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Benefits;
