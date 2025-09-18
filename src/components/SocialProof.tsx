import { Phone, TrendingUp, Users } from "lucide-react";

const SocialProof = () => {
  const metrics = [
    {
      icon: Phone,
      value: "~95%",
      label: "appels automatisés",
      description: "Avantage concurrentiel immobilier"
    },
    {
      icon: TrendingUp,
      value: "~300%",
      label: "boost RDV",
      description: "Performance moyenne agences Paris"
    },
    {
      icon: Users,
      value: "+45%",
      label: "conversion leads",
      description: "Statistiques secteur immobilier"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Faites confiance aux <strong>entreprises leaders</strong> qui utilisent l'IA pour transformer leur prospection immobilière
          </p>
        </div>

        {/* Metrics Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 mx-auto mb-6 gradient-primary rounded-full flex items-center justify-center shadow-medium group-hover:scale-110 transition-transform duration-300">
                <metric.icon className="text-white" size={32} />
              </div>
              <div className="text-4xl font-bold gradient-primary bg-clip-text text-transparent mb-2">
                {metric.value}
              </div>
              <div className="text-xl font-semibold text-foreground mb-2">
                {metric.label}
              </div>
              <div className="text-muted-foreground text-sm">
                {metric.description}
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">
            L'immobilier parisien rebondit <strong>+12% en 2025</strong>. Les leads qualifiés sont la clé.
          </p>
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-6 py-3">
            <span className="text-primary font-semibold">
              Recession-proof : Différenciez-vous des agences commodity
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;