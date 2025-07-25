
import { Button } from "@/components/ui/button";
import { Phone, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden">
      {/* Decorative bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-4 h-4 bg-blue-400 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-32 right-20 w-6 h-6 bg-blue-300 rounded-full opacity-40 animate-pulse delay-1000"></div>
        <div className="absolute top-64 left-1/4 w-3 h-3 bg-blue-500 rounded-full opacity-50 animate-pulse delay-500"></div>
        <div className="absolute bottom-32 right-10 w-5 h-5 bg-blue-400 rounded-full opacity-60 animate-pulse delay-1500"></div>
        <div className="absolute bottom-64 left-16 w-4 h-4 bg-blue-300 rounded-full opacity-40 animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Header - Properly aligned */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-16">
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-900 mb-2 leading-tight">
              {t('companyName')}
            </h1>
            <p className="text-sm md:text-base text-blue-600">{t('servingDubai')}</p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <LanguageSwitcher />
            <div className="flex flex-col items-end text-right">
              <a 
                href="tel:+971502193235" 
                className="flex items-center gap-2 text-blue-900 hover:text-blue-700 transition-colors mb-2 font-semibold"
              >
                <Phone size={20} />
                <span>+971 50 219 3235</span>
              </a>
              <a 
                href="mailto:alfareej.laundry@hotmail.com" 
                className="text-blue-600 hover:text-blue-500 transition-colors text-sm"
              >
                alfareej.laundry@hotmail.com
              </a>
            </div>
          </div>
        </header>

        {/* Hero Content with Image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 mb-6 leading-tight">
              {t('heroTitle')}
              <br />
              <span className="text-blue-600">{t('heroSubtitle')}</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 mb-4 leading-relaxed">
              {t('heroTagline')}
            </p>
            <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
              {t('heroDescription')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/booking">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto">
                  <Calendar className="mr-2" size={20} />
                  {t('schedulePickup')}
                </Button>
              </Link>
              <a href="tel:+971502193235">
                <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto">
                  <Phone className="mr-2" size={20} />
                  {t('callNow')}
                </Button>
              </a>
            </div>
          </div>

          {/* Professional Laundry Service Image */}
          <div className="relative">
            <div className="bg-blue-100 rounded-3xl p-8 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Professional laundry service - Al Fareej Laundry Dubai"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <p className="text-blue-900 font-bold text-lg">24-48 Hour</p>
                <p className="text-blue-600 text-sm">{t('fastTurnaround')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
