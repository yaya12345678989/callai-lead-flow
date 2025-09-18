import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border/50 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
              CallAI
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('solutions')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Solutions
            </button>
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              How it Works
            </button>
            <button 
              onClick={() => scrollToSection('cta')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <Button 
              onClick={() => scrollToSection('cta')}
              className="gradient-primary text-white hover:opacity-90 transition-all duration-300"
            >
              Réserver Démo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-sm border-t border-border/50">
            <div className="px-4 py-4 space-y-4">
              <button 
                onClick={() => scrollToSection('solutions')}
                className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors"
              >
                Solutions
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors"
              >
                How it Works
              </button>
              <button 
                onClick={() => scrollToSection('cta')}
                className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </button>
              <Button 
                onClick={() => scrollToSection('cta')}
                className="w-full gradient-primary text-white hover:opacity-90 transition-all duration-300"
              >
                Réserver Démo
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;