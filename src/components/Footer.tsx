import { Button } from "@/components/ui/button";
import { Mail, Linkedin } from "lucide-react";

const Footer = () => {
  const scrollToContact = () => {
    document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="py-16 bg-gradient-to-b from-muted/30 to-background border-t border-border/50">
      <div className="container mx-auto px-4">
        {/* Final CTA Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Prêt à remplir votre agenda avec des prospects qualifiés ?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Rejoignez les agences immobilières parisiennes qui ont choisi l'IA 
            pour dominer leur marché local.
          </p>
          <Button 
            onClick={scrollToContact}
            size="lg" 
            className="gradient-primary text-white hover:opacity-90 transition-all duration-300 font-semibold"
          >
            Démarrer Maintenant
          </Button>
        </div>

        {/* Divider */}
        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Logo and Copyright */}
            <div className="flex flex-col items-center md:items-start">
              <span className="text-2xl font-bold gradient-primary bg-clip-text text-transparent mb-2">
                CallAI
              </span>
              <p className="text-muted-foreground text-center md:text-left">
                2025 CallAI. Tous droits réservés.
              </p>
            </div>

            {/* Contact Information */}
            <div className="flex items-center gap-6">
              <a 
                href="mailto:contact@callai.fr" 
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={20} />
                <span>contact@callai.fr</span>
              </a>
              <a 
                href="https://linkedin.com/company/callai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom tagline */}
        <div className="text-center mt-8 pt-8 border-t border-border/50">
          <p className="text-sm text-muted-foreground">
            L'agence IA qui remplit les agendas immo à Paris avec prospects qualifiés sans effort
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;