import { Card } from "@/components/ui/card";

export const HeritageSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-earth">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-6">
            La Historia de Abuela Matilde
          </h2>
          <p className="font-inter text-lg text-muted-foreground max-w-3xl mx-auto">
            Tras el fallecimiento de nuestro padre Manuel José, mi hermano Fernando, mi madre Matilde 
            y yo José tomamos la decisión de convertir la producción a ecológico. Sin referentes apenas 
            en nuestro entorno cercano, empezamos este proyecto con el convencimiento de crear el mejor 
            aceite de oliva posible, respetando el medio ambiente y la salud de todos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="p-8 shadow-premium hover:shadow-gold transition-all duration-500 border-0 bg-card/80 backdrop-blur-sm">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="font-playfair text-2xl font-bold text-primary">♥️</span>
              </div>
              <h3 className="font-playfair text-2xl font-semibold text-primary mb-4">
                Manuel José
              </h3>
              <p className="font-inter text-muted-foreground">
                Nuestro querido padre, quien plantó las bases de esta tradición familiar 
                que hoy continuamos con amor y dedicación en su memoria.
              </p>
            </div>
          </Card>

          <Card className="p-8 shadow-premium hover:shadow-gold transition-all duration-500 border-0 bg-card/80 backdrop-blur-sm">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="font-playfair text-2xl font-bold text-primary">🌱</span>
              </div>
              <h3 className="font-playfair text-2xl font-semibold text-primary mb-4">
                Conversión Ecológica
              </h3>
              <p className="font-inter text-muted-foreground">
                La decisión valiente de Fernando, Matilde y José de convertir 
                toda la producción a ecológico, respetando el medio ambiente.
              </p>
            </div>
          </Card>

          <Card className="p-8 shadow-premium hover:shadow-gold transition-all duration-500 border-0 bg-card/80 backdrop-blur-sm">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="font-playfair text-2xl font-bold text-primary">🏆</span>
              </div>
              <h3 className="font-playfair text-2xl font-semibold text-primary mb-4">
                Selección Premium
              </h3>
              <p className="font-inter text-muted-foreground">
                Nuestro buque insignia: una pequeña partida de pocas decenas de botellas 
                extraída en el punto óptimo de maduración.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};