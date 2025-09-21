import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import oliveOilBottle from "@/assets/olive-oil-bottle.jpg";

export const QualitySection = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="mb-6 bg-gradient-gold text-primary font-semibold">
              Certificación Ecológica
            </Badge>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-6">
              Premium Quality desde Torredonjimeno
            </h2>
            <p className="font-inter text-lg text-muted-foreground mb-8">
              En el corazón de la campiña jiennense, donde el clima mediterráneo y 
              los suelos calcáreos crean las condiciones perfectas para producir 
              el aceite de oliva virgen extra de más alta calidad.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-accent rounded-full mt-3"></div>
                <div>
                  <h3 className="font-inter font-semibold text-primary mb-2">
                    100% Ecológico Certificado
                  </h3>
                  <p className="font-inter text-muted-foreground">
                    Cultivado sin pesticidas ni fertilizantes químicos, respetando 
                    el medio ambiente y la pureza del producto.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-accent rounded-full mt-3"></div>
                <div>
                  <h3 className="font-inter font-semibold text-primary mb-2">
                    Extracción en Frío
                  </h3>
                  <p className="font-inter text-muted-foreground">
                    Prensado en las primeras 24 horas tras la recolección para 
                    preservar todas las propiedades organolépticas.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-accent rounded-full mt-3"></div>
                <div>
                  <h3 className="font-inter font-semibold text-primary mb-2">
                    Denominación de Origen Protegida
                  </h3>
                  <p className="font-inter text-muted-foreground">
                    Avalado por la D.O.P. Sierra de Cazorla, garantía de 
                    autenticidad y procedencia.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <Card className="p-8 shadow-premium border-0 bg-gradient-earth">
              <img 
                src={oliveOilBottle} 
                alt="Botella de Aceite de Oliva Abuela Matilde"
                className="w-full max-w-md mx-auto rounded-lg shadow-gold"
              />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};