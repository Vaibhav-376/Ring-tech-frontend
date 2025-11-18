import { motion } from 'framer-motion'


const LeadGeneration = () => {
  const work = [
    { id: 1, title: "3Dimensions", img: "/ourwork/image.png" },
    { id: 2, title: "AbdelAziz Alhanaee Advocates & Legal Consultancy", img: "/ourwork/image1.png" },
    { id: 3, title: "Abdul Latif Jameel Land", img: "/ourwork/image2.png" },
    { id: 4, title: "Abdul Latif Jameel Land", img: "/ourwork/image3.png" },
    { id: 5, title: "Abdulla Alawadi and Associates", img: "/ourwork/image4.png" },
    { id: 6, title: "Abela", img: "/ourwork/image5.png" },
    { id: 7, title: "Abu Dhabi Aviation Training Center", img: "/ourwork/image6.png" },
    { id: 8, title: "Abu Dhabi Finance", img: "/ourwork/image7.png" },
    { id: 9, title: "Ajmal Perfumes", img: "/ourwork/image8.png" },
    { id: 10, title: "Al Huzaifa Furniture", img: "/ourwork/image9.png" },
    { id: 11, title: "Al Qasimi Foundation", img: "/ourwork/image10.png" },
    { id: 12, title: "Al Rahala", img: "/ourwork/image11.png" },
    { id: 13, title: "Aldar Academics", img: "/ourwork/image12.png" },
    { id: 14, title: "Alico", img: "/ourwork/image13.png" },
  ];

  return (
    <div className="bg-linear-to-b from-pink-50 via-white to-pink-100 text-gray-800">
      <div className="max-w-7xl mx-auto">

       
        <section className="flex flex-col justify-center items-center text-center min-h-screen px-6 py-24">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-serif font-bold leading-tight text-gray-900"
          >
            <span className="text-pink-600">Lead Generation</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="max-w-2xl mt-6 text-lg text-gray-700"
          >
            Discover a curated showcase of world-class digital experiences crafted for global brands.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="border border-pink-500 text-pink-600 px-10 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-pink-500 hover:text-white hover:shadow-md">
              Speak to Us
            </button>

            <button className="bg-linear-to-r from-pink-500 to-pink-700 px-10 py-3 rounded-full text-lg font-semibold text-white transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              Get Started
            </button>
          </motion.div>
        </section>

        {/* INTRO SECTION */}
        <section className="px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-pink-600 text-xl font-semibold tracking-wide">
                Client success is our priority
              </h2>

              <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 leading-snug">
                The Proof is in the Project
              </h1>

              <p className="text-lg text-gray-700">
                Below is a small sample of our work with globally recognized brands. With over 300 active clients, we serve a diverse range of industries.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Don’t see a project relevant to your business? Contact us — we’ll gladly share more specific case studies.
              </p>
            </div>

            <div className="flex justify-center relative">
              <div className="absolute inset-0 blur-3xl bg-pink-200 opacity-20 rounded-full"></div>
              <h1 className='text-2xl text-pink-600 font-bold font-serif z-10'>Our Work: Case Studies & Portfolio</h1>
            </div>
          </div>
        </section>

        {/* PORTFOLIO GRID */}
        <section className="px-6 py-20">
          <h2 className="text-center text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-12">
            Browse Our <span className="text-pink-600">Brand Portfolio</span>
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {work.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center gap-3 p-6 bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all cursor-pointer border border-pink-100 group"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-20 h-20 opacity-80 group-hover:scale-110 transition-transform hover:opacity-100 object-contain"
                />
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-pink-600 text-center">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CALL TO ACTION */}
        <section className="px-6 py-20 text-center bg-white rounded-3xl shadow-sm mx-4">
          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-gray-900">
            Need a Quote? <span className="text-pink-600">Just ask...</span>
          </h1>
          <p className="text-gray-700 max-w-2xl mx-auto mb-6">
            Get in touch with us for web development or digital marketing projects — we’d love to help bring your ideas to life.
          </p>
          <button className="bg-pink-600 text-white px-10 py-3 rounded-full text-lg font-semibold hover:bg-pink-700 transition-all shadow-md hover:shadow-lg">
            Get Your Quote Now
          </button>
        </section>
      </div>
    </div>
  );
};

export default LeadGeneration;
