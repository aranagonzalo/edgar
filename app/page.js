import Hero from "@/components/hero";
import Scroller from "@/components/scroller";
import ContactForm from "@/components/form";
import Cards from "@/components/cards";
import Whatsapp from "@/components/whatsapp";

export default function Home() {
    return (
        <main className="overflow-hidden">
            <Whatsapp countryCode="51" phoneNumber="987654321" animated />
            <Hero
                title="Soluciones de alquiler de laptops para tu negocio"
                subtitle="¡Contáctanos para ayudarte a encontrar los que necesitas!"
                desc="Rendimiento y flexibilidad para tu empresa"
                button={true}
                text="text-blue-500"
                color="bg-hero-blue"
                image="/laptop.png"
            />
            <Scroller />
            <ContactForm />
            <Cards />
        </main>
    );
}
