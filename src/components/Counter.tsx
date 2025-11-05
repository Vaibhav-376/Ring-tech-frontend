
import { motion } from "framer-motion"

const Counter = () => {
  const counter = [
    { id: 1, number: "20+", desc: "Years of Excellence", img: "/services/history.webp" },
    { id: 2, number: "5", desc: "Global Locations", img: "/services/world.webp" },
    { id: 3, number: "300+", desc: "Active Clients", img: "/services/active.webp" },
    { id: 4, number: "2%", desc: "Top HubSpot Partners Globally", img: "/services/handshake.webp" },
    { id: 5, number: "100+", desc: "In-house Digital Marketing Specialists", img: "/services/group.webp" },
  ]

  return (
    <div className="bg-linear-to-b from-pink-50 via-white to-pink-100">
      <div className="max-w-6xl mx-auto py-20 px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 text-center">
        {counter.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center space-y-4"
          >
            <img src={item.img} alt={item.desc} className="w-20 h-20 object-contain" />
            <h1 className="text-4xl font-extrabold">{item.number}</h1>
            <p className="text-lg font-medium text-pink-600">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Counter
