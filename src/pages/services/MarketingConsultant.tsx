"use client"
import { motion } from "framer-motion"
import PartnersAndRewards from "../../components/PartnersAndRewards"
import Experience from "../../components/Experience"
import CaseStudies from "../../components/CaseStudies"
import Counter from "../../components/Counter"
import Testimonials from "../../components/Testimonials"
import LeadForm from "../../components/LeadForm"

const MarketingConsultant = () => {
  return (
    <div className="bg-linear-to-b from-pink-50 via-white to-pink-100 text-gray-800">
      <div className="max-w-7xl mx-auto">
        <section className="px-6 lg:px-12 flex flex-col-reverse lg:flex-row items-center min-h-screen py-20 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight text-gray-900">
              Marketing <span className="text-pink-600">Consultant</span>
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Partner with <span className="font-semibold text-pink-600">RingTech Marketing</span> to create and execute a powerful marketing strategy tailored to your business. Our experts craft actionable, data-driven plans that strengthen your online presence, attract qualified leads, and accelerate growth.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="border border-pink-500 text-pink-600 px-10 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-pink-600 hover:text-white shadow-md"
              >
                Speak to Us
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-linear-to-r from-pink-500 to-pink-700 px-10 py-3 rounded-full text-lg font-semibold text-white transition-all duration-300 shadow-md hover:shadow-xl"
              >
                Get Started
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <img
              src="https://ringtechmarketingbucket.s3.ap-south-1.amazonaws.com/servicesNavMenu/marketing-consultant/consultant1.webp"
              alt="Marketing Consultant"
              className="w-full max-w-md rounded-2xl shadow-lg"
            />
          </motion.div>
        </section>

        <section className="py-16">
          <PartnersAndRewards />
        </section>

        <section className="py-20 rounded-3xl shadow-sm mx-6 lg:mx-0">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <img
                src="https://ringtechmarketingbucket.s3.ap-south-1.amazonaws.com/servicesNavMenu/marketing-consultant/consultant2.webp"
                alt="Strategy Planning"
                className="rounded-2xl shadow-md"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 space-y-5"
            >
              <h2 className="text-4xl font-serif font-bold text-pink-600">
                Smart Plans, Sustainable Growth
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                At <span className="font-semibold text-pink-600">RingTech Marketing</span>, we develop tailored strategies that align with your business objectives and customer journey. Through data analysis, creative direction, and growth-focused insights, we ensure your marketing efforts generate measurable, lasting results.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16">
          <Counter />
        </section>

        <section className="py-16">
          <CaseStudies />
        </section>

        <section className="py-16">
          <Experience />
        </section>

        <section className="py-16">
          <Testimonials />
        </section>

        <section className="py-16 bg-pink-50">
          <LeadForm />
        </section>
      </div>
    </div>
  )
}

export default MarketingConsultant
