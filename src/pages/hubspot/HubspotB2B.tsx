"use client";
import { motion } from "framer-motion";
import PartnersAndRewards from "../../components/PartnersAndRewards";
import Counter from "../../components/Counter";
import CaseStudies from "../../components/CaseStudies";
import Testimonials from "../../components/Testimonials";
import LeadForm from "../../components/LeadForm";

const Hubspot2b = () => {
  const integrations = [
    { id: 1, title: "CRMs", desc: "Seamlessly integrate HubSpot with your CRM for unified customer data and lead management." },
    { id: 2, title: "ERPs", desc: "Connect HubSpot with your ERP system to align marketing insights with sales and inventory data." },
    { id: 3, title: "Connectivity", desc: "Automate workflows across your tech stack using native and custom API integrations." },
    { id: 4, title: "Performance Marketing", desc: "Integrate Google Ads, Meta, and LinkedIn to measure ROI directly within HubSpot." },
    { id: 5, title: "Data Collection", desc: "Centralize form submissions, chat interactions, and event data into HubSpot’s CRM." },
    { id: 6, title: "Community Management", desc: "Engage B2B communities with integrated tools for feedback, communication, and retention." },
  ];

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
              <span className="text-pink-600">B2B and Business Services</span>
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-600 italic">
              Elite HubSpot Partner – Multi-Award Winning Agency (2018, 2019, 2020 & 2022)
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
                There’s an Art to B2B Marketing
              </h2>
              <p className="text-gray-700 leading-relaxed">
                B2B marketing demands precision — understanding your products, services, and target audience where every lead counts. At Ringtech Marketing, we combine strategy, technology, and creativity to attract, nurture, and convert high-value leads.
              </p>
            </div>
            <div className="flex justify-center">
              <video
                src="/hubspot/video2.mp4"
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
                B2B marketing focuses on how your business solves the unique challenges of other organizations. With the right strategy, it strengthens brand awareness, builds trust, and generates qualified leads that convert into lasting partnerships.
              </p>
              <p>
                As an Elite-tier HubSpot Partner, Ringtech Marketing harnesses the full power of HubSpot’s CRM, Sales, Marketing, and Service Hubs — providing a unified data ecosystem where every customer touchpoint is tracked and optimized.
              </p>
              <p>
                We immerse ourselves in your business — analyzing your goals, services, and clients — then build detailed HubSpot-based funnels that mirror your buyer’s journey and accelerate deal closures.
              </p>
            </div>

            <div className="space-y-5 text-gray-700">
              <p>
                For B2B and Business Service companies, our offerings include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>HubSpot License Consultation and Selection</li>
                <li>HubSpot Strategy Workshops and Implementation</li>
                <li>HubSpot Setup, Onboarding, and Data Migration</li>
                <li>Custom HubSpot Integrations for business systems</li>
                <li>Comprehensive HubSpot Training for Teams</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-20 px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-4xl font-serif font-bold text-pink-600 mb-8"
          >
            B2B HubSpot Integrations
          </motion.h2>
          <p className="max-w-3xl mx-auto text-gray-700 mb-12">
            Businesses rely on numerous digital tools to run effectively. The key to successful B2B HubSpot implementations lies in seamless integrations that unify data, workflows, and insights across departments — creating a single source of truth.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {integrations.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-transform hover:scale-105 border border-pink-100"
              >
                <h3 className="text-xl font-semibold text-pink-600 mb-2">{item.title}</h3>
                <p className="text-gray-700 text-sm">{item.desc}</p>
              </motion.div>
            ))}
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

        <section className="py-20 px-6">
          <LeadForm />
        </section>
      </div>
    </div>
  );
};

export default Hubspot2b;
