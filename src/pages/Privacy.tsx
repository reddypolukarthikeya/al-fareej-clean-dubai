
import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-blue-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <Link to="/" className="text-blue-200 hover:text-white mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-blue-200">
            Al Fareej Laundry - Your privacy matters to us
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
            <h2 className="text-2xl font-bold text-blue-900 mb-4">1. Information We Collect</h2>
            <p className="text-gray-600 mb-4">
              We collect information you provide directly to us, such as when you:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Schedule pickup and delivery services</li>
              <li>Create an account with us</li>
              <li>Contact us for customer support</li>
              <li>Subscribe to our communications</li>
            </ul>
            <p className="text-gray-600">
              This information may include your name, email address, phone number, address, 
              and payment information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-600 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>Provide, maintain, and improve our laundry services</li>
              <li>Process transactions and send related information</li>
              <li>Send you technical notices and support messages</li>
              <li>Communicate with you about services, promotions, and events</li>
              <li>Monitor and analyze trends and usage</li>
              <li>Detect, investigate, and prevent fraudulent transactions</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">3. Information Sharing</h2>
            <p className="text-gray-600 mb-4">
              We do not sell, trade, or otherwise transfer your personal information to third parties. 
              We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-gray-600">
              <li>With your consent</li>
              <li>To comply with legal obligations</li>
              <li>To protect and defend our rights and property</li>
              <li>With service providers who assist in our operations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">4. Data Security</h2>
            <p className="text-gray-600">
              We implement appropriate security measures to protect your personal information 
              against unauthorized access, alteration, disclosure, or destruction. However, 
              no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">5. Contact Us</h2>
            <p className="text-gray-600 mb-4">
              If you have any questions about this Privacy Policy, please contact us:
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
        </div>
      </div>
    </div>
  );
};

export default Privacy;
