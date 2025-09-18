import { ArrowRight, Users, TrendingUp, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background flex items-center justify-center relative overflow-hidden pt-20 md:pt-0">
      {/* Subtle animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-16 bg-primary/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-12 bg-secondary/20 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-1/3 left-1/3 w-2 h-20 bg-primary/15 rounded-full animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Social Proof Badge */}
          <div className="inline-flex items-center gap-2 bg-muted/50 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
            <Star className="text-warning w-4 h-4 fill-current" />
            <span className="text-sm text-muted-foreground">Construit sur les principes de la Grand Slam Offer d'Alex Hormozi</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            L'agenda de votre agence parisienne vide ?{" "}
            <span className="gradient-primary bg-clip-text text-transparent">
              CallAI vous garantit 10 RDV qualifiés pour vos mandats, sans effort.
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
            Nous utilisons une IA vocale et des campagnes sur mesure pour qualifier vos prospects 
            et remplir votre agenda. C'est garanti.
          </p>

          {/* Primary CTA */}
          <div className="mb-12">
            <Button 
              onClick={scrollToContact}
              size="lg" 
              className="gradient-primary text-white hover:opacity-90 transition-all duration-300 font-semibold text-lg px-8 py-6 shadow-large"
            >
              Réserver ma démo gratuite
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>

          {/* Stats showcasing results */}
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 shadow-soft border border-border/50">
              <div className="flex justify-center mb-4">
                <TrendingUp className="text-primary w-8 h-8" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">+300%</div>
              <div className="text-muted-foreground">Augmentation des RDV qualifiés</div>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 shadow-soft border border-border/50">
              <div className="flex justify-center mb-4">
                <Users className="text-secondary w-8 h-8" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">10</div>
              <div className="text-muted-foreground">RDV qualifiés garantis</div>
            </div>
            
            <div className="bg-card/50 backdrop-blur-sm rounded-xl p-6 shadow-soft border border-border/50">
              <div className="flex justify-center mb-4">
                <Star className="text-warning w-8 h-8 fill-current" />
              </div>
              <div className="text-3xl font-bold text-foreground mb-2">24/7</div>
              <div className="text-muted-foreground">Qualification automatique</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;