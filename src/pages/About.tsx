
import { Check, Clock, Home, Car } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-blue-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <Link to="/" className="text-blue-200 hover:text-white mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-5xl font-bold mb-4">About Al Fareej Laundry</h1>
          <p className="text-2xl text-blue-200" dir="rtl">مصبغه الفريج</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        {/* Our Story */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Al Fareej Laundry has been serving the Dubai community with pride and dedication. 
                Our name "Al Fareej" (الفريج) represents the traditional neighborhood concept - 
                a place where community, trust, and personal service matter most.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                We understand the busy lifestyle of Dubai residents, which is why we've built 
                our services around convenience without compromising on quality. From our 
                state-of-the-art facility to our friendly pickup and delivery service, 
                every aspect of our operation is designed with our customers in mind.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Whether you're a busy professional, a growing family, or anyone who values 
                their time, Al Fareej Laundry is here to take care of your garments with 
                the same care you would give them yourself.
              </p>
            </div>
            <div className="bg-blue-50 p-8 rounded-xl">
              <img 
                src="/lovable-uploads/e54a27bf-8a06-4ad0-991e-92bd06ec3a59.png" 
                alt="Al Fareej Laundry Storefront" 
                className="w-full rounded-lg shadow-lg"
              />
              <p className="text-sm text-gray-600 mt-4 text-center">
                Our modern facility in Dubai, equipped with the latest cleaning technology
              </p>
            </div>
          </div>
        </div>

        {/* Our Mission & Values */}
        <div className="bg-blue-50/50 py-16 -mx-4">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Mission & Values</h2>
              <p className="text-xl text-gray-600">
                To provide exceptional laundry and dry cleaning services that make our customers' 
                lives easier while maintaining the highest standards of quality and care.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Quality First</h3>
                <p className="text-gray-600">
                  We use premium cleaning methods and materials to ensure your garments receive the best care possible.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Car className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Convenience</h3>
                <p className="text-gray-600">
                  Free pickup and delivery service across Dubai, making laundry effortless for our customers.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Reliability</h3>
                <p className="text-gray-600">
                  Consistent, on-time service you can depend on, with flexible scheduling to fit your lifestyle.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-2">Community</h3>
                <p className="text-gray-600">
                  We're proud to be part of the Dubai community, building lasting relationships with our neighbors.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Facility */}
        <div className="max-w-4xl mx-auto py-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-blue-50 p-8 rounded-xl">
              <img 
                src="/lovable-uploads/ca6a5006-f9f7-42d5-b13b-292ea45b1025.png" 
                alt="Al Fareej Laundry Interior" 
                className="w-full rounded-lg shadow-lg"
              />
              <p className="text-sm text-gray-600 mt-4 text-center">
                Inside our modern facility with professional-grade equipment
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Our Facility</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Our modern facility is equipped with the latest in cleaning technology, 
                ensuring that every garment receives professional-grade care. We maintain 
                strict quality control standards and use eco-friendly cleaning solutions 
                whenever possible.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  State-of-the-art cleaning equipment
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  Eco-friendly cleaning solutions
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  Climate-controlled storage
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  Quality inspection at every step
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  Specialized care for delicate items
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center bg-blue-900 text-white py-16 rounded-xl">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience the Difference?</h2>
          <p className="text-xl text-blue-200 mb-8">
            Join thousands of satisfied customers across Dubai
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking">
              <button className="bg-white text-blue-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-colors">
                Schedule Pickup Now
              </button>
            </Link>
            <a href="tel:+971502193235">
              <button className="border border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-900 transition-colors">
                Call +971 50 219 3235
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
