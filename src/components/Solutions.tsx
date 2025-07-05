
import { ArrowRight, Check } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Solutions = () => {
  const workflows = [
    {
      title: "Workflow Leads Acheteurs",
      description: "Qualification automatique des prospects acheteurs avec collecte d'informations complètes",
      steps: [
        "Accueil et identification du besoin d'achat",
        "Qualification budget et financement",
        "Localisation et type de bien souhaités",
        "Temporalité du projet d'achat",
        "Prise de rendez-vous automatique",
        "Notification agent avec dossier complet"
      ],
      color: "from-blue-500/20 to-purple-500/20"
    },
    {
      title: "Workflow Leads Vendeurs",
      description: "Gestion optimale des demandes d'estimation avec qualification vendeur",
      steps: [
        "Identification motif estimation (vente/succession)",
        "Collecte informations propriétaire",
        "Adresse complète du bien à estimer",
        "Qualification temporalité de vente",
        "Planification visite expert",
        "Transfert lead qualifié vers agent"
      ],
      color: "from-green-500/20 to-teal-500/20"
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nos Workflows Intelligents
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Des processus de qualification sur mesure pour maximiser 
            l'efficacité de vos équipes commerciales.
          </p>
        </div>

        {/* Workflows */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {workflows.map((workflow, index) => (
            <Card key={index} className={`bg-gradient-to-br ${workflow.color} border-white/10 backdrop-blur-sm`}>
              <CardHeader>
                <CardTitle className="text-white text-2xl">{workflow.title}</CardTitle>
                <CardDescription className="text-gray-200 text-lg">
                  {workflow.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {workflow.steps.map((step, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mt-0.5">
                        <span className="text-white text-sm font-bold">{idx + 1}</span>
                      </div>
                      <p className="text-gray-200">{step}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Value Proposition */}
        <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h3 className="text-3xl font-bold text-white mb-6">
            Notre Proposition de Valeur Unique
          </h3>
          <blockquote className="text-2xl text-gray-200 italic mb-8 max-w-4xl mx-auto">
            "Nous transformons chaque lead entrant en une opportunité qualifiée et prête à convertir, 
            en automatisant intelligemment la première ligne de contact et en libérant vos agents 
            pour ce qu'ils font de mieux : vendre."
          </blockquote>
          <Button size="lg" className="bg-white text-black hover:bg-gray-200 transition-all duration-300">
            Découvrir notre approche
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
