import { ProductCard } from './ProductCard';
import bowlBlue from '@/assets/bowl-blue.jpg';
import bowlWhite from '@/assets/bowl-white.jpg';
import bowlOrange from '@/assets/bowl-orange.jpg';

export const Products = () => {
  const products = [
    {
      name: "Azure Collection Bowl",
      price: "$24.99",
      originalPrice: "$29.99",
      image: bowlBlue,
      description: "Elegante bowl en tono azul oceánico, perfecto para servir ensaladas y platos principales.",
      features: ["Food grade", "Microwave safe", "Dishwasher safe"],
      onSale: true
    },
    {
      name: "Classic White Bowl",
      price: "$19.99",
      image: bowlWhite,
      description: "Bowl minimalista en blanco puro, diseño atemporal que complementa cualquier vajilla.",
      features: ["Food grade", "Oven safe", "Microwave safe"]
    },
    {
      name: "Sunset Orange Bowl",
      price: "$22.99",
      image: bowlOrange,
      description: "Bowl vibrante en naranja cálido, añade color y personalidad a tu mesa.",
      features: ["Food grade", "Microwave safe", "Ceramic finish"]
    },
    {
      name: "Minimalist Set",
      price: "$59.99",
      originalPrice: "$74.99",
      image: bowlWhite,
      description: "Set de tres bowls en diseño minimalista, perfecto para familias modernas.",
      features: ["Set of 3", "Food grade", "Complete collection"],
      onSale: true
    },
    {
      name: "Ocean Deep Bowl",
      price: "$26.99",
      image: bowlBlue,
      description: "Bowl en azul profundo con acabado mate, ideal para presentaciones elegantes.",
      features: ["Food grade", "Matte finish", "Premium ceramic"]
    },
    {
      name: "Terracotta Style",
      price: "$28.99",
      image: bowlOrange,
      description: "Bowl con acabado terracota natural, trae la calidez artesanal a tu hogar.",
      features: ["Handcrafted look", "Food grade", "Natural finish"]
    }
  ];

  return (
    <section id="products" className="py-20 bg-surface-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16">
          <h2 className="text-section-title text-foreground">
            Nuestra <span className="text-muted-foreground">Colección</span>
          </h2>
          <p className="text-body-elegant text-lg max-w-2xl mx-auto">
            Cada bowl está cuidadosamente diseñado para combinar funcionalidad y estética, 
            creando piezas únicas para tu mesa.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};