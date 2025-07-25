
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const StickyHeader = () => {
  const [isSticky, setIsSticky] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isSticky) return null;

  return (
    <div className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-md z-50 transition-all duration-300">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="font-bold text-blue-900 text-lg">
              {t('companyName')}
            </Link>
            <LanguageSwitcher />
          </div>
          <div className="flex items-center gap-3">
            <a href="tel:+971502193235">
              <Button variant="outline" size="sm" className="hidden sm:flex items-center gap-2">
                <Phone size={16} />
                {t('callNow')}
              </Button>
            </a>
            <Link to="/booking">
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 flex items-center gap-2">
                <Calendar size={16} />
                {t('schedulePickup')}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyHeader;
