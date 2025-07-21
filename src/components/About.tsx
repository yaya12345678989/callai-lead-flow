
import { Target, Eye, Heart, Lightbulb, Zap } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation Immobilière",
      description: "Intégrer les technologies d'IA les plus avancées pour révolutionner la prospection immobilière."
    },
    {
      icon: Zap,
      title: "Efficacité Commerciale",
      description: "Maximiser le temps de vente de vos agents en éliminant les tâches de qualification répétitives."
    },
    {
      icon: Heart,
      title: "Personnalisation Agence",
      description: "Adapter notre IA aux spécificités de votre agence et à votre approche commerciale unique."
    },
    {
      icon: Target,
      title: "Expertise Immobilière et Technologique.",
      description: "Combiner la connaissance approfondie du marché immobilier avec la maîtrise technologique."
    }
  ];

  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            CallAI : Votre Partenaire IA
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Pionniers de l'immobilier augmenté par l'intelligence artificielle
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/10">
            <div className="flex items-center mb-6">
              <Target className="text-white mr-4" size={32} />
              <h3 className="text-2xl font-bold text-white">Notre Mission</h3>
            </div>
            <p className="text-gray-200 text-lg leading-relaxed">
              Notre mission : Révolutionner l'immobilier en qualifiant vos contacts avec l'IA, pour un service client rapide, personnalisé et inégalé.
            </p>
          </div>

          <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/10">
            <div className="flex items-center mb-6">
              <Eye className="text-white mr-4" size={32} />
              <h3 className="text-2xl font-bold text-white">Notre Vision</h3>
            </div>
            <p className="text-gray-200 text-lg leading-relaxed">
              Devenir le leader de l'immobilier augmenté par l'IA, en établissant de nouveaux 
              standards d'efficacité, de satisfaction client et de croissance pour les agences 
              immobilières.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-white mb-8">Nos Valeurs Spécifiques à l'Immobilier</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-white/20 to-white/10 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <value.icon className="text-white" size={32} />
              </div>
              <h4 className="text-xl font-bold text-white mb-4">{value.title}</h4>
              <p className="text-gray-300">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
      <div className="mt-20 bg-gradient-to-r from-white/5 to-white/10 rounded-2xl p-8 border border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-gray-300 mb-2">Automatisation</div>
              <div className="text-4xl font-bold text-white">Totale</div>
            </div>
            <div>
              <div className="text-gray-300 mb-2">Disponiblité</div>
              <div className="text-4xl font-bold text-white">24/7</div>
            </div>
            <div>
              <div className="text-gray-300 mb-2">Qualification</div>
              <div className="text-4xl font-bold text-white">Précise</div>
            </div>
            <div>
              <div className="text-gray-300 mb-2">Retour sur investissement</div>
              <div className="text-4xl font-bold text-white">Boosté</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
