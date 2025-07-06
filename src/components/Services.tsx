
import { Curtain, Ironing, Washing, Car, Home, Check } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Check className="w-12 h-12 text-blue-600" />,
      title: "Dry Cleaning",
      description: "Professional dry cleaning for delicate fabrics, suits, and formal wear using eco-friendly solvents."
    },
    {
      icon: <Washing className="w-12 h-12 text-blue-600" />,
      title: "Washing & Folding",
      description: "Complete wash, dry, and fold service for everyday clothing with premium detergents."
    },
    {
      icon: <Ironing className="w-12 h-12 text-blue-600" />,
      title: "Ironing Service",
      description: "Expert pressing and ironing to keep your clothes crisp and wrinkle-free."
    },
    {
      icon: <Home className="w-12 h-12 text-blue-600" />,
      title: "Carpet Cleaning",
      description: "Deep cleaning for carpets and rugs with specialized equipment and solutions."
    },
    {
      icon: <Curtain className="w-12 h-12 text-blue-600" />,
      title: "Curtain Cleaning",
      description: "Professional cleaning and maintenance for all types of curtains and drapes."
    },
    {
      icon: <Car className="w-12 h-12 text-blue-600" />,
      title: "Shoe Cleaning",
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
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive laundry and cleaning solutions for all your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group border border-blue-100">
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                {service.title}
              </h3>
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
