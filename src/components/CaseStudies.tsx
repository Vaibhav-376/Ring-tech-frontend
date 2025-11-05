import { motion } from "framer-motion";

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Berkeley",
      desc: "After electing to take its own marketing and sales in-house, Berkeley partnered with Ring Tech Marketing to craft a comprehensive digital strategy. We delivered automated content workflows, optimized the website for higher conversions, and built a scalable lead-generation framework that continues to drive measurable growth.",
    },
    {
      id: 2,
      title: "Bosch",
      desc: "As Bosch expanded into the Middle East, they needed a region-specific digital strategy that aligned with their global brand. Ring Tech Marketing designed a tailored content pillar and social strategy that engaged new audiences, strengthened local relevance, and maintained Bosch’s global identity.",
    },
    {
      id: 3,
      title: "Audi",
      desc: "To establish a stronger digital presence across regional markets, Audi partnered with Ring Tech Marketing for a customized multi-channel strategy. Our campaign unified content, SEO, and paid media efforts to deliver consistent brand messaging and improved online engagement.",
    },
    {
      id: 4,
      title: "Rove Hotels",
      desc: "With strong competition and a pandemic-driven slowdown, Rove Hotels needed to enhance visibility and organic traffic. Our SEO-driven approach, combined with a robust content strategy and UX improvements, increased qualified leads and strengthened brand presence.",
    },
    {
      id: 5,
      title: "CBRE",
      desc: "Transitioning from traditional relationship-based methods, CBRE embraced a digital-first approach with Ring Tech Marketing. Using HubSpot CRM and data-driven marketing campaigns, we improved lead generation and drove higher visibility among investor audiences.",
    },
    {
      id: 6,
      title: "Nolte",
      desc: "With in-store traffic declining, Nolte partnered with Ring Tech Marketing to elevate its online presence. We delivered integrated campaigns, CRM implementation, and HubSpot automation — achieving significant growth in leads and customer engagement.",
    },
    {
      id: 7,
      title: "American University of Malta",
      desc: "To boost student enrollment, AUM collaborated with Ring Tech Marketing to implement a complete lead-generation ecosystem. Through HubSpot integration, SEO, and conversion-focused campaigns, we helped increase student inquiries and brand trust.",
    },
    {
      id: 8,
      title: "LIV Marina",
      desc: "LIV Marina partnered with Ring Tech Marketing for the Dubai launch of their luxury property. We executed a holistic digital strategy featuring social media campaigns, performance ads, and HubSpot integration — achieving strong investor engagement and traffic growth.",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-20 bg-gradient-to-r from-white via-pink-50/40 to-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 md:px-10"
      >
        <h2 className="text-center text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-14">
          <span className="bg-gradient-to-r from-pink-600 to-rose-400 bg-clip-text text-transparent">
            Case Studies
          </span>
        </h2>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-8">
          {caseStudies.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: item.id * 0.1 }}
              className="p-6 rounded-2xl bg-white/90 backdrop-blur-sm shadow-md border border-pink-100 hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-pink-600 text-center">
                {item.title}
              </h3>
              <p className="mt-4 text-gray-700 text-justify leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default CaseStudies;