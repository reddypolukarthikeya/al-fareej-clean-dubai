
const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Ahmed",
      location: "Dubai Marina",
      text: "Al Fareej Laundry has been a lifesaver! Their pickup service is so convenient, and my clothes always come back looking brand new. Highly recommend!",
      rating: 5
    },
    {
      name: "Mohammed Hassan",
      location: "Business Bay",
      text: "Excellent service and quality. I've been using them for my business suits for over a year. Always professional and on time.",
      rating: 5
    },
    {
      name: "Lisa Johnson",
      location: "JLT",
      text: "The team at Al Fareej is amazing. They even managed to remove a stubborn stain from my favorite dress that other cleaners couldn't handle!",
      rating: 5
    },
    {
      name: "Abdul Rahman",
      location: "Downtown Dubai",
      text: "Fast, reliable, and affordable. The pickup and delivery service saves me so much time. Will definitely continue using their services.",
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from satisfied customers across Dubai
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-blue-50/50 p-6 rounded-xl border border-blue-100 hover:shadow-lg transition-all duration-300 group">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="border-t border-blue-200 pt-4">
                <p className="font-bold text-blue-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Ready to experience the Al Fareej difference?
          </p>
          <a href="/booking" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Schedule Your First Pickup
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
