
import { Phone, MessageSquare } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Solutions = () => {
  return (
    <section id="solutions" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            La Frustration Que Vous Vivez Chaque Jour
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Vos agents perdent leur temps à qualifier des contacts non pertinents au lieu de vendre.
          </p>
        </div>

        {/* Problem & Solution */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Problem */}
          <Card className="bg-red-900/80 border-red-800/50">
            <CardHeader>
              <CardTitle className="text-white text-2xl flex items-center">
                <span className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center text-white font-bold mr-3">!</span>
                Ce Qui Ralentit Votre Croissance
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-white text-lg">
                Vos agents passent leurs journées au téléphone avec des prospects non qualifiés :
              </p>
              <ul className="space-y-3 text-gray-100">
                <li>• Appels sans budget défini ni échéance</li>
                <li>• Demandes d'information basiques et répétitives</li>
                <li>• Prospects pas prêts à acheter ou vendre</li>
                <li>• Temps perdu sur des contacts froids</li>
              </ul>
              <div className="bg-red-800/40 p-4 rounded-lg border border-red-700/30">
                <p className="text-white font-semibold">
                  Résultat : Moins de temps pour vendre = Moins de commissions
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Solution */}
          <Card className="bg-emerald-900/80 border-emerald-800/50">
            <CardHeader>
              <CardTitle className="text-white text-2xl flex items-center">
                <span className="w-8 h-8 bg-emerald-700 rounded-full flex items-center justify-center text-white font-bold mr-3">✓</span>
                Notre Solution IA
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-white text-lg">
                Notre IA d'appel personnalisable qualifie automatiquement tous vos contacts entrants :
              </p>
              <ul className="space-y-3 text-gray-100">
                <li>• Qualification budget et échéance en temps réel</li>
                <li>• Collecte des besoins précis et motivations</li>
                <li>• Seuls les contacts chauds vous sont transmis</li>
                <li>• Prise de RDV automatique dans votre agenda</li>
              </ul>
              <div className="bg-emerald-800/40 p-4 rounded-lg border border-emerald-700/30">
                <p className="text-white font-semibold">
                  Résultat : Vos agents consacrent leur temps aux prospects prêts à signer
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* What We Offer */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-white mb-8">
            Ce Que CallAI Vous Apporte Concrètement
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center space-x-4 bg-gray-800/50 p-6 rounded-lg border border-gray-700/50">
              <Phone className="text-blue-400" size={32} />
              <div className="text-left">
                <h4 className="text-white font-semibold text-lg">IA Vocale 24/7</h4>
                <p className="text-gray-300">Qualifiez automatiquement vos prospects par téléphone, même en dehors des heures de bureau.</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 bg-gray-800/50 p-6 rounded-lg border border-gray-700/50">
              <MessageSquare className="text-green-400" size={32} />
              <div className="text-left">
                <h4 className="text-white font-semibold text-lg">Chatbot SMS</h4>
                <p className="text-gray-300">Relancez et nourrissez vos contacts avec des conversations personnalisées par SMS.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
