"use client";
import { motion } from "framer-motion";
import PartnersAndRewards from "../../components/PartnersAndRewards";
import Counter from "../../components/Counter";
import CaseStudies from "../../components/CaseStudies";
import Testimonials from "../../components/Testimonials";
import LeadForm from "../../components/LeadForm";

const Education = () => {
  return (
    <div className="bg-linear-to-b from-pink-50 via-white to-pink-100 text-gray-800">
      <div className="max-w-7xl mx-auto">
        <section className="flex flex-col justify-center items-center text-center min-h-screen px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight text-gray-900">
              Education <span className="text-pink-600">Marketing Agency</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600 italic">
              Empowering educational institutions with strategic marketing excellence
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

        <section className="py-16">
          <PartnersAndRewards />
        </section>

        <section className="px-6 py-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-pink-600 mb-6">
                Education Marketing Tailored for Impact
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                In today’s competitive education landscape, effective marketing is key to connecting with students, parents, and educators. At{" "}
                <span className="font-semibold">Ringtech Marketing</span>, we craft strategic campaigns that build awareness, drive engagement, and strengthen your institution’s brand presence across digital platforms.
              </p>
              <button className="bg-linear-to-r from-pink-500 to-pink-700 px-8 py-3 rounded-full text-lg font-semibold text-white transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                Learn More
              </button>
            </div>
            <div className="flex justify-center">
              <video
                src="/industry/book.mp4"
                className="rounded-2xl shadow-2xl w-full max-w-md"
                autoPlay
                muted
                loop
              />
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 py-20">
            <div className="space-y-6 text-gray-700">
              <p>
                <span className="font-semibold text-pink-600">Ringtech Marketing</span> combines deep education-sector expertise with over two decades of digital marketing experience, giving our clients a distinct competitive advantage.
              </p>
              <p>
                We execute full-funnel marketing strategies that attract quality enrollment leads, nurture them effectively, and convert engagement into measurable growth.
              </p>
              <p>
                In an era where parents and students extensively research online before contacting institutions, your digital presence defines your reputation and trustworthiness.
              </p>
              <p>
                With data-driven storytelling, engaging content, and intelligent automation, we ensure your institution stands out and thrives.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md border border-pink-100">
              <h3 className="text-2xl font-semibold text-pink-600 mb-4">
                Our Education Marketing Services
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Branding & Website Design</li>
                <li>Social Media & Content Strategy</li>
                <li>Lead Generation Campaigns</li>
                <li>HubSpot CRM Setup & Training</li>
                <li>Database Management & Email Campaigns</li>
                <li>Marketing Automation Systems</li>
                <li>Digital Marketing Training & Support</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-10">
          <Counter />
        </section>

        <section className="px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-md p-10 border border-pink-100"
          >
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-serif font-semibold text-gray-800 mb-4">
                  Award-Winning Campaign Excellence
                </h2>
                <p className="text-gray-700">
                  Our campaign was honored with the{" "}
                  <span className="font-semibold text-pink-600">
                    “Best Integrated Campaign”
                  </span>{" "}
                  at the MENA Search Awards 2019—recognizing our innovation, creativity, and measurable results in education marketing.
                </p>
              </div>
              <div className="flex justify-center">
                <img
                  src="/industry/videoframe2.png"
                  alt="Award-winning campaign"
                  className="rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </motion.div>
        </section>

        <section className="py-16">
          <CaseStudies />
        </section>

        <section className="py-16">
          <Testimonials />
        </section>

        <section className="px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-5 text-gray-700">
              <h2 className="text-3xl font-serif font-bold text-pink-600">
                Marketing for the Education Sector
              </h2>
              <p className="text-lg font-medium text-gray-800">
                A Full Admissions-Funnel Approach for Schools & Universities
              </p>
              <p>
                Marketing for educational institutions demands specialized expertise aligned with both marketing and admissions operations. Our approach focuses on building awareness, generating leads, and converting them into successful enrollments.
              </p>
              <p>
                Every touchpoint between prospective students, families, and your admissions team is tracked and optimized—ensuring every interaction moves them closer to becoming part of your institution.
              </p>
            </div>

            <div className="flex justify-center">
              <video
                src="/industry/book.mp4"
                className="rounded-2xl shadow-xl w-full max-w-md"
                autoPlay
                muted
                loop
              />
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 mt-16 text-gray-700">
            <div className="space-y-6">
              <p>
                <span className="font-semibold text-pink-600">Ringtech Marketing</span> uses the admissions funnel as the foundation of every strategy—creating awareness, generating qualified leads, and organizing meaningful admission meetings.
              </p>
              <p>
                Through innovative tools like WhatsApp, email marketing, and CRM integrations with HubSpot, we manage and track every lead in real time—ensuring that no opportunity is missed.
              </p>
              <p>
                Our mission is to build long-term engagement and trust by delivering personalized communication and seamless user experiences throughout the admissions journey.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md border border-pink-100">
              <h3 className="text-2xl font-semibold text-pink-600 mb-4">
                Our Toolbox & Growth Drivers
              </h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Targeted Google & Social Media Campaigns</li>
                <li>Engaging, conversion-focused landing pages</li>
                <li>Real-time CRM & admissions tracking dashboards</li>
                <li>Automated WhatsApp & email communication flows</li>
              </ul>
              <p className="mt-6">
                Our proven strategies and award-winning results make{" "}
                <span className="font-semibold text-pink-600">Ringtech Marketing</span> the trusted partner for educational institutions ready to grow.
              </p>
              <button className="mt-6 bg-linear-to-r from-pink-500 to-pink-700 px-8 py-3 rounded-full text-lg font-semibold text-white transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                Connect with Our Team
              </button>
            </div>
          </div>
        </section>

        <section className="pb-20">
          <LeadForm/>
        </section>
      </div>
    </div>
  );
};

export default Education;
