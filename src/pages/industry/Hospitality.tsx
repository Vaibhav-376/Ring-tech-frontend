"use client";
import { motion } from "framer-motion";
import PartnersAndRewards from "../../components/PartnersAndRewards";
import CaseStudies from "../../components/CaseStudies";
import Testimonials from "../../components/Testimonials";
import LeadForm from "../../components/LeadForm";

const Hospitality = () => {
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
                            Hotel & Hospitality <span className="text-pink-600">Marketing</span>
                        </h1>
                        <p className="mt-6 text-lg md:text-xl text-gray-600 italic">
                            Two-Time Winner of BEST USE OF SEARCH
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
                                Hotel Digital Marketing Strategies that Deliver Results
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In today’s competitive market, standing out is essential. With{" "}
                                <span className="font-semibold text-pink-600">Ringtech Marketing</span>, your brand and booking rates don’t just stand out — they soar.
                            </p>
                            <button className="bg-linear-to-r from-pink-500 to-pink-700 px-8 py-3 rounded-full text-lg font-semibold text-white transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                                Learn More
                            </button>
                        </div>
                        <div className="flex justify-center">
                            <img
                                src="/industry/video5.png"
                                className="rounded-2xl shadow-2xl w-3/4 max-w-sm"
                                alt="Hotel Digital Marketing"
                            />
                        </div>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-12 py-20">
                        <div className="space-y-6 text-gray-700">
                            <p>
                                The hospitality industry caters to diverse preferences and budgets, making it vital to have a
                                tailored marketing strategy that connects with your audience. With over 15 years of
                                experience, <span className="text-pink-600 font-semibold">Ringtech Marketing</span> has designed and executed impactful campaigns for boutique hotels and international brands alike, delivering measurable growth.
                            </p>
                            <p>
                                Our experts in SEO, social media, and lead generation ensure your brand shines online while
                                automation systems capture every potential guest. From strategy to conversion, we help you
                                build meaningful connections and transform one-time visitors into loyal customers.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-md border border-pink-100">
                            <h3 className="text-2xl font-semibold text-pink-600 mb-4">
                                Our Hospitality Marketing Services
                            </h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li>Branding & Website Design</li>
                                <li>Social Media & Content Strategy</li>
                                <li>Lead Generation Campaigns</li>
                                <li>HubSpot CRM Setup & Training</li>
                                <li>Database & Email Marketing</li>
                                <li>Marketing Automation Systems</li>
                                <li>Digital Marketing Training</li>
                            </ul>
                        </div>
                    </div>
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
                                <h2 className="text-2xl md:text-3xl font-serif font-semibold text-pink-600 mb-4">
                                    See how we bring stories to life — watch our work in action!
                                </h2>
                            </div>
                            <div className="flex justify-center">
                                <img
                                    src="/industry/video5.png"
                                    alt="Award-winning campaign"
                                    className="rounded-2xl shadow-lg w-3/4 max-w-sm"
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
                            <p>
                                <span className="text-pink-600 font-semibold">Ringtech Marketing</span> has been a driving force behind hotel and hospitality growth worldwide. With nearly two decades of expertise, we provide full-funnel digital marketing strategies that deliver visibility, engagement, and measurable growth.
                            </p>
                            <p>
                                We understand the nuances of hospitality marketing — from elevating your brand presence to showcasing your unique experiences. Our tailored solutions ensure your message connects with the right audience and converts interest into loyal bookings.
                            </p>
                        </div>
                        <div className="flex justify-center">
                            <video
                                src="/industry/book.mp4"
                                className="rounded-2xl shadow-xl w-3/4 max-w-sm"
                                autoPlay
                                muted
                                loop
                            />
                        </div>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-12 mt-16 text-gray-700">
                        <div className="space-y-6">
                            <p>
                                Our team at <span className="text-pink-600 font-semibold">Ringtech Marketing</span> excels at designing and tracking digital strategies that drive bookings and build loyalty. From content creation to social media management and paid campaigns, our focus is on growth that lasts.
                            </p>
                            <p>
                                As a HubSpot Diamond Agency Partner, we optimize HubSpot CRM for marketing automation, campaign tracking, and lead nurturing — ensuring your team operates efficiently and strategically.
                            </p>
                            <p>
                                Our expertise in content, SEO, and analytics enables your brand to scale sustainably while building long-term guest relationships. With <span className="text-pink-600 font-semibold">Ringtech Marketing</span>, your hospitality brand gains visibility, reputation, and results that endure.
                            </p>
                            <p>
                                Partnering with us means collaboration, transparency, and performance. We’re here to help your brand attract, retain, and delight guests while driving measurable success.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-md border border-pink-100">
                            <h3 className="text-2xl font-semibold text-pink-600 mb-4">
                                Our Toolbox & Growth Drivers
                            </h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Targeted Google & Social Media Campaigns</li>
                                <li>Conversion-Focused Landing Pages</li>
                                <li>Real-Time CRM & Tracking Dashboards</li>
                                <li>Automated WhatsApp & Email Flows</li>
                            </ul>
                            <p className="mt-6">
                                With our award-winning strategies,{" "}
                                <span className="font-semibold text-pink-600">Ringtech Marketing</span> is your trusted partner for measurable hospitality growth.
                            </p>
                            <button className="mt-6 bg-linear-to-r from-pink-500 to-pink-700 px-8 py-3 rounded-full text-lg font-semibold text-white transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                                Connect with Our Team
                            </button>
                        </div>
                    </div>
                </section>

                <section className="pb-20">
                    <LeadForm />
                </section>
            </div>
        </div>
    );
};

export default Hospitality;
