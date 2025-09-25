import { Instagram, Twitter, Facebook, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-surface-warm border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-light tracking-wide text-foreground">
              Bowl Collection
            </h3>
            <p className="text-body-elegant text-sm max-w-xs">
              Diseños elegantes que transforman cada comida en una experiencia única.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-foreground">Navegación</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-body-elegant hover:text-primary transition-colors">Home</a></li>
              <li><a href="#products" className="text-body-elegant hover:text-primary transition-colors">Productos</a></li>
              <li><a href="#collections" className="text-body-elegant hover:text-primary transition-colors">Colecciones</a></li>
              <li><a href="#" className="text-body-elegant hover:text-primary transition-colors">Sobre nosotros</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-foreground">Atención al cliente</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-body-elegant hover:text-primary transition-colors">Preguntas frecuentes</a></li>
              <li><a href="#" className="text-body-elegant hover:text-primary transition-colors">Política de devoluciones</a></li>
              <li><a href="#" className="text-body-elegant hover:text-primary transition-colors">Envíos y entregas</a></li>
              <li><a href="#" className="text-body-elegant hover:text-primary transition-colors">Cuidado del producto</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-foreground">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-muted-foreground" />
                <span className="text-body-elegant text-sm">hello@bowlcollection.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-muted-foreground" />
                <span className="text-body-elegant text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-muted-foreground" />
                <span className="text-body-elegant text-sm">Madrid, España</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-body-elegant text-sm">
              © 2024 Bowl Collection. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-body-elegant text-sm hover:text-primary transition-colors">
                Términos de servicio
              </a>
              <a href="#" className="text-body-elegant text-sm hover:text-primary transition-colors">
                Política de privacidad
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};