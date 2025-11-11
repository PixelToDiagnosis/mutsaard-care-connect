import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Sparkles, Phone, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import aestheticRoomImage from '@/assets/aesthetic-room.jpg';
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
    <div className="min-h-screen bg-gradient-to-b from-medical-rose/20 via-medical-cream/30 to-medical-beige/20">
      {/* Hero Section with Image */}
      <section className="relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="bg-gradient-to-br from-medical-rose/40 via-medical-cream/50 to-medical-beige/40 py-16 lg:py-24 px-4">
            <div className="container mx-auto max-w-xl space-y-6">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-white/90 shadow-lg mb-4">
                <Sparkles className="h-8 w-8" style={{ color: 'hsl(340, 55%, 65%)' }} />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                {t('aesthetic.title')}
              </h1>
              <h2 className="text-2xl font-semibold text-foreground/90">
                {t('aesthetic.welcome')}
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed whitespace-pre-line">
                {t('aesthetic.intro')}
              </p>
              <p className="text-base text-muted-foreground font-medium">
                Adresse du cabinet : 2 Avenue du Forum, 1020 Laeken
              </p>
            </div>
          </div>
          <div className="hidden lg:block relative h-[500px]">
            <img 
              src={aestheticRoomImage} 
              alt="Aesthetic medicine consultation room"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-medical-rose/20" />
          </div>
        </div>
      </section>

      {/* Treatments Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">{t('aesthetic.treatments')}</h2>
            
            <div className="space-y-8">
              {treatments.map((treatment, index) => (
                <Card key={index} className="border-none bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                    <div className="md:col-span-1 h-48 md:h-auto">
                      <img 
                        src={treatment.image} 
                        alt={treatment.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <CardHeader>
                        <CardTitle className="text-xl text-foreground">{treatment.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed">{treatment.description}</p>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-b from-medical-rose/10 to-medical-cream/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">{t('aesthetic.faq')}</h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white/90 backdrop-blur-sm rounded-lg px-6 border-none shadow-sm">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="font-semibold text-foreground">{faq.question}</span>
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
      <section className="py-16 bg-gradient-to-b from-medical-cream/30 to-medical-rose/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="border-none shadow-xl bg-white/90 backdrop-blur-sm">
              <CardContent className="p-8 md:p-12">
                <div className="text-center space-y-6">
                  <h2 className="text-3xl font-bold text-foreground">{t('home.book')}</h2>
                  <p className="text-sm text-muted-foreground">
                    2 Avenue du Forum, 1020 Laeken
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                    <Button size="lg" asChild style={{ backgroundColor: 'hsl(340, 55%, 65%)', color: 'white' }} className="hover:opacity-90">
                      <Link to="/appointments">
                        <Calendar className="h-4 w-4 mr-2" />
                        {t('appointments.title')}
                      </Link>
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
