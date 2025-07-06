
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-blue-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <Link to="/" className="text-blue-200 hover:text-white mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-5xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-xl text-blue-200">
            Al Fareej Laundry - Service Terms and Conditions
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <p className="text-gray-600 mb-8">
            <strong>Effective Date:</strong> January 1, 2024<br />
            <strong>Last Updated:</strong> January 1, 2024
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">1. Service Agreement</h2>
            <p className="text-gray-600">
              By using Al Fareej Laundry services, you agree to these terms and conditions. 
              Our services include pickup, cleaning, and delivery of garments and household items 
              throughout Dubai, UAE.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">2. Service Areas and Hours</h2>
            <ul className="list-disc pl-6 text-gray-600">
              <li>We serve all areas within Dubai</li>
              <li>Pickup and delivery hours: 9 AM - 10 PM, 7 days a week</li>
              <li>Service availability may vary during holidays</li>
              <li>Express services subject to availability</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">3. Pricing and Payment</h2>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Prices are subject to change with notice</li>
              <li>Payment is due upon delivery unless otherwise arranged</li>
              <li>We accept cash, card, and digital payments</li>
              <li>Additional charges may apply for special treatments</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">4. Customer Responsibilities</h2>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Check pockets before providing items for cleaning</li>
              <li>Inform us of any stains or special care requirements</li>
              <li>Provide accurate contact information</li>
              <li>Be available during scheduled pickup times</li>
              <li>Report any issues within 24 hours of delivery</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">5. Liability and Insurance</h2>
            <p className="text-gray-600 mb-4">
              While we take utmost care with your items:
            </p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>We are not liable for items left in pockets</li>
              <li>Some stains may be permanent and cannot be guaranteed removable</li>
              <li>Vintage or delicate items are processed at customer's risk</li>
              <li>Maximum liability is limited to 10x the cleaning cost</li>
              <li>Items left unclaimed for 30 days may be donated</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">6. Cancellation Policy</h2>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Pickups can be cancelled up to 2 hours before scheduled time</li>
              <li>Cleaning services cannot be cancelled once processing begins</li>
              <li>Subscription plans require 7 days notice for cancellation</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">7. Contact Information</h2>
            <p className="text-gray-600 mb-4">
              For questions about these terms or our services:
            </p>
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="text-gray-700">
                <strong>Al Fareej Laundry</strong><br />
                Phone: <a href="tel:+971502193235" className="text-blue-600">+971 50 219 3235</a><br />
                Email: <a href="mailto:alfareej.laundry@hotmail.com" className="text-blue-600">alfareej.laundry@hotmail.com</a><br />
                Location: Dubai, UAE
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">8. Changes to Terms</h2>
            <p className="text-gray-600">
              We reserve the right to modify these terms at any time. Changes will be 
              effective immediately upon posting. Continued use of our services constitutes 
              acceptance of modified terms.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
