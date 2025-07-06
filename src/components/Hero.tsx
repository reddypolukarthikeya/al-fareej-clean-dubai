
import { Button } from "@/components/ui/button";
import { Phone, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden">
      {/* Decorative bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-4 h-4 bg-blue-400 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-32 right-20 w-6 h-6 bg-blue-300 rounded-full opacity-40 animate-pulse delay-1000"></div>
        <div className="absolute top-64 left-1/4 w-3 h-3 bg-blue-500 rounded-full opacity-50 animate-pulse delay-500"></div>
        <div className="absolute bottom-32 right-10 w-5 h-5 bg-blue-400 rounded-full opacity-60 animate-pulse delay-1500"></div>
        <div className="absolute bottom-64 left-16 w-4 h-4 bg-blue-300 rounded-full opacity-40 animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-16">
          <div className="text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-2">
              AL FAREEJ LAUNDRY
            </h1>
            <p className="text-2xl md:text-3xl text-blue-700 font-semibold" dir="rtl">
              مصبغه الفريج
            </p>
            <p className="text-sm text-blue-600 mt-2">Serving Dubai</p>
          </div>
          <div className="text-right">
            <a 
              href="tel:+971502193235" 
              className="flex items-center gap-2 text-blue-900 hover:text-blue-700 transition-colors mb-2"
            >
              <Phone size={20} />
              <span className="font-semibold">+971 50 219 3235</span>
            </a>
            <a 
              href="mailto:alfareej.laundry@hotmail.com" 
              className="text-blue-600 hover:text-blue-500 transition-colors text-sm"
            >
              alfareej.laundry@hotmail.com
            </a>
          </div>
        </header>

        {/* Hero Content */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold text-blue-900 mb-6 leading-tight">
            Your Clothes,
            <br />
            <span className="text-blue-600">Our Care</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
            Effortless Laundry in Dubai
          </p>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            Professional dry cleaning and laundry services with free pickup and delivery. 
            Experience premium care for your garments with Al Fareej Laundry.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/booking">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Calendar className="mr-2" size={20} />
                Schedule Pickup Now
              </Button>
            </Link>
            <a href="tel:+971502193235">
              <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
                <Phone className="mr-2" size={20} />
                Call Now
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
