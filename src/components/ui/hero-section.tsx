import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-olive-grove.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-primary/40" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Abuela Matilde
        </h1>
        <p className="font-inter text-xl md:text-2xl font-light mb-8 opacity-90">
          Aceite de Oliva Virgen Extra Premium Ecológico
        </p>
        <p className="font-inter text-base md:text-lg mb-12 opacity-80 max-w-2xl mx-auto">
          Tradición familiar de varias generaciones en el corazón de la campiña jiennense, 
          donde los olivares centenarios de Torredonjimeno nos regalan el oro líquido más puro.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="lg" className="font-inter">
            Descubre Nuestra Historia
          </Button>
          <Button variant="outline-hero" size="lg" className="font-inter">
            Ver Productos
          </Button>
        </div>
      </div>
    </section>
  );
};