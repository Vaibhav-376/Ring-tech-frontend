
import { motion } from "framer-motion";
import PartnersAndRewards from '../../components/PartnersAndRewards';
import OurServices from '../../components/OurServices';
import CaseStudies from "../../components/CaseStudies";
import Testimonials from "../../components/Testimonials";
import LeadForm from "../../components/LeadForm";
const DigitalMarketing = () => {
  const experience = [
    { id: 1, title: "B2B Marketing", img: "https://ringtechmarketingbucket.s3.ap-south-1.amazonaws.com/HomepageAssets/b2b.webp" },
    { id: 2, title: "Education", img: "https://ringtechmarketingbucket.s3.ap-south-1.amazonaws.com/HomepageAssets/mortarboard.webp" },
    { id: 3, title: "Automotive", img: "https://ringtechmarketingbucket.s3.ap-south-1.amazonaws.com/HomepageAssets/automotive.webp" },
    { id: 4, title: "Healthcare", img: "https://ringtechmarketingbucket.s3.ap-south-1.amazonaws.com/HomepageAssets/healthcare.webp" },
  ]
  const experience2 = [
    { id: 1, title: "Hospitality", img: "https://ringtechmarketingbucket.s3.ap-south-1.amazonaws.com/HomepageAssets/hospitality.webp" },
    { id: 2, title: "Real Estate", img: "https://ringtechmarketingbucket.s3.ap-south-1.amazonaws.com/HomepageAssets/building.webp" },
    { id: 3, title: "E-Commerce", img: "https://ringtechmarketingbucket.s3.ap-south-1.amazonaws.com/HomepageAssets/shopping-cart.webp" }
  ]
  return (
    <div className='bg-linear-to-b from-pink-50 via white to-pink-100 text-gray-900'>
      <section className='flex flex-col justify-center items-center text-center min-h-screen px-6 py-20 relative overflow-hidden'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className='max-w-4xl relative z-10'
        >
          <h1 className='text-4xl md:text-6xl font-extrabold leading-tight'>Accelerating Business Growth Through Digital Marketing for Clients Since 2005</h1>

          <div className='mt-10 flex flex-col sm:flex-row gap-4 justify-center'>
            <button className='border border-pink-400 text-pink-600 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-pink-500 hover:text-white hover:shadow-lg'>
              Speak to Us
            </button>
            <button className='bg-linear-to-r from-pink-400 to-pink-600 px-10 py-3 rounded-full text-lg font-semibold text-white transition-transform duration-300 hover:scale-105 hover:shadow-lg'>
              Get Started
            </button>
          </div>
        </motion.div>
        <div className="absolute inset-0 bg-\[radial-gradient(circle_at_top,_rgba(255,192,203,0.4),_transparent_70%)]" />
      </section>

      <section>
        <PartnersAndRewards />
      </section>

      <section className="mt-20 bg-white/10 backdrop-blur-md py-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto px-6 md:px-10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">

            <div className="md:w-1/2 space-y-5">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 leading-tight">
                Award-Winning <span className="text-pink-600">Digital Marketing Agency</span>
                <br /> Driving Business Growth
              </h1>

              <p className="text-gray-700 leading-relaxed  text-justify">
                Since 2005, <span className="font-semibold text-gray-900">Ring Tech Marketing</span>
                has delivered comprehensive digital marketing and business growth solutions to clients worldwide.
              </p>

              <p className="text-gray-700 leading-relaxed text-justify">
                With a global team of over <span className="font-semibold">100 digital marketing experts</span>,
                we offer services including website design & development, SEO, social media management,
                and lead generation. As proud <span className="font-semibold">HubSpot partners</span>,
                we also specialize in CRM and sales automation.
              </p>

              <p className="text-gray-700 leading-relaxed text-justify">
                Our <span className="font-semibold">strategy-first approach</span> ensures every campaign
                aligns with your business goals. From competitor audits to messaging and content roadmaps —
                we set you up for measurable growth.
              </p>

              <p className="text-gray-700 leading-relaxed text-justify">
                Through creative storytelling, personalized marketing, and data-driven decisions,
                we convert customers into loyal advocates for your brand.
              </p>

              <motion.a
                whileHover={{ scale: 1.05 }}
                href="#contact"
                className="inline-block bg-pink-600 text-white font-medium px-6 py-3 rounded-full shadow-md hover:bg-pink-700 transition duration-300"
              >
                Partner with Us
              </motion.a>
            </div>


            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="md:w-1/2 flex justify-center"
            >
              <img
                src="https://ringtechmarketingbucket.s3.ap-south-1.amazonaws.com/HomepageAssets/digitalMarketing.webp"
                alt="Award Winning Digital Marketing Agency"
                className="rounded-2xl shadow-lg w-full max-w-md object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section>
        <OurServices />
      </section>
      <section className="mt-20 py-16 bg-linear-to-r from-white via-pink-50/40 to-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-12"
        >

          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 leading-tight">
              Working with{" "}
              <span className="bg-linear-to-r from-pink-600 to-rose-400 bg-clip-text text-transparent">
                Ring Tech Marketing Agency
              </span>
            </h2>

            <p className="text-gray-700 leading-relaxed">
              Partnering with a digital marketing agency to manage your business’s
              online presence can make all the difference. It’s not only about what
              your business shares online — but also about how you engage with your
              customers and build a thriving community around your brand. From
              precise targeting tools to seamless customer support, the opportunities
              are simply too valuable to miss.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Every business is unique, and the right digital marketing agency will
              tailor strategies to your specific goals. A well-rounded and
              results-driven approach is essential. At{" "}
              <span className="font-semibold text-gray-900">
                Ring Tech Marketing
              </span>
              , we take pride in our industry experience and proven track record.
              Explore the brands we’ve empowered — and see how we’ve helped them
              scale through customized marketing solutions.
            </p>

            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#portfolio"
              className="inline-block bg-pink-600 text-white font-medium px-6 py-3 rounded-full shadow-md hover:bg-pink-700 transition duration-300"
            >
              View Our Work
            </motion.a>
          </div>


          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:w-1/2 flex justify-center"
          >
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="/leading.webp"
              alt="Team collaborating at Ring Tech Marketing Agency"
              className="rounded-2xl shadow-lg w-full max-w-md object-cover"
            />
          </motion.div>
        </motion.div>
      </section>

      <section className="py-16 bg-linear-to-r from-white via-pink-50/40 to-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto px-6 md:px-10"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 text-center mb-12">
            How We Build <span className="bg-linear-to-r from-pink-600 to-rose-400 bg-clip-text text-transparent">Your Digital Strategy</span>
          </h2>

          <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-16">

            <div className="md:w-1/2 bg-white/90 backdrop-blur-sm rounded-2xl shadow-md p-6 md:p-8 hover:shadow-lg transition-shadow duration-300">
              <p className="text-gray-700 leading-relaxed">
                When the digital marketing process begins, our team develops a detailed
                strategy that includes clear goals, timelines, and actionable plans.
                This starts with in-depth market and competitor research to map out your
                business’s digital footprint and identify growth opportunities.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Once the strategy is defined, our creative specialists craft targeted
                content designed to engage and convert — from social media campaigns and
                SEO-rich articles to ads that drive measurable results.
              </p>
            </div>

            <div className="md:w-1/2 bg-white/90 backdrop-blur-sm rounded-2xl shadow-md p-6 md:p-8 hover:shadow-lg transition-shadow duration-300">
              <p className="text-gray-700 leading-relaxed">
                Our marketing team focuses on building lasting relationships with your
                audience by delivering consistent value and fostering authentic engagement.
                Transparency is key — every campaign is monitored and analyzed with precision.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Through insightful reporting and data-driven analysis, we show exactly
                what’s been achieved and how each marketing effort contributes to your
                business growth — because measurable success is what defines great marketing.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">

          {/* Title */}
          <h2 className="text-center text-4xl font-serif text-pink-600 mb-12">
            Industry Experience
          </h2>

          {/* Experience 1 - 4 Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {experience.map((item) => (
              <div
                key={item.id}
                className="p-6 bg-white rounded-2xl shadow-md border border-pink-100 hover:shadow-pink-200/60 transition-transform duration-300 hover:-translate-y-2 text-center"
              >

                <img src={item.img} alt={item.title} className="mx-auto mb-4 w-16 h-16 object-contain" />
                <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
              </div>
            ))}
          </div>


          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {experience2.map((item) => (
              <div
                key={item.id}
                className="p-6 bg-white rounded-2xl shadow-md border border-pink-100 hover:shadow-pink-200/60 transition-transform duration-300 hover:-translate-y-2 text-center"
              >

                <img src={item.img} alt={item.title} className="mx-auto mb-4 w-16 h-16 object-contain" />
                <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
              </div>
            ))}
          </div>

        </div>
      </section>


      <section>
        <CaseStudies />
      </section>

      <section>
        <Testimonials />
      </section>
      <section>
        <LeadForm />
      </section>
    </div>
  )
}

export default DigitalMarketing