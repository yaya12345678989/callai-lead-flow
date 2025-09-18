import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Comment l'IA qualifie-t-elle les prospects ?",
      answer: "Notre IA utilise un script personnalisé pour votre agence, posant les bonnes questions sur le budget, l'échéance, la motivation et les besoins spécifiques. Elle analyse les réponses en temps réel pour déterminer la qualité du prospect."
    },
    {
      question: "Combien de temps faut-il pour voir les premiers résultats ?",
      answer: "Les premières campagnes sont lancées sous 48h. Vous commencez à recevoir des prospects qualifiés dès la première semaine, avec une montée en puissance complète sous 30 jours."
    },
    {
      question: "L'IA peut-elle s'adapter à notre façon de travailler ?",
      answer: "Absolument. L'IA est entièrement personnalisable selon vos critères de qualification, votre vocabulaire et vos processus internes. Elle s'intègre parfaitement à vos outils existants."
    },
    {
      question: "Que se passe-t-il si nous n'obtenons pas 10 RDV en 3 mois ?",
      answer: "Nous vous remboursons intégralement. Notre garantie est sans condition - si vous n'obtenez pas les résultats promis, vous récupérez votre investissement."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Questions Fréquentes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tout ce que vous devez savoir sur notre solution IA pour votre agence immobilière.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card/50 backdrop-blur-sm rounded-lg border border-border/50 px-6"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;