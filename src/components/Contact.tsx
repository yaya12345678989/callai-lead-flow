
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import PhoneInputWithValidation from './PhoneInputWithValidation';
import { isValidPhoneNumber } from 'react-phone-number-input';

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

    if (!isValidPhoneNumber(phone)) {
      toast({
        title: "Erreur",
        description: "Veuillez entrer un numéro de téléphone valide",
        variant: "destructive",
      });
      return;
    }

    if (!email.includes('@')) {
      toast({
        title: "Erreur",
        description: "Veuillez entrer une adresse email valide",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    const payload = {
      fullName,
      email,
      phone,
      timestamp: new Date().toISOString(),
      source: "CallAI Landing Page - Contact Form",
      action: "book_call_request"
    };
    
    console.log("=== DÉBUT DEBUG WEBHOOK ===");
    console.log("Payload à envoyer:", JSON.stringify(payload, null, 2));
    console.log("Téléphone formaté:", phone);
    console.log("URL cible:", "https://services.leadconnectorhq.com/hooks/9VGGYVcuzJTnVAuZ3Dkf/webhook-trigger/490bc4f2-3ed8-4b8c-91be-5b51c6d2490f");

    try {
      const ghlWebhookUrl = "https://services.leadconnectorhq.com/hooks/9VGGYVcuzJTnVAuZ3Dkf/webhook-trigger/490bc4f2-3ed8-4b8c-91be-5b51c6d2490f";
      
      // Première tentative - avec CORS normal
      console.log("Tentative 1: Requête normale (avec CORS)");
      try {
        const response = await fetch(ghlWebhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
          body: JSON.stringify(payload),
        });
        
        console.log("Réponse reçue:", response.status, response.statusText);
        const responseText = await response.text();
        console.log("Contenu de la réponse:", responseText);
        
        if (response.ok) {
          toast({
            title: "Demande envoyée !",
            description: "Votre IA d'appel vous contacte dans moins de 10 secondes.",
          });
          setFullName("");
          setEmail("");
          setPhone("");
          return;
        }
      } catch (corsError) {
        console.log("Erreur CORS détectée, tentative avec no-cors:", corsError);
      }
      
      // Deuxième tentative - no-cors en fallback
      console.log("Tentative 2: Requête no-cors");
      const response = await fetch(ghlWebhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify(payload),
      });

      console.log("Requête no-cors envoyée, status:", response.status, response.type);
      
      toast({
        title: "Demande envoyée !",
        description: "Votre IA d'appel vous contacte dans moins de 10 secondes.",
      });

      // Reset form
      setFullName("");
      setEmail("");
      setPhone("");
    } catch (error) {
      console.error("=== ERREUR CRITIQUE ===");
      console.error("Type d'erreur:", error.constructor.name);
      console.error("Message d'erreur:", error.message);
      console.error("Erreur complète:", error);
      console.error("=== FIN ERREUR ===");
      
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Vérifiez la console pour plus de détails.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
      console.log("=== FIN DEBUG WEBHOOK ===");
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Testez Votre IA d'Appel Maintenant
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Remplissez ce formulaire et découvrez comment votre IA d'appel personnalisable 
            peut révolutionner la qualification de vos contacts immobiliers.
          </p>
        </div>

        {/* Call Booking Form */}
        <div className="max-w-md mx-auto">
          <Card className="bg-gray-800/60 backdrop-blur-sm border border-gray-600/30">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-white">
                Votre IA d'appel vous contacte
              </CardTitle>
              <p className="text-gray-200">
                En moins de 10 secondes après ce formulaire
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
                <div className="space-y-1">
                  <PhoneInputWithValidation
                    value={phone}
                    onChange={setPhone}
                    placeholder="Numéro de téléphone"
                  />
                </div>
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-white text-black hover:bg-gray-200 transition-all duration-300 font-semibold"
                  disabled={isLoading}
                >
                  {isLoading ? "Connexion IA en cours..." : "Démarrer l'appel"}
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
