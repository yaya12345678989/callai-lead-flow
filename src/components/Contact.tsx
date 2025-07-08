
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleBookCall = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!fullName || !email || !phone) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    console.log("Déclenchement du webhook GHL pour appel:", { fullName, email, phone });

    try {
      const ghlWebhookUrl = "https://services.leadconnectorhq.com/hooks/9VGGYVcuzJTnVAuZ3Dkf/webhook-trigger/d99b9d60-7d8e-4521-9c33-c7a9743fc650";
      
      const response = await fetch(ghlWebhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify({
          fullName,
          email,
          phone,
          timestamp: new Date().toISOString(),
          source: "CallAI Landing Page - Contact Form",
          action: "book_call_request"
        }),
      });

      toast({
        title: "Demande envoyée !",
        description: "Nous vous appelons dans les prochaines minutes.",
      });

      // Reset form
      setFullName("");
      setEmail("");
      setPhone("");
    } catch (error) {
      console.error("Erreur lors du déclenchement du webhook:", error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Prêt à transformer votre agence ?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Réservez votre appel maintenant et découvrez comment CallAI peut révolutionner 
            la gestion de vos leads immobiliers.
          </p>
        </div>

        {/* Call Booking Form */}
        <div className="max-w-md mx-auto">
          <Card className="bg-gray-800/60 backdrop-blur-sm border border-gray-600/30">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-white">
                Réservez votre appel gratuit
              </CardTitle>
              <p className="text-gray-200">
                Nous vous appelons dans les 5 minutes qui suivent
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleBookCall} className="space-y-4">
                <Input
                  type="text"
                  placeholder="Nom complet"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="bg-gray-700/50 border-gray-600/50 text-white placeholder:text-gray-400 focus:border-white/50"
                  required
                />
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-700/50 border-gray-600/50 text-white placeholder:text-gray-400 focus:border-white/50"
                  required
                />
                <Input
                  type="tel"
                  placeholder="Numéro de téléphone (uniquement pour les appels)"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="bg-gray-700/50 border-gray-600/50 text-white placeholder:text-gray-400 focus:border-white/50"
                  required
                />
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-white text-black hover:bg-gray-200 transition-all duration-300 font-semibold"
                  disabled={isLoading}
                >
                  {isLoading ? "Démarrage en cours..." : "Démarrer l'appel"}
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
