
import { Calendar, Car, Check, Home } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: <Calendar className="w-12 h-12" />,
      titleKey: "schedulePickupStep",
      descriptionKey: "schedulePickupStepDesc"
    },
    {
      icon: <Car className="w-12 h-12" />,
      titleKey: "weCollectClean",
      descriptionKey: "weCollectCleanDesc"
    },
    {
      icon: <Check className="w-12 h-12" />,
      titleKey: "qualityCheck",
      descriptionKey: "qualityCheckDesc"
    },
    {
      icon: <Home className="w-12 h-12" />,
      titleKey: "weDeliverFresh",
      descriptionKey: "weDeliverFreshDesc"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            {t('howItWorks')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('howItWorksDesc')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-700 transition-colors duration-300 group-hover:scale-110 transform">
                  {step.icon}
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-sm">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">
                {t(step.titleKey)}
              </h3>
              <p className="text-gray-600">
                {t(step.descriptionKey)}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/booking" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            {t('schedulePickup')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
