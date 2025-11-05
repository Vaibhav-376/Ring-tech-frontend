"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "lucide-react";
import PartnersAndRewards from "../components/PartnersAndRewards";
import Testimonials from "../components/Testimonials";



const Home = () => {
  const eventCounter = [
    { id: 1, number: "150+", name: "Brands" },
    { id: 2, number: "5+", name: "Branches" },
    { id: 3, number: "100+", name: "Employees" },
    { id: 4, number: "10+", name: "Awards" },
  ];

  const EmployeeFeature = [
    { id: 1, text: "Over 100 specialists worldwide working tirelessly to support clients in every time zone." },
    { id: 2, text: "We build award-winning marketing, lead generation, and sales strategies." },
    { id: 3, text: "And yes, we’re 100% in-house." },
  ];

  const countries = [
    { id: 1, name: "Dubai" },
    { id: 2, name: "New York" },
    { id: 3, name: "Manchester" },
    { id: 4, name: "Melbourne" },
  ];

  const whatWeProvide = [
    { id: 1, title: "Digital Marketing", desc: "We help you grow your business by reaching the right audience with the right message at the right time." },
    { id: 2, title: "Website Design & Development", desc: "We craft responsive, engaging websites that inspire trust and drive conversions." },
    { id: 3, title: "Lead Generation Campaigns", desc: "We optimize your funnel to attract, nurture, and convert high-quality leads consistently." },
    { id: 4, title: "HubSpot CRM Solutions", desc: "We integrate HubSpot CRM for smarter sales, marketing, and customer management." },
    { id: 5, title: "Social Media Management", desc: "We build awareness and engagement through targeted social media campaigns." },
    { id: 6, title: "SEO & Content Strategy", desc: "We help your business rank higher, attract traffic, and convert visitors into customers." },
  ];

  const whyRingTech = [
    { id: 1, title: "We Understand Your Goals", desc: "We start by deeply understanding your vision, crafting tailored strategies to achieve your objectives efficiently." },
    { id: 2, title: "We Elevate Your Strategies", desc: "We enhance your marketing efforts to ensure consistent digital growth and success." },
    { id: 3, title: "We Build Lasting Success", desc: "We focus on long-term growth strategies that stand strong against market changes." },
  ];

  const caseStudies = [
    { id: 1, title: "Berkeley", desc: "After Electing to take it's own marketing and sales.Berkeley enlisted the help of Ring Marketing to develop a content and marketing strategy. Ring marketing assisted berkeley with automated content delivery, website optimization for higher conversion rates, and an overall digital marketing strategy." },
    { id: 2, title: "Bosch", desc: "Bosch A worldwide name, Bosch needed a digital strategy to break into the Middle East with tailored content that reached this audience while maintaining a global identity. NEXA assisted Bosch by creating a content pillar and global social media strategy to suit different regional needs while encouraging audience and business growth " },
    { id: 3, title: "Audi", desc: "Audi A worldwide name, Bosch needed a digital strategy to break into the Middle East with tailored content that reached this audience while maintaining a global identity. NEXA assisted Bosch by creating a content pillar and global social media strategy to suit different regional needs while encouraging audience and business growth." },
    { id: 4, title: "Rove", desc: "Rove Hotels needed a digital strategy for establishing online brand awareness. With strong competition, revenue loss due to Covid-19, and low volumes of traffic, Rove required methods for driving organic ROI using SEO. NEXA provided extensive research and analysis on keywords, user experience, and content creation strategy to assist Rove in achieving this." },
    { id: 5, title: "CBRE", desc: "Transitioning from traditional relationship-based strategies, CBRE embraced a digital-first approach powered by HubSpot CRM and targeted marketing campaigns. This transformation helped enhance lead generation, improve online visibility, and drive higher organic traffic from investor audiences." },
    { id: 6, title: "Nolte", desc: "Nolte partnered with Ring Marketing to elevate its online brand presence.With showroom visits declining—especially during the Covid-19 lockdowns—Nolte needed a comprehensive digital content strategy. Ring Marketing delivered this through integrated campaigns and the implementation of HubSpot and a sales CRM, driving stronger lead generation and revitalizing customer engagement." },
    { id: 7, title: "American University of Malta", desc: "The American University of Malta partnered with Ring Marketing to attract and engage prospective students.Ring Marketing developed a comprehensive digital marketing strategy focused on lead generation and management. By implementing HubSpot and effective SEO strategies, AUM successfully increased student inquiries and strengthened its online presence." },
    { id: 8, title: "LIV Marina", desc: "LIV Marina collaborated with Ring Marketing to launch its new development in Dubai.Ring Marketing executed a full-scale digital marketing campaign that included social media strategy, performance-driven advertising, and HubSpot integration. Through a specialized content strategy and targeted investor outreach, the campaign successfully boosted organic traffic and brand visibility." }
  ]

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const [formdata, setformdata] = useState({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    mobileNo: "",
    message: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setformdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

const api =  "http://localhost:3000/api/v1";

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  try {
    const response = await fetch(`${api}/form/contactForm`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formdata),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Error:", data.message || "Something went wrong");
      alert(data.message || "Failed to submit form");
      return;
    }

    console.log("Form submitted successfully:", data);
    alert("Form submitted successfully!");
  } catch (error) {
    console.error("Error submitting form:", error);
    alert("Error submitting form");
  }
};



  return (
    <div className="bg-lihnear-to-b from-pink-50 via-white to-pink-100 text-gray-900 overflow-hidden">

      <section className="flex flex-col justify-center items-center text-center min-h-screen px-6 py-20 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl relative z-10"
        >
          <p className="text-lg md:text-xl text-pink-500 font-medium mb-3">
            Partnering for Smart Growth and Brand Success
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            AWARD-WINNING DIGITAL SOLUTIONS <br />
            <span className="text-pink-600">FOR BUSINESS GROWTH</span>
          </h1>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="border border-pink-400 text-pink-600 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-pink-500 hover:text-white hover:shadow-lg">
              Request a Quote
            </button>
            <button className="bg-linear-to-r from-pink-400 to-pink-600 px-10 py-3 rounded-full text-lg font-semibold text-white transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              Why Us
            </button>
          </div>
        </motion.div>
        <div className="absolute inset-0 bg-\[radial-gradient(circle_at_top,_rgba(255,192,203,0.4),_transparent_70%)]" />
      </section>


      <section className="py-16 bg-white/70 backdrop-blur-md">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {eventCounter.map((item, index) => (
            <motion.div
              key={item.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col items-center"
            >
              <h2 className="text-5xl md:text-7xl font-bold text-pink-500">{item.number}</h2>
              <p className="text-lg md:text-xl mt-3 font-medium">{item.name}</p>
            </motion.div>
          ))}
        </div>
      </section>


      <section className="py-20 max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="md:w-1/2"
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-pink-600 mb-8">
            Our People are Our Greatest Strength
          </h2>
          <ul className="space-y-4 text-lg leading-relaxed">
            {EmployeeFeature.map((item) => (
              <li key={item.id}>
                <ArrowRightIcon className="inline-block mr-2 text-pink-500" />
                {item.text}
              </li>
            ))}
          </ul>
          <p className="text-pink-600 mt-6 font-medium">Let's take your business to the next level.</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            {countries.map((country) => (
              <motion.div
                key={country.id}
                whileHover={{ scale: 1.05 }}
                className="border border-pink-300 rounded-lg px-4 py-2 text-center hover:bg-pink-100 transition-all duration-300"
              >
                {country.name}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="md:w-1/2 flex justify-center"
        >
          <img
            src="/team.jpg"
            alt="Our Team"
            className="rounded-2xl shadow-[0_0_40px_rgba(236,72,153,0.3)] object-cover hover:scale-105 transition-transform duration-700"
          />
        </motion.div>
      </section>


      <section className="py-20 bg-linear-to-b from-white to-pink-50">
        <h2 className="text-center text-4xl font-serif text-pink-600">What We Provide</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16 px-6">
          {whatWeProvide.map((item, index) => (
            <motion.div
              key={item.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl border border-pink-200 bg-white shadow-md hover:shadow-pink-200/80 transition-all duration-300 hover:-translate-y-2"
            >
              <h3 className="text-xl font-semibold text-center text-pink-600 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 text-justify leading-relaxed">{item.desc}</p>
              <div className="flex justify-center">
                <button className="mt-6 border border-pink-400 py-2 px-6 rounded-full text-pink-600 hover:bg-pink-500 hover:text-white transition-all duration-300">
                  Speak to Us
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>


      <section className="py-20 bg-white/60 backdrop-blur-md">
        <h2 className="text-center text-4xl font-serif text-pink-600">Why Ring Tech</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16 px-6">
          {whyRingTech.map((item, index) => (
            <motion.div
              key={item.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl border border-pink-200 bg-white shadow-md hover:shadow-pink-200/80 transition-all duration-300 hover:-translate-y-2"
            >
              <h3 className="text-xl font-semibold text-center text-pink-600 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 text-justify leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20">
        <h2 className="text-center text-4xl font-serif text-pink-600">Case Studies</h2>
        <div className="max-w-6xl mx-auto mt-16 grid md:grid-cols-4 grid-cols-1 gap-8">
          {caseStudies.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: item.id * 0.1 }}
              className="p-6 rounded-2xl border border-pink-200 bg-white shadow-md hover:shadow-pink-200/80 transition-all duration-300 hover:-translate-y-2"
            >
              <h1 className="text-2xl font-bold text-center text-pink-600">{item.title}</h1>
              <p className="mt-5 text-justify loading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="max-w-6xl mx-auto mt-20 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="md:w-1/2 space-y-4 text-gray-700">
            <h1 className="text-3xl font-serif text-pink-600">
              We're a Leading Digital Growth Agency
            </h1>
            <p>
              Established in 2005, NEXA is an award-winning digital growth agency
              with offices in Dubai, Riyadh, New York, London, and Melbourne.
              Recognized as a Top 1% Elite Tier HubSpot Solutions Partner—and the
              first with a physical office in the GCC to achieve this
              status—NEXA ranks among the world’s leading HubSpot agencies.
            </p>

            <p>
              As a founding member of the Digital Transformation Group (DXG), NEXA
              specializes in delivering measurable digital strategies and business
              growth solutions. With two decades of experience serving clients in
              over 30 countries, the agency blends innovation, expertise, and a
              results-driven approach to create impactful outcomes across
              industries.
            </p>

            <p>
              Using a strategy-first approach designed for business growth, we
              provide a range of digital marketing services (website design &
              development, SEO, social media management, and content creation in
              multiple languages).
            </p>

            <p>
              As a leading HubSpot partner, we integrate marketing with CRM, sales
              and customer service strategies, offering fully cohesive growth
              marketing and sales strategies for our clients.
            </p>

            <p>
              With multiple award wins, NEXA has the track record and in-house
              ability to support your business. We focus our Digital Marketing
              activities using tangible ROI metrics and provide full transparency
              at every stage.
            </p>

            <p>
              That’s why our clients have trusted us for 19 years—and why you
              should too.
            </p>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-[400px] h-[500px]">
              <img
                src="/leading.webp"
                alt="Our Team"
                className="rounded-2xl shadow-[0_0_40px_rgba(236,72,153,0.3)] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      <section className=" mt-32 px-4">
        <PartnersAndRewards />
      </section>

      <section className="mt-32">
        <Testimonials />
      </section>

      <section className="max-w-6xl mx-auto mt-20 px-6">
        <div className="flex flex-col md:flex-row justify-between gap-10">


          <div className="md:w-1/2 flex flex-col justify-center">
            <h1 className="text-pink-600 text-3xl font-serif font-bold mb-4">
              Start your Journey with Ring Marketing
            </h1>
            <p className="text-gray-700 leading-relaxed text-justify">
              Let’s dive into your ideas, achieve your goals with precision, and design tailored strategies
              that fit your needs. We’ll work with you to set clear expectations, goals, and metrics to ensure
              meaningful growth for your brand.
            </p>
          </div>


          <div className="md:w-1/2 bg-white shadow-lg rounded-2xl p-8 border border-pink-100">
            <form className="space-y-5" onSubmit={handleSubmit}>

              <div className="flex flex-col">
                <label htmlFor="firstName" className="text-sm font-medium text-gray-600 mb-1">
                  First Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  name="firstName"
                  onChange={handleChange}
                  value={formdata.firstName}
                  placeholder="Enter your first name"
                  className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="lastName" className="text-sm font-medium text-gray-600 mb-1">
                  Last Name
                </label>
                <input
                  id="lastName"
                  type="text"
                  name="lastName"
                  onChange={handleChange}
                  value={formdata.lastName}
                  placeholder="Enter your last name"
                  className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="text-sm font-medium text-gray-600 mb-1">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={formdata.email}
                  placeholder="Enter your email address"
                  className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="company" className="text-sm font-medium text-gray-600 mb-1">
                  Company Name
                </label>
                <input
                  id="company"
                  type="text"
                  name="companyName"
                  onChange={handleChange}
                  value={formdata.companyName}
                  placeholder="Enter your company name"
                  className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="phone" className="text-sm font-medium text-gray-600 mb-1">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="text"
                  name="mobileNo"
                  onChange={handleChange}
                  value={formdata.mobileNo}
                  placeholder="Enter your phone number"
                  className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="message" className="text-sm font-medium text-gray-600 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  name="message"
                  onChange={handleChange}
                  value={formdata.message}
                  placeholder="Write your message..."
                  className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 rounded-md transition duration-300 shadow-md"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;