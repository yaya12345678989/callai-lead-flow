import { TrendingUp, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Offer = () => {
  const scrollToContact = () => {
    document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="solutions" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Cette solution est-elle faite pour votre agence ?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez si notre système d'IA peut transformer votre agence immobilière parisienne 
            en machine à génération de mandats.
          </p>
        </div>

        {/* Value Proposition Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-5xl mx-auto">
          <div className="text-center bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50 shadow-soft">
            <TrendingUp className="text-success w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-3">ROI Immédiat</h3>
            <p className="text-muted-foreground">
              Investissement rentabilisé dès votre <strong>premier mandat</strong> signé 
              grâce à notre système automatisé.
            </p>
          </div>

          <div className="text-center bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50 shadow-soft">
            <Shield className="text-primary w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-3">Risque Zéro</h3>
            <p className="text-muted-foreground">
              Garantie <strong>10 RDV qualifiés en 3 mois</strong> ou remboursement intégral. 
              Nous prenons tous les risques.
            </p>
          </div>

          <div className="text-center bg-card/50 backdrop-blur-sm rounded-xl p-6 border border-border/50 shadow-soft">
            <Clock className="text-secondary w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-foreground mb-3">Gain de Temps</h3>
            <p className="text-muted-foreground">
              Votre équipe se concentre sur la <strong>signature de mandats</strong>, 
              l'IA gère la qualification.
            </p>
          </div>
        </div>

        {/* Main Value Section */}
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-primary/20 text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
            Parlons de votre situation spécifique
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Notre solution est un <strong>investissement stratégique</strong> qui se rentabilise dès votre premier mandat signé. 
            Découvrons ensemble comment cela s'intègre parfaitement à votre agence parisienne et votre situation actuelle.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="bg-success/10 rounded-full px-6 py-2">
              <span className="text-success font-medium">Évaluation gratuite</span>
            </div>
            <div className="bg-primary/10 rounded-full px-6 py-2">
              <span className="text-primary font-medium">Stratégie personnalisée</span>
            </div>
            <div className="bg-secondary/10 rounded-full px-6 py-2">
              <span className="text-secondary font-medium">Mise en place rapide</span>
            </div>
          </div>

          <Button 
            onClick={scrollToContact}
            size="lg" 
            className="gradient-primary text-white hover:opacity-90 transition-all duration-300 font-semibold text-lg px-8 py-6 shadow-large"
          >
            Découvrir si c'est fait pour vous
          </Button>
        </div>

        {/* Perfect For Section */}
        <div className="text-center">
          <h4 className="text-xl font-bold text-foreground mb-6">
            Parfait pour les agences qui veulent :
          </h4>
          <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            <div className="flex items-center gap-3 bg-card/30 rounded-lg p-4">
              <div className="w-2 h-2 gradient-primary rounded-full"></div>
              <span className="text-muted-foreground">Maximiser le temps des agents sur la vente</span>
            </div>
            <div className="flex items-center gap-3 bg-card/30 rounded-lg p-4">
              <div className="w-2 h-2 gradient-primary rounded-full"></div>
              <span className="text-muted-foreground">Avoir un flux prévisible de prospects qualifiés</span>
            </div>
            <div className="flex items-center gap-3 bg-card/30 rounded-lg p-4">
              <div className="w-2 h-2 gradient-primary rounded-full"></div>
              <span className="text-muted-foreground">Se différencier de la concurrence parisienne</span>
            </div>
            <div className="flex items-center gap-3 bg-card/30 rounded-lg p-4">
              <div className="w-2 h-2 gradient-primary rounded-full"></div>
              <span className="text-muted-foreground">Augmenter le CA sans augmenter les coûts</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;