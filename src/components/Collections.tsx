import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import bowlCollection from '@/assets/bowl-collection.jpg';

export const Collections = () => {
  const collections = [
    {
      title: "Minimalistas",
      description: "Diseños puros y elegantes que destacan por su simplicidad y funcionalidad atemporal.",
      image: bowlCollection,
      count: "12 productos"
    },
    {
      title: "Coloridos",
      description: "Bowls vibrantes que añaden personalidad y alegría a tu mesa con tonos cálidos y fríos.",
      image: bowlCollection,
      count: "8 productos"
    },
    {
      title: "Clásicos",
      description: "Piezas tradicionales con acabados artesanales que nunca pasan de moda.",
      image: bowlCollection,
      count: "15 productos"
    }
  ];

  return (
    <section id="collections" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-section-title text-foreground">
            Nuestras <span className="text-muted-foreground">Colecciones</span>
          </h2>
          <p className="text-body-elegant text-lg max-w-2xl mx-auto">
            Descubre diferentes estilos cuidadosamente curados para cada gusto y ocasión.
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <Card key={index} className="group bg-card hover:shadow-medium transition-all duration-300 border-border overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={collection.image} 
                  alt={collection.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-product-title text-card-foreground">{collection.title}</h3>
                  <p className="text-sm text-muted-foreground">{collection.count}</p>
                </div>
                
                <p className="text-body-elegant text-sm">{collection.description}</p>
                
                <Button 
                  variant="ghost" 
                  className="w-full justify-between text-primary hover:text-primary-hover hover:bg-accent-soft group"
                >
                  Ver colección
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-surface-soft rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-light text-foreground mb-4">
              ¿No encuentras lo que buscas?
            </h3>
            <p className="text-body-elegant mb-6 max-w-md mx-auto">
              Contáctanos para solicitudes personalizadas o para conocer más sobre nuestros productos.
            </p>
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary-hover text-primary-foreground font-light"
            >
              Contactar ahora
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};