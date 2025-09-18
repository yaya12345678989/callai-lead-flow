import { AlertTriangle, Clock, Users, TrendingDown } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Problem = () => {
  const problems = [
    {
      icon: TrendingDown,
      title: "Problème externe",
      description: "La baisse des transactions et le manque de mandats exclusifs frappe votre agence.",
      points: [
        "Baisse du nombre de mandats exclusifs",
        "Agenda vide de rendez-vous qualifiés", 
        "Temps perdu avec des prospects non-sérieux",
        "Concurrence accrue sur le marché parisien"
      ]
    },
    {
      icon: Clock,
      title: "Problème interne", 
      description: "La frustration et la peur de ne pas atteindre vos objectifs de vente.",
      points: [
        "Frustration de travailler dur sans résultats",
        "Sentiment d'être dépassé par un marché imprévisible",
        "Peur de l'incertitude du marché immobilier",
        "Stress constant lié aux objectifs non atteints"
      ]
    },
    {
      icon: Users,
      title: "Problème philosophique",
      description: "Vous méritez de passer votre temps à signer des mandats, pas à gaspiller votre énergie.",
      points: [
        "Votre expertise mérite d'être rémunérée",
        "La qualification ne devrait pas être votre travail principal",
        "Vous devriez vous concentrer sur la vente",
        "Votre temps vaut plus que la prospection basique"
      ]
    }
  ];

  return (
    <section id="problem" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-destructive/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
            <AlertTriangle className="text-destructive w-5 h-5" />
            <span className="text-sm text-destructive font-medium">Le Problème Que Vous Vivez Chaque Jour</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Votre temps est gaspillé sur la qualification
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Vos agents perdent leur temps à qualifier des contacts non pertinents au lieu de vendre. 
            Cette réalité vous empêche d'atteindre votre véritable potentiel.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {problems.map((problem, index) => (
            <Card key={index} className="bg-card/80 backdrop-blur-sm border-border/50 shadow-soft hover:shadow-medium transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-destructive/10 rounded-full flex items-center justify-center">
                  <problem.icon className="text-destructive" size={32} />
                </div>
                <CardTitle className="text-foreground text-xl">{problem.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {problem.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {problem.points.map((point, idx) => (
                    <li key={idx} className="text-muted-foreground flex items-start">
                      <div className="w-2 h-2 bg-destructive rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      {point}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Impact Statement */}
        <div className="bg-destructive/5 backdrop-blur-sm rounded-2xl p-8 border border-destructive/20 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Le Coût Réel de Cette Situation
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
            Pendant que vos agents passent 80% de leur temps à qualifier des prospects non-qualifiés, 
            vos concurrents signent les mandats exclusifs que vous pourriez obtenir.
          </p>
          <div className="inline-flex items-center gap-2 bg-destructive/10 rounded-full px-6 py-3">
            <AlertTriangle className="text-destructive w-5 h-5" />
            <span className="text-destructive font-semibold">
              Résultat : Moins de temps pour vendre = Moins de commissions
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;