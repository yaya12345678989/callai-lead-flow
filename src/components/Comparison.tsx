import { X, Check, Clock, Bot } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Comparison = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ancienne méthode vs Nouvelle ère
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pendant que vos concurrents perdent du temps, vous dominez le marché parisien
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Old Way */}
          <Card className="bg-destructive/5 border-destructive/20 shadow-soft">
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-destructive/10 rounded-full flex items-center justify-center">
                <Clock className="text-destructive" size={32} />
              </div>
              <CardTitle className="text-2xl text-foreground flex items-center justify-center gap-2">
                <X className="text-destructive w-6 h-6" />
                Méthode Traditionnelle
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <X className="text-destructive w-5 h-5 mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Appels manuels chronophages</span>
                </div>
                <div className="flex items-start gap-3">
                  <X className="text-destructive w-5 h-5 mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Temps perdu avec des non-sérieux</span>
                </div>
                <div className="flex items-start gap-3">
                  <X className="text-destructive w-5 h-5 mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Qualification aléatoire et inefficace</span>
                </div>
                <div className="flex items-start gap-3">
                  <X className="text-destructive w-5 h-5 mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Agenda vide, CA en baisse</span>
                </div>
                <div className="flex items-start gap-3">
                  <X className="text-destructive w-5 h-5 mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Agents démotivés et frustrés</span>
                </div>
              </div>
              
              <div className="bg-destructive/10 p-4 rounded-lg border border-destructive/20 mt-6">
                <p className="text-destructive font-semibold text-center">
                  Résultat : Vous perdez mandats et commissions
                </p>
              </div>
            </CardContent>
          </Card>

          {/* New Way */}
          <Card className="bg-success/5 border-success/20 shadow-soft">
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 gradient-primary rounded-full flex items-center justify-center shadow-medium">
                <Bot className="text-white" size={32} />
              </div>
              <CardTitle className="text-2xl text-foreground flex items-center justify-center gap-2">
                <Check className="text-success w-6 h-6" />
                Méthode CallAI
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Check className="text-success w-5 h-5 mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">IA done-for-you, zéro effort</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-success w-5 h-5 mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Qualification automatique 24/7</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-success w-5 h-5 mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Seuls les prospects chauds arrivent</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-success w-5 h-5 mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Agenda plein, CA maximisé</span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="text-success w-5 h-5 mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">Équipe focalisée sur la vente</span>
                </div>
              </div>
              
              <div className="bg-success/10 p-4 rounded-lg border border-success/20 mt-6">
                <p className="text-success font-semibold text-center">
                  Résultat : Résultats garantis ou remboursé
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Transition */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-6">
            La différence ? Une agence travaille dur, l'autre travaille intelligent.
          </p>
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-6 py-3">
            <Bot className="text-primary w-5 h-5" />
            <span className="text-primary font-semibold">
              Découvrez comment CallAI transforme votre agence
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;