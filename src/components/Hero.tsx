
import { ArrowRight, Phone, MessageSquare, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import PhoneInputWithValidation from './PhoneInputWithValidation';
import { isValidPhoneNumber } from 'react-phone-number-input';

const Hero = () => {
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
      source: "CallAI Landing Page - Hero Form",
      action: "book_call_request"
    };
    
    console.log("=== DÉBUT DEBUG WEBHOOK HERO ===");
    console.log("Payload à envoyer:", JSON.stringify(payload, null, 2));
    console.log("Téléphone formaté:", phone);

    try {
      const ghlWebhookUrl = "https://services.leadconnectorhq.com/hooks/9VGGYVcuzJTnVAuZ3Dkf/webhook-trigger/490bc4f2-3ed8-4b8c-91be-5b51c6d2490f";
      
      // Première tentative - avec CORS normal
      console.log("Hero - Tentative 1: Requête normale (avec CORS)");
      try {
        const response = await fetch(ghlWebhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
          body: JSON.stringify(payload),
        });
        
        console.log("Hero - Réponse reçue:", response.status, response.statusText);
        const responseText = await response.text();
        console.log("Hero - Contenu de la réponse:", responseText);
        
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
        console.log("Hero - Erreur CORS détectée, tentative avec no-cors:", corsError);
      }
      
      // Deuxième tentative - no-cors en fallback
      console.log("Hero - Tentative 2: Requête no-cors");
      const response = await fetch(ghlWebhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify(payload),
      });

      console.log("Hero - Requête no-cors envoyée");
      
      toast({
        title: "Demande envoyée !",
        description: "Votre IA d'appel vous contacte dans moins de 10 secondes.",
      });

      // Reset form
      setFullName("");
      setEmail("");
      setPhone("");
    } catch (error) {
      console.error("=== ERREUR CRITIQUE HERO ===");
      console.error("Type d'erreur:", error.constructor.name);
      console.error("Message d'erreur:", error.message);
      console.error("Erreur complète:", error);
      
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Vérifiez la console pour plus de détails.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
      console.log("=== FIN DEBUG WEBHOOK HERO ===");
    }
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden pt-32 md:pt-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-20 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-16 bg-white/10 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-1/3 left-1/3 w-2 h-24 bg-white/15 rounded-full animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Vendez plus. <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Qualifiez moins.</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            L'IA CallAI transforme vos contacts en opportunités qualifiées, 24/7.
          </p>

          {/* Quick CTA for impatient users - Centré */}
          <div className="mb-10 flex flex-col items-center">
            <Button 
              onClick={scrollToContact}
              size="lg" 
              className="bg-white text-black hover:bg-gray-200 transition-all duration-300 font-semibold"
            >
              Découvrez votre IA CallAI en action
              <Phone className="ml-2" size={20} />
            </Button>
            <p className="text-gray-400 text-sm mt-2">
              Accès direct au formulaire ↓
            </p>
          </div>

          {/* Stats - Remontés et stylés */}
          <div className="flex flex-wrap justify-center gap-8 mb-10">
            <div className="px-6 py-4 flex flex-col items-center min-w-[160px]">
              <div className="text-3xl font-bold text-white mb-1">Contacts</div>
              <div className="text-gray-300 text-base">Qualifiés automatiquement</div>
            </div>
            <div className="px-6 py-4 flex flex-col items-center min-w-[160px]">
              <div className="text-3xl font-bold text-white mb-1">24/7</div>
              <div className="text-gray-300 text-base">Disponibilité</div>
            </div>
            <div className="px-6 py-4 flex flex-col items-center min-w-[160px]">
              <div className="text-3xl font-bold text-white mb-1">Plus</div>
              <div className="text-gray-300 text-base">de temps pour la vente</div>
            </div>
          </div>

          {/* Key benefits - Centré */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Phone size={20} className="text-white" />
              <span className="text-white">Rapidité</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <MessageSquare size={20} className="text-white" />
              <span className="text-white">Précision</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Settings size={20} className="text-white" />
              <span className="text-white">Qualification</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
