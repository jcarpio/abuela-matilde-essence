import { Card } from "@/components/ui/card";

export const HeritageSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-earth">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-6">
            Nuestra Historia Familiar
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-3xl mx-auto">
            Desde hace generaciones, la familia ha cuidado con amor y dedicación 
            los olivares de Torredonjimeno, heredando los secretos de la tradición oleícola andaluza.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-8 shadow-premium hover:shadow-gold transition-all duration-500 border-0 bg-card/80 backdrop-blur-sm">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="font-playfair text-2xl font-bold text-primary">1ª</span>
              </div>
              <h3 className="font-playfair text-2xl font-semibold text-primary mb-4">
                Primera Generación
              </h3>
              <p className="font-inter text-muted-foreground">
                Los primeros olivares plantados por nuestros ancestros, 
                estableciendo las raíces de nuestra tradición familiar.
              </p>
            </div>
          </Card>

          <Card className="p-8 shadow-premium hover:shadow-gold transition-all duration-500 border-0 bg-card/80 backdrop-blur-sm">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="font-playfair text-2xl font-bold text-primary">🫒</span>
              </div>
              <h3 className="font-playfair text-2xl font-semibold text-primary mb-4">
                Tradición Artesanal
              </h3>
              <p className="font-inter text-muted-foreground">
                Técnicas tradicionales transmitidas de generación en generación, 
                combinando sabiduría ancestral con innovación moderna.
              </p>
            </div>
          </Card>

          <Card className="p-8 shadow-premium hover:shadow-gold transition-all duration-500 border-0 bg-card/80 backdrop-blur-sm">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="font-playfair text-2xl font-bold text-primary">🏆</span>
              </div>
              <h3 className="font-playfair text-2xl font-semibold text-primary mb-4">
                Calidad Premium
              </h3>
              <p className="font-inter text-muted-foreground">
                El compromiso inquebrantable con la excelencia que define 
                cada gota de nuestro aceite de oliva virgen extra.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};