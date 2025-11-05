const PartnersAndRewards = () => {
  const partners = [
    { id: 1, image: "/google.png" },
    { id: 2, image: "/HubSpotElite.webp" },
    { id: 3, image: "/meena2021.png" },
    { id: 4, image: "/meenasearch.png" },
    { id: 5, image: "/tiktok.png" },
    { id: 6, image: "/meta.png" },
    { id: 7, image: "/youtube.png" },
    { id: 8, image: "/linkedin.png" },
    { id: 9, image: "/adobe.png" },
    { id: 10, image: "/mailchimp.png" },
  ];

  return (
    <section className="relative py-16 bg-linear-to-r from-white via-pink-50/40 to-white overflow-hidden">
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12 tracking-wide">
        <span className="bg-linear-to-r from-pink-600 to-rose-400 bg-clip-text text-transparent">
          Partners & Awards
        </span>
      </h2>

      {/* Subtle gradient overlays for fade effect */}
      <div className="absolute top-0 left-0 w-40 h-full bg-linear-to-r from-white via-white/80 to-transparent z-10"></div>
      <div className="absolute top-0 right-0 w-40 h-full bg-linear-to-l from-white via-white/80 to-transparent z-10"></div>

      {/* Marquee */}
      <div className="group flex items-center overflow-hidden">
        <div className="flex gap-16 animate-marquee group-hover:[animation-play-state:paused]">
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-36 h-36 bg-white/90 rounded-2xl shadow-md backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <img
                src={partner.image}
                alt="partner logo"
                className="w-20 h-20 object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Animation CSS */}
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 25s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default PartnersAndRewards;
