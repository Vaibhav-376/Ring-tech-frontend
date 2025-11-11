"use client";
import { motion } from "framer-motion";
import PartnersAndRewards from "../../components/PartnersAndRewards";
import CaseStudies from "../../components/CaseStudies";
import Testimonials from "../../components/Testimonials";
import LeadForm from "../../components/LeadForm";

const RealEstate = () => {
    return (
        <div className="bg-linear-to-b from-pink-50 via-white to-pink-100 text-gray-800">
            <div className="max-w-7xl mx-auto">
                {/* HERO SECTION */}
                <section className="flex flex-col justify-center items-center text-center min-h-screen px-6 relative">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true }}
                        className="max-w-3xl"
                    >
                        <h1 className="text-5xl md:text-7xl font-serif font-bold leading-tight text-gray-900">
                            Real Estate <span className="text-pink-600">Marketing</span> Solutions
                        </h1>
                        <p className="mt-6 text-lg md:text-xl text-gray-600 italic">
                            Turning Properties into Profitable Opportunities
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

                {/* PARTNERS */}
                <section className="py-16">
                    <PartnersAndRewards />
                </section>

                {/* INTRO SECTION */}
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
                                Real Estate Marketing That Converts Leads into Closings
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In a market where competition is fierce, visibility is everything. With{" "}
                                <span className="font-semibold text-pink-600">Ringtech Marketing</span>, your real estate brand
                                doesn’t just attract buyers — it builds trust, drives qualified leads, and accelerates sales.
                            </p>
                            <button className="bg-linear-to-r from-pink-500 to-pink-700 px-8 py-3 rounded-full text-lg font-semibold text-white transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                                Learn More
                            </button>
                        </div>
                        <div className="flex justify-center">
                            <img
                                src="/industry/realestate1.png"
                                className="rounded-2xl shadow-2xl w-3/4 max-w-sm"
                                alt="Real Estate Marketing"
                            />
                        </div>
                    </motion.div>

                    {/* SERVICES OVERVIEW */}
                    <div className="grid md:grid-cols-2 gap-12 py-20">
                        <div className="space-y-6 text-gray-700">
                            <p>
                                The real estate industry is fast-moving and highly competitive — making it crucial to have a
                                data-driven marketing strategy that speaks directly to your buyers and investors. At{" "}
                                <span className="text-pink-600 font-semibold">Ringtech Marketing</span>, we specialize in
                                delivering end-to-end digital solutions that drive visibility, leads, and conversions.
                            </p>
                            <p>
                                From luxury developers and brokerage firms to property portals and realtors, we craft
                                campaigns that highlight your properties, attract high-intent leads, and help you close deals
                                faster through automation, CRM integration, and precision targeting.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-md border border-pink-100">
                            <h3 className="text-2xl font-semibold text-pink-600 mb-4">
                                Our Real Estate Marketing Services
                            </h3>
                            <ul className="list-disc list-inside space-y-2 text-gray-700">
                                <li>Real Estate Branding & Website Design</li>
                                <li>Social Media & Video Marketing</li>
                                <li>Lead Generation Campaigns</li>
                                <li>HubSpot CRM Setup & Automation</li>
                                <li>Property Database & Email Marketing</li>
                                <li>SEO & Paid Advertising (Google & Meta)</li>
                                <li>Digital Sales Funnel Optimization</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* VIDEO / SHOWCASE */}
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
                                    Watch How We Transform Real Estate Brands into Market Leaders
                                </h2>
                                <p className="text-gray-700">
                                    Discover how our digital campaigns help properties sell faster and developers build brand
                                    value across digital channels.
                                </p>
                            </div>
                            <div className="flex justify-center">
                                <img
                                    src="/industry/realestate-video.png"
                                    alt="Real Estate Campaign Showcase"
                                    className="rounded-2xl shadow-lg w-3/4 max-w-sm"
                                />
                            </div>
                        </div>
                    </motion.div>
                </section>

                {/* CASE STUDIES */}
                <section className="py-16">
                    <CaseStudies />
                </section>

                {/* TESTIMONIALS */}
                <section className="py-16">
                    <Testimonials />
                </section>

                {/* DEEP DIVE SECTION */}
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
                                <span className="text-pink-600 font-semibold">Ringtech Marketing</span> has partnered with
                                leading real estate brands globally, driving project sales, investor engagement, and lead
                                performance. We bring 360° marketing expertise — from digital visibility to CRM-driven
                                nurturing.
                            </p>
                            <p>
                                Our tailored strategies ensure your listings and developments reach high-intent audiences,
                                boosting inquiries, site visits, and conversions.
                            </p>
                        </div>
                        <div className="flex justify-center">
                            <video
                                src="/industry/realestate.mp4"
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
                                Our team excels at implementing performance-driven campaigns across Google, Meta, and
                                programmatic platforms — ensuring every dollar spent delivers measurable ROI.
                            </p>
                            <p>
                                As a HubSpot Diamond Agency Partner, we empower developers and agencies with CRM automation,
                                pipeline visibility, and smart workflows that nurture leads until conversion.
                            </p>
                            <p>
                                With our focus on SEO, video storytelling, and precision targeting, your brand captures the
                                right audience and turns interest into property sales.
                            </p>
                            <p>
                                Partner with <span className="text-pink-600 font-semibold">Ringtech Marketing</span> and
                                experience a data-driven approach that builds credibility, visibility, and long-term success
                                in the real estate market.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-md border border-pink-100">
                            <h3 className="text-2xl font-semibold text-pink-600 mb-4">
                                Our Toolbox & Growth Drivers
                            </h3>
                            <ul className="list-disc list-inside space-y-2">
                                <li>Targeted Google & Meta Ad Campaigns</li>
                                <li>SEO & Local Property Visibility</li>
                                <li>Automated Lead Scoring & CRM Reports</li>
                                <li>WhatsApp & Email Drip Automation</li>
                            </ul>
                            <p className="mt-6">
                                With our award-winning real estate marketing strategies,{" "}
                                <span className="font-semibold text-pink-600">Ringtech Marketing</span> helps you turn every
                                property into an opportunity for growth.
                            </p>
                            <button className="mt-6 bg-linear-to-r from-pink-500 to-pink-700 px-8 py-3 rounded-full text-lg font-semibold text-white transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                                Connect with Our Team
                            </button>
                        </div>
                    </div>
                </section>

                {/* LEAD FORM */}
                <section className="pb-20">
                    <LeadForm />
                </section>
            </div>
        </div>
    );
};

export default RealEstate;
