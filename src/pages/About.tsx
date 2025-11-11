import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Languages, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Page Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-foreground">{t('about.title')}</h1>
          </div>

          {/* Mission */}
          <Card>
            <CardHeader>
              <CardTitle>{t('about.mission')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('about.mission.text')}
              </p>
            </CardContent>
          </Card>

          {/* Locations */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                {t('about.locations')}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-semibold">{t('about.location1.floor')}</h3>
                <p className="text-muted-foreground">{t('about.location1')}</p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Dr Marie-Eve Bousmar & Dr Florent Graide</h3>
                <p className="text-muted-foreground">{t('about.location2')}</p>
              </div>
            </CardContent>
          </Card>

          {/* Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Languages className="h-5 w-5 text-primary" />
                  {t('about.languages')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{t('about.languages.list')}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Clock className="h-5 w-5 text-primary" />
                  {t('home.book')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Link to="/appointments">
                  <Button className="w-full">{t('home.book')}</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
