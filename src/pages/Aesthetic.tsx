import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Sparkles, Phone } from 'lucide-react';

const Aesthetic = () => {
  const { t } = useLanguage();

  const treatments = [
    {
      title: t('aesthetic.botox'),
      description: t('aesthetic.botox.desc'),
    },
    {
      title: t('aesthetic.fillers'),
      description: t('aesthetic.fillers.desc'),
    },
    {
      title: t('aesthetic.collagen'),
      description: t('aesthetic.collagen.desc'),
    },
  ];

  const faqs = [
    {
      question: t('aesthetic.faq.who'),
      answer: t('aesthetic.faq.who.answer'),
    },
    {
      question: t('aesthetic.faq.pain'),
      answer: t('aesthetic.faq.pain.answer'),
    },
    {
      question: t('aesthetic.faq.results'),
      answer: t('aesthetic.faq.results.answer'),
    },
    {
      question: t('aesthetic.faq.price'),
      answer: t('aesthetic.faq.price.answer'),
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-medical-beige to-background py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-background shadow-md mb-4">
              <Sparkles className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              {t('aesthetic.title')}
            </h1>
            <p className="text-lg text-foreground/80 leading-relaxed">
              {t('aesthetic.intro')}
            </p>
          </div>
        </div>
      </section>

      {/* Treatments Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold text-center mb-12">{t('aesthetic.treatments')}</h2>
            
            <div className="space-y-6">
              {treatments.map((treatment, index) => (
                <Card key={index} className="border-border">
                  <CardHeader>
                    <CardTitle className="text-xl">{treatment.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{treatment.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">{t('aesthetic.faq')}</h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-background rounded-lg px-6 border-border">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="font-semibold">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-background to-medical-blue-light">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold">{t('home.book')}</h2>
            <p className="text-lg text-muted-foreground">
              Dr Marie-Eve Bousmar - Cabinet Mutsaard
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="gap-2">
                <a href="https://medispring.be" target="_blank" rel="noopener noreferrer">
                  <Phone className="h-4 w-4" />
                  Medispring.be
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:+3222684040">
                  <Phone className="h-4 w-4" />
                  +32 2 268 40 40
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Aesthetic;
