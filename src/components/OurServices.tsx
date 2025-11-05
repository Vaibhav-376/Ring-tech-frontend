import { motion } from "framer-motion";

const OurServices = () => {
    const whatWeProvide = [
    { id: 1, title: "Digital Marketing", desc: "We help you grow your business by reaching the right audience with the right message at the right time." },
    { id: 2, title: "Website Design & Development", desc: "We craft responsive, engaging websites that inspire trust and drive conversions." },
    { id: 3, title: "Lead Generation Campaigns", desc: "We optimize your funnel to attract, nurture, and convert high-quality leads consistently." },
    { id: 4, title: "HubSpot CRM Solutions", desc: "We integrate HubSpot CRM for smarter sales, marketing, and customer management." },
    { id: 5, title: "Social Media Management", desc: "We build awareness and engagement through targeted social media campaigns." },
    { id: 6, title: "SEO & Content Strategy", desc: "We help your business rank higher, attract traffic, and convert visitors into customers." },
  ];

  const fadeup = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
       <section className="py-20 bg-linear-to-b from-white to-pink-50">
        <h2 className="text-center text-4xl font-serif text-pink-600">What We Provide</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16 px-6">
          {whatWeProvide.map((item, index) => (
            <motion.div
              key={item.id}
              variants={fadeup}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl border border-pink-200 bg-white shadow-md hover:shadow-pink-200/80 transition-all duration-300 hover:-translate-y-2"
            >
              <h3 className="text-xl font-semibold text-center text-pink-600 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 text-justify leading-relaxed">{item.desc}</p>
              <div className="flex justify-center">
                <button className="mt-6 border border-pink-400 py-2 px-6 rounded-full text-pink-600 hover:bg-pink-500 hover:text-white transition-all duration-300">
                  Speak to Us
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
  )
}

export default OurServices