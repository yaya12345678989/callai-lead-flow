import { ArrowRight, Phone, MessageSquare, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

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

    setIsLoading(true);
    console.log("Déclenchement du webhook GHL pour appel:", { fullName, email, phone });

    try {
      const ghlWebhookUrl = "https://services.leadconnectorhq.com/hooks/9VGGYVcuzJTnVAuZ3Dkf/webhook-trigger/6e48cdc6-5aa8-4b99-8d2b-ea13b928c8f3";
      
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
          source: "CallAI Landing Page",
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

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden">
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
            L'IA qui révolutionne
            <br />
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              votre immobilier
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transformez chaque lead entrant en opportunité qualifiée grâce à notre IA vocale 
            et nos chatbots intelligents, intégrés dans votre CRM.
          </p>

          {/* Quick CTA for impatient users */}
          <div className="mb-10">
            <Button 
              onClick={scrollToContact}
              size="lg" 
              className="bg-white text-black hover:bg-gray-200 transition-all duration-300 font-semibold"
            >
              Réserver mon appel maintenant
              <Phone className="ml-2" size={20} />
            </Button>
            <p className="text-gray-400 text-sm mt-2">
              Pour les impatients - Accès direct au formulaire ↓
            </p>
          </div>

          {/* Key benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Phone size={20} className="text-white" />
              <span className="text-white">IA Vocale 24/7</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <MessageSquare size={20} className="text-white" />
              <span className="text-white">Chatbots Intelligents</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <Settings size={20} className="text-white" />
              <span className="text-white">Intégration CRM</span>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">Leads</div>
              <div className="text-gray-400">Qualifiés automatiquement</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-400">Disponibilité</div>
            </div>
            <div className="text-center col-span-2 md:col-span-1">
              <div className="text-3xl font-bold text-white mb-2">Plus</div>
              <div className="text-gray-400">Productivité agents</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
