
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Header
    companyName: 'AL FAREEJ LAUNDRY',
    servingDubai: 'Serving Dubai',
    // Hero
    heroTitle: 'Your Clothes,',
    heroSubtitle: 'Our Care',
    heroTagline: 'Effortless Laundry in Dubai',
    heroDescription: 'Professional dry cleaning and laundry services with free pickup and delivery. Experience premium care for your garments with Al Fareej Laundry.',
    schedulePickup: 'Schedule Pickup Now',
    callNow: 'Call Now',
    // Services
    ourServices: 'Our Core Services',
    servicesDescription: 'Professional laundry and dry cleaning services tailored to your needs',
    // Why Choose Us
    whyChooseUs: 'Why Choose Al Fareej Laundry?',
    whyChooseDescription: 'Experience the difference with Dubai\'s trusted laundry service',
    freePickupDelivery: 'Free Pickup & Delivery',
    freePickupDesc: 'Convenient door-to-door service across Dubai',
    highQualityCleaning: 'High-Quality Cleaning',
    highQualityDesc: 'Professional care using premium cleaning methods',
    fastTurnaround: 'Fast Turnaround',
    fastTurnaroundDesc: '24-48 hour service for most items',
    ecoFriendly: 'Eco-Friendly Options',
    ecoFriendlyDesc: 'Environmentally conscious cleaning solutions',
    experiencedProfessionals: 'Experienced Professionals',
    experiencedDesc: 'Skilled team with years of expertise',
    satisfactionGuarantee: 'Satisfaction Guarantee',
    satisfactionDesc: '100% satisfaction or we\'ll make it right',
    // How It Works
    howItWorks: 'How It Works',
    howItWorksDesc: 'Simple, convenient, and reliable laundry service in 4 easy steps',
    schedulePickupStep: 'Schedule Pickup',
    schedulePickupStepDesc: 'Book online or call us to schedule a convenient pickup time',
    weCollectClean: 'We Collect & Clean',
    weCollectCleanDesc: 'Our team picks up your items and provides professional cleaning',
    qualityCheck: 'Quality Check',
    qualityCheckDesc: 'Every item is inspected to ensure the highest quality standards',
    weDeliverFresh: 'We Deliver Fresh',
    weDeliverFreshDesc: 'Your clothes are delivered back clean, fresh, and perfectly folded',
    // Pricing
    pricingPlans: 'Pricing Plans',
    pricingDescription: 'Flexible pricing options to suit your laundry needs',
    individualServices: 'Individual services starting from',
    basicPlan: 'Basic Plan',
    familyPlan: 'Family Plan',
    premiumPlan: 'Premium Plan',
    choosePlan: 'Choose Plan',
    mostPopular: 'Most Popular',
    // Footer
    quickLinks: 'Quick Links',
    legal: 'Legal',
    home: 'Home',
    bookService: 'Book Service',
    aboutUs: 'About Us',
    contactUs: 'Contact Us',
    privacyPolicy: 'Privacy Policy',
    termsConditions: 'Terms & Conditions',
    allRightsReserved: 'All rights reserved. | Dubai\'s Premier Laundry Service',
  },
  ar: {
    // Header
    companyName: 'مصبغه الفريج',
    servingDubai: 'نخدم دبي',
    // Hero
    heroTitle: 'ملابسك،',
    heroSubtitle: 'عنايتنا',
    heroTagline: 'خدمة غسيل سهلة في دبي',
    heroDescription: 'خدمات التنظيف الجاف والغسيل المهنية مع الاستلام والتسليم المجاني. اختبر العناية المتميزة لملابسك مع مصبغة الفريج.',
    schedulePickup: 'احجز الاستلام الآن',
    callNow: 'اتصل الآن',
    // Services
    ourServices: 'خدماتنا الأساسية',
    servicesDescription: 'خدمات الغسيل والتنظيف الجاف المهنية المصممة لتلبية احتياجاتك',
    // Why Choose Us
    whyChooseUs: 'لماذا تختار مصبغة الفريج؟',
    whyChooseDescription: 'اختبر الفرق مع خدمة الغسيل الموثوقة في دبي',
    freePickupDelivery: 'الاستلام والتسليم مجاناً',
    freePickupDesc: 'خدمة مريحة من الباب إلى الباب في جميع أنحاء دبي',
    highQualityCleaning: 'تنظيف عالي الجودة',
    highQualityDesc: 'عناية مهنية باستخدام أساليب تنظيف متميزة',
    fastTurnaround: 'سرعة في التنفيذ',
    fastTurnaroundDesc: 'خدمة 24-48 ساعة لمعظم القطع',
    ecoFriendly: 'خيارات صديقة للبيئة',
    ecoFriendlyDesc: 'حلول تنظيف واعية بيئياً',
    experiencedProfessionals: 'خبراء محترفون',
    experiencedDesc: 'فريق ماهر مع سنوات من الخبرة',
    satisfactionGuarantee: 'ضمان الرضا',
    satisfactionDesc: '100% رضا أو سنصحح الأمر',
    // How It Works
    howItWorks: 'كيف يعمل',
    howItWorksDesc: 'خدمة غسيل بسيطة ومريحة وموثوقة في 4 خطوات سهلة',
    schedulePickupStep: 'حدد موعد الاستلام',
    schedulePickupStepDesc: 'احجز عبر الإنترنت أو اتصل بنا لتحديد موعد استلام مريح',
    weCollectClean: 'نستلم وننظف',
    weCollectCleanDesc: 'يستلم فريقنا أغراضك ويقدم تنظيفاً مهنياً',
    qualityCheck: 'فحص الجودة',
    qualityCheckDesc: 'يتم فحص كل قطعة لضمان أعلى معايير الجودة',
    weDeliverFresh: 'نسلم نظيفاً',
    weDeliverFreshDesc: 'يتم تسليم ملابسك نظيفة وطازجة ومطوية بشكل مثالي',
    // Pricing
    pricingPlans: 'خطط الأسعار',
    pricingDescription: 'خيارات تسعير مرنة لتناسب احتياجات الغسيل الخاصة بك',
    individualServices: 'الخدمات الفردية تبدأ من',
    basicPlan: 'الخطة الأساسية',
    familyPlan: 'خطة العائلة',
    premiumPlan: 'الخطة المميزة',
    choosePlan: 'اختر الخطة',
    mostPopular: 'الأكثر شعبية',
    // Footer
    quickLinks: 'روابط سريعة',
    legal: 'قانوني',
    home: 'الرئيسية',
    bookService: 'احجز الخدمة',
    aboutUs: 'من نحن',
    contactUs: 'اتصل بنا',
    privacyPolicy: 'سياسة الخصوصية',
    termsConditions: 'الشروط والأحكام',
    allRightsReserved: 'جميع الحقوق محفوظة. | خدمة الغسيل الأولى في دبي',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div className={language === 'ar' ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
