
import { Phone, MessageSquare } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Solutions = () => {
  return (
    <section id="solutions" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Le Problème que Nous Résolvons
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Vos agents perdent du temps à qualifier des leads non pertinents au lieu de vendre.
          </p>
        </div>

        {/* Problem & Solution */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Problem */}
          <Card className="bg-red-600 border-red-500/50">
            <CardHeader>
              <CardTitle className="text-white text-2xl flex items-center">
                <span className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold mr-3">!</span>
                Le Problème
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-white text-lg">
                Vos agents passent 70% de leur temps au téléphone avec des prospects non qualifiés :
              </p>
              <ul className="space-y-3 text-gray-100">
                <li>• Calls sans budget défini</li>
                <li>• Demandes d'information basiques</li>
                <li>• Prospects pas prêts à acheter/vendre</li>
                <li>• Perte de temps sur des leads froids</li>
              </ul>
              <div className="bg-red-500/40 p-4 rounded-lg border border-red-400/30">
                <p className="text-white font-semibold">
                  Résultat : Moins de temps pour vendre = Moins de commissions
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Solution */}
          <Card className="bg-green-600 border-green-500/50">
            <CardHeader>
              <CardTitle className="text-white text-2xl flex items-center">
                <span className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mr-3">✓</span>
                Notre Solution
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-white text-lg">
                Notre IA vocale qualifie automatiquement tous vos leads entrants :
              </p>
              <ul className="space-y-3 text-gray-100">
                <li>• Qualification budget en temps réel</li>
                <li>• Collecte des besoins précis</li>
                <li>• Prise de RDV automatique</li>
                <li>• Seuls les leads chauds vous sont transmis</li>
              </ul>
              <div className="bg-green-500/40 p-4 rounded-lg border border-green-400/30">
                <p className="text-white font-semibold">
                  Résultat : 100% de votre temps sur des prospects qualifiés
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* What We Offer */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-white mb-8">
            Ce Que Nous Vous Offrons
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center space-x-4 bg-gray-800/50 p-6 rounded-lg border border-gray-700/50">
              <Phone className="text-blue-400" size={32} />
              <div className="text-left">
                <h4 className="text-white font-semibold text-lg">IA Vocale 24/7</h4>
                <p className="text-gray-300">Qualification automatique par téléphone</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 bg-gray-800/50 p-6 rounded-lg border border-gray-700/50">
              <MessageSquare className="text-green-400" size={32} />
              <div className="text-left">
                <h4 className="text-white font-semibold text-lg">Chatbot SMS</h4>
                <p className="text-gray-300">Suivi intelligent des prospects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
