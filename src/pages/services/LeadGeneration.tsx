"use client"
import { motion } from "framer-motion"
import PartnersAndRewards from "../../components/PartnersAndRewards"
import Counter from "../../components/Counter"
import CaseStudies from "../../components/CaseStudies"
import Testimonials from "../../components/Testimonials"
import Experience from "../../components/Experience"
import LeadForm from "../../components/LeadForm"

const LeadGeneration = () => {
  const services = [
    {
      id: 1,
      title: "Google Pay Per Click Advertising",
      desc: "Ensure your brand appears when prospects search for your products or services. As a Google Premier Partner, Ringtech Marketing brings expertise and precision to deliver high-quality, targeted traffic to your website.",
    },
    {
      id: 2,
      title: "Social Media Advertising Campaigns",
      desc: "From Facebook, Instagram, LinkedIn, and Twitter to platforms like TikTok and Snapchat — we leverage official partnerships with every major network to deliver hyper-targeted, ROI-driven campaigns.",
    },
    {
      id: 3,
      title: "Email Marketing",
      desc: "As a HubSpot Partner, Ringtech Marketing builds and manages personalized email campaigns that attract, nurture, and convert leads throughout their buyer journey.",
    },
    {
      id: 4,
      title: "Mobile Application Marketing",
      desc: "We identify your ideal users, drive downloads, and increase engagement with creative, data-driven app marketing campaigns tailored to your audience.",
    },
    {
      id: 5,
      title: "Landing Page Development",
      desc: "Convert traffic into qualified leads with high-performing, conversion-optimized landing pages built using proven design and marketing psychology.",
    },
    {
      id: 6,
      title: "Digital Out of Home (DOOH) Advertising",
      desc: "Reach your audience in high-traffic areas across the UAE, UK, and USA through data-backed outdoor advertising that blends technology with creativity.",
    },
  ]

  return (
    <div className="bg-linear-to-b from-pink-50 via-white to-pink-100 text-gray-700 overflow-hidden">

      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center text-center min-h-screen px-6 py-24 relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl relative z-10"
        >
          <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight text-gray-900">
            Lead Generation <span className="text-pink-600">Agency Services</span>
          </h1>
          <p className="text-lg mt-6 text-gray-600">
            Delivering measurable growth and qualified leads for global brands since 2005.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="border border-pink-400 text-pink-600 px-10 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-pink-500 hover:text-white hover:shadow-lg">
              Speak to Us
            </button>
            <button className="bg-linear-to-r from-pink-500 to-pink-700 px-10 py-3 rounded-full text-lg font-semibold text-white transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              Get Started
            </button>
          </div>
        </motion.div>
      </section>

 
      <section>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <PartnersAndRewards />
        </motion.div>
      </section>


      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              Why Outsource Your Lead Generation & Performance Marketing?
            </h2>
            <p className="leading-relaxed text-gray-600 mb-6">
              For nearly two decades, <span className="font-semibold text-pink-600">Ringtech Marketing</span> has been driving growth for businesses across industries. With proven strategies, global experience, and strong partnerships with Google, Meta, LinkedIn, Snapchat, and TikTok — we deliver performance-driven marketing that scales.
            </p>
            <button className="border border-pink-400 text-pink-600 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-pink-500 hover:text-white hover:shadow-lg">
              Share Your Project
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center"
          >
            <img
              src="/services/leadgen.webp"
              alt="Lead Generation Strategy"
              className="rounded-2xl shadow-2xl w-full max-w-md"
            />
          </motion.div>
        </div>
      </section>

  
      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="grid md:grid-cols-2 gap-12 leading-relaxed">
            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
                Our Proven Lead Generation Approach
              </h2>
              <p className="mb-4 text-gray-600">
                With global partnerships and a results-driven strategy, we design campaigns that attract, engage, and convert prospects into loyal customers.
              </p>
              <p className="mb-4 text-gray-600">
                We combine intelligent lead tracking, advanced CRM integration, and multi-channel marketing to take every prospect closer to conversion.
              </p>
              <p className="text-gray-600">
                Aligning sales and marketing is at the heart of our approach — ensuring that every campaign delivers measurable outcomes.
              </p>
            </div>

            <div>
              <p className="mb-4 text-gray-600">
                A key part of our process involves implementing and managing Customer Relationship Management (CRM) systems for clients. As a trusted HubSpot Partner, we leverage data-driven insights to continuously optimize campaigns.
              </p>
              <p className="mb-4 text-gray-600">
                By analysing performance in real-time, we make quick, smart decisions that maximize your ROI and accelerate growth.
              </p>
              <p className="text-gray-600">
                Let Ringtech Marketing help you attract your ideal audience, convert leads, and grow your business faster than ever.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="border border-pink-400 text-pink-600 px-10 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-pink-500 hover:text-white hover:shadow-lg">
              Share Your Project
            </button>
          </div>
        </motion.div>
      </section>

      
      <Counter />

    
      <section className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-center font-bold text-pink-600 font-serif text-3xl mb-12">
          Services We Offer
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center text-center bg-white border border-pink-200 rounded-2xl px-6 py-8 shadow-md hover:shadow-xl"
            >
              <h3 className="text-xl font-serif text-pink-600 font-semibold mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>


      <CaseStudies />
      <Testimonials />
      <Experience />

     
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-serif text-pink-600 font-bold mb-4">
              Award-Winning Google & Social Media Lead Generation Campaigns
            </h2>
            <p className="text-gray-600">
              For nearly two decades, <span className="text-pink-600 font-semibold">Ringtech Marketing</span> has provided elite digital marketing services to global brands across industries, helping them achieve measurable success through data, creativity, and technology.
            </p>
          </div>
          <div className="flex justify-center">
            <img src="/services/leadgen2.webp" alt="Lead Generation Campaigns" className="rounded-2xl shadow-2xl max-w-sm" />
          </div>
        </div>
      </section>

     
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">
        <div className="space-y-4 text-gray-600 leading-relaxed">
          <p>
            Ringtech Marketing offers a fully integrated marketing solution — including digital campaigns, lead generation, web design, SEO, social media, and CRM integration.
          </p>
          <p>
            As a HubSpot Diamond Partner, we rank among the top 2% globally — combining strategy, creativity, and technology to deliver sustained growth.
          </p>
          <p>
            With nearly two decades of experience, our team helps clients attract, engage, and convert leads into loyal customers.
          </p>
        </div>

        <div className="space-y-4 text-gray-600 leading-relaxed">
          <p>
            Our global reputation is built on excellence, experience, and strategic partnerships with industry leaders like Google, Meta, LinkedIn, Snapchat, and TikTok.
          </p>
          <p>
            We help businesses generate qualified sales leads through effective strategies that include email, social, content, advertising, and referral marketing.
          </p>
          <p>
            Let us help your business reach the right audience, capture high-quality leads, and achieve sustainable growth.
          </p>
        </div>
      </section>

     
      <LeadForm />
    </div>
  )
}

export default LeadGeneration
