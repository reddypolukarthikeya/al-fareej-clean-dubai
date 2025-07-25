
import { Check, Clock, Car, Shirt, WashingMachine } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const WhyChooseUs = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      titleKey: "freePickupDelivery",
      descriptionKey: "freePickupDesc"
    },
    {
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      titleKey: "highQualityCleaning",
      descriptionKey: "highQualityDesc"
    },
    {
      icon: <Clock className="w-12 h-12 text-blue-600" />,
      titleKey: "fastTurnaround",
      descriptionKey: "fastTurnaroundDesc"
    },
    {
      icon: <Shirt className="w-12 h-12 text-blue-600" />,
      titleKey: "ecoFriendly",
      descriptionKey: "ecoFriendlyDesc"
    },
    {
      icon: <WashingMachine className="w-12 h-12 text-blue-600" />,
      titleKey: "experiencedProfessionals",
      descriptionKey: "experiencedDesc"
    },
    {
      icon: <Check className="w-12 h-12 text-blue-600" />,
      titleKey: "satisfactionGuarantee",
      descriptionKey: "satisfactionDesc"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            {t('whyChooseUs')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('whyChooseDescription')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col h-full text-center p-6 rounded-lg bg-blue-50/50 hover:bg-blue-50 transition-colors duration-300 group">
              <div className="mb-4 flex justify-center transform group-hover:scale-110 transition-transform duration-300">
                {benefit.image ? (
                  <img 
                    src={benefit.image} 
                    alt={t(benefit.titleKey)}
                    className="w-20 h-20 object-cover rounded-full shadow-md"
                    loading="lazy"
                  />
                ) : (
                  benefit.icon
                )}
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2 flex-grow-0">
                {t(benefit.titleKey)}
              </h3>
              <p className="text-gray-600 flex-grow">
                {t(benefit.descriptionKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
