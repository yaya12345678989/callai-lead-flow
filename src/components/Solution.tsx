import { Phone, Bot, Calendar, CheckCircle, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Solution = () => {
  const steps = [
    {
      number: "01",
      icon: Phone,
      title: "Le Lead Magnétique",
      description: "Nous mettons en place des campagnes marketing ciblées pour attirer des propriétaires à Paris et en proche banlieue, intéressés par une estimation gratuite de leur bien.",
      features: [
        "Campagnes Facebook et Google Ads ciblées",
        "Landing pages optimisées pour la conversion", 
        "Lead magnets attractifs (estimations gratuites)",
        "Ciblage géographique précis sur Paris et banlieue"
      ]
    },
    {
      number: "02", 
      icon: Bot,
      title: "La Qualification Intelligente par IA",
      description: "Notre IA vocale, formée sur les questions essentielles (budget, timeline, motivation), appelle et qualifie instantanément chaque prospect. Elle élimine 90% des non-sérieux.",
      features: [
        "Questions de qualification automatisées",
        "Détection des motivations réelles de vente",
        "Évaluation du budget et de l'échéance",
        "Tri intelligent des prospects chauds/froids"
      ]
    },
    {
      number: "03",
      icon: Calendar, 
      title: "Le Rendez-vous Qualifié, Garanti",
      description: "Les prospects qui ont un projet réel sont automatiquement inscrits dans votre agenda, avec tous les détails de la qualification. Vous n'avez plus qu'à vous concentrer sur la vente.",
      features: [
        "Intégration directe avec votre agenda",
        "Fiche prospect complète pré-remplie",
        "Notifications en temps réel",
        "Suivi automatique des rendez-vous"
      ]
    }
  ];

  return (
    <section id="solution" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-success/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
            <CheckCircle className="text-success w-5 h-5" />
            <span className="text-sm text-success font-medium">Notre Solution IA</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            3 étapes pour transformer votre agence
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Notre système automatisé prend en charge toute la qualification, 
            vous laissant vous concentrer uniquement sur ce que vous faites de mieux : vendre.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-12 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="absolute left-8 top-20 w-0.5 h-20 bg-gradient-to-b from-primary to-secondary opacity-30 hidden lg:block"></div>
              )}
              
              <div className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Step number and icon */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="w-16 h-16 gradient-primary rounded-full flex items-center justify-center shadow-large">
                      <step.icon className="text-white" size={32} />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center shadow-medium">
                      <span className="text-white text-sm font-bold">{step.number}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <Card className="flex-1 bg-card/80 backdrop-blur-sm border-border/50 shadow-soft hover:shadow-medium transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-2xl text-foreground">{step.title}</CardTitle>
                    <CardDescription className="text-lg text-muted-foreground">
                      {step.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {step.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="text-success w-5 h-5 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>

        {/* Results Preview */}
        <div className="bg-success/5 backdrop-blur-sm rounded-2xl p-8 border border-success/20 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Le Résultat Pour Votre Agence
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
            Vos agents consacrent enfin leur temps aux prospects prêts à signer, 
            pendant que notre IA gère automatiquement toute la qualification en amont.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="inline-flex items-center gap-2 bg-success/10 rounded-full px-6 py-3">
              <CheckCircle className="text-success w-5 h-5" />
              <span className="text-success font-semibold">Plus de temps pour vendre</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-success/10 rounded-full px-6 py-3">
              <CheckCircle className="text-success w-5 h-5" />
              <span className="text-success font-semibold">Prospects pré-qualifiés</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-success/10 rounded-full px-6 py-3">
              <CheckCircle className="text-success w-5 h-5" />
              <span className="text-success font-semibold">ROI immédiat</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solution;