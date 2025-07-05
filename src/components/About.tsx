
import { Target, Eye, Heart, Lightbulb, Zap } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Intégrer les technologies d'IA les plus avancées pour optimiser les processus immobiliers."
    },
    {
      icon: Zap,
      title: "Efficacité",
      description: "Maximiser la productivité et la rapidité de traitement des leads pour nos clients."
    },
    {
      icon: Heart,
      title: "Personnalisation",
      description: "Offrir une expérience client sur mesure grâce à l'IA et l'intervention humaine."
    },
    {
      icon: Target,
      title: "Expertise",
      description: "Combiner la connaissance du marché immobilier avec la maîtrise technologique."
    }
  ];

  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            À propos de CallAI
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
              Révolutionner l'expérience immobilière en combinant l'expertise humaine avec 
              la puissance de l'intelligence artificielle pour offrir un service de qualification 
              de leads et de gestion client inégalé, rapide et personnalisé.
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
          <h3 className="text-3xl font-bold text-white mb-8">Nos Valeurs Fondamentales</h3>
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
              <div className="text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-gray-300">Automatisé</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-300">Disponible</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">95%</div>
              <div className="text-gray-300">Précision</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">+50%</div>
              <div className="text-gray-300">ROI</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
