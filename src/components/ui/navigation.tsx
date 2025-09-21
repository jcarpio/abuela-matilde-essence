import { Button } from "@/components/ui/button";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="font-playfair text-2xl font-bold text-primary">
            Abuela Matilde
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="font-inter text-sm font-medium text-primary hover:text-accent transition-colors">
              Inicio
            </a>
            <a href="#historia" className="font-inter text-sm font-medium text-primary hover:text-accent transition-colors">
              Historia
            </a>
            <a href="#calidad" className="font-inter text-sm font-medium text-primary hover:text-accent transition-colors">
              Calidad
            </a>
            <a href="#origen" className="font-inter text-sm font-medium text-primary hover:text-accent transition-colors">
              Origen
            </a>
            <a href="#contacto" className="font-inter text-sm font-medium text-primary hover:text-accent transition-colors">
              Contacto
            </a>
          </div>

          <Button variant="default" size="sm" className="font-inter">
            Pedir Información
          </Button>
        </div>
      </div>
    </nav>
  );
};