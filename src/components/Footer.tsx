import { useLanguage } from '@/contexts/LanguageContext';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-muted mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary">Cabinet Mutsaard</h3>
            <p className="text-sm text-muted-foreground">
              {t('home.subtitle')}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t('contact.title')}</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                <div>
                  <p>59 Avenue Mutsaard</p>
                  <p>1020 Laeken, Brussels</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+3222684040" className="hover:text-primary transition-colors">
                  +32 2 268 40 40
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:cabinetmutsaard@gmail.com" className="hover:text-primary transition-colors">
                  cabinetmutsaard@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">{t('contact.emergency')}</h3>
            <div className="space-y-2 text-sm">
              <p className="flex justify-between">
                <span className="text-muted-foreground">{t('contact.gp.oncall')}:</span>
                <a href="tel:1733" className="font-medium hover:text-primary transition-colors">1733</a>
              </p>
              <p className="flex justify-between">
                <span className="text-muted-foreground">{t('contact.emergency')}:</span>
                <a href="tel:112" className="font-medium hover:text-primary transition-colors">112</a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
