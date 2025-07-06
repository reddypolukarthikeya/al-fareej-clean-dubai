
import { Phone, Home } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">AL FAREEJ LAUNDRY</h3>
            <p className="text-xl mb-2" dir="rtl">مصبغه الفريج</p>
            <p className="text-blue-200 mb-4">
              Dubai's trusted laundry and dry cleaning service, providing premium care 
              for your garments with convenient pickup and delivery.
            </p>
            <div className="flex flex-col gap-2">
              <a href="tel:+971502193235" className="flex items-center gap-2 text-blue-200 hover:text-white transition-colors">
                <Phone size={16} />
                +971 50 219 3235
              </a>
              <a href="mailto:alfareej.laundry@hotmail.com" className="text-blue-200 hover:text-white transition-colors">
                alfareej.laundry@hotmail.com
              </a>
              <p className="flex items-center gap-2 text-blue-200">
                <Home size={16} />
                Serving Dubai
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-blue-200 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/booking" className="text-blue-200 hover:text-white transition-colors">Book Service</Link></li>
              <li><Link to="/about" className="text-blue-200 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-blue-200 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-blue-200 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-blue-200 hover:text-white transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p className="text-blue-200">
            © 2024 Al Fareej Laundry. All rights reserved. | Dubai's Premier Laundry Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
