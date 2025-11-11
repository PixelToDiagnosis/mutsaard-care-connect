import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Doctors = () => {
  const { t } = useLanguage();

  const doctors = [
    {
      name: 'Dr Philippe Kaisin',
      role: t('doctors.gp'),
      location: `59 Avenue Mutsaard - ${t('doctors.floor.ground')}`,
    },
    {
      name: 'Dr Louise Guesny',
      role: t('doctors.gp'),
      location: `59 Avenue Mutsaard - ${t('doctors.floor.ground')}`,
    },
    {
      name: 'Dr Alina Bousmar',
      role: t('doctors.gp'),
      location: `59 Avenue Mutsaard - ${t('doctors.floor.second')}`,
    },
    {
      name: 'Dr Maité Moulart',
      role: t('doctors.gp'),
      location: `59 Avenue Mutsaard - ${t('doctors.floor.second')}`,
    },
    {
      name: 'Dr Marie-Eve Bousmar',
      role: t('doctors.gp.aesthetic'),
      location: '2 Avenue du Forum',
      aesthetic: true,
    },
    {
      name: 'Dr Florent Graide',
      role: t('doctors.gp'),
      location: '2 Avenue du Forum',
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Page Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-foreground">{t('doctors.title')}</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('home.description')}
            </p>
          </div>

          {/* Doctors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {doctors.map((doctor, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="h-32 bg-gradient-to-br from-medical-blue-light to-medical-beige rounded-lg mb-4 flex items-center justify-center">
                    <div className="h-24 w-24 rounded-full bg-background flex items-center justify-center text-2xl font-bold text-primary">
                      {doctor.name.split(' ')[1].charAt(0)}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{doctor.name}</CardTitle>
                  <CardDescription className="text-base">{doctor.role}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                    <span>{doctor.location}</span>
                  </div>
                  {doctor.aesthetic && (
                    <Link 
                      to="/aesthetic"
                      className="inline-block text-sm hover:underline font-medium"
                      style={{ color: 'hsl(340, 55%, 65%)' }}
                    >
                      {t('nav.aesthetic')} →
                    </Link>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
