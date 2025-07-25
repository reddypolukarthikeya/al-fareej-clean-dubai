
import { Calendar, Car, Check, Home } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Calendar className="w-12 h-12" />,
      title: "Schedule Pickup",
      titleArabic: "حدد موعد الاستلام",
      description: "Book online or call us to schedule a convenient pickup time"
    },
    {
      icon: <Car className="w-12 h-12" />,
      title: "We Collect & Clean",
      titleArabic: "نستلم وننظف",
      description: "Our team picks up your items and provides professional cleaning"
    },
    {
      icon: <Check className="w-12 h-12" />,
      title: "Quality Check",
      titleArabic: "فحص الجودة",
      description: "Every item is inspected to ensure the highest quality standards"
    },
    {
      icon: <Home className="w-12 h-12" />,
      title: "We Deliver Fresh",
      titleArabic: "نسلم نظيفاً",
      description: "Your clothes are delivered back clean, fresh, and perfectly folded"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            How It Works
          </h2>
          <p className="text-2xl text-blue-700 font-semibold mb-4" dir="rtl">
            كيف يعمل
          </p>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Simple, convenient, and reliable laundry service in 4 easy steps
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
                {step.title}
              </h3>
              <p className="text-lg text-blue-600 font-medium mb-3" dir="rtl">
                {step.titleArabic}
              </p>
              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="/booking" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Schedule Pickup Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
