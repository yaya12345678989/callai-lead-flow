
import { ArrowRight, Phone, MessageSquare } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Solutions = () => {
  const [webhookUrl, setWebhookUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleTestAgent = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!webhookUrl) {
      toast({
        title: "Erreur",
        description: "Veuillez entrer votre webhook URL pour tester notre agent vocal",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    console.log("Déclenchement du webhook pour test agent vocal:", webhookUrl);

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify({
          timestamp: new Date().toISOString(),
          test_type: "agent_vocal_callai",
          message: "Test de l'agent vocal CallAI - Prise de rendez-vous automatique",
          triggered_from: window.location.origin,
        }),
      });

      toast({
        title: "Agent Vocal Activé",
        description: "Notre IA va vous appeler et vous booker un rendez-vous pour discuter de votre business",
      });
    } catch (error) {
      console.error("Erreur lors du déclenchement du webhook:", error);
      toast({
        title: "Erreur",
        description: "Impossible de déclencher l'agent vocal. Vérifiez votre URL webhook et réessayez.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

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
          <Card className="bg-red-600 border-red-500/50 backdrop-blur-sm">
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
          <Card className="bg-green-600 border-green-500/50 backdrop-blur-sm">
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
        <div className="text-center mb-12">
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

        {/* CTA Section */}
        <div className="text-center bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-600/30">
          <h3 className="text-3xl font-bold text-white mb-4">
            Testez Notre Agent Vocal Maintenant
          </h3>
          <p className="text-xl text-gray-200 mb-8">
            Notre IA va vous appeler et vous booker un rendez-vous pour discuter de votre business
          </p>
          
          <form onSubmit={handleTestAgent} className="max-w-md mx-auto space-y-4">
            <Input
              type="url"
              placeholder="Votre URL webhook Zapier"
              value={webhookUrl}
              onChange={(e) => setWebhookUrl(e.target.value)}
              className="bg-gray-700/50 border-gray-600/50 text-white placeholder:text-gray-400 focus:border-white/50"
              required
            />
            <Button 
              type="submit" 
              size="lg" 
              className="w-full bg-white text-black hover:bg-gray-200 transition-all duration-300 font-semibold"
              disabled={isLoading}
            >
              {isLoading ? "Activation en cours..." : "Tester l'Agent Vocal"}
              <Phone className="ml-2" size={20} />
            </Button>
          </form>
          
          <p className="text-sm text-gray-400 mt-4">
            Créez un webhook Zapier et collez l'URL ci-dessus. Notre agent vous contactera automatiquement.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
