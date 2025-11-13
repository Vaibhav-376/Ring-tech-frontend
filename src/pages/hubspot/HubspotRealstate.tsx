"use client";
import { motion } from "framer-motion";
import PartnersAndRewards from "../../components/PartnersAndRewards";
import Counter from "../../components/Counter";
import CaseStudies from "../../components/CaseStudies";
import Testimonials from "../../components/Testimonials";
import LeadForm from "../../components/LeadForm";

const HubspotRealstate = () => {
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
                Real Estate
              </span>
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-600 italic">
Setup & Integration between HubSpot and Real Estate Agencies by the winner of the
              <span className="text-pink-600 font-semibold">
MOST INNOVATIVE & BEST PPC REAL ESTATE CAMPAIGNS

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
Close more deals with HubSpot for Real Estate
              </h2>
              <p className="text-gray-700 leading-relaxed">
              Combining the power of HubSpot with the world's best real estate portals
              </p>
            </div>

            <div className="flex justify-center">
              <video
                src="/hubspot/video3.mp4"
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
               With nearly two decades of experience partnering with some of the world’s leading real estate brands, Ring Tech Marketing, an Elite-tier HubSpot Partner, stands out as the go-to technology and growth consultant for ambitious real estate professionals.
              </p>
              <p>
                As technology reshapes the industry and competition intensifies, today’s buyers have more choices than ever in their pursuit of the perfect investment. To stay ahead, real estate businesses must move beyond traditional marketing and sales tactics and embrace a fully connected, data-driven approach.
              </p>
              <p>
                At {" "}
                <span className="font-semibold text-gray-900">
                  Ring Tech Marketing
                </span>
                , we collaborate with global real estate developers, brokers, consultants, and platforms to deliver cutting-edge marketing, sales enablement, and lead generation strategies. From HubSpot implementation and onboarding to CRM integrations, automation, and tailored training, our expert team ensures your business is not only equipped for growth — but primed to dominate your market.
              </p>
            </div>

            <div className="space-y-5 text-gray-700">
              <p>
                At Ring Tech Marketing, we’ve helped countless real estate businesses accelerate their growth and boost sales — with measurable, data-backed results. Partnering with some of the world’s largest real estate developers, we’re committed to driving lasting success through innovative strategy and execution.
              </p>
              <p>
                Our proven approach ensures steady lead generation, stronger conversion rates, and consistent revenue growth. We help your agency connect with the right audiences, generate qualified leads, and turn prospects into loyal clients.
              </p>
              <p className="font-semibold text-pink-600">
                To further enhance performance, Ring Tech Marketing offers custom HubSpot integrations with leading real estate platforms — seamlessly mapping every step of the customer journey, from listing a property to closing a deal, within HubSpot CRM. This integration delivers unparalleled marketing and sales visibility, empowering your business with the insights needed to scale efficiently and achieve exponential growth.
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
                B2B and Automation</h2>
              <p className="text-lg">
 Implementing automation systems creates a higher level of efficiency for your digital marketing process.
              </p>
              <p>
               As a Diamond HubSpot Agency, Ringtech Marketing provides clients with a CRM and platforms that accelerate each step of the lead generation and sales funnel by automating tasks that do not require highly specific attention, leaving your marketing team to work on content and strategy.


              </p>
            </div>

            <div className="flex justify-center">
              <img
                src="/hubspot/image.webp"
                alt="image"
                className="rounded-2xl shadow-xl max-w-sm w-full h-auto"
              />
            </div>
          </motion.div>

          {/* <motion.div
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
          </motion.div> */}
        </section>

     
        <section className="py-20 px-6">
          <LeadForm />
        </section>
      </div>
    </div>
  );
};

export default HubspotRealstate;
