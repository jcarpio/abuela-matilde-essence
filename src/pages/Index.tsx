import { Navigation } from "@/components/ui/navigation";
import { HeroSection } from "@/components/ui/hero-section";
import { HeritageSection } from "@/components/ui/heritage-section";
import { QualitySection } from "@/components/ui/quality-section";
import { LocationSection } from "@/components/ui/location-section";
import { ContactSection } from "@/components/ui/contact-section";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        <section id="inicio">
          <HeroSection />
        </section>
        
        <section id="historia">
          <HeritageSection />
        </section>
        
        <section id="calidad">
          <QualitySection />
        </section>
        
        <section id="origen">
          <LocationSection />
        </section>
        
        <section id="contacto">
          <ContactSection />
        </section>
      </main>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="font-playfair text-3xl font-bold mb-4">
            Abuela Matilde
          </div>
          <p className="font-inter text-sm opacity-80 mb-6">
            Aceite de Oliva Virgen Extra Premium Ecológico desde Torredonjimeno
          </p>
          <div className="border-t border-primary-foreground/20 pt-6">
            <p className="font-inter text-xs opacity-60">
              © 2024 Abuela Matilde. Tradición familiar andaluza. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;