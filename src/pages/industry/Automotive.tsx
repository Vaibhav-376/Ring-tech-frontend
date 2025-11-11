"use client";
import { motion } from "framer-motion";
import PartnersAndRewards from "../../components/PartnersAndRewards";
import Counter from "../../components/Counter";
import CaseStudies from "../../components/CaseStudies";
import Testimonials from "../../components/Testimonials";
import LeadForm from "../../components/LeadForm";

const Automotive = () => {
  return (
    <div className="bg-linear-to-b from-pink-50 via-white to-pink-100 text-gray-800">
      <div className="max-w-7xl mx-auto">
       
        <section className="flex flex-col justify-center items-center text-center min-h-screen px-6 py-20 relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight text-gray-900">
              Automotive <span className="text-pink-600">Marketing Agency</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600 italic">
              Award-Winning Automotive Marketing Experts
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
                Driving Growth for Automotive Brands
              </h2>
              <p className="text-gray-700 leading-relaxed">
                The automotive industry is fiercely competitive, and{" "}
                <span className="font-semibold text-gray-900">
                  Ringtech Marketing
                </span>{" "}
                helps your brand rise above the noise. We understand the
                complexity of lead generation, brand awareness, and customer
                engagement in this ever-evolving industry.
              </p>
              <p className="text-gray-700">
                With precision targeting, innovative strategies, and creative
                storytelling, we turn interest into long-term brand loyalty —
                helping your business thrive in a dynamic marketplace.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="/industry/videoframe3.png"
                alt="Automotive Marketing"
                className="rounded-2xl shadow-xl max-w-sm w-full h-auto"
              />
            </div>
          </motion.div>
        </section>

        <section className="px-6 py-20 bg-white/70 rounded-3xl mx-4 shadow-md border border-pink-100">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-5 text-gray-700">
              <p>
                The automotive market is one of the most competitive industries
                in the world. With countless brands and models, positioning your
                vehicles as the top choice requires creativity, trust, and
                data-driven precision. Buying a car is both an emotional and
                financial commitment — meaning your marketing must build
                confidence and aspiration.
              </p>
              <p>
                <span className="font-semibold text-gray-900">
                  Ringtech Marketing
                </span>{" "}
                has worked with domestic and international automotive brands for
                years. Our expertise allows us to craft targeted marketing
                strategies and sales funnels tailored specifically to this
                sector.
              </p>
              <p>
                Combining cutting-edge web design, content marketing, lead
                generation, and CRM automation, we help brands lead the digital
                transformation of the automotive space with measurable success.
              </p>
            </div>

            <div className="space-y-5 text-gray-700">
              <p>
                Since vehicle purchases are complex and emotionally driven,
                potential buyers take time to research, compare, and evaluate.
                That’s why your brand’s digital presence must be consistent and
                engaging across every stage of the buyer journey.
              </p>
              <p>
                <span className="font-semibold text-gray-900">
                  Ringtech Marketing
                </span>{" "}
                works hand-in-hand with your team to develop a custom strategy
                that attracts, nurtures, and converts — transforming potential
                customers into loyal brand advocates.
              </p>
              <p className="font-semibold text-pink-600">
                Our specialized automotive marketing services include:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Branding & Website Design</li>
                <li>Social Media Strategy & Content Creation</li>
                <li>Targeted Lead Generation Campaigns</li>
                <li>HubSpot CRM Setup & Automation</li>
                <li>Marketing Automation Systems</li>
                <li>Database Management & Email Marketing</li>
                <li>Digital Marketing Training for Teams</li>
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
              <p>
                For over 18 years,{" "}
                <span className="font-semibold text-gray-900">
                  Ringtech Marketing
                </span>{" "}
                has been a trusted partner for businesses across diverse
                industries, delivering fully integrated digital marketing
                solutions. From lead generation and website development to
                search engine marketing, social media management, and
                CRM-powered sales strategies — we help brands grow smarter and
                faster.
              </p>
              <p>
                Our team harnesses every marketing channel to craft tailored
                strategies that align with your business goals, delivering
                measurable, scalable results that drive consistent growth.
              </p>
            </div>

            <div className="flex justify-center">
              <img
                src="/industry/videoframe3.png"
                alt="Ringtech Marketing"
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
                , our dedicated team guides your brand from strategy to
                execution, ensuring measurable, impactful results. Every client
                is unique, and we tailor our approach based on deep industry
                insights and emerging trends to ensure innovation and
                adaptability.
              </p>
              <p>
                As a{" "}
                <span className="text-pink-600 font-semibold">
                  Diamond HubSpot Agency
                </span>
                , we are recognized for implementing HubSpot CRM to scale
                businesses efficiently. With advanced automation, tracking, and
                reporting, we empower brands to improve continuously and achieve
                long-term growth.
              </p>
            </div>
            <div className="space-y-5">
              <p>
                Our automotive marketing expertise gives us a unique edge. We’ve
                helped leading automotive brands accelerate performance, increase
                sales, and build lifelong customer relationships through
                precision-driven marketing and strategic automation.
              </p>
              <p>
                Partnering with{" "}
                <span className="font-semibold text-gray-900">
                  Ringtech Marketing
                </span>{" "}
                means collaboration, transparency, and a relentless focus on
                results. We’re here to elevate your brand presence, maximize ROI,
                and fuel sustainable growth for your business.
              </p>
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

export default Automotive;
