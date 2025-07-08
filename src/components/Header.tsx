
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              <div className="w-2 h-8 bg-white rounded-full"></div>
              <div className="w-2 h-12 bg-white rounded-full"></div>
              <div className="w-2 h-8 bg-white rounded-full"></div>
            </div>
            <span className="text-white text-xl font-bold">CallAI</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-white/80 hover:text-white transition-colors">Services</a>
            <a href="#solutions" className="text-white/80 hover:text-white transition-colors">Solutions</a>
            <a href="#about" className="text-white/80 hover:text-white transition-colors">À propos</a>
            <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-black/95 backdrop-blur-lg border-b border-white/10">
            <nav className="flex flex-col p-4 space-y-4">
              <a href="#services" className="text-white/80 hover:text-white transition-colors py-2">Services</a>
              <a href="#solutions" className="text-white/80 hover:text-white transition-colors py-2">Solutions</a>
              <a href="#about" className="text-white/80 hover:text-white transition-colors py-2">À propos</a>
              <a href="#contact" className="text-white/80 hover:text-white transition-colors py-2">Contact</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
