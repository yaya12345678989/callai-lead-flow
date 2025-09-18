import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "L'IA s'intègre-t-elle avec notre CRM existant ?",
      answer: "Oui, seamless. Notre système s'intègre parfaitement avec les principaux CRM immobiliers (Efficity, Hektor, etc.) et peut également fonctionner avec des outils généralistes comme HubSpot ou Salesforce."
    },
    {
      question: "L'IA sonne-t-elle humaine au téléphone ?",
      answer: "Oui, absolument naturelle. Notre technologie vocale avancée utilise des voix françaises natives et des conversations fluides. Vos prospects ne font pas la différence avec un agent humain."
    },
    {
      question: "Peut-on faire confiance à l'IA pour la qualification ?",
      answer: "Testée et fiable. Notre IA est formée spécifiquement sur les critères de qualification immobilière : budget, échéance, motivation, situation géographique. Elle est plus constante qu'un humain et ne fait jamais d'erreur de fatigue."
    },
    {
      question: "Combien de temps pour développer et mettre en place ?",
      answer: "1-2 semaines maximum. Nous configurons les campagnes, formons l'IA sur votre persona, intégrons votre agenda et testons le système. Vous commencez à recevoir des prospects qualifiés dès la 3ème semaine."
    },
    {
      question: "Quel support si on a des questions ou problèmes ?",
      answer: "Support 24/7 inclus. Équipe dédiée disponible par téléphone, email et chat. Nous suivons vos résultats de près et optimisons constamment pour maximiser votre ROI."
    },
    {
      question: "Que se passe-t-il si ça ne marche pas pour nous ?",
      answer: "Garantie remboursement total. Si vous n'obtenez pas 10 RDV qualifiés en 3 mois, nous vous remboursons intégralement ET offrons 3 mois supplémentaires gratuits. Aucune excuse, aucune condition cachée."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Questions Fréquentes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tout ce que les directeurs d'agences immobilières parisiennes veulent savoir 
            avant de transformer leur prospection avec l'IA.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card/50 backdrop-blur-sm rounded-lg border border-border/50 px-6 shadow-soft hover:shadow-medium transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA after FAQ */}
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">
            D'autres questions ? Parlons-en directement lors de votre démo gratuite.
          </p>
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-6 py-3">
            <span className="text-primary font-semibold">
              Réponses personnalisées à votre situation d'agence
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;