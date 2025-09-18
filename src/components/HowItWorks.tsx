import { Target, Bot, Calendar, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: Target,
      title: "Lead Magnétique",
      description: "Nous mettons en place des campagnes marketing ciblées pour attirer des propriétaires à Paris et en proche banlieue, intéressés par une estimation gratuite de leur bien.",
      details: [
        "Ads Facebook & Google ciblées Paris",
        "Landing pages haute conversion",
        "Lead magnets attractifs (estimations)",
        "Ciblage géo précis banlieue"
      ]
    },
    {
      number: "02", 
      icon: Bot,
      title: "Qualification IA",
      description: "Notre IA vocale, formée sur les questions essentielles (budget, timeline, motivation), appelle et qualifie instantanément chaque prospect. Elle élimine 90% des non-sérieux.",
      details: [
        "Questions budget/timeline automatisées",
        "Détection motivations réelles",
        "Évaluation projet immobilier",
        "Tri intelligent chauds/froids"
      ]
    },
    {
      number: "03",
      icon: Calendar, 
      title: "RDV Garanti",
      description: "Les prospects qui ont un projet réel sont automatiquement inscrits dans votre agenda, avec tous les détails de la qualification. Vous n'avez plus qu'à vous concentrer sur la vente.",
      details: [
        "Intégration agenda directe",
        "Fiche prospect pré-remplie",
        "Notifications temps réel",
        "Suivi anti-no-show automatique"
      ]
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Comment ça marche ? 3 étapes simples
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Notre système automatisé transforme les visiteurs anonymes en rendez-vous qualifiés dans votre agenda, 
            sans aucun effort de votre part.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection arrow */}
              {index < steps.length - 1 && (
                <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-full z-10 hidden lg:block">
                  <ArrowRight className="text-primary w-8 h-8 rotate-90" />
                </div>
              )}
              
              <div className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                {/* Visual Element */}
                <div className="flex-shrink-0 lg:w-1/3">
                  <div className="relative">
                    <div className="w-24 h-24 gradient-primary rounded-full flex items-center justify-center shadow-large mx-auto">
                      <step.icon className="text-white" size={40} />
                    </div>
                    <div className="absolute -top-2 -right-2 w-12 h-12 bg-secondary rounded-full flex items-center justify-center shadow-medium">
                      <span className="text-white text-lg font-bold">{step.number}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <Card className="flex-1 lg:w-2/3 bg-card/80 backdrop-blur-sm border-border/50 shadow-soft hover:shadow-medium transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-2xl text-foreground">{step.title}</CardTitle>
                    <CardDescription className="text-lg text-muted-foreground leading-relaxed">
                      {step.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-3">
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className="w-2 h-2 gradient-primary rounded-full flex-shrink-0"></div>
                          <span className="text-muted-foreground">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>

        {/* Final Result */}
        <div className="mt-16 text-center">
          <div className="bg-success/5 backdrop-blur-sm rounded-2xl p-8 border border-success/20 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Résultat Final
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Votre équipe se concentre uniquement sur ce qu'elle fait de mieux : 
              <strong> signer des mandats avec des prospects chauds et qualifiés</strong>.
            </p>
            <div className="inline-flex items-center gap-2 bg-success/10 rounded-full px-6 py-3">
              <Calendar className="text-success w-5 h-5" />
              <span className="text-success font-semibold">
                10 RDV qualifiés garantis en 3 mois
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;