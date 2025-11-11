import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Stethoscope, Activity, Syringe, Clock, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Stethoscope,
      title: t('services.gp'),
      description: t('services.gp.desc'),
    },
    {
      icon: Activity,
      title: t('services.chronic'),
      description: t('services.chronic.desc'),
    },
    {
      icon: Syringe,
      title: t('services.vaccinations'),
      description: t('services.vaccinations.desc'),
    },
    {
      icon: Clock,
      title: t('services.acute'),
      description: t('services.acute.desc'),
    },
    {
      icon: Sparkles,
      title: t('services.aesthetic'),
      description: t('services.aesthetic.desc'),
      link: '/aesthetic',
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Page Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-foreground">{t('services.title')}</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('home.description')}
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className={`hover:shadow-lg transition-all ${
                  service.link ? 'hover:scale-105 cursor-pointer bg-gradient-to-br from-background to-medical-beige/30' : ''
                }`}
              >
                {service.link ? (
                  <Link to={service.link}>
                    <CardHeader>
                      <div className="h-12 w-12 rounded-lg bg-medical-blue-light flex items-center justify-center mb-2">
                        <service.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>{service.title}</CardTitle>
                      <CardDescription className="text-base">{service.description}</CardDescription>
                    </CardHeader>
                  </Link>
                ) : (
                  <CardHeader>
                    <div className="h-12 w-12 rounded-lg bg-medical-blue-light flex items-center justify-center mb-2">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                )}
              </Card>
            ))}
          </div>

          {/* Appointment Info */}
          <Card className="bg-medical-blue-light border-none">
            <CardContent className="p-8 text-center">
              <p className="text-lg mb-4">
                {t('home.book')}
              </p>
              <a 
                href="https://medispring.be" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                Medispring.be
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Services;
