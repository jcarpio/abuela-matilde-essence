import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const ContactSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-earth">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-6">
            Contacta con Nosotros
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-3xl mx-auto">
            Descubre el sabor auténtico de Torredonjimeno. En esta primera fase, nuestra pequeña 
            producción se reparte entre nuestros conocidos. Ponte en contacto para más información.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <Card className="p-8 shadow-premium border-0 bg-card/80 backdrop-blur-sm">
            <h3 className="font-playfair text-2xl font-semibold text-primary mb-6">
              Información de Contacto
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">📍</span>
                </div>
                <div>
                  <h4 className="font-inter font-semibold text-primary mb-1">Ubicación</h4>
                  <p className="font-inter text-muted-foreground">
                    Torredonjimeno, Jaén<br />
                    Campiña Jiennense, Andalucía
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">📧</span>
                </div>
                <div>
                  <h4 className="font-inter font-semibold text-primary mb-1">Email</h4>
                  <p className="font-inter text-muted-foreground">
                    hola@abuelamatilde.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold">📞</span>
                </div>
                <div>
                  <h4 className="font-inter font-semibold text-primary mb-1">Teléfono</h4>
                  <p className="font-inter text-muted-foreground">
                    +34 636 077 155<br />
                    <span className="text-sm opacity-80">Hablamos español, inglés, francés y portugués</span>
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 shadow-premium border-0 bg-card/80 backdrop-blur-sm">
            <h3 className="font-playfair text-2xl font-semibold text-primary mb-6">
              Solicita Información
            </h3>
            
            <form className="space-y-4">
              <div>
                <label className="font-inter text-sm font-medium text-primary block mb-2">
                  Nombre completo
                </label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  placeholder="Tu nombre"
                />
              </div>
              
              <div>
                <label className="font-inter text-sm font-medium text-primary block mb-2">
                  Email
                </label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  placeholder="tu@email.com"
                />
              </div>
              
              <div>
                <label className="font-inter text-sm font-medium text-primary block mb-2">
                  Mensaje
                </label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                  placeholder="Cuéntanos en qué podemos ayudarte..."
                />
              </div>
              
              <Button className="w-full" size="lg">
                Enviar Mensaje
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};