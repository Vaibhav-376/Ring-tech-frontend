"use client";
import { motion } from "framer-motion";
import PartnersAndRewards from "../../components/PartnersAndRewards";
import Counter from "../../components/Counter";
import CaseStudies from "../../components/CaseStudies";
import Testimonials from "../../components/Testimonials";
import LeadForm from "../../components/LeadForm";

const Ecommerce = () => {
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
              E-Commerce <span className="text-pink-600">Marketing Agency</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-gray-600 italic">
              Four Time Winner of BEST INTEGRATED DIGITAL MARKETING CAMPAIGN
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
                Grow your E-Commerce Business with an Experienced Marketing Agency

              </h2>
              <p className="text-gray-700 leading-relaxed">
                When you work with an E-Commerce Marketing Agency, you need that partner to understand your audience, buyer journey & marketing funnel. This is what we do and we use this to drive results.
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
                E-commerce has experienced explosive growth in recent years, with more consumers choosing to shop online than ever before. For businesses, having an e-commerce platform integrated into their website is no longer optional — it’s essential. By showcasing your products or services online, you open the door to a wider audience of ready-to-buy customers. Modern shoppers rely heavily on the internet to research, read reviews, and compare prices before making a purchase. With your products available online, Ringtech Marketing helps you provide customers with the ultimate convenience — the ability to shop anytime, anywhere, without leaving the comfort of their homes.
              </p>
              <p>
                Of course, building an online store can feel overwhelming for business owners who currently only have a basic website — but it doesn’t have to be. Ringtech Marketing simplifies the entire process for you. We not only design and develop powerful, user-friendly e-commerce websites but also deliver comprehensive digital marketing strategies that ensure your store stands out, attracts the right audience, and drives exceptional conversion rates. Our team of performance marketing and sales experts is dedicated to helping your business grow, ensuring your e-commerce presence is both profitable and impactful.
              </p>

            </div>

            <div className="space-y-5 text-gray-700">
              <p>
                Ringtech Marketing offers a comprehensive range of services, including lead generation, website development, SEO, and social media marketing. With over 19 years of industry experience, we’ve refined strategies that adapt seamlessly to every sector — including e-commerce. As a results-driven digital performance marketing agency, we utilize hyper-targeted methods to reach your exact audience, ensuring every marketing effort delivers maximum impact and zero waste. Our end-to-end services cover every stage of your e-commerce journey — from design and development to implementation and ongoing management — empowering your business to achieve measurable growth and long-term success.
              </p>

              <p className="font-semibold text-pink-600">
                For many of our clients, Ringtech Marketing provides the following services:              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Branding & Website Design</li>
                <li>Social Media Strategy & Content Creation</li>
                <li>Lead Generation</li>
                <li>HubSpot CRM Setup & Training</li>
                <li>Database Management & Email Marketing</li>
                <li>Digital Marketing Training for clients</li>
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
                <span className="font-semibold text-pink-600">
                  Ringtech Marketing
                </span>{" "}
                has established itself as a top-tier website design and development agency, serving clients in key markets such as Dubai, the US, the UK, and Australia. With extensive industry experience, we have mastered the art of e-commerce website development, seamlessly integrating it into our comprehensive service offerings. Our in-depth understanding of successful e-commerce marketing informs every aspect of our work.


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
                <span className="font-semibold text-pink-600">
                  Ringtech Marketing
                </span>
                we believe that an outstanding e-commerce website should be both intuitive and easy to navigate. Our skilled team of designers and developers crafts visually engaging sites that emphasize smooth functionality, user-friendly navigation, and impactful design elements. Whether you’re running a standalone e-commerce store or integrating it into an existing website, we ensure seamless implementation and create persuasive marketing content to effectively highlight your brand and products.
              </p>
              However, even the most well-designed website and engaging content are only effective if they reach the right audience. That’s where our performance marketing expertise makes the difference. Through strategic search engine optimization (SEO), we boost your brand’s visibility and help you secure top positions in search results. Alongside this, we craft comprehensive content marketing strategies — including insightful blogs, visually engaging social media posts, and high-impact ad campaigns — all designed to strengthen your online presence and drive measurable business growth.
            </div>
            <div className="space-y-5">
              <p>
               <span className="text-pink-600 font-bold">Ringtech Marketing</span> takes a collaborative approach, working closely with your business to understand, identify, and align with your goals and objectives. We develop a customized e-commerce strategy designed to meet your unique needs while driving measurable sales and sustainable growth. Our team blends industry expertise, market intelligence, and innovative techniques to craft a comprehensive digital marketing plan that covers every aspect of your e-commerce presence — ensuring your brand stands out and succeeds in the competitive online landscape.
              </p>
              <p>
                By partnering with <span className="text-pink-600 font-bold">Ringtech Marketing</span>, you gain access to a dedicated team of professionals focused on delivering measurable, impactful results. We continuously monitor and refine our strategies to keep pace with the ever-evolving e-commerce landscape, ensuring your business remains ahead of the competition. With Ringtech Marketing’s strategic guidance and technical expertise, you can confidently navigate the complexities of e-commerce, increase your online sales, and achieve sustainable long-term growth for your business.
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

export default Ecommerce;
