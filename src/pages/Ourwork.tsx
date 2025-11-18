import { motion } from 'framer-motion'
import LeadForm from '../components/LeadForm';
import { Link } from 'react-router-dom';

const Ourwork = () => {
  const browseWork = [
    { id: 1, title: "Website", img: "/ourwork/website.png", link: "/ourwork/website" },
    { id: 2, title: "SEO", img: "/ourwork/seo.png", link: "/ourwork/seo" },
    { id: 3, title: "Lead Generation", img: "/ourwork/leadgeneration.avif", link: "/ourwork/lead-generation" },
    { id: 4, title: "Social", img: "/ourwork/social.jpg", link: "/ourwork/social" },
    { id: 5, title: "Video", img: "/ourwork/video.png", link: "/ourwork/video" },
    { id: 6, title: "HubSpot", img: "/ourwork/hubspot.svg", link: "/ourwork/hubspot" },
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
            Our <span className="text-pink-600">Work</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="max-w-2xl mt-6 text-lg text-gray-700"
          >
            Explore our portfolio of projects crafted to elevate brands and deliver measurable results.
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


        <section className="px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            <div className="space-y-6">
              <h2 className="text-pink-600 text-xl font-semibold tracking-wide">
                Client success is our success
              </h2>

              <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 leading-snug">
                The Proof is in the Project
              </h1>

              <p className="text-lg text-gray-700">
                Would you like to see some examples of what we can do for you?
              </p>

              <p className="text-gray-700 leading-relaxed">
                At Ring Tech Marketing, we specialise in designing, developing, and executing full-scale digital projects that elevate brands and drive results. Our forward-thinking strategists stay ahead of industry trends and leverage modern technologies to deliver exceptional lead generation and conversion outcomes.
              </p>

              <p className="text-gray-700 leading-relaxed">
                With over 300 active global clients, showcasing all our work isn't possible — but here are a few highlights to show what we can achieve.
              </p>
            </div>

            <div className="flex justify-center relative">
              <div className="absolute inset-0 blur-3xl bg-pink-200 opacity-20 rounded-full"></div>

              <video
                src="/ourwork/video1.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="rounded-2xl shadow-xl border border-pink-200 w-full max-w-lg object-cover z-10"
              />
            </div>
          </div>
        </section>


        <section className="px-6 py-20">
          <h2 className="text-center text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-12">
            Browse Our Work by <span className="text-pink-600">Service</span>
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6">
            {browseWork.map((work) => (
              <motion.div
                key={work.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="flex flex-col items-center gap-3 p-6 bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all cursor-pointer border border-pink-100 group"
              >
                <Link to={work.link} className="flex flex-col items-center gap-3">
                  <img
                    src={work.img}
                    alt={work.title}
                    className="w-20 h-20 opacity-80 group-hover:scale-110 transition-transform hover:opacity-100"
                  />
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-pink-600">
                    {work.title}
                  </h3>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>


        <section className="px-6 py-20 text-center bg-white rounded-3xl shadow-sm mx-4">
          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-gray-900">
            Need a Quote? <span className="text-pink-600">Just ask...</span>
          </h1>
          <p className="text-gray-700 max-w-2xl mx-auto mb-6">
            Get in touch with us if you have a web development or digital marketing project that you would like to get underway!
          </p>
          <button className="bg-pink-600 text-white px-10 py-3 rounded-full text-lg font-semibold hover:bg-pink-700 transition-all shadow-md hover:shadow-lg">
            Get Your Quote Now
          </button>
        </section>


        <section className="px-6 py-20">
          <LeadForm />
        </section>
      </div>
    </div>
  );
};

export default Ourwork;
