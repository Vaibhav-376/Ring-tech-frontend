import { motion } from 'framer-motion'
import PartnersAndRewards from '../../components/PartnersAndRewards'
import Counter from '../../components/Counter'
import CaseStudies from '../../components/CaseStudies'
import Testimonials from '../../components/Testimonials'
import Experience from '../../components/Experience'
import LeadForm from '../../components/LeadForm'

const Seo = () => {
    const process = [
        { id: 1, title: "Immersion Session", desc: "A one-on-one session between your organization and the Ring Tech Marketing team to gain a deeper understanding of your business objectives and goals.", img: "/services/immersion.webp" },
        { id: 2, title: "SEO and Keywords", desc: "Creating content strategically optimized for search engines — incorporating targeted keywords and relevant topics that attract quality traffic and boost visibility.", img: "/services/seo.webp" },
        { id: 3, title: "Content Gap Analysis", desc: "Conducting a thorough audit of your existing content, identifying gaps, and collaborating with the SEO team to optimize it for improved performance and search visibility.", img: "/services/content.webp" },
        { id: 4, title: "Content Clusters", desc: "Developing new content clusters, repurposing existing materials, and creating pillar pages centered around targeted keywords to strengthen topic authority and improve search rankings.", img: "/services/cluster.webp" },
        { id: 5, title: "Quaterly Plan", desc: "Developing a quarterly strategy aligned with business objectives — outlining how to effectively target the B2B sector using a combination of existing and newly created content.", img: "/services/quaterly.webp" },
        { id: 6, title: "Content Workshop", desc: "Outlining the overall content strategy — detailing how existing content will be leveraged alongside newly created material to effectively engage and reach the target market.", img: "/services/content.webp" },
        { id: 7, title: "Production", desc: "Developing new blogs, sharing repurposed content along with content suggestions - infographic, videos, animations, podcast etc", img: "/services/production.webp" },
        { id: 8, title: "Reporting", desc: "Analysis to see what content is driving the most organic traffic which drives the content plan for month 3–6 in line with Vari’s goals", img: "/services/reporting.webp" },
    ]

    const service = [
        { id: 1, title: "Website and SEO Audits", desc: "A great starting point is often a full SEO audit of your current website. Ring Tech Marketing provides instant, in-depth insights to help you identify opportunities for improvement and boost your site’s overall performance." },
        { id: 2, title: "Website Updates for SEO", desc: "Your website’s structure plays a crucial role in how it ranks on search engines. Ring Tech Marketing can enhance and optimize your existing site to ensure maximum search visibility and stronger SEO results." },
        { id: 3, title: "Website Backlink Building", desc: "Building backlinks is a vital yet complex aspect of SEO. Ring Tech Marketing focuses on creating high-quality, strategic backlinks that strengthen your site’s authority — all while ensuring compliance with Google’s best practices." },
        { id: 4, title: "SEO Content Creation", desc: "Google rewards websites that publish high-quality, relevant content. Our team at Ring Tech Marketing crafts SEO-friendly content optimized for both readers and search engines to help your website rank effectively." },
        { id: 5, title: "Google whisteling and Penalisation Recovery", desc: "If your website has been penalized by Google, Ring Tech Marketing can help diagnose the issue, implement corrective measures, and restore your site’s credibility and ranking performance." },
        { id: 6, title: "E-Book and E-Guide Design and Creation", desc: "E-Books and guides are powerful tools for educating your audience and generating qualified leads. Ring Tech Marketing designs and produces engaging digital resources that strengthen brand authority and drive conversions." },
    ]
    return (
        <div className='bg-linear-to-b from-pink-50 via-white to-pink-100 text-gray-900'>
            <section className='flex flex-col justify-center items-center text-center min-h-screen px-6 py-20 relative overflow-hidden'>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className='max-w-4xl relative z-10'
                >
                    <h1 className='text-4xl md:text-5xl font-extrabold leading-tight'>SEO Agency in <span className='text-pink-600'>India</span></h1>
                    <p className='text-3xl font-serif leading-tight'>Social Media Marketing Agency in India</p>
                    <p className='text-2xl leading-tight text-pink-600'>Winner of best integrated Digital Maketing Compaign 2017,2018,2019,2024</p>

                    <div className='mt-10 flex flex-col sm:flex-row gap-4 justify-center'>
                        <button className='bg-linear-to-r from-pink-400 to-pink-600 px-10 py-3 rounded-full text-lg font-semibold text-white transition-transform duration-300 hover:scale-105 hover:shadow-lg'>Ask us About our Enterprise packages</button>
                    </div>
                </motion.div>
            </section>

            <section>
                <PartnersAndRewards />
            </section>

            <section className='py-10 max-w-6xl mx-auto'>
                <div className='flex justify-between mt-10'>
                    <div>
                        <h1 className='text-pink-600 text-3xl font-serif '>Enterprise SEO for ALL Budgets</h1>
                        <p className='mt-4'>There's process to maximising SEO performance and any shortcuts will limit a website's organic sucess. Your business needs a seo without any compromise and that'why we provide</p>

                        <h1 className='text-pink-600 text-3xl font-serif mt-10'>Enterprise SEO Services for Every Client.</h1>
                        <div className='mt-4 flex flex-col sm:flex-row gap-4 justify-start'>
                            <button className='bg-linear-to-r from-pink-400 to-pink-600 px-10 py-3 rounded-full text-lg font-semibold text-white transition-transform duration-300 hover:scale-105 hover:shadow-lg'>Ask us About our Enterprise packages</button>
                        </div>
                    </div>

                    <div>
                        <img src="/services/seo-all-budget.webp" alt="" />
                    </div>

                </div>
            </section>

            <section>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className='relative z-10 max-w-6xl mx-auto px-6'
                >
                    <div className='flex justify-between gap-4'>
                        <div>
                            <h1 className='text-pink-600 font-semibold text-3xl'>SEO is the Ultimate Business Growth Driver</h1>
                            <p className='text-justify mt-3'>Unappreciated by many, SEO is a driver of qualified, high-intent visitors to your website - without a cost per click!</p>
                            <p className='mt-3 text-justify'>Is your company easily discoverable online when potential customers are in search of your products and services?</p>
                            <p className='mt-2 text-justify'>With 18 years of expertise as an SEO company, Ring Tech Marketing delivers innovative, results-driven SEO services in Dubai, UAE. We continuously refine our search marketing strategies to maximize campaign performance, driving higher traffic, increased sales, and sustainable business growth — all while maintaining full compliance with the best practices set by Google and other leading search engines.</p>
                        </div>
                        <div className='mb-10'>
                            <p className='mt-4'>Effective SEO helps you generate high volumes of quality business leads through your website and also transforms your website from a simple online informational resource into an active sales platform.</p>
                            <p className='mt-4'>Our approach allows companies of all shapes (and budgets) work safely within the knowledge that their website is receiving enterprise-level SEO services.  Simply select one of our packages that suits your budget and we take care of the rest.</p>
                            <p className='mt-4'>Ring Tech Marketing is a premier SEO Agency in Dubai, and a Google Partner, SEO-Certified Professional.</p>
                            <p className='mt-4'>Want a quick insight into Ring Tech Marketing’s SEO approach? Watch the video below to discover how our own SEO value surpasses $1.3 million annually!</p>
                        </div>
                    </div>
                </motion.div>
            </section>

            <section>
                <Counter />
            </section>
            <section className="max-w-6xl mx-auto py-20 px-6">
                <h1 className="text-pink-600 text-3xl font-semibold text-center mb-12">
                    SEO Process Explained
                </h1>

                <div className="space-y-10">
                    {process.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col md:flex-row items-start md:items-center gap-6 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                        >
                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-16 h-16 object-contain .flex-shrink-0"
                            />
                            <div>
                                <h2 className="text-pink-600 font-semibold text-xl mb-2">
                                    {item.title}
                                </h2>
                                <p className="text-gray-700 leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="py-20 max-w-6xl mx-auto px-6">
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-pink-600">
                    Social Media Agency Service Offering
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {service.map((service) => (
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

            <section className="max-w-6xl mx-auto px-4 py-16">
                <div className="flex flex-col md:flex-row items-center gap-10">
                    {/* Left Image */}
                    <div className="flex-1">
                        <img
                            src="/services/seoapproach.webp"
                            alt="SEO Approach"
                            className="rounded-2xl shadow-lg w-full object-cover"
                        />
                    </div>

                    {/* Right Content */}
                    <div className="flex-1 space-y-4">
                        <h1 className="text-3xl font-bold text-pink-600 leading-tight">
                            SEO in 2025 — A New Approach is Required
                        </h1>

                        <h2 className="text-xl font-semibold text-gray-800">
                            Conversion, Conversion, Conversion!
                        </h2>

                        <p className="text-gray-700 leading-relaxed">
                            SEO remains one of the most underutilized yet powerful marketing tools
                            available to businesses today. When implemented effectively, it drives
                            <span className="font-semibold text-pink-500">
                                {" "}
                                high-quality, high-intent traffic{" "}
                            </span>
                            that converts into sales faster than almost any other channel.
                        </p>

                        <p className="text-gray-700 leading-relaxed">
                            Think of SEO as the digital equivalent of a customer walking into your
                            store, ready to make a purchase.
                        </p>

                        <p className="text-gray-700 leading-relaxed">
                            So why do so many businesses overlook it?
                        </p>

                        <p className="text-gray-700 leading-relaxed">
                            Most of the time, it’s simply because they don’t fully understand how
                            search engine optimization works or how it can benefit them.
                        </p>

                        <p className="text-gray-700 leading-relaxed">
                            At{" "}
                            <span className="font-semibold text-pink-500">
                                Ring Tech Marketing
                            </span>
                            , our team helps bridge that gap — educating you on the process,
                            eliminating confusion, and building strategies that{" "}
                            <span className="font-semibold text-pink-500">
                                attract, engage, and convert
                            </span>{" "}
                            visitors into loyal customers.
                        </p>
                    </div>
                </div>
            </section>

            <section>
                <CaseStudies />
            </section>

            <section>
                <Testimonials />
            </section>


            <section className=" py-20 px-6 md:px-12">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">

                    <div className="flex-1 space-y-6">
                        <h1 className="text-3xl md:text-4xl font-bold leading-tight text-pink-500">
                            Should You Hire an SEO Company for Your Business?
                        </h1>

                        <p className=" leading-relaxed">
                            We might be a little biased — but in our experience, the answer is a clear <span className="text-pink-400 font-semibold">“yes”</span>!
                            The real question is how important ranking at the top of Google’s results is to your business.
                            For most, it’s critical for visibility, credibility, and consistent growth.
                        </p>

                        <p className=" leading-relaxed">
                            As a business owner, you might wonder what ranking high is really worth.
                            The truth? Strong SEO directly translates into measurable value — increased traffic, better conversions,
                            and ultimately, more revenue. In short, SEO’s value can be seen in <span className="text-pink-400 font-semibold">real business results.</span>
                        </p>

                        <p className=" leading-relaxed">
                            At <span className="text-pink-500 font-semibold">Ring Tech Marketing</span>, we view SEO not just as “Search Engine Optimization” —
                            but as <span className="text-pink-400 italic">Search Engine Ownership</span>.
                            Because when your brand owns its search presence, it owns the conversation.
                        </p>
                    </div>

                    <div className="flex-1 flex flex-col items-center gap-6">
                        <img
                            src="/services/E.webp"
                            alt="SEO Visual Element"
                            className="w-3/4 md:w-1/2 rounded-lg shadow-lg transform hover:scale-105 transition"
                        />
                    </div>
                </div>

            </section>

            <section className="py-20 px-6 md:px-12">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">  
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-pink-500 mb-6">
                            Is Your Website Visible Online?
                        </h2>

                        <h3 className="text-lg font-semibold text-pink-600 mb-4">
                            Determining the Value of SEO
                        </h3>

                        <p className=" leading-relaxed mb-6">
                            Our <span className="text-pink-400 font-medium">Search Engine Ownership</span> approach focuses on three core areas
                            that determine real SEO success for any business:
                        </p>

                        <ul className="list-disc list-inside  space-y-2 mb-6">
                            <li>Your company’s search visibility</li>
                            <li>Your visibility compared to your competitors</li>
                            <li>The actual value of your organic traffic in measurable ROI</li>
                        </ul>

                        <p className=" leading-relaxed">
                            If you’ve ever searched for a service or product on Google, you’re familiar with
                            how search visibility works — only the top-ranking websites capture attention.
                            Try searching your own products or services: does your business appear on the
                            first page? That’s the power (and necessity) of strong search visibility.
                        </p>
                    </div>

                    {/* Right Column */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-pink-500 mb-6">
                            Search Engine Visibility
                        </h2>

                        <p className=" leading-relaxed mb-6">
                            Search Visibility is a measurable metric that reflects how visible your brand is
                            across every search query related to your business and industry. It directly
                            impacts the amount of qualified traffic your website attracts.
                        </p>

                        <p className=" leading-relaxed mb-6">
                            At <span className="text-pink-500 font-semibold">Ring Tech Marketing</span>, we regularly analyze Search Visibility
                            metrics to help businesses understand where they stand and how to increase
                            organic visibility and conversions.
                        </p>

                        <p className=" leading-relaxed">
                            Based on a comprehensive study of 400+ keywords and search terms aligned to
                            our service offerings, <span className="text-pink-400 font-semibold">Ring Tech Marketing</span> maintains a strong visibility
                            score across both desktop and mobile searches. This means that for nearly 75%
                            of those targeted search terms, our content is optimized to convert visibility
                            into measurable website traffic and engagement.
                        </p>
                    </div>

                </div>
            </section>

            <section>
                {/* faq */}
            </section>

            <section>
                <Experience/>
            </section>

            <section>
                <LeadForm/>
            </section>

        </div>
    )
}

export default Seo