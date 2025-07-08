
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

  const formatPhoneToE164 = (phoneNumber: string) => {
    // Nettoyer le numéro (enlever tous les caractères non numériques)
    const cleaned = phoneNumber.replace(/\D/g, '');
    
    // Si le numéro commence par 0, le remplacer par +33
    if (cleaned.startsWith('0')) {
      return '+33' + cleaned.substring(1);
    }
    
    // Si le numéro commence par 33, ajouter le +
    if (cleaned.startsWith('33')) {
      return '+' + cleaned;
    }
    
    // Si le numéro ne commence pas par + et n'est pas français, ajouter +33
    if (!cleaned.startsWith('+') && cleaned.length === 10) {
      return '+33' + cleaned.substring(1);
    }
    
    return cleaned.startsWith('+') ? cleaned : '+33' + cleaned;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setPhone(input);
  };

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
    
    const formattedPhone = formatPhoneToE164(phone);
    
    const payload = {
      fullName,
      email,
      phone: formattedPhone,
      timestamp: new Date().toISOString(),
      source: "CallAI Landing Page - Contact Form",
      action: "book_call_request"
    };
    
    console.log("=== DÉBUT DEBUG WEBHOOK ===");
    console.log("Payload à envoyer:", JSON.stringify(payload, null, 2));
    console.log("Téléphone formaté:", formattedPhone);
    console.log("URL cible:", "https://services.leadconnectorhq.com/hooks/9VGGYVcuzJTnVAuZ3Dkf/webhook-trigger/4e26e6eb-7e46-4664-ac80-84b54731138d");

    try {
      const ghlWebhookUrl = "https://services.leadconnectorhq.com/hooks/9VGGYVcuzJTnVAuZ3Dkf/webhook-trigger/4e26e6eb-7e46-4664-ac80-84b54731138d";
      
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
            description: "Nous vous appelons dans les prochaines minutes.",
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
        description: "Nous vous appelons dans les prochaines minutes. (Vérifiez GHL pour confirmation)",
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
                  placeholder="Numéro de téléphone (ex: 0623456789 → +33623456789)"
                  value={phone}
                  onChange={handlePhoneChange}
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
