"use client";
import { motion } from "framer-motion";
import CaseStudies from "../../components/CaseStudies";
import Counter from "../../components/Counter";
import Experience from "../../components/Experience";
import LeadForm from "../../components/LeadForm";
import PartnersAndRewards from "../../components/PartnersAndRewards";
import Testimonials from "../../components/Testimonials";

const BrandDevelopment = () => {
    return (
        <div className="bg-linear-to-b from-pink-50 via-white to-pink-100 text-gray-800 overflow-hidden">

            <section className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col-reverse lg:flex-row items-center min-h-screen py-20 gap-12">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="w-full lg:w-1/2 flex flex-col justify-center"
                >
                    <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight text-gray-900">
                        Brand <span className="text-pink-600">Development</span>
                    </h1>
                    <p className="mt-4 text-lg text-gray-600 italic">
                        Transforming your ideas into unforgettable brands.
                    </p>
                    <p className="mt-4 text-justify text-gray-700 leading-relaxed">
                        We bring your brand’s identity to life, highlighting your uniqueness and enhancing your journey in every way. Through expert designs and purposeful strategy, we craft a story that mirrors your essence and builds meaningful connections with your audience.
                    </p>

                    <div className="mt-10 flex flex-col sm:flex-row gap-4">
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
                        src="/services/Frame.webp"
                        alt="Brand Development"
                        className="w-[90%] max-w-lg drop-shadow-xl"
                    />
                </motion.div>
            </section>


            <section>
                <PartnersAndRewards />
            </section>


            <section className="max-w-7xl mx-auto px-6 lg:px-12 py-20 flex flex-col lg:flex-row items-center gap-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="w-full lg:w-1/2"
                >
                    <img
                        src="/services/branding.webp"
                        alt="Brand Story"
                        className="rounded-2xl shadow-lg"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="w-full lg:w-1/2"
                >
                    <h2 className="text-3xl md:text-4xl text-pink-600 font-serif font-bold mb-4">
                        Your Brand, Perfectly Told
                    </h2>
                    <p className="text-justify text-gray-700 leading-relaxed">
                        At Ring Tech Marketing, we bring your brand’s voice to life through a seamless blend of creativity and strategy. Our designers, writers, and branding experts collaborate to create a distinctive identity that reflects your values and goals. Every element is carefully crafted to ensure consistency and emotional impact, helping your brand stand out and make a lasting impression.
                    </p>
                </motion.div>
            </section>


            <motion.section
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="relative my-20 px-6"
            >
                <div className="relative">
                    <img
                        src="/services/branding1.webp"
                        alt="Identity Design"
                        className="w-full rounded-2xl shadow-2xl"
                    />
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black/50 rounded-2xl backdrop-blur-[2px]">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
                            Identity Design
                        </h1>
                        <p className="max-w-3xl text-lg md:text-xl leading-relaxed px-6 text-justify">
                            At Ring Tech Marketing, we merge creativity and precision to craft a visual identity that truly represents your brand. From logos to complete design systems, every element is built to communicate your values with clarity and sophistication.
                        </p>
                    </div>
                </div>
            </motion.section>

            <section><Counter /></section>
            <section><CaseStudies /></section>
            <section><Experience /></section>
            <section><Testimonials /></section>
            <section><LeadForm /></section>
        </div>
    );
};

export default BrandDevelopment;
