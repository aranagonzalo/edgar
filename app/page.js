import Hero from "@/components/hero";
import Scroller from "@/components/scroller";
import ContactForm from "@/components/form";
import Cards from "@/components/cards";

export default function Home() {
    return (
        <main className="overflow-hidden">
            <Hero />
            <Scroller />
            <ContactForm />
            <Cards />
        </main>
    );
}
