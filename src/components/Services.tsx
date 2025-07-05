
import { Phone, MessageSquare, Database, TrendingUp, Clock, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Phone,
      title: "IA Vocale Synthflow",
      description: "Prise en charge automatique des appels entrants avec qualification intelligente des prospects acheteurs et vendeurs.",
      features: ["Qualification budget et besoins", "Réponses aux questions fréquentes", "Prise de rendez-vous automatisée"]
    },
    {
      icon: MessageSquare,
      title: "Chatbot SMS Capri GPT",
      description: "Suivi des leads non répondants avec des campagnes de nurturing personnalisées et gestion des interactions textuelles.",
      features: ["Nurturing automatisé", "Interactions personnalisées", "Relance intelligente"]
    },
    {
      icon: Database,
      title: "CRM GoHighLevel",
      description: "Plateforme centrale pour la gestion complète du pipeline de leads avec workflows automatisés.",
      features: ["Pipeline automatisé", "Notifications en temps réel", "Suivi des interactions"]
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: "Augmentation des conversions",
      description: "Maximisez vos taux de conversion grâce à une qualification précise et une réponse immédiate."
    },
    {
      icon: Clock,
      title: "Gain de temps",
      description: "Libérez vos agents des tâches répétitives pour qu'ils se concentrent sur les ventes."
    },
    {
      icon: Users,
      title: "Expérience client optimisée",
      description: "Offrez une réponse 24/7 avec une personnalisation basée sur l'IA."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nos Solutions IA
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Une suite complète d'outils d'intelligence artificielle pour optimiser 
            votre gestion des leads immobiliers de A à Z.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="group bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <service.icon className="text-white" size={32} />
                </div>
                <CardTitle className="text-white text-xl">{service.title}</CardTitle>
                <CardDescription className="text-gray-300">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-400 flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-white mb-8">Pourquoi choisir CallAI ?</h3>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-white/20 to-white/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="text-white" size={40} />
              </div>
              <h4 className="text-xl font-bold text-white mb-4">{benefit.title}</h4>
              <p className="text-gray-300">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
