"use client";
import { motion } from "framer-motion";
import PartnersAndRewards from "../../components/PartnersAndRewards";
import {  BarChart2, Settings, User } from "lucide-react";
import CaseStudies from "../../components/CaseStudies";
import Experience from "../../components/Experience";
import Testimonials from "../../components/Testimonials";

const Overview = () => {
  const services = [
    {
      id: 1,
      title: "HubSpot Onboarding Services",
      desc: "We've onboarded hundreds of clients onto the HubSpot platform across the globe for almost a decade. With HubSpot, experience really matters.",
      highlight: true,
    },
    {
      id: 2,
      title: "Sales CRM Software & Setup",
      desc: "If your business isn't currently tracking sales activity or measuring your sales funnel using a CRM system, you need to consider implementing HubSpot. Incredibly user-friendly with Enterprise level sales tools.",
    },
    {
      id: 3,
      title: "HubSpot Marketing Platform Setup",
      desc: "HubSpot is one of the leading global marketing automation platforms with over 100,000 customers globally. Manage, track and measure your marketing and sales performance.",
    },
    {
      id: 4,
      title: "HubSpot CMS Design & Development",
      desc: "If your business requires a new, best-in-class website look no further than the award-winning HubSpot CMS that integrates your website with your CRM and Marketing tools.",
    },
    {
      id: 5,
      title: "Sales Enablement",
      desc: "If your business needs a strong sales support team, HubSpot ensures your sales processes are as effective as possible.",
    },
    {
      id: 6,
      title: "Inbound Marketing & Lead Generation",
      desc: "Our lead generation services allow you to combine content marketing, search engine marketing and social media to connect with and draw customers to your business.",
    },
  ];

  const features = [
    {
      id: 1,
      icon: <Settings className="w-10 h-10 text-white" />,
      title: "Seamless Integration with Other Systems",
    },
    {
      id: 2,
      icon: <BarChart2 className="w-10 h-10 text-white" />,
      title: "Custom Reports and Analytics to Boost Sales",
    },
    {
      id: 3,
      icon: <User className="w-10 h-10 text-white" />,
      title: "Comprehensive Customer Management in One Place",
    },
  ];

  const helpSections = [
    {
      id: 1,
      title: "Efficient Customer Management",
      desc: "We provide you with an integrated system that allows you to track each customer journey—from the first interaction to the completed deal—ensuring smooth and effective customer engagement.",
      img: "/hubspot/efficient.webp",
    },
    {
      id: 2,
      title: "Performance and Sales Analysis",
      desc: "With detailed reports and advanced insights, you can make informed decisions and take your business performance to new heights.",
      img: "/hubspot/sales.webp",
    },
    {
      id: 3,
      title: "Integration with Your Current Tools",
      desc: "We seamlessly integrate HubSpot with your existing systems and tools, ensuring improved productivity without interruptions or workflow disruptions.",
      img: "/hubspot/tools.webp",
    },
  ];

  return (
    <div className="bg-linear-to-b from-pink-50 via-white to-pink-100 text-gray-800">
      <section className="max-w-6xl mx-auto px-6 lg:px-12 flex flex-col-reverse lg:flex-row items-center min-h-screen gap-10 py-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 flex flex-col justify-center"
        >
          <h1 className="text-3xl lg:text-4xl font-bold font-serif text-pink-600 mb-4">
            HubSpot, CRM, Sales & Marketing Services
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            TOP 1% GLOBAL AGENCY — 15 Years of HubSpot Experience
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="border border-pink-400 text-pink-600 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-pink-500 hover:text-white hover:shadow-lg">
              Speak to Us
            </button>
            <button className="bg-linear-to-r from-pink-400 to-pink-600 px-10 py-3 rounded-full text-lg font-semibold text-white transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              Get Started
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <img
            src="/hubspot/hubspot1.webp"
            alt="HubSpot CRM and Marketing Services"
            className="max-w-full h-auto rounded-2xl shadow-lg"
          />
        </motion.div>
      </section>

      <PartnersAndRewards />

      <section className="max-w-6xl mx-auto py-16 px-6 flex flex-col lg:flex-row items-center gap-12">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="lg:w-1/2"
        >
          <h1 className="text-2xl font-bold font-serif text-pink-600 mb-4">
            Scale your business with RingTech Marketing
          </h1>
          <p className="text-gray-700 mb-6 text-justify leading-relaxed">
            Implementing a Customer Relationship Management (CRM) system can be
            a paradigm shift for your business. Consistent sales flow is the
            lifeblood of any brand — and better optimization in your systems
            ensures stronger results at the end of the day.
          </p>
          <button className="bg-linear-to-r from-pink-400 to-pink-600 px-10 py-3 rounded-full text-lg font-semibold text-white transition-transform duration-300 hover:scale-105 hover:shadow-lg">
            Share Your Project
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="lg:w-1/2"
        >
          <img
            src="/hubspot/scaleYourBusiness.webp"
            alt="Scale your business"
            className="rounded-xl shadow-lg"
          />
        </motion.div>
      </section>

      <section className="max-w-6xl mx-auto py-20 px-6">
        <h1 className="text-3xl font-bold text-center mb-12 font-serif text-pink-600">
          HubSpot Services
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`rounded-2xl p-6 flex flex-col justify-between shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                service.highlight
                  ? "bg-pink-600 text-white"
                  : "bg-white text-gray-700 border border-gray-200"
              }`}
            >
              <div>
                <h2
                  className={`text-lg font-semibold mb-3 ${
                    service.highlight ? "text-white" : "text-pink-600"
                  }`}
                >
                  {service.title}
                </h2>
                <p className="text-sm leading-relaxed">{service.desc}</p>
              </div>

              <div className="flex justify-between items-center mt-6">
                <button
                  className={`px-5 py-2 rounded-full border font-medium transition-all duration-300 ${
                    service.highlight
                      ? "border-white text-white hover:bg-white hover:text-pink-600"
                      : "border-pink-400 text-pink-600 hover:bg-pink-500 hover:text-white"
                  }`}
                >
                  Speak to Us
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2
            className="text-4xl md:text-5xl font-semibold mb-16 font-serif text-pink-600"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Why Choose HubSpot?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-center"
              >
                <div className="bg-linear-to-b from-pink-500 to-black p-10 rounded-xl shadow-lg flex items-center justify-center mb-6 w-32 h-32">
                  {item.icon}
                </div>
                <h3 className="text-lg md:text-xl font-medium leading-relaxed">
                  {item.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="max-w-6xl mx-auto py-20 px-6">
        <h1 className="text-3xl font-bold text-center mb-12 font-serif text-pink-600">
          How Can We Help You?
        </h1>

        <div className="flex flex-col gap-16">
          {helpSections.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row ${
                index % 2 !== 0 ? "lg:flex-row-reverse" : ""
              } items-center gap-10`}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full lg:w-1/2 rounded-2xl shadow-md"
              />
              <div className="lg:w-1/2">
                <h2 className="text-2xl font-bold mb-4 text-pink-600 font-serif">
                  {item.title}
                </h2>
                <p className="text-gray-700 leading-relaxed text-justify">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <CaseStudies />
      <Experience />
      <Testimonials />

      
      <section className="max-w-6xl mx-auto py-20 px-6">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
          <div className="text-center lg:text-left">
            <h1 className="text-2xl font-bold text-pink-600 mb-4">
              Multi-award Winning HubSpot Elite Partner
            </h1>
            <button className="bg-linear-to-r from-pink-400 to-pink-600 px-8 py-3 rounded-full text-lg font-semibold text-white transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              Share Your Project
            </button>
          </div>
          <div>
            <img src="/hubspot/diamond.webp" alt="HubSpot Elite Partner" className="w-40 h-auto" />
          </div>
        </div>
      </section>

      
      <section className="max-w-6xl mx-auto py-16 px-6">
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          <div className="lg:w-1/2 space-y-6 text-justify leading-relaxed">
            <p>
              RingTech Marketing’s Elite-Tier HubSpot partnership positions us among the top 1% of HubSpot partners worldwide. We proudly stand as the GCC region’s leading and only HubSpot Elite Partner. For over a decade, our team of experts has been delivering exceptional HubSpot and CRM solutions to clients across diverse industries — continuing to provide world-class service and measurable results today.
            </p>
            <p>
              As an Elite Partner, RingTech Marketing not only delivers top-tier HubSpot services but also holds a status that reflects our excellence as an agency. This recognition stems from our proven track record in successfully onboarding and supporting clients through HubSpot technology, as well as the measurable growth our clients achieve with our guidance. Our Elite status highlights our deep technical expertise, extensive HubSpot experience, and the high number of certified professionals within our team. In short, being an Elite Partner means we excel at what we do—empowering our clients with the tools and strategies to drive exceptional growth and success.
            </p>
          </div>

          <div className="lg:w-1/2 space-y-6 text-justify leading-relaxed">
            <p>
              RingTech Marketing offers comprehensive HubSpot implementation services to ensure your business is seamlessly onboarded and fully optimised to maximise the platform’s potential. We craft effective inbound marketing strategies that encompass content creation, social media, email marketing, and SEO. Our team aligns your sales and marketing operations for better collaboration and provides customised training tailored to your business goals. In addition, we design inbound-ready, conversion-focused websites equipped with advanced tools for lead generation, tracking, and analytics. Finally, we help you build a powerful martech stack by integrating HubSpot with other essential tools your business relies on.
            </p>
            <p>
              It’s easy to understand why RingTech Marketing stands out as a leading agency in the GCC region and a trusted partner for clients worldwide aiming to optimise their business with HubSpot. Collaborate with us and experience how we can empower your organisation with the HubSpot CRM to drive growth and efficiency.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Overview;
