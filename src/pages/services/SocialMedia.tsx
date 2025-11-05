import { motion } from 'framer-motion'
import PartnersAndRewards from '../../components/PartnersAndRewards'
import Counter from '../../components/Counter'
import Experience from '../../components/Experience'
import CaseStudies from '../../components/CaseStudies'
import Testimonials from '../../components/Testimonials'
import LeadForm from '../../components/LeadForm'

const SocialMedia = () => {
    const services = [
        { id: 1, title: "Social media community management", desc: "We oversee the daily operations of your social media platforms by crafting a strategic content plan with you and taking care of both content creation and publishing. Our goal is to keep your brand’s online presence active, engaging, and responsive. By enhancing your social media interactions, we strengthen your lead generation capabilities, helping you attract, nurture, and convert prospects into loyal clients." },
        { id: 2, title: "Social Media Content Creation Services", desc: "The quality of your social media content defines your online success. Understanding what to post, when to post, and how to optimize it is crucial. Our team creates compelling, relevant content tailored to your industry trends, brand goals, and target audience — driving stronger engagement and visibility across platforms." },
        { id: 3, title: "Social Media Advertising and Media Services", desc: "For product launches, events, or major business announcements, social media advertising is a key tool to reach your audience. We manage your paid campaigns from start to finish — handling ad creation, performance tracking, and continuous optimization. Our approach ensures that every campaign delivers measurable results and maximum impact." },
        { id: 4, title: "Social Media Campaigns and Projects", desc: "If you’re planning a short-term social media initiative, our team designs and executes campaigns that deliver tangible outcomes. From concept and design to performance analysis, we ensure every project enhances your brand’s presence and achieves its objectives." },
        { id: 5, title: "Social Media Agency for Events", desc: "When it comes to events and exhibitions, we help your brand build awareness, drive ticket sales, and create buzz. Our event-specific social media strategies focus on engagement before, during, and after the event — ensuring maximum reach and audience connection." },
        { id: 6, title: "Influencer Marketing", desc: "We collaborate with top influencers across different industries to expand your brand’s visibility and credibility. By connecting your brand with the right voices, we ensure your message reaches and resonates with the right audience, increasing awareness, engagement, and conversions." }
    ]

    const benfits = [
        {id:1,title:"Targeted Goal Setting",img:"/services/eye.webp"},
        {id:2,title:"Creative Content Creation",img:"/services/stats.webp"},
        {id:3,title:"Efficient Platform Management",img:"/services/eye.webp"},
        {id:4,title:"Enhanced Audio Communication",img:"/services/messgae.webp"},
        {id:5,title:"Data-Driven Insights",img:"/services/pen.webp"},
        {id:6,title:"Increase Band Visibility",img:"/services/target.webp"}
    ]
    return (
        <div className='bg-linear-to-b from bg-pink-50 via-white to-pink-100 text-gray-900'>
            <section className='flex flex-col justify-center items-center text-center min-h-screen px-6 py-20 relative overflow-hidden'>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className='max-w-4xl relative z-10'
                >
                    <h1 className='text-4xl md:text-5xl font-extrabold leading-tight'>Social <span className='text-pink-600'>Media</span></h1>
                    <p className='text-3xl font-serif leading-tight'>Social Media Marketing Agency in India</p>
                    <p className='text-2xl leading-tight text-pink-600'>Winner of BEST USE OF SOCIAL MEDIA</p>

                    <div className='mt-10 flex flex-col sm:flex-row gap-4 justify-center'>
                        <button className='border border-pink-400 text-pink-600 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-pink-500 hover:text-white hover:shadow-lg'>Speak to Us</button>

                        <button className='bg-linear-to-r from-pink-400 to-pink-600 px-10 py-3 rounded-full text-lg font-semibold text-white transition-transform duration-300 hover:scale-105 hover:shadow-lg'>Get Started</button>
                    </div>
                </motion.div>
            </section>

            <section>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 2, y: 1 }}
                    transition={{ duration: 1 }}
                >
                    <PartnersAndRewards />
                </motion.div>
            </section>

            <section className="py-20 max-w-6xl mx-auto">
                <div className="flex justify-between items-center gap-6">
                    <div className="w-1/2">
                        <video
                            src="/services/Nexa Social Video (1).mp4"
                            controls
                            autoPlay
                            muted
                            loop
                            className="w-full h-auto rounded-2xl shadow-lg"
                        />
                    </div>

                    <div className="w-1/2">
                        <p className="text-2xl font-medium">
                            See how we bring stories to life on social media — click below to watch our work.
                        </p>
                    </div>
                </div>
            </section>

            <section className="max-w-6xl mx-auto py-20 px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-10">


                    <div className="md:w-1/2 space-y-6">
                        <h1 className="text-3xl md:text-4xl font-semibold leading-snug text-pink-600">
                            Experienced Social Media Agency with a Proven Track Record
                        </h1>
                        <p className="text-gray-600 leading-relaxed">
                            As a leading digital marketing agency, <span className="font-semibold text-pink-600">Ring Tech Marketing</span> understands
                            the vital role social media plays in shaping effective business strategies. With over two decades of
                            industry experience, we’ve continuously evolved our services to match the rapid growth and transformation
                            of today’s leading social platforms. From the very beginning, we’ve stayed ahead of trends, combining deep
                            expertise with hands-on experience to help our clients maximise their social media presence. In addition,
                            <span className="font-semibold text-pink-600"> Ring Tech Marketing</span> proudly partners with major platforms including
                            Meta (Facebook, Instagram & WhatsApp), TikTok, Snapchat, and LinkedIn — giving our clients a competitive
                            edge in the digital space.
                        </p>
                    </div>

                    <div className="md:w-1/2 flex justify-center">
                        <img
                            src="/services/instagram.webp"
                            alt="Social Media Marketing"
                            className="rounded-2xl shadow-lg w-full max-w-md object-cover"
                        />
                    </div>

                </div>
            </section>

            <section className='max-w-6xl mx-auto'>
                <div className='flex justify-between gap-10'>
                    <div className=''>
                        <p className='mb-5 text-justify'>While social media platforms are designed to be easy for anyone to use, that doesn’t necessarily mean businesses can harness their full potential on their own—especially when it comes to integrating them into a cohesive marketing strategy. That’s where Ring Tech Marketing steps in, helping brands turn everyday social media activity into powerful, results-driven marketing.</p>
                        <p className='text-justify'>Our team of social media specialists is dedicated to expanding your brand’s reach, boosting audience engagement, and ensuring your business stands out in the digital landscape. We craft content that captures attention — not content people scroll past. With Ring Tech Marketing as your social media partner, your business will connect with potential and existing customers in dynamic, measurable ways. We consistently meet and exceed goals by offering a comprehensive range of services, each tailored to fit your unique business objectives. Ring Tech Marketing’s offerings include content creation, platform and campaign management, paid advertising, and influencer collaborations. Beyond delivering exceptional social media results, we also believe in empowering our clients through customized training sessions and workshops designed to enhance in-house marketing capabilities.</p>
                    </div>
                    <div>
                        <p className='text-justify'>Partner with Ring Tech Marketing to elevate your brand’s social media presence through a dedicated team of analysts, designers, copywriters, photographers, and videographers. Experience the impact of advanced reporting tools that deliver valuable insights, forecasts, and data-driven guidance — helping you uncover new opportunities and stay ahead of emerging platforms and trends. With a global presence and a network of experts available around the clock, Ring Tech Marketing offers continuous support and strategic expertise. If you’re seeking a world-class agency to scale your social media and drive meaningful business growth, Ring Tech Marketing is your trusted partner.</p>
                    </div>
                </div>
            </section>

            <section>
                <Counter />
            </section>

            <section className="py-20 max-w-6xl mx-auto px-6">
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-pink-600">
                    Social Media Agency Service Offering
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300"
                        >
                            <h2 className="text-xl font-semibold mb-3 text-pink-600">{service.title}</h2>
                            <p className="text-gray-600 leading-relaxed text-sm text-justify">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className='py-10 max-w-6xl mx-auto'>
                <div className='flex justify-between flex-col md:flex-row'>
                    <div>
                        <h1 className='text-3xl md:text-4xl font-bold text-pink-600 mb-5'>The benefits of working with a social media agency</h1>
                        <p className='text-justify'>Ring Tech Marketing takes pride in being a leading digital marketing agency. With over eighteen years of industry experience, we’ve seen social media evolve from its early days and have consistently stayed ahead of every major shift. Our dedicated team of social media experts continues to drive innovation, ensuring our clients always benefit from cutting-edge strategies and top-quality service.</p>
                    </div>
                    <div className='px-10'>
                        <img src="/services/instagram.webp" alt="" />
                    </div>
                </div>
            </section>

            <section className='max-w-6xl mx-auto py-10'>
                <h1 className='text-pink-600 font-semibold text-3xl md:text-4xl mb-5 text-center py-10'>Benefits of Social Media Services</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {benfits.map((benefit) => (
                        <div
                            key={benefit.id}
                            className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300"
                        >
                            <img src={benefit.img} alt="" width={30} height={30} className='py-4'/>
                            <h2 className="text-xl font-semibold mb-3 text-pink-600">{benefit.title}</h2>
                            {/* <p className="text-gray-600 leading-relaxed text-sm text-justify">{service.desc}</p> */}
                        </div>
                    ))}
                </div>
            </section>
            
            <section>
                <Experience/>
            </section>

            <section>
                <CaseStudies/>
            </section>

            <section>
                <Testimonials/>
            </section>

            <section>
                <LeadForm/>
            </section>
        </div>
    )
}

export default SocialMedia