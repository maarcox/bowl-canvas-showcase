import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import heroBowl from '@/assets/hero-bowl.jpg';

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-surface-soft pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-hero text-foreground">
                Bowl <span className="text-muted-foreground">Collection</span>
              </h1>
              <p className="text-body-elegant text-lg md:text-xl max-w-lg">
                Explora nuestra colección de bowls que combina estilo y practicidad, 
                perfectos para cualquier mesa.
              </p>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-4">
              <div className="bg-accent-soft px-4 py-2 rounded-full">
                <span className="text-sm font-medium text-accent-foreground">Food grade</span>
              </div>
              <div className="bg-accent-soft px-4 py-2 rounded-full">
                <span className="text-sm font-medium text-accent-foreground">Microwave safe</span>
              </div>
              <div className="bg-accent-soft px-4 py-2 rounded-full">
                <span className="text-sm font-medium text-accent-foreground">Oven safe</span>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary-hover text-primary-foreground font-light group"
              >
                Explorar Colección
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={heroBowl} 
                alt="Bowl Collection Hero Image" 
                className="w-full h-auto rounded-2xl shadow-large"
              />
            </div>
            {/* Background accent */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-primary-soft rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-accent-soft rounded-full opacity-30 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};