import Hero from "@/components/hero";
import Scroller from "@/components/scroller";
import ContactForm from "@/components/form";
import Cards from "@/components/cards";
import Whatsapp from "@/components/whatsapp";
import Cases from "@/components/cases";
import Coverage from "@/components/coverage";

export const metadata = {
    title: "Helpcorp",
    description: "Alquiler de Laptops y Computadoras",
};

export default function Home() {
    return (
        <main className="overflow-hidden pt-[96px]">
            <Whatsapp countryCode="51" phoneNumber="987654321" animated />
            <Hero />
            <Cases />
            <Coverage />
            <ContactForm />
            <Cards />
        </main>
    );
}
