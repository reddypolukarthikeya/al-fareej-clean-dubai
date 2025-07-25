
import { Sparkles, Shirt, Home, Car, Check, WashingMachine } from "lucide-react";

const Services = () => {
  const services = [
    {
      image: "https://images.unsplash.com/photo-1582735689369-4fe89db78124?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Dry Cleaning",
      titleArabic: "التنظيف الجاف",
      description: "Professional dry cleaning for delicate fabrics, suits, and formal wear using eco-friendly solvents."
    },
    {
      image: "https://images.unsplash.com/photo-1517677129300-07b130802f46?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Washing & Folding",
      titleArabic: "الغسيل والطي",
      description: "Complete wash, dry, and fold service for everyday clothing with premium detergents."
    },
    {
      icon: <Shirt className="w-12 h-12 text-blue-600" />,
      title: "Ironing Service",
      titleArabic: "خدمة الكي",
      description: "Expert pressing and ironing to keep your clothes crisp and wrinkle-free."
    },
    {
      icon: <Home className="w-12 h-12 text-blue-600" />,
      title: "Carpet Cleaning",
      titleArabic: "تنظيف السجاد",
      description: "Deep cleaning for carpets and rugs with specialized equipment and solutions."
    },
    {
      icon: <Sparkles className="w-12 h-12 text-blue-600" />,
      title: "Curtain Cleaning",
      titleArabic: "تنظيف الستائر",
      description: "Professional cleaning and maintenance for all types of curtains and drapes."
    },
    {
      icon: <Car className="w-12 h-12 text-blue-600" />,
      title: "Shoe Cleaning",
      titleArabic: "تنظيف الأحذية",
      description: "Restoration and cleaning service for leather shoes, sneakers, and specialty footwear."
    }
  ];

  return (
    <section className="py-16 bg-blue-50/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Our Core Services
          </h2>
          <p className="text-2xl text-blue-700 font-semibold mb-4" dir="rtl">
            خدماتنا الأساسية
          </p>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive laundry and cleaning solutions for all your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group border border-blue-100">
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {service.image ? (
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-16 h-16 object-cover rounded-lg shadow-md"
                  />
                ) : (
                  service.icon
                )}
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-2">
                {service.title}
              </h3>
              <p className="text-lg text-blue-600 font-medium mb-4" dir="rtl">
                {service.titleArabic}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
