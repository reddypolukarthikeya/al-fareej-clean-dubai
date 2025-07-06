
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Basic Plan",
      price: "99",
      period: "per month",
      description: "Perfect for individuals and small households",
      features: [
        "5 kg monthly allowance",
        "Free pickup & delivery",
        "Standard turnaround (48 hours)",
        "Basic garment care",
        "Customer support"
      ],
      popular: false
    },
    {
      name: "Family Plan",
      price: "179",
      period: "per month",
      description: "Ideal for families and larger households",
      features: [
        "12 kg monthly allowance",
        "Free pickup & delivery",
        "Priority turnaround (24 hours)",
        "Premium garment care",
        "Stain treatment included",
        "24/7 customer support"
      ],
      popular: true
    },
    {
      name: "Premium Plan",
      price: "279",
      period: "per month",
      description: "Complete laundry solution for busy professionals",
      features: [
        "20 kg monthly allowance",
        "Free pickup & delivery",
        "Express turnaround (same day)",
        "Luxury garment care",
        "Stain & odor treatment",
        "Garment storage service",
        "Dedicated account manager"
      ],
      popular: false
    }
  ];

  return (
    <section className="py-16 bg-blue-50/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Pricing Plans
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Flexible pricing options to suit your laundry needs
          </p>
          <p className="text-lg text-gray-600 mt-4">
            Individual services starting from <span className="font-bold text-blue-600">15 AED</span>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 relative ${plan.popular ? 'border-2 border-blue-500 scale-105' : 'border border-gray-200'}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-blue-900 mb-2">
                  {plan.name}
                </h3>
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {plan.price} <span className="text-lg text-gray-600">AED</span>
                </div>
                <p className="text-gray-600">{plan.period}</p>
                <p className="text-sm text-gray-600 mt-2">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full py-3 rounded-full font-semibold transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl' 
                    : 'bg-blue-100 hover:bg-blue-200 text-blue-600'
                }`}
              >
                Choose Plan
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Need a custom solution? Contact us for personalized pricing.
          </p>
          <a href="tel:+971502193235" className="text-blue-600 hover:text-blue-700 font-semibold">
            Call +971 50 219 3235
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
