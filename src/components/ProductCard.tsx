import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ProductCardProps {
  name: string;
  price: string;
  originalPrice?: string;
  image: string;
  description: string;
  features: string[];
  onSale?: boolean;
}

export const ProductCard = ({ 
  name, 
  price, 
  originalPrice, 
  image, 
  description, 
  features,
  onSale 
}: ProductCardProps) => {
  return (
    <Card className="group bg-card hover:shadow-medium transition-all duration-300 border-border overflow-hidden">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {onSale && (
          <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
            Special weekend: 15% off
          </Badge>
        )}
      </div>
      
      <CardContent className="p-6 space-y-4">
        {/* Product Name */}
        <h3 className="text-product-title text-card-foreground">{name}</h3>
        
        {/* Description */}
        <p className="text-body-elegant text-sm">{description}</p>
        
        {/* Features */}
        <div className="flex flex-wrap gap-2">
          {features.map((feature, index) => (
            <span 
              key={index}
              className="text-xs px-3 py-1 bg-accent-soft text-accent-foreground rounded-full"
            >
              {feature}
            </span>
          ))}
        </div>
        
        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-light text-card-foreground">{price}</span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">{originalPrice}</span>
            )}
          </div>
        </div>
        
        {/* CTA Button */}
        <Button 
          variant="outline" 
          className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
        >
          Ver detalles
        </Button>
      </CardContent>
    </Card>
  );
};