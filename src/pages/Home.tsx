import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Stethoscope, Users, Clock, Heart, Phone, ArrowRight } from 'lucide-react';

const Home = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Stethoscope,
      title: t('services.gp'),
      description: t('services.gp.desc'),
    },
    {
      icon: Users,
      title: t('doctors.title'),
      description: t('about.languages.list'),
    },
    {
      icon: Clock,
      title: t('nav.services'),
      description: t('services.chronic.desc'),
    },
    {
      icon: Heart,
      title: t('nav.aesthetic'),
      description: t('services.aesthetic.desc'),
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-medical-blue-light to-background py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              {t('home.title')}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t('home.subtitle')}
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              {t('home.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" asChild className="gap-2">
                <a href="https://medispring.be" target="_blank" rel="noopener noreferrer">
                  <Phone className="h-4 w-4" />
                  {t('home.book')}
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact">{t('nav.contact')}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Aesthetic Medicine Banner */}
      <section className="bg-medical-beige py-6">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-none shadow-sm bg-background/50">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="flex-1">
                    <p className="text-sm md:text-base text-foreground/90">
                      {t('home.aesthetic.banner')}
                    </p>
                  </div>
                  <Button variant="outline" asChild className="gap-2 flex-shrink-0">
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

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-medical-blue-light flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold">{t('nav.services')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link to="/doctors">
                <Card className="hover:shadow-lg transition-all hover:scale-105 cursor-pointer h-full">
                  <CardContent className="p-6 text-center space-y-2">
                    <Users className="h-8 w-8 mx-auto text-primary" />
                    <h3 className="font-semibold">{t('nav.doctors')}</h3>
                  </CardContent>
                </Card>
              </Link>
              <Link to="/services">
                <Card className="hover:shadow-lg transition-all hover:scale-105 cursor-pointer h-full">
                  <CardContent className="p-6 text-center space-y-2">
                    <Stethoscope className="h-8 w-8 mx-auto text-primary" />
                    <h3 className="font-semibold">{t('nav.services')}</h3>
                  </CardContent>
                </Card>
              </Link>
              <Link to="/aesthetic">
                <Card className="hover:shadow-lg transition-all hover:scale-105 cursor-pointer h-full">
                  <CardContent className="p-6 text-center space-y-2">
                    <Heart className="h-8 w-8 mx-auto text-primary" />
                    <h3 className="font-semibold">{t('nav.aesthetic')}</h3>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
