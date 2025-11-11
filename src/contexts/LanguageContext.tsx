import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'nl' | 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  nl: {
    // Navigation
    'nav.home': 'Startpagina',
    'nav.about': 'Over ons',
    'nav.doctors': 'Onze artsen',
    'nav.services': 'Onze diensten',
    'nav.aesthetic': 'Esthetische geneeskunde',
    'nav.contact': 'Contact',
    'nav.appointments': 'Afspraak maken',
    
    // Home
    'home.title': 'Welkom bij Cabinet Mutsaard',
    'home.subtitle': 'Uw huisartsenpraktijk in Laeken, Brussel',
    'home.description': 'Welkom bij Cabinet Mutsaard, uw huisartsenpraktijk in het hart van Laken. Ons toegewijd team van artsen biedt uitgebreide en gepersonaliseerde gezondheidszorg voor het hele gezin. Wij geloven in een holistische benadering van gezondheid, waarbij wij de tijd nemen om naar uw zorgen te luisteren en zorgplannen te creëren die zijn aangepast aan uw unieke situatie.',
    'home.book': 'Maak een afspraak',
    'home.aesthetic.title': 'Esthetische geneeskunde : Nieuwe dienst nu beschikbaar',
    'home.aesthetic.banner': 'Ter info: sinds kort biedt het Kabinet Mutsaard ook esthetische geneeskunde aan, uitgevoerd door Dr Marie-Eve Bousmar.',
    'home.learn.more': 'Meer info',
    'home.cta.title': 'Klaar om een afspraak te maken?',
    'home.cta.text': 'Neem contact met ons op via telefoon of boek online een afspraak bij een van onze artsen.',
    
    // About
    'about.title': 'Over Cabinet Mutsaard',
    'about.mission': 'Onze missie',
    'about.mission.text': 'We bieden toegankelijke, hoogwaardige en continue eerstelijnszorg voor iedereen in onze gemeenschap, met focus op preventie, chronische ziektebeheer en persoonlijke patiëntrelaties.',
    'about.locations': 'Onze locaties',
    'about.location1': '59 Avenue Mutsaard, 1020 Laeken',
    'about.location1.floor': 'Gelijkvloers en tweede verdieping',
    'about.location1.title': 'Hoofdkabinet',
    'about.location2': '2 Avenue du Forum, 1020 Laeken',
    'about.location2.title': 'Tweede kabinetslocatie',
    'about.languages': 'Gesproken talen',
    'about.languages.list': 'Nederlands, Frans, Engels',
    
    // Doctors
    'doctors.title': 'Onze artsen',
    'doctors.gp': 'Huisarts',
    'doctors.gp.aesthetic': 'Huisarts & Esthetische geneeskunde',
    'doctors.floor.ground': 'Gelijkvloers',
    'doctors.floor.second': 'Tweede verdieping',
    
    // Services
    'services.title': 'Onze diensten',
    'services.intro': 'Wij bieden een breed scala aan medische diensten voor uw hele gezin.',
    'services.gp': 'Huisartsengeneeskunde',
    'services.gp.desc': 'Consultaties voor het hele gezin: acute en chronische ziekten, gezondheidsopvolging, preventie en screening',
    'services.chronic': 'Opvolging van chronische ziekten',
    'services.chronic.desc': 'Gepersonaliseerde zorg voor diabetes, hypertensie, astma, COPD en andere chronische aandoeningen',
    'services.vaccinations': 'Vaccinaties',
    'services.vaccinations.desc': 'Vaccinaties voor kinderen, volwassenen en reizigers: griep, tetanus, hepatitis en COVID-19 vaccinatie',
    'services.acute': 'Kleine urgente zorg',
    'services.acute.desc': 'Zorg voor kleine urgente problemen: wonden, infecties, koorts, pijn (geen echte spoedgevallen)',
    'services.aesthetic': 'Esthetische geneeskunde',
    'services.aesthetic.desc': 'Esthetische consultaties door Dr Marie-Eve Bousmar: Botox, fillers en collageenstimulatie',
    
    // Aesthetic
    'aesthetic.title': 'Esthetische geneeskunde',
    'aesthetic.welcome': 'Welkom bij het kabinet van Dr Marie-Eve Bousmar',
    'aesthetic.intro': '« Afgestudeerd in de geneeskunde aan de Katholieke Universiteit Leuven in 2015, heb ik altijd gestreefd naar een menselijke, zorgzame en aandachtige geneeskunde. Door de jaren heen heb ik ervoor gekozen om huisartsgeneeskunde en esthetische geneeskunde te combineren, twee complementaire benaderingen die een gemeenschappelijk doel delen: het algehele welzijn van de patiënt.\n\nHuisartsgeneeskunde stelt mij in staat om iedereen dagelijks te begeleiden, te voorkomen, te luisteren en te verzorgen. Esthetische geneeskunde biedt daarentegen de mogelijkheid om in harmonie met jezelf te voelen, om vertrouwen en uitstraling terug te vinden, met respect voor ieders natuurlijke schoonheid.\n\nDoor deze dubbele benadering wil ik een volledige zorg bieden, waar gezondheid, vertrouwen en evenwicht samenkomen. Elke patiënt is uniek, en met zachtheid en aandacht bied ik gepersonaliseerde zorg aan, ten dienste van oprechte schoonheid en duurzaam welzijn. »',
    'aesthetic.treatments': 'Behandelingen',
    'aesthetic.botox': 'Toxine botulique',
    'aesthetic.botox.desc': 'Verzacht expressierimpels (voorhoofd, fronslijnen, kraaienpootjes) met behoud van natuurlijke gezichtsuitdrukking.',
    'aesthetic.fillers': 'Hyaluronzuur fillers',
    'aesthetic.fillers.desc': 'Herstel volume, verzacht plooien, subtiele lip-, wang- of kaaklijnverbetering.',
    'aesthetic.collagen': 'Collageenstimulerende injecties / Sculptra',
    'aesthetic.collagen.desc': 'Stimuleer het eigen collageen van de huid voor een geleidelijke en langdurige verbetering van textuur en stevigheid.',
    'aesthetic.faq': 'Veelgestelde vragen',
    'aesthetic.faq.who': 'Voor wie zijn deze behandelingen?',
    'aesthetic.faq.who.answer': 'Veilige, medische procedures voor wie op zoek is naar subtiele, natuurlijke verjonging zonder chirurgie.',
    'aesthetic.faq.pain': 'Zijn de behandelingen pijnlijk?',
    'aesthetic.faq.pain.answer': 'Minimaal ongemak; procedures worden uitgevoerd door een gekwalificeerde arts. Tijdelijke roodheid of zwelling kan optreden.',
    'aesthetic.faq.results': 'Wanneer zie ik resultaten?',
    'aesthetic.faq.results.answer': 'Botox: 5-14 dagen; Fillers: onmiddellijk; Collageenstimulatie: geleidelijk over weken tot maanden.',
    'aesthetic.faq.price': 'Wat zijn de prijzen?',
    'aesthetic.faq.price.answer': 'Indicatieve prijzen (excl. consultatie): Botox vanaf ≈ €150 per zone, Fillers vanaf ≈ €350 per ml, Collageenstimulatie op aanvraag.',
    
    // Contact
    'contact.title': 'Contact',
    'contact.address': 'Adres',
    'contact.phone': 'Telefoon',
    'contact.email': 'E-mail',
    'contact.emergency': 'Spoednummer',
    'contact.gp.oncall': 'Huisartsenwachtpost',
    'contact.map.title': 'Onze locaties',
    'contact.form.title': 'Stel uw vraag',
    'contact.form.name': 'Naam',
    'contact.form.email': 'E-mail',
    'contact.form.message': 'Bericht',
    'contact.form.send': 'Verstuur',
    
    // Appointments
    'appointments.title': 'Afspraak maken',
    'appointments.subtitle': 'Kies uw arts en boek een afspraak via telefoon of online.',
    'appointments.methods': 'Afspraak maken',
    'appointments.by.phone': 'Via telefoon',
    'appointments.online': 'Online boeken',
    'appointments.note.title': 'Let op',
    'appointments.note.text': 'Voor artsen zonder online reserveringsoptie, gelieve het secretariaat telefonisch te contacteren tussen 8u en 16u.',
    
    // Footer
    'footer.copyright': '© 2025 Cabinet Mutsaard. Alle rechten voorbehouden.',
    'footer.privacy': 'Privacybeleid',
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.doctors': 'Nos médecins',
    'nav.services': 'Nos services',
    'nav.aesthetic': 'Médecine esthétique',
    'nav.contact': 'Contact',
    'nav.appointments': 'Prendre rendez-vous',
    
    // Home
    'home.title': 'Bienvenue au Cabinet Mutsaard',
    'home.subtitle': 'Votre cabinet de médecine générale à Laeken, Bruxelles',
    'home.description': 'Bienvenue au Cabinet Mutsaard, votre cabinet de médecine générale situé au cœur de Laeken. Notre équipe de praticiens dévoués offre des soins de santé complets et personnalisés pour toute la famille. Nous croyons en une approche globale de la santé, en prenant le temps d\'écouter vos préoccupations et de créer des plans de soins adaptés à votre situation unique.',
    'home.book': 'Prendre rendez-vous',
    'home.aesthetic.title': 'Médecine esthétique : Nouveau service maintenant disponible',
    'home.aesthetic.banner': 'À titre informatif : le Cabinet Mutsaard propose désormais des consultations de médecine esthétique assurées par le Dr Marie-Eve Bousmar.',
    'home.learn.more': 'En savoir plus',
    'home.cta.title': 'Prêt à prendre rendez-vous ?',
    'home.cta.text': 'Contactez-nous par téléphone ou réservez en ligne un rendez-vous avec l\'un de nos médecins.',
    
    // About
    'about.title': 'À propos du Cabinet Mutsaard',
    'about.mission': 'Notre mission',
    'about.mission.text': 'Nous offrons des soins de santé primaires accessibles, de haute qualité et continus pour tous dans notre communauté, en mettant l\'accent sur la prévention, la gestion des maladies chroniques et les relations personnelles avec les patients.',
    'about.locations': 'Nos adresses',
    'about.location1': '59 Avenue Mutsaard, 1020 Laeken',
    'about.location1.floor': 'Rez-de-chaussée et deuxième étage',
    'about.location1.title': 'Cabinet principal',
    'about.location2': '2 Avenue du Forum, 1020 Laeken',
    'about.location2.title': 'Deuxième site du cabinet',
    'about.languages': 'Langues parlées',
    'about.languages.list': 'Néerlandais, Français, Anglais',
    
    // Doctors
    'doctors.title': 'Nos médecins',
    'doctors.gp': 'Médecin généraliste',
    'doctors.gp.aesthetic': 'Médecin généraliste & Médecine esthétique',
    'doctors.floor.ground': 'Rez-de-chaussée',
    'doctors.floor.second': 'Deuxième étage',
    
    // Services
    'services.title': 'Nos services',
    'services.intro': 'Nous offrons une large gamme de services médicaux pour toute votre famille.',
    'services.gp': 'Médecine générale',
    'services.gp.desc': 'Consultations pour toute la famille : maladies aiguës et chroniques, suivi de santé, prévention et dépistage',
    'services.chronic': 'Suivi des maladies chroniques',
    'services.chronic.desc': 'Prise en charge personnalisée du diabète, hypertension, asthme, BPCO et autres affections chroniques',
    'services.vaccinations': 'Vaccinations',
    'services.vaccinations.desc': 'Vaccinations enfants, adultes et voyageurs : grippe, tétanos, hépatites, et vaccination COVID-19',
    'services.acute': 'Petites urgences',
    'services.acute.desc': 'Soins pour problèmes urgents mineurs : plaies, infections, fièvre, douleurs (pas de vraies urgences)',
    'services.aesthetic': 'Médecine esthétique',
    'services.aesthetic.desc': 'Consultations esthétiques par Dr Marie-Eve Bousmar : Botox, fillers et stimulation du collagène',
    
    // Aesthetic
    'aesthetic.title': 'Médecine esthétique',
    'aesthetic.welcome': 'Bienvenue au cabinet du Dr Marie-Eve Bousmar',
    'aesthetic.intro': '« Diplômée en médecine à l\'Université catholique de Louvain en 2015, j\'ai toujours eu à cœur d\'exercer une médecine humaine, bienveillante et à l\'écoute. Au fil des années, j\'ai choisi d\'allier la médecine générale et la médecine esthétique, deux approches complémentaires qui partagent un même objectif : le bien-être global du patient.\n\nLa médecine générale me permet d\'accompagner chacun au quotidien, de prévenir, d\'écouter et de soigner. La médecine esthétique, quant à elle, offre la possibilité de se sentir en harmonie avec soi-même, de retrouver confiance et éclat, tout en respectant la beauté naturelle de chacun.\n\nÀ travers cette double approche, je souhaite offrir une prise en charge complète, où la santé, la confiance et l\'équilibre se rencontrent. Chaque patient est unique, et c\'est avec douceur et attention que je propose des soins personnalisés, au service d\'une beauté sincère et d\'un bien-être durable. »',
    'aesthetic.treatments': 'Traitements',
    'aesthetic.botox': 'Toxine botulique',
    'aesthetic.botox.desc': 'Atténue les rides d\'expression (front, rides du lion, pattes d\'oie) tout en préservant l\'expression naturelle du visage.',
    'aesthetic.fillers': 'Produits de comblement à l\'acide hyaluronique',
    'aesthetic.fillers.desc': 'Restaure le volume, lisse les plis, améliore subtilement les lèvres, les joues ou l\'ovale du visage.',
    'aesthetic.collagen': 'Inducteurs de collagène / Sculptra',
    'aesthetic.collagen.desc': 'Stimule le collagène naturel de la peau pour une amélioration progressive et durable de la texture et de la fermeté.',
    'aesthetic.faq': 'Questions fréquentes',
    'aesthetic.faq.who': 'Pour qui sont ces traitements ?',
    'aesthetic.faq.who.answer': 'Procédures médicales sûres pour ceux qui recherchent un rajeunissement subtil et naturel sans chirurgie.',
    'aesthetic.faq.pain': 'Les traitements sont-ils douloureux ?',
    'aesthetic.faq.pain.answer': 'Inconfort minimal ; les procédures sont effectuées par un médecin qualifié. Une rougeur ou un gonflement temporaire peut survenir.',
    'aesthetic.faq.results': 'Quand verrai-je les résultats ?',
    'aesthetic.faq.results.answer': 'Botox : 5-14 jours ; Fillers : immédiat ; Stimulation collagène : progressif sur plusieurs semaines à mois.',
    'aesthetic.faq.price': 'Quels sont les prix ?',
    'aesthetic.faq.price.answer': 'Prix indicatifs (hors consultation) : Botox à partir de ≈ 150€ par zone, Fillers à partir de ≈ 350€ par ml, Stimulation collagène sur demande.',
    
    // Contact
    'contact.title': 'Contact',
    'contact.address': 'Adresse',
    'contact.phone': 'Téléphone',
    'contact.email': 'E-mail',
    'contact.emergency': 'Numéro d\'urgence',
    'contact.gp.oncall': 'Garde médecins généralistes',
    'contact.map.title': 'Nos adresses',
    'contact.form.title': 'Posez votre question',
    'contact.form.name': 'Nom',
    'contact.form.email': 'E-mail',
    'contact.form.message': 'Message',
    'contact.form.send': 'Envoyer',
    
    // Appointments
    'appointments.title': 'Prendre rendez-vous',
    'appointments.subtitle': 'Choisissez votre médecin et prenez rendez-vous par téléphone ou en ligne.',
    'appointments.methods': 'Méthodes de rendez-vous',
    'appointments.by.phone': 'Par téléphone',
    'appointments.online': 'Réservation en ligne',
    'appointments.note.title': 'Note importante',
    'appointments.note.text': 'Pour les médecins sans option de réservation en ligne, veuillez contacter le secrétariat par téléphone entre 8h et 16h.',
    
    // Footer
    'footer.copyright': '© 2025 Cabinet Mutsaard. Tous droits réservés.',
    'footer.privacy': 'Politique de confidentialité',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.doctors': 'Our Doctors',
    'nav.services': 'Our Services',
    'nav.aesthetic': 'Aesthetic Medicine',
    'nav.contact': 'Contact',
    'nav.appointments': 'Book Appointment',
    
    // Home
    'home.title': 'Welcome to Mutsaard Medical Practice',
    'home.subtitle': 'Your family practice in Laeken, Brussels',
    'home.description': 'Welcome to Cabinet Mutsaard, your general practice located in the heart of Laeken. Our team of dedicated practitioners offers comprehensive and personalized health care for the whole family. We believe in a holistic approach to health, taking the time to listen to your concerns and create care plans tailored to your unique situation.',
    'home.book': 'Book an appointment',
    'home.aesthetic.title': 'Aesthetic medicine: New service now available',
    'home.aesthetic.banner': 'For your information: Mutsaard Medical Practice now also offers aesthetic medicine consultations by Dr Marie-Eve Bousmar.',
    'home.learn.more': 'Learn more',
    'home.cta.title': 'Ready to book an appointment?',
    'home.cta.text': 'Contact us by phone or book online an appointment with one of our doctors.',
    
    // About
    'about.title': 'About Mutsaard Medical Practice',
    'about.mission': 'Our mission',
    'about.mission.text': 'We provide accessible, high-quality and continuous primary care for everyone in our community, focusing on prevention, chronic-disease management and personal patient relationships.',
    'about.locations': 'Our locations',
    'about.location1': '59 Avenue Mutsaard, 1020 Laeken',
    'about.location1.floor': 'Ground floor and second floor',
    'about.location1.title': 'Main practice',
    'about.location2': '2 Avenue du Forum, 1020 Laeken',
    'about.location2.title': 'Second practice location',
    'about.languages': 'Languages spoken',
    'about.languages.list': 'Dutch, French, English',
    
    // Doctors
    'doctors.title': 'Our Doctors',
    'doctors.gp': 'General Practitioner',
    'doctors.gp.aesthetic': 'General Practitioner & Aesthetic Medicine',
    'doctors.floor.ground': 'Ground floor',
    'doctors.floor.second': 'Second floor',
    
    // Services
    'services.title': 'Our Services',
    'services.intro': 'We offer a wide range of medical services for your entire family.',
    'services.gp': 'General Practice',
    'services.gp.desc': 'Consultations for the whole family: acute and chronic illnesses, health monitoring, prevention and screening',
    'services.chronic': 'Chronic Disease Management',
    'services.chronic.desc': 'Personalized care for diabetes, hypertension, asthma, COPD and other chronic conditions',
    'services.vaccinations': 'Vaccinations',
    'services.vaccinations.desc': 'Vaccinations for children, adults and travelers: flu, tetanus, hepatitis and COVID-19 vaccination',
    'services.acute': 'Minor Urgent Care',
    'services.acute.desc': 'Care for minor urgent issues: wounds, infections, fever, pain (not true emergencies)',
    'services.aesthetic': 'Aesthetic Medicine',
    'services.aesthetic.desc': 'Aesthetic consultations by Dr Marie-Eve Bousmar: Botox, fillers and collagen stimulation',
    
    // Aesthetic
    'aesthetic.title': 'Aesthetic Medicine',
    'aesthetic.welcome': 'Welcome to Dr Marie-Eve Bousmar\'s practice',
    'aesthetic.intro': '« Graduated in medicine from the Catholic University of Louvain in 2015, I have always been committed to practicing humane, caring and attentive medicine. Over the years, I chose to combine general practice and aesthetic medicine, two complementary approaches that share the same objective: the overall well-being of the patient.\n\nGeneral practice allows me to support everyone on a daily basis, to prevent, listen and care. Aesthetic medicine, on the other hand, offers the possibility of feeling in harmony with oneself, of regaining confidence and radiance, while respecting everyone\'s natural beauty.\n\nThrough this dual approach, I wish to offer comprehensive care, where health, confidence and balance meet. Each patient is unique, and it is with gentleness and attention that I offer personalized care, in the service of sincere beauty and lasting well-being. »',
    'aesthetic.treatments': 'Treatments',
    'aesthetic.botox': 'Botulinum toxin',
    'aesthetic.botox.desc': 'Softens expression lines (forehead, frown lines, crow\'s feet) while preserving natural facial expression.',
    'aesthetic.fillers': 'Hyaluronic acid fillers',
    'aesthetic.fillers.desc': 'Restore volume, smooth folds, subtly lift lips, cheeks, or jawline.',
    'aesthetic.collagen': 'Collagen inducing injections / Sculptra',
    'aesthetic.collagen.desc': 'Stimulate the skin\'s own collagen for a gradual and long-lasting improvement in texture and firmness.',
    'aesthetic.faq': 'Frequently Asked Questions',
    'aesthetic.faq.who': 'Who are these treatments for?',
    'aesthetic.faq.who.answer': 'Safe, medical procedures for those seeking subtle, natural rejuvenation without surgery.',
    'aesthetic.faq.pain': 'Are the treatments painful?',
    'aesthetic.faq.pain.answer': 'Minimal discomfort; procedures are performed by a qualified physician. Temporary redness or swelling may occur.',
    'aesthetic.faq.results': 'When will I see results?',
    'aesthetic.faq.results.answer': 'Botox: 5-14 days; Fillers: immediate; Collagen inducers: gradual over weeks to months.',
    'aesthetic.faq.price': 'What are the prices?',
    'aesthetic.faq.price.answer': 'Indicative prices (excluding consultation): Botox from ≈ €150 per area, Fillers from ≈ €350 per ml, Collagen inducers on request.',
    
    // Contact
    'contact.title': 'Contact',
    'contact.address': 'Address',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.emergency': 'Emergency number',
    'contact.gp.oncall': 'GP on-call',
    'contact.map.title': 'Our locations',
    'contact.form.title': 'Ask your question',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send',
    
    // Appointments
    'appointments.title': 'Book an Appointment',
    'appointments.subtitle': 'Choose your doctor and book an appointment by phone or online.',
    'appointments.methods': 'Appointment methods',
    'appointments.by.phone': 'By phone',
    'appointments.online': 'Online booking',
    'appointments.note.title': 'Important note',
    'appointments.note.text': 'For doctors without online booking option, please contact the secretariat by phone between 8am and 4pm.',
    
    // Footer
    'footer.copyright': '© 2025 Cabinet Mutsaard. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'fr';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.nl] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};
