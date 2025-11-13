import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Sparkles, Phone, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import feminineSilhouette from '@/assets/feminine-silhouette-elegant.svg';
import botoxImage from '@/assets/botox-treatment.jpg';
import fillersImage from '@/assets/fillers-treatment.jpg';
import collagenImage from '@/assets/collagen-treatment.jpg';

const Aesthetic = () => {
  const { t } = useLanguage();

  const treatments = [
    {
      title: t('aesthetic.botox'),
      description: t('aesthetic.botox.desc'),
      image: botoxImage,
    },
    {
      title: t('aesthetic.fillers'),
      description: t('aesthetic.fillers.desc'),
      image: fillersImage,
    },
    {
      title: t('aesthetic.collagen'),
      description: t('aesthetic.collagen.desc'),
      image: collagenImage,
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
    <div className="min-h-screen bg-medical-rose">
      {/* Hero Section with Image */}
      <section className="relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="bg-medical-rose py-20 lg:py-28 px-4">
            <div className="container mx-auto max-w-xl space-y-8">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-white/90 shadow-lg mb-6">
                <Sparkles className="h-8 w-8" style={{ color: 'hsl(340, 55%, 65%)' }} />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-12">
                {t('aesthetic.title')}
              </h1>
              <h2 className="text-2xl font-semibold text-foreground/90">
                {t('aesthetic.welcome')}
              </h2>
              <p className="text-base text-foreground/70 italic">
                {t('aesthetic.slogan')}
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed whitespace-pre-line">
                {t('aesthetic.intro')}
              </p>
              <p className="text-base text-muted-foreground font-medium pt-4">
                {t('aesthetic.office.address')}
              </p>
            </div>
          </div>
          <div className="hidden lg:flex items-center justify-center bg-medical-rose p-12">
            <div className="max-w-md">
              <img 
                src={feminineSilhouette} 
                alt="Abstract feminine silhouette"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Treatments Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-16">
            <h2 className="text-3xl font-bold text-center text-foreground">{t('aesthetic.treatments.title')}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {treatments.map((treatment, index) => (
                <div key={index} className="space-y-6">
                  <div className="aspect-square overflow-hidden rounded-lg shadow-lg">
                    <img 
                      src={treatment.image} 
                      alt={treatment.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="text-center space-y-3">
                    <h3 className="text-xl font-semibold text-foreground">{treatment.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{treatment.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-medical-rose">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16 text-foreground">{t('aesthetic.faq')}</h2>
            
            <Accordion type="single" collapsible className="space-y-6">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white/90 backdrop-blur-sm rounded-lg px-6 border-none shadow-sm">
                  <AccordionTrigger className="text-left hover:no-underline py-5">
                    <span className="font-semibold text-foreground">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-medical-rose">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="border-none shadow-xl bg-white/90 backdrop-blur-sm">
              <CardContent className="p-10 md:p-14">
                <div className="text-center space-y-8">
                  <h2 className="text-3xl font-bold text-foreground">{t('home.book')}</h2>
                  <p className="text-sm text-muted-foreground">
                    2 Avenue du Forum, 1020 Laeken
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                    <Button size="lg" asChild style={{ backgroundColor: 'hsl(340, 55%, 65%)', color: 'white' }} className="hover:opacity-90">
                      <a href="https://agenda.medispring.be/ms-kaisin-ph-d21c9f4c-191d-4e33-a2c9-81dbe292bf12/idHcp_Bousmar-mari-78449_ms-kaisin-ph-d21c9f4c-191d-4e33-a2c9-81dbe292bf12" target="_blank" rel="noopener noreferrer">
                        <Calendar className="h-4 w-4 mr-2" />
                        {t('appointments.title')}
                      </a>
                    </Button>
                    <Button size="lg" variant="outline" asChild className="border-2" style={{ borderColor: 'hsl(340, 55%, 65%)', color: 'hsl(340, 55%, 65%)' }}>
                      <a href="tel:+3222684040">
                        <Phone className="h-4 w-4 mr-2" />
                        +32 2 268 40 40
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Aesthetic;
