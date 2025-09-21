export const LocationSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-hero text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-8">
          Torredonjimeno
        </h2>
        <p className="font-playfair text-xl md:text-2xl font-light mb-8 opacity-90">
          El Corazón de la Campiña Jiennense
        </p>
        
        <div className="prose prose-lg prose-invert mx-auto">
          <p className="font-inter text-lg leading-relaxed mb-6">
            En una de las mejores regiones del planeta para la producción de aceite de oliva, 
            nuestros olivares se extienden por las colinas ondulantes de Torredonjimeno, 
            donde la tradición milenaria se encuentra con la innovación moderna.
          </p>
          
          <p className="font-inter text-lg leading-relaxed mb-8">
            El clima mediterráneo continental, con sus veranos secos e inviernos suaves, 
            junto con los suelos franco-arcillosos, proporcionan las condiciones ideales 
            para que nuestras aceitunas desarrollen todo su potencial aromático y gustativo.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="text-center">
            <div className="font-playfair text-3xl font-bold mb-2">500m</div>
            <div className="font-inter text-sm opacity-80">Altitud Media</div>
          </div>
          <div className="text-center">
            <div className="font-playfair text-3xl font-bold mb-2">300+</div>
            <div className="font-inter text-sm opacity-80">Días de Sol al Año</div>
          </div>
          <div className="text-center">
            <div className="font-playfair text-3xl font-bold mb-2">100%</div>
            <div className="font-inter text-sm opacity-80">Ecológico Certificado</div>
          </div>
        </div>
      </div>
    </section>
  );
};