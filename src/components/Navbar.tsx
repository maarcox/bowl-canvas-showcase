import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Globe, ShoppingCart } from 'lucide-react';

export const Navbar = () => {
  const [language, setLanguage] = useState<'es' | 'en'>('es');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'es' ? 'en' : 'es');
  };

  const translations = {
    es: {
      home: 'Home',
      products: 'Productos',
      collections: 'Colecciones',
      buyNow: 'Comprar ahora',
      logo: 'Bowl Collection'
    },
    en: {
      home: 'Home',
      products: 'Products',
      collections: 'Collections',
      buyNow: 'Buy now',
      logo: 'Bowl Collection'
    }
  };

  const t = translations[language];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-light tracking-wide text-foreground">
              {t.logo}
            </h1>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#home" 
              className="text-foreground hover:text-primary transition-colors font-light"
            >
              {t.home}
            </a>
            <a 
              href="#products" 
              className="text-foreground hover:text-primary transition-colors font-light"
            >
              {t.products}
            </a>
            <a 
              href="#collections" 
              className="text-foreground hover:text-primary transition-colors font-light"
            >
              {t.collections}
            </a>
          </div>

          {/* Right Side - Language & CTA */}
          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-muted-foreground hover:text-foreground"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-light">{language.toUpperCase()}</span>
            </Button>

            {/* CTA Button */}
            <Button 
              variant="default"
              className="bg-primary hover:bg-primary-hover text-primary-foreground font-light"
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              {t.buyNow}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};