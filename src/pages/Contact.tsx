
import { Phone, Home, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    // In a real app, this would submit to a backend
    alert("Thank you for your inquiry! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-blue-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <Link to="/" className="text-blue-200 hover:text-white mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-blue-200">
            Get in touch with Al Fareej Laundry - We're here to help!
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-8">Get In Touch</h2>
              
              <div className="space-y-8">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">Call or WhatsApp</h3>
                    <a 
                      href="tel:+971502193235" 
                      className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors block mb-2"
                    >
                      +971 50 219 3235
                    </a>
                    <p className="text-gray-600">
                      Available 7 days a week, 9 AM - 10 PM<br />
                      For bookings, inquiries, and customer support
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Home className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">Email Us</h3>
                    <a 
                      href="mailto:alfareej.laundry@hotmail.com" 
                      className="text-xl font-semibold text-blue-600 hover:text-blue-700 transition-colors block mb-2"
                    >
                      alfareej.laundry@hotmail.com
                    </a>
                    <p className="text-gray-600">
                      We typically respond within 24 hours<br />
                      Perfect for detailed inquiries and feedback
                    </p>
                  </div>
                </div>

                {/* Service Area */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Home className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">Service Area</h3>
                    <p className="text-xl font-semibold text-blue-600 mb-2">Serving Dubai</p>
                    <p className="text-gray-600">
                      Free pickup and delivery across Dubai<br />
                      Including Marina, JLT, Business Bay, Downtown, JBR, and more
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Maps Link */}
              <div className="mt-12 p-6 bg-blue-50 rounded-xl">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Find Us on Google Maps</h3>
                <p className="text-gray-600 mb-4">
                  Visit our location or view our service areas on Google Maps
                </p>
                <a 
                  href="https://www.google.com/maps/place/Al+Fareej+Laundry+%D9%85%D8%B5%D8%A8%D8%BA%D9%87+%D8%A7%D9%84%D9%81%D8%B1%D9%8A%D8%AC%E2%80%AD/data=!4m7!3m6!1s0x3e5e67da16e76c8b:0x1579010f308f1635!8m2!3d24.4863144!4d54.3554502!16s%2Fg%2F11g2w59ylq!19sChIJi2znFtpnXj4RNRaPMA8BeRU?authuser=0&hl=en&rclk=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
                >
                  View on Google Maps
                </a>
              </div>

              {/* Quick Actions */}
              <div className="mt-12">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">Quick Actions</h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/booking" className="flex-1">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 py-3">
                      <Calendar className="mr-2" size={20} />
                      Schedule Pickup
                    </Button>
                  </Link>
                  <a href="https://wa.me/971502193235" className="flex-1">
                    <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 py-3">
                      <Phone className="mr-2" size={20} />
                      WhatsApp Us
                    </Button>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-blue-50/50 p-8 rounded-xl">
                <h2 className="text-3xl font-bold text-blue-900 mb-6">Send Us a Message</h2>
                <p className="text-gray-600 mb-8">
                  Have a question or special request? Fill out the form below and we'll get back to you promptly.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-base font-semibold text-gray-700">Full Name *</Label>
                    <Input 
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Enter your full name"
                      className="mt-2"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-base font-semibold text-gray-700">Email Address *</Label>
                    <Input 
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="your.email@example.com"
                      className="mt-2"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-base font-semibold text-gray-700">Phone Number</Label>
                    <Input 
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      placeholder="+971 50 xxx xxxx"
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-base font-semibold text-gray-700">Message *</Label>
                    <Textarea 
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Tell us about your inquiry, special requirements, or feedback..."
                      className="mt-2"
                      rows={6}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700 py-3 text-lg font-semibold"
                  >
                    Send Message
                  </Button>
                </form>

                <p className="text-sm text-gray-600 mt-4">
                  * Required fields. We respect your privacy and will never share your information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
