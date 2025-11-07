

const Experience = () => {
    const experience = [
        { id: 1, title: "B2B Marketing", img: "/b2b.webp" },
        { id: 2, title: "Education", img: "/mortarboard.webp" },
        { id: 3, title: "Automotive", img: "/automotive.webp" },
        { id: 4, title: "Healthcare", img: "/healthcare.webp" },
    ]

    const experience2 = [
        { id: 1, title: "Hospitality", img: "/hospitality.webp" },
        { id: 2, title: "Real Estate", img: "/building.webp" },
        { id: 3, title: "E-Commerce", img: "/shopping-cart.webp" }
    ]
    return (
        <section className="py-20 ">
            <div className="max-w-6xl mx-auto px-6">

                <h2 className="text-center text-4xl font-serif text-pink-600 mb-12">
                    Industry Experience
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                    {experience.map((item) => (
                        <div
                            key={item.id}
                            className="p-6 bg-white rounded-2xl shadow-md border border-pink-100 hover:shadow-pink-200/60 transition-transform duration-300 hover:-translate-y-2 text-center"
                        >

                            <img src={item.img} alt={item.title} className="mx-auto mb-4 w-16 h-16 object-contain" />
                            <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                        </div>
                    ))}
                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {experience2.map((item) => (
                        <div
                            key={item.id}
                            className="p-6 bg-white rounded-2xl shadow-md border border-pink-100 hover:shadow-pink-200/60 transition-transform duration-300 hover:-translate-y-2 text-center"
                        >

                            <img src={item.img} alt={item.title} className="mx-auto mb-4 w-16 h-16 object-contain" />
                            <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Experience