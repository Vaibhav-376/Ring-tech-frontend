"use client";
import { motion } from "framer-motion";
import PartnersAndRewards from "../../components/PartnersAndRewards";
import Counter from "../../components/Counter";
import CaseStudies from "../../components/CaseStudies";
import Experience from "../../components/Experience";
import Testimonials from "../../components/Testimonials";
import LeadForm from "../../components/LeadForm";

const WebsiteDevelopment = () => {
    const services = [
        {
            id: 1,
            img: "https://ringtechmarketingbucket.s3.ap-south-1.amazonaws.com/servicesNavMenu/website-development/website1.webp",
            title: "Creating Seamless Digital Experiences",
            desc: "We design responsive websites that adapt beautifully across devices — from desktops to wearables — ensuring an intuitive and engaging experience for every user.",
        },
        {
            id: 2,
            img: "https://ringtechmarketingbucket.s3.ap-south-1.amazonaws.com/servicesNavMenu/website-development/website2.webp",
            title: "Continuous Updates & Enhancements",
            desc: "We keep your website evolving with fresh features and the latest design trends, ensuring it stays relevant and ahead of competitors.",
        },
        {
            id: 3,
            img: "https://ringtechmarketingbucket.s3.ap-south-1.amazonaws.com/servicesNavMenu/website-development/website3.webp",
            title: "Maintenance & Troubleshooting",
            desc: "We proactively monitor and resolve issues to keep your site running flawlessly, ensuring top performance and zero downtime.",
        },
        {
            id: 4,
            img: "https://ringtechmarketingbucket.s3.ap-south-1.amazonaws.com/servicesNavMenu/website-development/website4.webp",
            title: "Professional Content Translation",
            desc: "We translate your website with precision and cultural awareness, keeping your brand voice consistent across every market.",
        },
        {
            id: 5,
            img: "https://ringtechmarketingbucket.s3.ap-south-1.amazonaws.com/servicesNavMenu/website-development/website5.webp",
            title: "User Experience Optimization (CRO)",
            desc: "We turn insights into action — enhancing UX to boost engagement, reduce bounce rates, and increase conversions.",
        },
        {
            id: 6,
            img: "https://ringtechmarketingbucket.s3.ap-south-1.amazonaws.com/servicesNavMenu/website-development/website6.webp",
            title: "Creating & Formatting Content",
            desc: "Our creative team produces on-brand copy, visuals, and layouts that strengthen audience connection and deliver results.",
        },
    ];

    return (
        <div className="bg-linear-to-b from-pink-50 via-white to-pink-100 text-gray-800 py-10">

            <section className="relative flex flex-col justify-center items-center text-center min-h-[90vh] px-6 py-24 overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="max-w-3xl z-10"
                >
                    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
                        Website{" "}
                        <span className="text-pink-600 font-serif italic">
                            Development
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl mt-6 text-gray-600">
                        Crafting high-performing websites that deliver results — Over{" "}
                        <span className="text-pink-600 font-semibold">2000+</span> projects
                        delivered since 2005.
                    </p>

                    <div className="mt-10 flex flex-wrap justify-center gap-5">
                        <button className="border border-pink-500 text-pink-600 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-pink-500 hover:text-white hover:shadow-md">
                            Speak to Us
                        </button>
                        <button className="bg-linear-to-r from-pink-500 to-pink-600 px-10 py-3 rounded-full text-lg font-semibold text-white transition-transform duration-300 hover:scale-105 hover:shadow-md">
                            Get Started
                        </button>
                    </div>
                </motion.div>

                <div className="absolute inset-0 .bg-[radial-gradient(circle_at_top,_rgba(255,192,203,0.25),_transparent_70%)]" />
            </section>

            
            <section className="py-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <PartnersAndRewards />
                </motion.div>
            </section>


            <section className="max-w-6xl mx-auto px-6 py-20">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row items-center gap-10"
                >
                    <div className="flex-1">
                        <h2 className="text-4xl font-serif font-bold text-pink-600">
                            Website Design & Development Services
                        </h2>
                        <p className="mt-4 text-gray-700 text-justify leading-relaxed">
                            Since 2005, <span className="font-semibold">Ring Tech Marketing</span> has
                            been crafting beautifully designed, results-driven websites for
                            businesses worldwide — including in Dubai, the US, the UK, and
                            Australia. Each site is tailored to your unique goals and brand
                            identity.
                        </p>
                        <button className="mt-8 border-2 border-pink-600 px-10 py-3 text-pink-600 hover:bg-pink-600 hover:text-white rounded-full font-medium">
                            Share Your Project
                        </button>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <img
                            src="https://ringtechmarketingbucket.s3.ap-south-1.amazonaws.com/servicesNavMenu/website-development/websitedev.webp"
                            alt="Website Development"
                            className="rounded-2xl shadow-lg w-full max-w-md"
                        />
                    </div>
                </motion.div>
            </section>


            <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 text-justify">
                <div>
                    <p>
                        At <span className="text-pink-600 font-semibold">Ring Tech Marketing</span>,
                        we build websites designed to drive conversions. Every element is
                        optimized to create a seamless user journey that inspires trust and
                        action.
                    </p>
                    <h3 className="text-2xl text-pink-600 font-serif font-semibold py-5">
                        AI and ChatGPT-Integrated Websites
                    </h3>
                    <p>
                        Our team integrates websites with advanced AI tools such as ChatGPT,
                        bringing dynamic and personalized interactions to your platform.
                        We’re also experts in HubSpot CMS for efficient management and
                        automation.
                    </p>
                    <p className="py-4">
                        Save time and effort — use ChatGPT to update web pages, generate
                        blog posts, create landing pages, and even draft emails. Contact us
                        for a demo of this smart integration.
                    </p>
                </div>

                <div>
                    <p>
                        Our design approach guarantees your website is responsive,
                        intuitive, and built for performance. From lead generation tools to
                        stunning visuals, we make sure your brand shines online.
                    </p>
                    <p className="py-3">
                        <span className="font-semibold">Ring Tech Marketing</span> seamlessly
                        merges design, marketing, and performance to help you maximize your
                        digital investment.
                    </p>
                    <p>
                        Whether launching a brand-new website or revitalizing your old one,
                        we’re your trusted partner for innovation and growth.
                    </p>
                </div>
            </section>

            <section className="py-10 bg-white">
                <Counter />
            </section>

       
            <section className="max-w-6xl mx-auto px-6 py-20">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-pink-600 mb-12">
                    Integrated Digital Services to Achieve Your Ambitions
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((item) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            viewport={{ once: true }}
                            className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1"
                        >
                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-48 h-56 object-contain rounded-t-2xl"
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-pink-600 mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
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


            <section className="max-w-6xl mx-auto px-6 py-20">
                <div className="flex flex-col lg:flex-row items-center gap-10">
                    <div className="flex-1">
                        <h1 className="font-serif font-bold text-3xl text-pink-600 mb-6">
                            Over 2000 Websites Delivered Since 2005
                        </h1>
                        <p className="text-justify text-gray-700 leading-relaxed mb-4">
                            With nearly two decades of experience,{" "}
                            <span className="font-semibold">Ring Tech Marketing</span> is among
                            the leading web development agencies across Dubai, the US, the UK,
                            and Australia. We deliver high-performing, optimized websites that
                            align with your business objectives and brand vision.
                        </p>
                        <p className="text-justify text-gray-700 leading-relaxed mb-4">
                            From integrations and analytics to flawless performance, we handle
                            all the technical details while delivering visually stunning
                            designs that elevate your brand.
                        </p>
                        <p className="text-justify text-gray-700 leading-relaxed">
                            Partner with us to build or transform your website into a digital
                            powerhouse that drives results and reflects your brand identity.
                        </p>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <img
                            src="https://ringtechmarketingbucket.s3.ap-south-1.amazonaws.com/servicesNavMenu/website-development/website7.webp"
                            alt="Website Design"
                            className="rounded-2xl shadow-lg w-full max-w-md"
                        />
                    </div>
                </div>
            </section>

            <LeadForm />
        </div>
    );
};

export default WebsiteDevelopment;
