import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Stethoscope, Activity, Syringe, Clock, Sparkles, ArrowRight, Phone, Info } from 'lucide-react';
import heroImage from '@/assets/practice-hero.jpg';
import consultationImage from '@/assets/consultation.jpg';

const Home = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Stethoscope,
      title: t('services.gp'),
      description: t('services.gp.desc'),
      link: null,
    },
    {
      icon: Activity,
      title: t('services.chronic'),
      description: t('services.chronic.desc'),
      link: null,
    },
    {
      icon: Syringe,
      title: t('services.vaccinations'),
      description: t('services.vaccinations.desc'),
      link: null,
    },
    {
      icon: Clock,
      title: t('services.acute'),
      description: t('services.acute.desc'),
      link: null,
    },
    {
      icon: Sparkles,
      title: t('services.aesthetic'),
      description: t('services.aesthetic.desc'),
      link: '/aesthetic',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Image */}
      <section className="relative h-[600px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              {t('home.title')}
            </h1>
            <p className="text-xl md:text-2xl text-foreground/90">
              {t('home.subtitle')}
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              {t('home.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" asChild>
                <Link to="/appointments">{t('home.book')}</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">{t('nav.contact')}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Aesthetic Medicine Banner */}
      <section className="bg-medical-warm py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Card className="border-none shadow-md bg-card/80 backdrop-blur">
              <CardContent className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Sparkles className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{t('home.aesthetic.title')}</h3>
                      <p className="text-muted-foreground">
                        {t('home.aesthetic.banner')}
                      </p>
                    </div>
                  </div>
                  <Button variant="default" asChild className="gap-2 flex-shrink-0">
                    <Link to="/aesthetic">
                      {t('home.learn.more')}
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Information Box */}
      <section className="py-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Card className="bg-medical-beige/30 border-primary/20">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <Info className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg text-primary">{t('doctors.info.title')}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>{t('doctors.info.point2')}</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">{t('nav.services')}</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t('services.intro')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => {
                const content = (
                  <Card className={`hover:shadow-lg transition-all h-full ${service.link ? 'cursor-pointer' : ''}`}>
                    <CardContent className="p-6 space-y-4">
                      <div className="h-12 w-12 rounded-lg bg-medical-blue-light flex items-center justify-center">
                        <service.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="font-semibold text-xl">{service.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                    </CardContent>
                  </Card>
                );
                
                return service.link ? (
                  <Link key={index} to={service.link}>
                    {content}
                  </Link>
                ) : (
                  <div key={index}>
                    {content}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-medical-beige">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">{t('about.title')}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('about.mission.text')}
              </p>
              <div className="space-y-3">
                <p className="flex items-center gap-2 text-foreground/90">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  {t('about.languages.list')}
                </p>
                <p className="flex items-center gap-2 text-foreground/90">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  {t('about.locations')}: 59 Avenue Mutsaard - 2 Avenue du Forum, 1020 Laeken
                </p>
              </div>
              <Button variant="outline" size="lg" asChild>
                <Link to="/about">
                  {t('home.learn.more')}
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-background to-medical-blue-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">{t('home.cta.title')}</h2>
            <p className="text-lg text-muted-foreground">
              {t('home.cta.text')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/appointments">{t('home.book')}</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="tel:+3222684040">
                  <Phone className="h-4 w-4 mr-2" />
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

export default Home;
