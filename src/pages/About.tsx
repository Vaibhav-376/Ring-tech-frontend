import { motion } from 'framer-motion'
import Counter from '../components/Counter'
import PartnersAndRewards from '../components/PartnersAndRewards'
import LeadForm from '../components/LeadForm'

const About = () => {
  const leadingbrands = [
    { id: 1, title: "Digital Solutions with Unmatched Excellence", desc: "Our expert-crafted digital marketing services focus on success and distinction", img: "https://ringtechmarketingbucket.s3.ap-south-1.amazonaws.com/about/img1.webp" },
    { id: 2, title: "Turn Your Digital Ideas Into Reality", desc: "We transform your vision into a unique digital experience, backed by over 20 years of expertise", img: "https://ringtechmarketingbucket.s3.ap-south-1.amazonaws.com/about/img2.webp" },
    { id: 3, title: "Strategies Tailored to Your Ambitions", desc: "We deliver innovative and precise strategies to achieve your goals seamlessly", img: "https://ringtechmarketingbucket.s3.ap-south-1.amazonaws.com/about/img3.webp" },
  ]

  return (
    <div className="bg-linear-to-b from-pink-50 via-white to-pink-100 text-gray-800">
      <div className="max-w-7xl mx-auto">

        <section className="flex flex-col justify-center items-center text-center min-h-screen px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl space-y-8"
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight text-gray-900">
              About <span className="text-pink-600">Ring Marketing</span>
            </h1>

            <p className="mt-4 text-lg md:text-xl text-gray-700 italic">
              Our mission is to empower modern businesses with innovative Marketing, Sales,
              and Service technologies—helping them maximise customer acquisition and
              retention through data-driven strategies.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <button className="border border-pink-500 text-pink-600 px-10 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-pink-500 hover:text-white hover:shadow-md">
                Speak to Us
              </button>

              <button className="bg-linear-to-r from-pink-500 to-pink-700 px-10 py-3 rounded-full text-lg font-semibold text-white transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                Get Started
              </button>
            </div>
          </motion.div>
        </section>

        <section className="py-16">
          <Counter />
        </section>

        <section className="py-10">
          <PartnersAndRewards />
        </section>

        <section className="py-20 px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <video
                src="https://ringtechmarketingbucket.s3.ap-south-1.amazonaws.com/about/video1.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="rounded-2xl shadow-lg w-full max-w-md border border-pink-200"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6 text-gray-700 leading-relaxed"
            >
              <p>
                Ring Tech Marketing is an award-winning Growth Agency founded in 2005, operating across
                the UAE, KSA, USA, UK and Australia. As a founding member of the Digital Transformation
                Group (DXG)—a global alliance of HubSpot Solutions Partners backed by 200+ specialists—
                we deliver strategic expertise at scale.
              </p>

              <p>
                As a specialist Growth and Digital Marketing Agency, we help businesses achieve measurable
                online success through data-driven strategies. By leveraging technology, content, and
                powerful search and marketing tools, we connect your brand with the right audience and
                generate high-quality leads that fuel business growth.
              </p>

              <p>
                We are also at the forefront of Web 3.0 innovation. Our team actively embraces this
                next evolution of the internet, guiding major brands as they transition into Web 3.0
                environments. Ring Tech Marketing continues to lead digital transformation within this
                emerging landscape.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="px-6 py-20">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-pink-600">
            Trusted by Leading Brands
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 py-12">
            {leadingbrands.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="border border-pink-300 shadow-md hover:shadow-xl transition rounded-2xl px-6 py-8 text-center space-y-4"
              >
                <img src={item.img} alt={item.title} className="mx-auto mb-4 w-20 h-20 object-contain" />
                <h1 className="text-xl font-semibold text-pink-600">{item.title}</h1>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section>
          <PartnersAndRewards/>
        </section>
        
        <section className='py-10'>
          <LeadForm/>
        </section>
      </div>
    </div>
  )
}

export default About
