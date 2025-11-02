import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import productImage from "@/assets/abuela-matilde-productos.png";

export const QualitySection = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="mb-6 bg-gradient-gold text-primary font-semibold">
              Variedad Picual Premium
            </Badge>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-6">
              Selección Premium desde Torredonjimeno
            </h2>
            <p className="font-inter text-lg text-muted-foreground mb-8">
              Nuestra "Selección Premium" es una pequeña partida de unas pocas decenas de botellas 
              con la máxima calidad, extraída en el punto óptimo de maduración durante la cosecha 
              temprana entre octubre y noviembre. Nuestro buque insignia.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-accent rounded-full mt-3"></div>
                <div>
                  <h3 className="font-inter font-semibold text-primary mb-2">
                    Variedad Picual Exclusiva
                  </h3>
                  <p className="font-inter text-muted-foreground">
                    Cultivamos exclusivamente la variedad Picual, conocida por su 
                    sabor intenso y propiedades antioxidantes excepcionales.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-accent rounded-full mt-3"></div>
                <div>
                  <h3 className="font-inter font-semibold text-primary mb-2">
                    Cosecha Temprana Premium
                  </h3>
                  <p className="font-inter text-muted-foreground">
                    Recolectamos entre octubre y noviembre, en el punto óptimo de 
                    maduración para obtener el máximo sabor y calidad.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-accent rounded-full mt-3"></div>
                <div>
                  <h3 className="font-inter font-semibold text-primary mb-2">
                    Certificado por Sohiscert
                  </h3>
                  <p className="font-inter text-muted-foreground">
                    Certificación ecológica oficial que garantiza la producción 
                    100% ecológica y sostenible.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <Card className="p-8 shadow-premium border-0 bg-gradient-earth">
              <img 
                src={productImage} 
                alt="Productos Abuela Matilde - Botella y Latas de Aceite de Oliva Virgen Extra"
                className="w-full max-w-md mx-auto rounded-lg shadow-gold"
              />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};