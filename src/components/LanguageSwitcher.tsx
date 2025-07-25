
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <Globe size={16} className="text-blue-600" />
      <div className="flex bg-blue-50 rounded-full p-1">
        <button
          onClick={() => setLanguage('en')}
          className={`px-3 py-1 text-sm font-medium rounded-full transition-colors ${
            language === 'en' 
              ? 'bg-blue-600 text-white' 
              : 'text-blue-600 hover:bg-blue-100'
          }`}
        >
          EN
        </button>
        <button
          onClick={() => setLanguage('ar')}
          className={`px-3 py-1 text-sm font-medium rounded-full transition-colors ${
            language === 'ar' 
              ? 'bg-blue-600 text-white' 
              : 'text-blue-600 hover:bg-blue-100'
          }`}
        >
          AR
        </button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
