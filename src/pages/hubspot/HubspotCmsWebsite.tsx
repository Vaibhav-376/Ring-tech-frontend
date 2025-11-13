"use client";
import { motion } from "framer-motion";
import PartnersAndRewards from "../../components/PartnersAndRewards";
import Counter from "../../components/Counter";
import CaseStudies from "../../components/CaseStudies";
import Testimonials from "../../components/Testimonials";
import LeadForm from "../../components/LeadForm";

const benefits = [
  {
    id: 1,
    title: "Personalisation",
    description:
      "Deliver world-class, personalized experiences by tailoring website content to each visitor’s behavior, preferences, and engagement history. HubSpot’s CMS unifies marketing intelligence and design, ensuring every visitor feels uniquely valued — boosting conversion and retention.",
  },
  {
    id: 2,
    title: "SEO Optimization",
    description:
      "Built with SEO best practices at its core, HubSpot CMS empowers your team to optimize effortlessly — from meta tags to site structure. Built-in recommendations and analytics tools enhance your organic visibility and search performance across all devices.",
  },
  {
    id: 3,
    title: "Integrated Marketing Tools",
    description:
      "Seamlessly integrate your website with HubSpot’s marketing, sales, and service hubs. Manage email campaigns, social media, automation workflows, and more — all from a unified dashboard that drives consistent branding and growth.",
  },
  {
    id: 4,
    title: "Scalability",
    description:
      "From startups to enterprises, HubSpot CMS grows with your business. Its cloud-based infrastructure guarantees speed, security, and flexibility — giving you the foundation to scale without the technical headaches.",
  },
];

const HubspotCmsWebsite = () => {
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
              The HubSpot CMS —{" "}
              <span className="text-pink-600">
                The Ultimate AI-Powered Website Platform for Business Growth
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 italic">
              Design. Optimize. Scale — all within a single intelligent ecosystem.
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
                The AI-Enabled No-Code Website Platform Empowering Marketers Everywhere
              </h2>
              <p className="text-gray-700 leading-relaxed">
                HubSpot CMS revolutionizes how websites are built and managed — giving marketers, developers, and businesses the power to create, optimize, and grow all in one place. Seamlessly blending creativity, performance, and automation, it’s the next generation of website management.
              </p>
            </div>

            <div className="flex justify-center">
              <video
                src="/hubspot/video.mp4"
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
                HubSpot CMS isn’t just a website builder — it’s a growth platform. Built on HubSpot’s robust CRM, it turns your website into a dynamic, data-driven marketing and sales engine that captures leads, automates nurturing, and fuels business expansion.
              </p>
              <p>
                With plans starting at just{" "}
                <span className="font-semibold text-gray-900">$25/month</span> for the Starter CMS, and scaling up to enterprise-grade options, HubSpot CMS combines world-class hosting, security, and scalability under one seamless solution.
              </p>
            </div>

            <div className="space-y-5 text-gray-700">
              <h3 className="text-xl font-semibold text-pink-600">
                The Power of AI at Your Fingertips
              </h3>
              <p>
                The platform integrates next-gen AI tools, including ChatGPT-based assistants, to streamline content creation, SEO optimization, and reporting. HubSpot’s AI saves time, enhances creativity, and ensures consistent, data-backed decision making.
              </p>
              <p className="font-semibold text-gray-900">
                Experience how AI can manage, personalize, and scale your entire digital presence — effortlessly.
              </p>
            </div>
          </div>
        </section>


        <section className="py-16">
          <Counter />
        </section>


        <section className="px-6 py-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-12"
          >
            Benefits of <span className="text-pink-600">HubSpot CMS</span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {benefits.map((b) => (
              <motion.div
                key={b.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="p-6 bg-white rounded-2xl shadow-md border border-pink-100 hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-pink-600 mb-3">
                  {b.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">{b.description}</p>
              </motion.div>
            ))}
          </div>
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

export default HubspotCmsWebsite;
