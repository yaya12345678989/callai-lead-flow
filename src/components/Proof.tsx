import { Shield, TrendingUp, Clock, CheckCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Proof = () => {
  return (
    <section id="proof" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Des résultats qui parlent d'eux-mêmes
          </h2>
        </div>

        {/* Case Study */}
        <Card className="bg-card/80 backdrop-blur-sm border-border/50 shadow-soft mb-12 max-w-4xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-foreground">Étude de Cas : Agence Parisienne</CardTitle>
            <CardDescription className="text-lg">
              Une agence partenaire a doublé son flux de prospects qualifiés en un mois, 
              générant un potentiel de commissions de <strong>plus de 30 000€</strong>.
            </CardDescription>
          </CardHeader>
        </Card>

        {/* Guarantee */}
        <div className="bg-primary/5 backdrop-blur-sm rounded-2xl p-8 border border-primary/20 text-center mb-12">
          <div className="flex justify-center mb-6">
            <Shield className="text-primary w-16 h-16" />
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Notre Garantie "Bulletproof"
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
            Notre engagement est total. Nous vous garantissons <strong>10 rendez-vous qualifiés en 3 mois</strong> 
            ou nous vous remboursons intégralement. C'est notre preuve que nous prenons tout le risque.
          </p>
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <TrendingUp className="text-primary w-12 h-12 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-foreground mb-2">+300%</h4>
            <p className="text-muted-foreground">Augmentation moyenne des RDV qualifiés</p>
          </div>
          <div className="text-center">
            <Clock className="text-secondary w-12 h-12 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-foreground mb-2">80%</h4>
            <p className="text-muted-foreground">Réduction du temps de qualification</p>
          </div>
          <div className="text-center">
            <CheckCircle className="text-success w-12 h-12 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-foreground mb-2">24/7</h4>
            <p className="text-muted-foreground">Disponibilité de l'IA</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proof;