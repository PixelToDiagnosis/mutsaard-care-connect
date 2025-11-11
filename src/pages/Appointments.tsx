import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Appointments = () => {
  const { t } = useLanguage();

  const doctors = [
    {
      name: 'Dr Philippe Kaisin',
      location: '59 Avenue Mutsaard - Ground Floor',
      phone: '+32 2 268 40 40',
      medispring: null,
    },
    {
      name: 'Dr Louise Guesny',
      location: '59 Avenue Mutsaard - Ground Floor',
      phone: '+32 2 268 40 40',
      medispring: null,
    },
    {
      name: 'Dr Alina Bousmar',
      location: '59 Avenue Mutsaard - Second Floor',
      phone: '+32 2 268 40 40',
      medispring: 'https://agenda.medispring.be/ms-kaisin-ph-d21c9f4c-191d-4e33-a2c9-81dbe292bf12/ec5f2b4f-8151-4836-9f2b-4f8151a83675',
    },
    {
      name: 'Dr Maité Moulart',
      location: '59 Avenue Mutsaard - Second Floor',
      phone: '+32 2 268 40 40',
      medispring: null,
    },
    {
      name: 'Dr Marie-Eve Bousmar',
      location: '2 Avenue du Forum',
      phone: '+32 2 268 40 40',
      medispring: 'https://agenda.medispring.be/ms-kaisin-ph-d21c9f4c-191d-4e33-a2c9-81dbe292bf12/idHcp_Bousmar-mari-78449_ms-kaisin-ph-d21c9f4c-191d-4e33-a2c9-81dbe292bf12',
      aesthetic: true,
    },
    {
      name: 'Dr Florent Graide',
      location: '2 Avenue du Forum',
      phone: '+32 2 268 40 40',
      medispring: null,
    },
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Page Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-foreground">{t('appointments.title')}</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('appointments.subtitle')}
            </p>
          </div>

          {/* Doctors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {doctors.map((doctor, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{doctor.name}</CardTitle>
                  {doctor.aesthetic && (
                    <p className="text-sm text-muted-foreground">
                      {t('doctors.gp.aesthetic')}
                    </p>
                  )}
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                    <span>{doctor.location}</span>
                  </div>

                  <div className="space-y-3">
                    <p className="text-sm font-medium text-foreground">
                      {t('appointments.methods')}:
                    </p>
                    
                    {/* Phone Appointment */}
                    <a 
                      href={`tel:${doctor.phone.replace(/\s/g, '')}`}
                      className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                    >
                      <Phone className="h-5 w-5 text-primary" />
                      <span className="text-foreground">{doctor.phone}</span>
                    </a>

                    {/* Medispring Appointment */}
                    {doctor.medispring && (
                      <a 
                        href={doctor.medispring} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 hover:opacity-80 transition-opacity"
                      >
                        <Calendar className="h-5 w-5 text-primary" />
                        <span className="text-foreground">Medispring.be</span>
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Info Section */}
          <Card className="bg-medical-warm border-border">
            <CardContent className="p-6 md:p-8">
              <div className="space-y-4 text-center">
                <h3 className="font-semibold text-lg">{t('appointments.note.title')}</h3>
                <p className="text-muted-foreground">
                  {t('appointments.note.text')}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
