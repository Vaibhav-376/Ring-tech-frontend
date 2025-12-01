"use client"
import { motion } from "framer-motion"
import CaseStudies from "../../components/CaseStudies"
import { ArrowDownRight } from "lucide-react";
import LeadForm from "../../components/LeadForm";


const VideoMarketing = () => {
    const points = [
        "Founded in 2015 in Pune, India.",
        "Over 300 active clients.",
        "Experience in 30+ industries, from high-profile B2C brands to niche organizations.",
        "Over 50 in-house digital marketing specialists.",
        "Full spectrum of digital marketing services provided.",
        "Clients include top global brands and many homegrown businesses.",
        "Offices located in Pune, Mumbai, Dubai, and New York.",
    ];
    return (
        <div className="bg-linear-to-b from-pink-50 via-white to-pink-100 text-gray-700 overflow-hidden">


            <section className="flex flex-col justify-center items-center text-center min-h-screen px-6 py-20 relative">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="max-w-4xl relative z-10"
                >
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-pink-600 font-serif">
                        Video Marketing Services
                    </h1>
                    <p className="mt-4 text-lg text-gray-600">
                        Boost your brand visibility and engagement with impactful video marketing
                        that tells your story and drives conversions.
                    </p>

                    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="border border-pink-400 text-pink-600 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-pink-500 hover:text-white hover:shadow-lg">
                            Speak to Us
                        </button>
                        <button className="bg-linear-to-r from-pink-400 to-pink-600 px-10 py-3 rounded-full text-lg font-semibold text-white transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                            Get Started
                        </button>
                    </div>
                </motion.div>


                <div className="absolute inset-0 .bg-[radial-gradient(circle_at_top,_rgba(255,192,203,0.4),_transparent_70%)]" />
            </section>

            <section className="max-w-6xl mx-auto px-6 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <div className="flex flex-col lg:flex-row items-center gap-10">

                        <div className="flex-1 space-y-4">
                            <h2 className="text-pink-600 font-bold font-serif text-3xl">
                                Video Marketing Drives Business Growth
                            </h2>
                            <p>
                                Video is one of the most powerful and fast-growing forms of content, showing no signs
                                of slowing down. At <span className="font-semibold">RingTech Marketing</span>, we harness the
                                potential of video to accelerate your business growth. Our video marketing strategies
                                focus on creating content that captures your brand’s identity and keeps your audience
                                engaged from start to finish.
                            </p>
                            <p>
                                We provide a complete service offering—from strategy to production and marketing.
                                Without this, your videos risk getting lost in the noise online. Our goal is to
                                plan, create, and share content that stands out, gets seen, and delivers results.
                            </p>
                        </div>


                        <div className="flex-1 flex justify-center">
                            <video
                                src="https://ringtechmarketingbucket.s3.ap-south-1.amazonaws.com/servicesNavMenu/video-marketing/video.mp4"
                                className="rounded-2xl shadow-lg w-full max-w-md"
                                muted
                                autoPlay
                                loop
                            />
                        </div>
                    </div>
                </motion.div>
            </section>

            <section className=" py-20">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <h1 className="text-center text-3xl md:text-5xl text-pink-600 font-bold font-serif mb-12">
                        Our Work
                    </h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
                        <video
                            src="https://ringtechmarketingbucket.s3.ap-south-1.amazonaws.com/servicesNavMenu/video-marketing/work1.mp4"
                            className="rounded-lg shadow-lg w-full object-cover"
                            controls
                            muted
                        />
                        <video
                            src="https://ringtechmarketingbucket.s3.ap-south-1.amazonaws.com/servicesNavMenu/video-marketing/work2.mp4"
                            className="rounded-lg shadow-lg w-full object-cover"
                            controls
                            muted
                        />
                        <video
                            src="https://ringtechmarketingbucket.s3.ap-south-1.amazonaws.com/servicesNavMenu/video-marketing/work3.mp4"
                            className="rounded-lg shadow-lg w-full object-cover"
                            controls
                            muted
                        />
                        <video
                            src="https://ringtechmarketingbucket.s3.ap-south-1.amazonaws.com/servicesNavMenu/video-marketing/work4.mp4"
                            className="rounded-lg shadow-lg w-full object-cover"
                            controls
                            muted
                        />
                        <video
                            src="https://ringtechmarketingbucket.s3.ap-south-1.amazonaws.com/servicesNavMenu/video-marketing/work5.mp4"
                            className="rounded-lg shadow-lg w-full object-cover"
                            controls
                            muted
                        />
                        <video
                            src="https://ringtechmarketingbucket.s3.ap-south-1.amazonaws.com/servicesNavMenu/video-marketing/work6.mp4"
                            className="rounded-lg shadow-lg w-full object-cover"
                            controls
                            muted
                        />
                    </div>
                </motion.div>
            </section>

            <section className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <h1 className="text-pink-600 font-serif font-bold text-4xl text-center">High - Quality video production can bring your business to life </h1>

                    <p className="mt-5 text-justify">Our team of skilled content creators at <b className="text-pink-600">RingTech Marketing</b> is ready to bring your brand to life through captivating video content that truly reflects your essence and excites your audience. </p>

                    <p className="mt-5 text-justify">Video is a powerful and versatile medium that can communicate ideas, emotions, and values in ways that other forms of content simply can’t. From showcasing your products and services to sharing stories that connect with your audience, video offers immense potential for businesses across every industry.</p>

                    <p className="mt-5 text-justify">Today, video isn’t just an option — it’s an expectation. However, many brands still struggle with misconceptions around budget and strategy. At <b className="text-pink-600">RingTech Marketing</b>, our in-house team of experts handles every stage of video production — from strategy and scripting to filming and delivery — ensuring high-quality results without exceeding your budget.</p>

                    <p className="mt-5 mb-10 text-justify">Each video we create is driven by purpose, clear communication, and audience engagement. Our goal is to produce videos that not only resonate with viewers but also strengthen your brand’s online presence — helping your business stand out and thrive in a digital landscape that favors video content.</p>
                </motion.div>

            </section>
            <section className="max-w-6xl mx-auto px-6 py-20">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <div className="text-center mb-16">
                        <h2 className="text-xl md:text-2xl font-semibold">
                            We Provide A Full Range Of Video Marketing Services
                        </h2>
                        <h1 className="text-3xl md:text-5xl font-bold font-serif text-pink-600 mt-2">
                            Video Marketing Services
                        </h1>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Brand Videos", desc: "Showcase the essence of your brand through dedicated video content." },
                            { title: "Corporate Video Production", desc: "Corporate videos that communicate impactful marketing messages with your audience or employees." },
                            { title: "Animated Video Production", desc: "Short-form motion videos that effectively communicate ideas and processes for your brand." },
                            { title: "Photography", desc: "Professional photography services to build a content library of compelling visuals." },
                            { title: "Shoppable Video Content", desc: "Display your products in lifestyle video content that viewers can shop from directly." },
                            { title: "Interactive Videos", desc: "Engage your audience with content they can interact with at the touch of a button." },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="bg-pink-50 p-6 rounded-2xl border border-pink-200 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                            >
                                <h3 className="text-xl font-semibold text-pink-600 text-center mb-3">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 text-justify leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </section>

            <section>
                <CaseStudies />
            </section>

            <section className=" py-24 px-6 relative overflow-hidden">
                {/* Background Accent Shapes */}
                {/* <div className="absolute right-0 top-1/4 transform translate-x-1/4 opacity-30">
        <div className="w-96 h-24 bg-gradient-to-r from-pink-500/30 to-purple-400/30 rounded-3xl blur-xl"></div>
        <div className="w-96 h-24 bg-gradient-to-r from-purple-500/30 to-pink-400/30 rounded-3xl mt-8 blur-xl"></div>
        <div className="w-96 h-24 bg-gradient-to-r from-pink-400/30 to-purple-500/30 rounded-3xl mt-8 blur-xl"></div>
      </div> */}

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto relative z-10"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-10 font-serif text-pink-600">
                        Thinking about working with Ringtech Marketing?
                    </h2>

                    <ul className="space-y-5">
                        {points.map((point, index) => (
                            <li key={index} className="flex items-start gap-3 text-lg">
                                <ArrowDownRight className="text-pink-400 mt-1" />
                                <span className="leading-relaxed">{point}</span>
                            </li>
                        ))}
                    </ul>

                </motion.div>
            </section>

            <section>
                <LeadForm/>
            </section>

        </div>
    )
}

export default VideoMarketing
