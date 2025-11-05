
const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Marketing Director, BloomTech",
      text: "Working with NEXA has completely transformed our digital presence. Their strategies not only boosted our engagement but also delivered consistent, measurable results.",
    },
    {
      id: 2,
      name: "James Lee",
      role: "Founder, UrbanSpaces",
      text: "The NEXA team is highly professional and creative. They understood our vision and executed campaigns that exceeded expectations. Highly recommended!",
    },
    {
      id: 3,
      name: "Aisha Khan",
      role: "Product Manager, LIV Group",
      text: "From SEO to lead generation, NEXA handled everything seamlessly. Their communication and expertise made the process smooth and result-driven.",
    },
  ];

  return (
    <div className="py-16 bg-linear-to-r from-pink-50 via-white to-pink-50">
      <h1 className="text-3xl font-serif font-bold text-pink-600 text-center mb-10">
        What Our Clients Say
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <h3 className="text-lg font-semibold text-pink-500 mb-2">{testimonial.name}</h3>
            <p className="text-sm text-gray-500 mb-4">{testimonial.role}</p>
            <p className="text-gray-700 leading-relaxed text-justify">
              “{testimonial.text}”
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
