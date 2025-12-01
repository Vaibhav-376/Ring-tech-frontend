"use client";
import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import PartnersAndRewards from "../../components/PartnersAndRewards";
import Testimonials from "../../components/Testimonials";
import Experience from "../../components/Experience";
import LeadForm from "../../components/LeadForm";

const Metaverse = () => {
    const services = [
        {
            id: 1,
            title: "Metaverse Strategy",
            desc: "Creation of customised Metaverse strategies for businesses",
        },
        {
            id: 2,
            title: "Metaverse Land Purchase",
            desc: "Land purchase assistance within public and private metaverses",
        },
        {
            id: 3,
            title: "Decentraland Metaverse Building",
            desc: "Design & development of 3D buildings in Decentraland",
        },
        {
            id: 4,
            title: "The Sandbox Metaverse Building",
            desc: "Design & development of 3D buildings in The Sandbox",
        },
        {
            id: 5,
            title: "Private Metaverse Opportunities",
            desc: "Opportunities for B2B and B2C businesses within private metaverses",
        },
        {
            id: 6,
            title: "Metaverse Marketing Services",
            desc: "Marketing strategy and support for Metaverse projects",
        },
    ];

    return (
        <div className="bg-linear-to-b from-pink-50 via-white to-pink-100 text-gray-800">
            <div className="max-w-7xl mx-auto">
                <section className="flex flex-col justify-center items-center text-center min-h-[90vh] px-6 py-24 relative">
                    <motion.h1
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-5xl md:text-7xl font-serif font-bold leading-tight text-gray-900"
                    >
                        Metaverse <span className="text-pink-600">Services</span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <button className="border border-pink-400 text-pink-600 px-10 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-pink-500 hover:text-white hover:shadow-lg">
                            Speak to Us
                        </button>
                        <button className="bg-linear-to-r from-pink-500 to-pink-700 px-10 py-3 rounded-full text-lg font-semibold text-white transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                            Get Started
                        </button>
                    </motion.div>
                </section>


                <section className="flex flex-col justify-center items-center text-center px-6 relative">
                    <PartnersAndRewards />
                </section>


                <section className="py-20 px-6 md:px-12 flex flex-col lg:flex-row items-center gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="flex-1"
                    >
                        <p className="text-xl text-gray-700 mb-2">
                            New opportunities in a new era of the web
                        </p>
                        <h2 className="text-3xl md:text-4xl text-pink-600 font-bold font-serif mb-4">
                            Metaverse Services for Businesses
                        </h2>
                        <p className="text-justify mb-4">
                            There’s growing excitement around the Metaverse, opening up powerful new
                            opportunities for brands to connect with their audiences in immersive virtual
                            spaces. <span className="font-semibold text-pink-600">Ringtech Marketing</span>{" "}
                            helps businesses tap into this next-generation digital frontier to build
                            meaningful engagement and brand presence.
                        </p>
                        <p className="text-justify mb-4">
                            Meta (formerly Facebook) is leading the charge in building its own metaverse
                            through the Oculus Quest 2 headset, offering deeply immersive virtual
                            experiences. Alongside this, public metaverses like The Sandbox, Decentraland,
                            and Otherside are gaining traction. At{" "}
                            <span className="font-semibold text-pink-600">Ringtech Marketing</span>, we
                            emphasize the potential of private metaverses, where businesses can create
                            tailored virtual environments for exclusive audiences and deliver personalized,
                            high-impact experiences.
                        </p>
                        <p className="text-justify">
                            It’s crucial to identify the right metaverse platform for your business goals.
                            <span className="font-semibold text-pink-600"> Ringtech Marketing</span> guides
                            brands through this evolving landscape with strategy, execution, and innovation.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="flex-1 flex justify-center"
                    >
                        <img
                            src="https://ringtechmarketingbucket.s3.ap-south-1.amazonaws.com/servicesNavMenu/metaverse-experience/metaverse.webp"
                            alt="Metaverse illustration"
                            className="rounded-3xl shadow-xl hover:scale-105 transition-transform duration-500"
                        />
                    </motion.div>
                </section>


                <section className="py-20 px-6 md:px-12 rounded-t-3xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-bold font-serif text-center text-pink-500 mb-12"
                    >
                        Metaverse Service Offering
                    </motion.h1>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((item) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                viewport={{ once: true }}
                                className="group relative border border-zinc-800 hover:border-pink-500 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 shadow-md hover:shadow-pink-500/10"
                            >
                                <h2 className="text-lg font-semibold text-pink-500 mb-2">
                                    {item.title}
                                </h2>
                                <p className="mb-6 text-sm">{item.desc}</p>
                                <div className="absolute bottom-6 right-6 text-gray-400 group-hover:text-pink-500 transition-colors">
                                    <ArrowDownRight size={24} />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </section>

                <section className="py-20 text-gray-800">

                    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 px-6 lg:px-12">
                        <motion.div
                            initial={{ opacity: 0, x: -60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                            className="flex-1"
                        >
                            <img
                                src="https://ringtechmarketingbucket.s3.ap-south-1.amazonaws.com/servicesNavMenu/metaverse-experience/metaverse1.webp"
                                alt="Metaverse Strategy"
                                className="rounded-2xl shadow-lg w-full"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                            className="flex-1 space-y-5"
                        >
                            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-pink-600">
                                Overview of Our Metaverse Services
                            </h2>
                            <p className="text-lg leading-relaxed">
                                There are countless Metaverse-driven opportunities available to
                                businesses worldwide, but identifying the most suitable and effective
                                strategy for your brand is what truly drives success. From investing
                                in and developing virtual real estate to building tailored experiences
                                for customers, the Metaverse opens up a powerful and exciting new
                                channel for brands — and{" "}
                                <span className="font-semibold text-pink-600">
                                    Ringtech Marketing
                                </span>{" "}
                                helps businesses tap into its full potential.
                            </p>
                        </motion.div>
                    </div>


                    <div className="my-16 border-t border-pink-200 w-3/4 mx-auto"></div>


                    <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 px-6 lg:px-12">
                        <motion.div
                            initial={{ opacity: 0, x: -60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                            className="flex-1 space-y-5"
                        >
                            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-pink-600">
                                Working with Ringtech Marketing
                            </h2>
                            <p className="text-lg leading-relaxed">
                                Choosing the right partner to design and manage your business’s Web
                                3.0 or Metaverse strategy is a crucial step toward long-term success.
                                You need a partner who not only understands the evolving digital
                                landscape but also truly understands your business — your customers,
                                your products or services, and the key factors behind your success so
                                far.{" "}
                                <span className="font-semibold text-pink-600">
                                    Ringtech Marketing
                                </span>{" "}
                                guides you through this journey with a blend of collaborative
                                workshops and strategic planning sessions, ensuring a well-structured
                                roadmap for implementation. Explore our range of services on this page
                                and feel free to connect with us for any questions — we’re here to
                                help your business thrive in the Metaverse era.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            viewport={{ once: true }}
                            className="flex-1"
                        >
                            <img
                                src="https://ringtechmarketingbucket.s3.ap-south-1.amazonaws.com/servicesNavMenu/metaverse-experience/metaverse2.webp"
                                alt="Working with Ringtech Marketing"
                                className="rounded-2xl shadow-lg w-full"
                            />
                        </motion.div>
                    </div>
                </section>

                <Testimonials />
                <Experience />
                <section className="py-10">
                    <LeadForm />
                </section>
            </div>
        </div>
    );
};

export default Metaverse;
