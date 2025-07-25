
import { Phone, Home, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">{t('companyName')}</h3>
            <p className="text-blue-200 mb-4">
              Dubai's trusted laundry and dry cleaning service, providing premium care 
              for your garments with convenient pickup and delivery.
            </p>
            <div className="flex flex-col gap-2">
              <a href="tel:+971502193235" className="flex items-center gap-2 text-blue-200 hover:text-white transition-colors">
                <Phone size={16} />
                +971 50 219 3235
              </a>
              <a href="mailto:alfareej.laundry@hotmail.com" className="flex items-center gap-2 text-blue-200 hover:text-white transition-colors">
                <Mail size={16} />
                alfareej.laundry@hotmail.com
              </a>
              <p className="flex items-center gap-2 text-blue-200">
                <Home size={16} />
                {t('servingDubai')}
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('quickLinks')}</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-blue-200 hover:text-white transition-colors">{t('home')}</Link></li>
              <li><Link to="/booking" className="text-blue-200 hover:text-white transition-colors">{t('bookService')}</Link></li>
              <li><Link to="/about" className="text-blue-200 hover:text-white transition-colors">{t('aboutUs')}</Link></li>
              <li><Link to="/contact" className="text-blue-200 hover:text-white transition-colors">{t('contactUs')}</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('legal')}</h4>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-blue-200 hover:text-white transition-colors">{t('privacyPolicy')}</Link></li>
              <li><Link to="/terms" className="text-blue-200 hover:text-white transition-colors">{t('termsConditions')}</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p className="text-blue-200">
            © 2024 {t('companyName')}. {t('allRightsReserved')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
