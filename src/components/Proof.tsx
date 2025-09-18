import { Shield, TrendingUp, Clock, Building2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Proof = () => {
  return (
    <section id="proof" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Résultats qui parlent d'eux-mêmes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pas de faux témoignages. Des faits, des garanties et des résultats mesurables.
          </p>
        </div>

        {/* Hypothetical Case Study */}
        <Card className="bg-card/80 backdrop-blur-sm border-border/50 shadow-soft mb-12 max-w-4xl mx-auto">
          <CardHeader className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-success/10 rounded-full flex items-center justify-center">
              <Building2 className="text-success" size={32} />
            </div>
            <CardTitle className="text-2xl text-foreground">Cas Hypothétique : Agence Parisienne</CardTitle>
            <CardDescription className="text-lg">
              <strong>Imaginez :</strong> Une agence parisienne double son flux de prospects qualifiés en un mois, 
              générant un potentiel de commissions de <strong className="text-success">plus de 30 000€</strong>.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-success mb-2">x2</div>
                <div className="text-muted-foreground">Prospects qualifiés</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-success mb-2">30k€</div>
                <div className="text-muted-foreground">Potentiel commissions</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-success mb-2">30j</div>
                <div className="text-muted-foreground">Temps pour y arriver</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Bulletproof Guarantee */}
        <div className="bg-primary/5 backdrop-blur-sm rounded-2xl p-8 border border-primary/20 text-center mb-12">
          <div className="flex justify-center mb-6">
            <Shield className="text-primary w-20 h-20" />
          </div>
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Notre Garantie "Bulletproof"
          </h3>
          <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
            Notre engagement est total. Nous vous garantissons <strong>10 rendez-vous qualifiés en 3 mois</strong> 
            ou nous vous remboursons intégralement + extension gratuite. 
          </p>
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-8 py-4">
            <Shield className="text-primary w-6 h-6" />
            <span className="text-primary font-bold text-lg">
              Valeur maximale, risque minimum - C'est ça le Grand Slam
            </span>
          </div>
        </div>

        {/* Industry Benefits */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
              <TrendingUp className="text-primary w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-foreground mb-2">Avantage Concurrentiel</h4>
            <p className="text-muted-foreground">
              L'IA peut réduire le temps de qualification des leads de <strong>80%</strong>, 
              permettant à vos agents de se concentrer sur la signature de mandats.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-secondary/10 rounded-full flex items-center justify-center">
              <Clock className="text-secondary w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-foreground mb-2">Timing Parfait</h4>
            <p className="text-muted-foreground">
              Avec le rebond immobilier <strong>+12% prévu en 2025</strong>, 
              les agences avec des leads qualifiés domineront le marché parisien.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-success/10 rounded-full flex items-center justify-center">
              <Building2 className="text-success w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-foreground mb-2">Recession-Proof</h4>
            <p className="text-muted-foreground">
              Différenciez-vous des agences commodity grâce à la technologie. 
              Les clients payent pour la <strong>qualité et l'efficacité</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proof;