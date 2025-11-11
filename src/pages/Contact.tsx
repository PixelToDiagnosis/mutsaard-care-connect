import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Page Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-foreground">{t('contact.title')}</h1>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  {t('contact.address')}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="font-medium">Ground Floor & Second Floor</p>
                  <p className="text-muted-foreground">59 Avenue Mutsaard</p>
                  <p className="text-muted-foreground">1020 Laeken, Brussels</p>
                </div>
                <div>
                  <p className="font-medium">Dr Marie-Eve Bousmar & Dr Florent Graide</p>
                  <p className="text-muted-foreground">2 Avenue du Forum</p>
                  <p className="text-muted-foreground">1020 Laeken, Brussels</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  {t('contact.phone')}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <a 
                  href="tel:+3222684040"
                  className="text-lg font-medium text-primary hover:underline"
                >
                  +32 2 268 40 40
                </a>
                <div className="pt-4 space-y-2 text-sm">
                  <p className="flex justify-between">
                    <span className="text-muted-foreground">{t('contact.gp.oncall')}:</span>
                    <a href="tel:1733" className="font-medium hover:text-primary">1733</a>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-muted-foreground">{t('contact.emergency')}:</span>
                    <a href="tel:112" className="font-medium hover:text-primary">112</a>
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  {t('contact.email')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a 
                  href="mailto:cabinetmutsaard@gmail.com"
                  className="text-primary hover:underline"
                >
                  cabinetmutsaard@gmail.com
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Map */}
          <Card>
            <CardHeader>
              <CardTitle>{t('contact.map.title')}</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2516.873!2d4.349!3d50.8806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c3f5d1a0a0a1%3A0x1234567890abcdef!2sAvenue%20Mutsaard%2059%2C%201020%20Laeken!5e0!3m2!1sen!2sbe!4v1234567890123&markers=color:blue%7Clabel:1%7C50.8806,4.349&markers=color:blue%7Clabel:2%7C50.8808,4.3495"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Cabinet Mutsaard Locations"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
