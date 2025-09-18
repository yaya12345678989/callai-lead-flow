import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import PhoneInputWithValidation from './PhoneInputWithValidation';
import { isValidPhoneNumber } from 'react-phone-number-input';

const Hero = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleBookCall = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!firstName || !lastName || !email || !phone) {
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
      firstName,
      lastName,
      email,
      phone,
      timestamp: new Date().toISOString(),
      source: "CallAI Landing Page - Hero Form",
      action: "book_demo_request"
    };

    try {
      // Webhook URL placeholder - replace with your actual webhook
      const webhookURL = "https://services.leadconnectorhq.com/hooks/fMClzuWxliAsk6hZIFoG/webhook-trigger/c21ZDL0ISm3NcH8Q6mLu";
      
      const response = await fetch(webhookURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      toast({
        title: "Demande envoyée !",
        description: "Notre IA vous contacte dans les 10 secondes pour votre démo.",
      });

      // Reset form
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
    } catch (error) {
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
    <section className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background flex items-center justify-center relative overflow-hidden pt-20">
      {/* Subtle animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-16 bg-primary/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-12 bg-secondary/20 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-1/3 left-1/3 w-2 h-20 bg-primary/15 rounded-full animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="text-center lg:text-left">
              {/* Social Proof Badge */}
              <div className="inline-flex items-center gap-2 bg-muted/50 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
                <Star className="text-warning w-4 h-4 fill-current" />
                <span className="text-sm text-muted-foreground">Basé sur Grand Slam Offers d'Alex Hormozi</span>
              </div>

              {/* Main headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                L'agenda vide coûte cher ?{" "}
                <span className="gradient-primary bg-clip-text text-transparent">
                  CallAI garantit 10 RDV qualifiés sans effort
                </span>
              </h1>

              {/* Subheading */}
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
                IA vocale qualifie prospects, book RDV – Garanti ou remboursé
              </p>

              {/* Key benefits for busy decision makers */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
                <div className="bg-success/10 rounded-full px-4 py-2">
                  <span className="text-success font-medium">Temps gagné</span>
                </div>
                <div className="bg-primary/10 rounded-full px-4 py-2">
                  <span className="text-primary font-medium">CA boosté</span>
                </div>
                <div className="bg-secondary/10 rounded-full px-4 py-2">
                  <span className="text-secondary font-medium">Leads sérieux</span>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-large border border-border/50">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Transformez votre agenda
                </h2>
                <p className="text-muted-foreground">
                  Notre IA vous contacte dans les 10 secondes
                </p>
              </div>

              <form onSubmit={handleBookCall} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    type="text"
                    placeholder="Prénom"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="bg-background/50 border-border/50 focus:border-primary/50"
                    required
                  />
                  <Input
                    type="text"
                    placeholder="Nom"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="bg-background/50 border-border/50 focus:border-primary/50"
                    required
                  />
                </div>
                <Input
                  type="email"
                  placeholder="Email professionnel"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-background/50 border-border/50 focus:border-primary/50"
                  required
                />
                <PhoneInputWithValidation
                  value={phone}
                  onChange={setPhone}
                  placeholder="Numéro de téléphone"
                />
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full gradient-primary text-white hover:opacity-90 transition-all duration-300 font-semibold"
                  disabled={isLoading}
                >
                  {isLoading ? "Connexion IA en cours..." : "Démo Gratuite Maintenant"}
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </form>

              <p className="text-xs text-muted-foreground text-center mt-4">
                Garantie 10 RDV qualifiés en 3 mois ou remboursement total
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;