import Image from "next/image";
import Link from "next/link";
import { Phone, Mail } from "lucide-react";

const Navbar = () => {
    return (
        <nav className="bg-white shadow-sm flex fixed z-[100] top-0 right-0 left-0">
            {/* Logo */}
            <Link href="/" className="flex items-center">
                <Image src="/logo.png" alt="Logo" width={180} height={60} />
            </Link>
            <div className="container mx-auto py-4 flex flex-col items-center justify-between gap-4">
                {/* Contact Info */}
                <div className="flex items-center justify-end w-full gap-36">
                    <Link
                        href="https://api.whatsapp.com/send/?phone=51973145840"
                        className="flex items-center"
                    >
                        <Phone size={24} strokeWidth={2} />
                        <span className="ml-2 font-semibold text-[#1f516d]">
                            973 145 840
                        </span>
                    </Link>
                    <div className="flex items-center self-end gap-4">
                        <span className="font-light text-sm">
                            Cotiza por Email
                        </span>
                        <Link
                            href="mailto:ventas@helpcorp.pe"
                            className="ml-2 flex items-center"
                        >
                            <Mail size={24} strokeWidth={2} />
                            <span className="ml-2 font-semibold text-[#1f516d]">
                                ventas@helpcorp.pe
                            </span>
                        </Link>
                    </div>
                </div>

                {/* Navigation Links */}
                <div className="flex items-end justify-evenly w-full">
                    <Link
                        href="/alquiler-de-laptops"
                        className="text-[hsl(325,71%,38%)] hover:text-[hsl(325,71%,50%)] font-medium text-base hover:scale-[1.05] transition-all"
                    >
                        ALQUILER DE LAPTOPS
                    </Link>
                    <Link
                        href="/alquiler-de-computadoras"
                        className="text-[hsl(325,71%,38%)] hover:text-[hsl(325,71%,50%)] font-medium text-base hover:scale-[1.05] transition-all"
                    >
                        ALQUILER DE COMPUTADORAS
                    </Link>
                    <Link
                        href="/alquiler-vs-compra"
                        className="text-[hsl(325,71%,38%)] hover:text-[hsl(325,71%,50%)] font-medium text-base hover:scale-[1.05] transition-all"
                    >
                        ALQUILER VS COMPRA
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
