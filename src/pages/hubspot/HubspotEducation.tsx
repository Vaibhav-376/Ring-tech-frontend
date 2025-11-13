"use client";
import { motion } from "framer-motion";
import PartnersAndRewards from "../../components/PartnersAndRewards";
import Counter from "../../components/Counter";
import CaseStudies from "../../components/CaseStudies";
import Testimonials from "../../components/Testimonials";
import LeadForm from "../../components/LeadForm";

const HubspotEducation = () => {
  return (
    <div className="bg-linear-to-b from-pink-50 via-white to-pink-100 text-gray-800">
      <div className="max-w-7xl mx-auto">

        <section className="flex flex-col justify-center items-center text-center min-h-screen px-6 py-24 relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl space-y-8"
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight text-gray-900">
              HubSpot for{" "}
              <span className="text-pink-600">
                Schools, Universities & Education
              </span>
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-600 italic">
              Setup & integration for educational institutions by the winners of{" "}
              <span className="text-pink-600 font-semibold">
                “Best Integrated EDU Campaign x2”
              </span>{" "}
              and{" "}
              <span className="text-pink-600 font-semibold">
                “Best Local EDU Campaign”
              </span>
              .
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
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-10 items-center"
          >
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-pink-600">
                Supercharge Student Enrollment with HubSpot
              </h2>
              <p className="text-gray-700 leading-relaxed">
                A multi-award-winning HubSpot implementation framework designed
                for schools, universities, and training institutes — seamlessly
                integrating marketing and sales with CRM for optimized lead
                generation and student retention.
              </p>
            </div>

            <div className="flex justify-center">
              <video
                src="/industry/book.mp4"
                autoPlay
                loop
                muted
                className="rounded-2xl shadow-xl max-w-sm w-full h-auto"
              />
            </div>
          </motion.div>
        </section>


        <section className="px-6 py-20 bg-white/80 rounded-3xl mx-4 shadow-md border border-pink-100">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-5 text-gray-700">
              <p>
                The digital evolution of education demands institutions to
                modernize their approach to marketing and enrollment.
              </p>
              <p>
                HubSpot — a globally recognized CRM — unifies marketing, sales,
                and service tools into one powerful ecosystem trusted by leading
                schools and universities.
              </p>
              <p>
                As an{" "}
                <span className="font-semibold text-gray-900">
                  Elite-tier HubSpot Partner
                </span>
                , Ringtech Marketing combines deep platform expertise with
                decades of marketing and sales experience — giving your
                institution a proven edge.
              </p>
            </div>

            <div className="space-y-5 text-gray-700">
              <p>
                We craft full-funnel HubSpot strategies that attract quality
                enrollment leads, nurture relationships, and improve retention.
              </p>
              <p>
                <span className="font-semibold text-gray-900">
                  Ringtech Marketing
                </span>{" "}
                collaborates closely with your admissions and marketing teams to
                design a strategy that converts interest into long-term success.
              </p>
              <p className="font-semibold text-pink-600">
                Our HubSpot services for educational institutions include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>HubSpot license consultation & setup</li>
                <li>CRM and workflow automation</li>
                <li>Lead generation & nurturing campaigns</li>
                <li>Sales and marketing training</li>
                <li>Go-to-market strategy and enrollment funnel setup</li>
                <li>Custom SIS integrations and reporting dashboards</li>
              </ul>
            </div>
          </div>
        </section>


        <section className="py-16">
          <Counter />
        </section>


        <section className="py-16">
          <CaseStudies />
        </section>
        <section className="py-16">
          <Testimonials />
        </section>

        <section className="px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-10 items-start"
          >
            <div className="space-y-6 text-gray-700">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-pink-600">
                Marketing for the Education Sector
              </h2>
              <p className="text-lg">
                A Full Admissions-Funnel Approach to Marketing for Schools &
                Universities.
              </p>
              <p>
                Marketing for educational institutions demands strategy,
                precision, and alignment with your admissions process. We ensure
                every stage of your funnel — from awareness to enrollment — is
                optimized for performance.
              </p>
            </div>

            <div className="flex justify-center">
              <video
                src="/industry/book.mp4"
                autoPlay
                loop
                muted
                className="rounded-2xl shadow-xl max-w-sm w-full h-auto"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mt-16 grid md:grid-cols-2 gap-10 text-gray-700"
          >
            <div className="space-y-5">
              <p>
                At{" "}
                <span className="font-semibold text-gray-900">
                  Ringtech Marketing
                </span>
                , our strategy revolves around the admissions funnel — building
                awareness, driving qualified leads, and enhancing every
                prospect’s experience with measurable impact.
              </p>
              <p>
                We integrate advanced CRM systems like{" "}
                <span className="text-pink-600 font-semibold">HubSpot</span> to
                track and nurture every interaction — ensuring transparency and
                data-driven decision-making throughout the journey.
              </p>
            </div>

            <div className="space-y-5">
              <p>
                By leveraging modern communication tools, we deliver
                personalized, real-time engagement — empowering your institution
                to connect meaningfully with prospects and parents.
              </p>
              <p>
                <span className="font-semibold text-gray-900">
                  Our toolbox includes:
                </span>
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Digital marketing campaigns on Google & major social channels
                </li>
                <li>
                  Strategically crafted content to boost engagement & user
                  experience
                </li>
                <li>
                  High-converting landing pages for lead capture and nurturing
                </li>
                <li>
                  Real-time CRM & admissions tracking with stage visibility
                </li>
                <li>
                  Integrated WhatsApp & email automation for communication and
                  lead generation
                </li>
              </ul>
            </div>
          </motion.div>
        </section>

     
        <section className="py-20 px-6">
          <LeadForm />
        </section>
      </div>
    </div>
  );
};

export default HubspotEducation;
