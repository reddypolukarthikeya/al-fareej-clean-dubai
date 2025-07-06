
import { Check, Clock, Curtain, Car, Ironing, Washing } from "lucide-react";

const WhyChooseUs = () => {
  const benefits = [
    {
      icon: <Car className="w-8 h-8 text-blue-600" />,
      title: "Free Pickup & Delivery",
      description: "Convenient door-to-door service across Dubai"
    },
    {
      icon: <Check className="w-8 h-8 text-blue-600" />,
      title: "High-Quality Cleaning",
      description: "Professional care using premium cleaning methods"
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: "Fast Turnaround",
      description: "24-48 hour service for most items"
    },
    {
      icon: <Ironing className="w-8 h-8 text-blue-600" />,
      title: "Eco-Friendly Options",
      description: "Environmentally conscious cleaning solutions"
    },
    {
      icon: <Washing className="w-8 h-8 text-blue-600" />,
      title: "Experienced Professionals",
      description: "Skilled team with years of expertise"
    },
    {
      icon: <Check className="w-8 h-8 text-blue-600" />,
      title: "Satisfaction Guarantee",
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
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience the difference with Dubai's trusted laundry service
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center p-6 rounded-lg bg-blue-50/50 hover:bg-blue-50 transition-colors duration-300 group">
              <div className="mb-4 flex justify-center transform group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-2">
                {benefit.title}
              </h3>
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
