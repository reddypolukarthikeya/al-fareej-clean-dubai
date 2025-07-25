
import { Check, Clock, Car, Shirt, WashingMachine } from "lucide-react";

const WhyChooseUs = () => {
  const benefits = [
    {
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      title: "Free Pickup & Delivery",
      titleArabic: "الاستلام والتسليم مجاناً",
      description: "Convenient door-to-door service across Dubai"
    },
    {
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      title: "High-Quality Cleaning",
      titleArabic: "تنظيف عالي الجودة",
      description: "Professional care using premium cleaning methods"
    },
    {
      icon: <Clock className="w-12 h-12 text-blue-600" />,
      title: "Fast Turnaround",
      titleArabic: "سرعة في التنفيذ",
      description: "24-48 hour service for most items"
    },
    {
      icon: <Shirt className="w-12 h-12 text-blue-600" />,
      title: "Eco-Friendly Options",
      titleArabic: "خيارات صديقة للبيئة",
      description: "Environmentally conscious cleaning solutions"
    },
    {
      icon: <WashingMachine className="w-12 h-12 text-blue-600" />,
      title: "Experienced Professionals",
      titleArabic: "خبراء محترفون",
      description: "Skilled team with years of expertise"
    },
    {
      icon: <Check className="w-12 h-12 text-blue-600" />,
      title: "Satisfaction Guarantee",
      titleArabic: "ضمان الرضا",
      description: "100% satisfaction or we'll make it right"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Why Choose Al Fareej Laundry?
          </h2>
          <p className="text-2xl text-blue-700 font-semibold mb-4" dir="rtl">
            لماذا تختار مصبغه الفريج؟
          </p>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the difference with Dubai's trusted laundry service
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center p-6 rounded-lg bg-blue-50/50 hover:bg-blue-50 transition-colors duration-300 group">
              <div className="mb-4 flex justify-center transform group-hover:scale-110 transition-transform duration-300">
                {benefit.image ? (
                  <img 
                    src={benefit.image} 
                    alt={benefit.title}
                    className="w-20 h-20 object-cover rounded-full shadow-md"
                  />
                ) : (
                  benefit.icon
                )}
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-lg text-blue-600 font-medium mb-2" dir="rtl">
                {benefit.titleArabic}
              </p>
              <p className="text-gray-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
