"use client"
import { motion } from "framer-motion"
import PartnersAndRewards from "../../components/PartnersAndRewards"
import Counter from "../../components/Counter"
import CaseStudies from "../../components/CaseStudies"
import Testimonials from "../../components/Testimonials"
import Experience from "../../components/Experience"
import LeadForm from "../../components/LeadForm"

const DigitalMarketingStrategy = () => {
    return (
        <div className="bg-linear-to-b from-pink-50 via-white to-pink-100 text-gray-700">

            <section className="flex flex-col justify-center items-center text-center min-h-screen px-6 py-20 relative overflow-hidden">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="max-w-4xl relative z-10"
                >
                    <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight text-gray-900">
                        Digital Marketing <span className="text-pink-600">Strategy Creation</span>
                    </h1>
                    <p className="mt-6 text-2xl md:text-3xl font-serif text-gray-800">
                        Winners of Best Integrated Digital Marketing Campaign
                    </p>
                    <p className="text-2xl font-serif text-pink-600">2017, 2018, 2019 & 2020</p>

                    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="border border-pink-400 text-pink-600 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-pink-500 hover:text-white hover:shadow-lg">
                            Speak to Us
                        </button>
                        <button className="bg-linear-to-r from-pink-500 to-pink-700 px-10 py-3 rounded-full text-lg font-semibold text-white transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                            Get Started
                        </button>
                    </div>
                </motion.div>
            </section>

            {/* PARTNERS & REWARDS */}
            <section>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <PartnersAndRewards />
                </motion.div>
            </section>


            <section className="max-w-6xl mx-auto py-20 px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="flex flex-col md:flex-row justify-between items-center gap-10"
                >
                    <div className="md:w-1/2">
                        <h2 className="font-serif text-3xl text-pink-600 font-semibold">
                            Great Digital Marketing Results Don’t Happen by Accident
                        </h2>
                        <p className="mt-5 text-justify">
                            Strategy should be at the heart of every digital marketing activation. Without it,
                            opportunities and investment can be wasted. Businesses have many digital platforms and
                            tools available today, all of which cost time and money to implement and manage.
                            Understanding which options best fit your objectives is essential to maximize ROI and
                            avoid misallocated resources.
                        </p>
                    </div>
                    <div className="md:w-1/2">
                        <video
                            src="https://ringtechmarketingbucket.s3.ap-south-1.amazonaws.com/servicesNavMenu/digital-marketing-strategy/strategyvideo.mp4"
                            className="rounded-xl shadow-lg w-full"
                            autoPlay
                            loop
                            muted
                        />
                    </div>
                </motion.div>
            </section>


            <section className="max-w-6xl mx-auto py-16 px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="grid md:grid-cols-2 gap-10"
                >
                    <div>
                        <p className="text-justify mb-4">
                            Since 2005, <span className="text-pink-600 font-semibold">Ringtech Marketing’s</span>{" "}
                            team of marketing and sales experts has collaborated with clients to develop tailored
                            strategies that drive measurable results. Through interactive workshops and immersive
                            sessions, we analyze every aspect of your business to identify actionable growth
                            opportunities.
                        </p>
                        <p className="text-justify">
                            Our approach is designed for both established enterprises and funded startups of all
                            sizes, focusing on building a strategy that aligns your messaging, content, social
                            media, lead generation, data capture, nurturing, and CRM utilization into one cohesive
                            framework.
                        </p>
                    </div>
                    <div>
                        <p className="text-justify">
                            We execute this through a five-step rollout process — starting with deep immersion and
                            discovery workshops, followed by market and competitor analysis. From there, we design
                            your strategy, craft an actionable implementation roadmap, and establish KPIs,
                            performance reports, and review cycles.
                        </p>
                    </div>
                </motion.div>
            </section>


            <section>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <Counter />
                </motion.div>
            </section>

            {/* INTEGRATED STRATEGY */}
            <section className="py-20 max-w-6xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <h2 className="text-center text-3xl md:text-4xl font-serif font-bold text-pink-600">
                        Integrated Digital Strategy
                    </h2>
                    <p className="mt-6 text-justify">
                        Ringtech Marketing follows a fully integrated approach to marketing and sales strategy —
                        covering every touchpoint from brand awareness and lead generation to customer retention
                        and referral growth. This holistic approach ensures that all parts of your marketing
                        ecosystem work together seamlessly to amplify your brand’s reach and results.
                    </p>
                    <img
                        src="https://ringtechmarketingbucket.s3.ap-south-1.amazonaws.com/servicesNavMenu/digital-marketing-strategy/Integratedigitalstrategy.webp"
                        alt="Integrated Digital Strategy"
                        className="w-full mt-12 rounded-xl shadow-lg"
                    />
                </motion.div>
            </section>

            <section className="max-w-6xl mx-auto py-20 px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="flex flex-col md:flex-row justify-between items-center gap-10"
                >
                    <div className="md:w-1/2">
                        <img src="https://ringtechmarketingbucket.s3.ap-south-1.amazonaws.com/servicesNavMenu/digital-marketing-strategy/strategy.webp" alt="Strategy Development" className="rounded-xl shadow-lg" />
                    </div>
                    <div className="md:w-1/2">
                        <h2 className="text-3xl font-serif font-bold text-pink-600 mb-4">
                            Strategy Development
                        </h2>
                        <p className="text-justify mb-3">
                            At Ringtech Marketing, we dedicate substantial resources to every area of marketing.
                            Each strategy we craft is backed by research, insight, and a detailed implementation
                            plan tailored to your business goals.
                        </p>
                        <p className="text-justify">
                            Our aim is to create strategies that are practical, scalable, and deliver measurable,
                            long-term impact.
                        </p>
                    </div>
                </motion.div>
            </section>
            <section className="max-w-6xl mx-auto py-20 px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <div className="flex flex-col md:flex-row justify-between items-center gap-10">
                        <div className="md:w-1/2">
                            <h1 className="text-pink-600 font-serif font-bold text-3xl mb-4">
                                What Makes Up a Digital Marketing Strategy?
                            </h1>
                            <p className="text-justify mb-4">
                                <span className="font-bold">Content Marketing:</span> To stand out online, your business needs
                                high-quality, valuable, and SEO-optimized content — whether through blog posts, social media
                                updates, or videos. This type of content is crafted to engage your audience, spark interest in
                                your offerings, and position your brand as a trusted industry leader. At Ringtech Marketing, we
                                identify and create the right kind of content to help you reach and resonate with your target
                                audience.
                            </p>
                        </div>

                        <div className="md:w-1/2 flex justify-center">
                            <img
                                src="/services/E.webp"
                                alt="Digital Marketing Strategy"
                                className="rounded-xl shadow-lg w-full max-w-md"
                            />
                        </div>
                    </div>
                </motion.div>
            </section>

            <section className="max-w-6xl mx-auto py-20 px-6">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <div className="grid md:grid-cols-2 gap-10">
                        <div>
                            <p className="text-justify mb-4">
                                <span className="font-bold text-pink-600">Social Media Marketing:</span> Platforms like
                                Facebook, Instagram, LinkedIn, and TikTok offer powerful ways to market your business. From
                                engaging posts and reels to targeted paid ads, social media helps you connect directly with
                                your audience. When executed strategically, it enables you to reach the right people, foster
                                engagement, and turn followers into loyal leads.
                            </p>

                            <p className="text-justify">
                                <span className="font-bold text-pink-600">Search Engine Marketing:</span> SEM focuses on
                                improving your website’s visibility in search results for keywords that matter most to your
                                business. Ringtech Marketing helps you climb rankings through a blend of search engine
                                optimization (SEO) and pay-per-click (PPC) advertising — ensuring your brand appears where your
                                potential customers are searching.
                            </p>
                        </div>

                        <div>
                            <p className="text-justify mb-4">
                                <span className="font-bold text-pink-600">Email Marketing:</span> With advanced CRM tools like
                                HubSpot, personalization and smart segmentation have made email marketing a powerful tactic for
                                brand awareness, lead nurturing, and customer retention. This strategy helps track campaign
                                performance and analyze buyer behavior. Ringtech Marketing has implemented HubSpot CRM for
                                numerous clients, helping them build targeted email campaigns that convert leads into long-term
                                customers.
                            </p>

                            <p className="text-justify">
                                <span className="font-bold text-pink-600">Lead Generation:</span> A strong digital marketing
                                strategy provides your business with a consistent flow of qualified leads. Ringtech Marketing
                                develops processes to generate both Marketing Qualified Leads (MQLs) and Sales Qualified Leads
                                (SQLs), aligning them with your broader marketing goals to ensure sustainable business growth.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </section>
            <section>
                <CaseStudies />
            </section>

            <section>
                <Testimonials />
            </section>

            <section>
                <Experience />
            </section>

            <section>
                <LeadForm />
            </section>
        </div>
    )
}

export default DigitalMarketingStrategy
