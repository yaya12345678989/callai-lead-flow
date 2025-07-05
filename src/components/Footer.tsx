
import { Mail, Phone, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-8 bg-white rounded-full"></div>
                <div className="w-2 h-12 bg-white rounded-full"></div>
                <div className="w-2 h-8 bg-white rounded-full"></div>
              </div>
              <span className="text-white text-xl font-bold">CallAI</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Révolutionnez votre activité immobilière avec l'intelligence artificielle. 
              Qualification automatique des leads, disponibilité 24/7, et intégration CRM complète.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Linkedin size={20} className="text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Twitter size={20} className="text-white" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">IA Vocale</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Chatbots SMS</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Intégration CRM</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Formation</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-gray-400">
                <Mail size={16} />
                <span>contact@callai.fr</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <Phone size={16} />
                <span>+33 1 XX XX XX XX</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 CallAI. Tous droits réservés.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Mentions légales
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Politique de confidentialité
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              CGV
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
