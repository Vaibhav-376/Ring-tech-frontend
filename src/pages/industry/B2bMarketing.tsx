"use client";
import { motion } from "framer-motion";
import PartnersAndRewards from "../../components/PartnersAndRewards";
import CaseStudies from "../../components/CaseStudies";
import Testimonials from "../../components/Testimonials";
import LeadForm from "../../components/LeadForm";

const B2bMarketing = () => {
  return (
    <div className="bg-linear-to-b from-pink-50 via-white to-pink-100 text-gray-800">
      <div className="max-w-7xl mx-auto">
        <section className="flex flex-col justify-center items-center text-center min-h-[90vh] px-6 py-24 relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight text-gray-900">
              B2B <span className="text-pink-600">Marketing</span>
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-600 italic">
              Empowering Your Business with Effective B2B Marketing Strategies
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <button className="border border-pink-500 text-pink-600 px-10 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-pink-500 hover:text-white hover:shadow-lg">
                Speak to Us
              </button>
              <button className="bg-linear-to-r from-pink-500 to-pink-700 px-10 py-3 rounded-full text-lg font-semibold text-white transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                Get Started
              </button>
            </div>
          </motion.div>
        </section>

        <section className="py-12">
          <PartnersAndRewards />
        </section>

        <section className="py-20 px-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-10 items-center"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-pink-600 mb-4">
                There's an Art to B2B Marketing
              </h2>
              <p className="text-gray-700 leading-relaxed">
                B2B marketing requires deep insight into your business, products,
                and customers. Every lead matters — it must be generated,
                nurtured, and converted with care and precision. That’s where{" "}
                <span className="font-semibold">Ring Tech Marketing</span> steps
                in.
                <br />
                <br />
                Our services include strategy development, branding and website
                design, social media and content marketing, lead generation,
                HubSpot CRM setup and training, database management, email
                campaigns, marketing automation, and digital marketing training.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="/industry/videoframe.png"
                alt="B2B Marketing Visual"
                className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300 w-72"
              />
            </div>
          </motion.div>
        </section>

        <section className="py-20 px-6 bg-white/70 backdrop-blur-md rounded-3xl shadow-inner">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-start"
          >
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                B2B marketing is about demonstrating how your business can solve
                the needs of other businesses. At{" "}
                <span className="font-semibold">Ring Tech Marketing</span>, our
                data-driven approach builds brand awareness, drives meaningful
                engagement, and generates high-quality leads that turn into
                long-term partnerships.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We take the time to fully understand your business — from your
                products and services to your clients’ expectations. Once
                immersed, we create comprehensive marketing and sales funnels
                that map the buyer journey, delivering the right message at every
                stage to help you close deals faster and smarter.
              </p>
            </div>

            <div>
              <p className="font-semibold text-gray-800 mb-3">
                Our key B2B marketing solutions include:
              </p>
              <ul className="list-decimal list-inside space-y-2 text-gray-700">
                <li>Branding & Website Design</li>
                <li>Social Media & Content Marketing</li>
                <li>Lead Generation Campaigns</li>
                <li>HubSpot CRM Setup & Training</li>
                <li>Database Management & Email Campaigns</li>
                <li>Marketing Automation Systems</li>
                <li>Digital Marketing Training</li>
              </ul>
            </div>
          </motion.div>
        </section>


        <CaseStudies />
        <Testimonials />

        <section className="py-20 px-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-10 items-center"
          >
            <div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Since 2005, <span className="font-semibold">Ring Tech Marketing</span> has
                partnered with top B2B organizations, delivering cutting-edge
                expertise in lead generation, social media, and integrated
                digital marketing strategies.
              </p>
              <p className="text-gray-700 leading-relaxed">
                When you partner with us, you gain access to a passionate team of
                marketing specialists dedicated to conceptualizing, executing,
                and optimizing strategies that drive leads, engagement, and
                measurable business growth.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="/industry/videoframe.png"
                alt="Digital Marketing Strategy"
                className="rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 w-72"
              />
            </div>
          </motion.div>
        </section>

        <section className="py-20 px-6 bg-linear-to-r from-white via-pink-50 to-white rounded-3xl shadow-md">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-pink-600 mb-4">
                B2B Automation
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Implementing automation systems enhances the efficiency of your
                digital marketing operations by simplifying complex workflows.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                As a trusted <span className="font-semibold">HubSpot Partner</span>,{" "}
                <span className="font-semibold">Ring Tech Marketing</span> provides
                powerful CRM tools and automation platforms that streamline every
                step of your lead generation and sales funnel.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our approach to marketing and sales is holistic — rooted in
                HubSpot’s proven flywheel framework — with a strong focus on
                customer feedback through Net Promoter Scoring (NPS) to promote
                continuous improvement and sustainable growth.
              </p>
            </div>

            <div className="flex justify-center">
              <img
                src="/industry/b2b.webp"
                alt="B2B Automation"
                className="rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </motion.div>
        </section>

        <section className="py-20">
            <LeadForm/>
        </section>
      </div>
    </div>
  );
};

export default B2bMarketing;
