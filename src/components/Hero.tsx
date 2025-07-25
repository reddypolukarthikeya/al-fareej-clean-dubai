
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
        {/* Header - Fixed alignment */}
        <header className="flex justify-between items-start mb-16">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-2 leading-tight">
              AL FAREEJ LAUNDRY
            </h1>
            <p className="text-2xl md:text-3xl text-blue-700 font-semibold mb-2" dir="rtl">
              مصبغه الفريج
            </p>
            <p className="text-sm text-blue-600">Serving Dubai</p>
          </div>
          <div className="flex-1 text-right">
            <a 
              href="tel:+971502193235" 
              className="flex items-center justify-end gap-2 text-blue-900 hover:text-blue-700 transition-colors mb-2"
            >
              <span className="font-semibold">+971 50 219 3235</span>
              <Phone size={20} />
            </a>
            <a 
              href="mailto:alfareej.laundry@hotmail.com" 
              className="text-blue-600 hover:text-blue-500 transition-colors text-sm block"
            >
              alfareej.laundry@hotmail.com
            </a>
          </div>
        </header>

        {/* Hero Content with Image */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-5xl md:text-6xl font-bold text-blue-900 mb-6 leading-tight">
              Your Clothes,
              <br />
              <span className="text-blue-600">Our Care</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 mb-4 leading-relaxed">
              Effortless Laundry in Dubai
            </p>
            <p className="text-lg md:text-xl text-gray-700 mb-4 leading-relaxed" dir="rtl">
              خدمة غسيل سهلة في دبي
            </p>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Professional dry cleaning and laundry services with free pickup and delivery. 
              Experience premium care for your garments with Al Fareej Laundry - مصبغه الفريج.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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

          {/* Professional Laundry Service Image */}
          <div className="relative">
            <div className="bg-blue-100 rounded-3xl p-8 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Professional laundry service - Al Fareej Laundry Dubai - مصبغه الفريج"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <p className="text-blue-900 font-bold text-lg">24-48 Hour</p>
                <p className="text-blue-600 text-sm">Fast Turnaround</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
