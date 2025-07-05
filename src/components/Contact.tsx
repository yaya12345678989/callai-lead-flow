
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Prêt à transformer votre agence ?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Contactez-nous pour découvrir comment CallAI peut révolutionner 
            la gestion de vos leads immobiliers.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white text-2xl">Demander une démonstration</CardTitle>
              <CardDescription className="text-gray-300">
                Remplissez le formulaire et nous vous recontactons sous 24h
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <Input 
                  placeholder="Prénom" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
                <Input 
                  placeholder="Nom" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
              </div>
              <Input 
                placeholder="Email professionnel" 
                type="email"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Input 
                placeholder="Téléphone" 
                type="tel"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Input 
                placeholder="Nom de votre agence" 
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Textarea 
                placeholder="Parlez-nous de vos besoins..." 
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 min-h-[120px]"
              />
              <Button size="lg" className="w-full bg-white text-black hover:bg-gray-200 transition-all duration-300">
                Demander ma démo gratuite
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contactez notre équipe</h3>
              <p className="text-gray-300 text-lg mb-8">
                Notre équipe d'experts est là pour vous accompagner dans votre transformation digitale.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-white font-semibold">Email</p>
                  <p className="text-gray-300">contact@callai.fr</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-white font-semibold">Téléphone</p>
                  <p className="text-gray-300">+33 1 XX XX XX XX</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-white font-semibold">Adresse</p>
                  <p className="text-gray-300">Paris, France</p>
                </div>
              </div>
            </div>

            {/* CTA Cards */}
            <div className="grid gap-4 mt-8">
              <Card className="bg-gradient-to-r from-white/10 to-white/5 border-white/10 p-6 hover:from-white/15 hover:to-white/10 transition-all duration-300 cursor-pointer">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-white font-semibold mb-2">Démo personnalisée</h4>
                    <p className="text-gray-300 text-sm">Découvrez CallAI en action</p>
                  </div>
                  <ArrowRight className="text-white" size={20} />
                </div>
              </Card>

              <Card className="bg-gradient-to-r from-white/10 to-white/5 border-white/10 p-6 hover:from-white/15 hover:to-white/10 transition-all duration-300 cursor-pointer">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-white font-semibold mb-2">Audit gratuit</h4>
                    <p className="text-gray-300 text-sm">Analysons vos besoins</p>
                  </div>
                  <ArrowRight className="text-white" size={20} />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
