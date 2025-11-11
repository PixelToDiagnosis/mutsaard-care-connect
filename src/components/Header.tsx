import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';

const Header = () => {
  const { t, language, setLanguage } = useLanguage();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/doctors', label: t('nav.doctors') },
    { path: '/appointments', label: t('nav.appointments') },
    { path: '/contact', label: t('nav.contact') },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-xl font-semibold text-primary">Cabinet Mutsaard</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === item.path
                  ? 'text-primary'
                  : 'text-foreground/60'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Language Switcher & Mobile Menu */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-sm">
            <button
              onClick={() => setLanguage('fr')}
              className={`font-medium transition-colors ${
                language === 'fr' ? 'text-primary' : 'text-foreground/60 hover:text-primary'
              }`}
            >
              FR
            </button>
            <span className="text-foreground/30">|</span>
            <button
              onClick={() => setLanguage('nl')}
              className={`font-medium transition-colors ${
                language === 'nl' ? 'text-primary' : 'text-foreground/60 hover:text-primary'
              }`}
            >
              NL
            </button>
            <span className="text-foreground/30">|</span>
            <button
              onClick={() => setLanguage('en')}
              className={`font-medium transition-colors ${
                language === 'en' ? 'text-primary' : 'text-foreground/60 hover:text-primary'
              }`}
            >
              EN
            </button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden border-t bg-background p-4">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === item.path
                    ? 'text-primary'
                    : 'text-foreground/60'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
