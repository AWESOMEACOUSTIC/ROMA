import React from 'react'
import { motion } from 'framer-motion'

export default function Villas() {
  const accommodations = [
    {
      title: "THE ESTATE SUITE",
      description: "Our signature suite features vaulted ceilings, hand-picked antique Italian furniture, a private terrace looking out over the olive groves, and a luxurious open bath.",
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1200",
      size: "85 sqm",
      view: "Olive groves & Valley"
    },
    {
      title: "GARDEN COTTAGE",
      description: "Tucked away in the quietest corner of our garden, the cottage offers complete privacy, a cozy fireplace, and direct access to our herbal pathway.",
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1200",
      size: "60 sqm",
      view: "Private courtyard"
    }
  ]

  return (
    <div className="w-full bg-[#f3efe9] text-[#1f3b2a] pb-24 font-['Switzer-Regular']">
      {/* Hero section */}
      <section className="pt-32 px-6 md:px-12 max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left md:flex md:items-end md:justify-between border-b border-[#264E33]/20 pb-12"
        >
          <div className="max-w-2xl">
            <p className="font-['Switzer-Semibold'] uppercase tracking-[0.35em] text-[0.75rem] text-[#a55d43]">
              A Sanctuary of Peace
            </p>
            <h1 className="mt-4 font-['Bonny-Bold'] text-[3.5rem] md:text-[5rem] leading-none text-[#1f3b2a]">
              OUR VILLAS & ROOMS
            </h1>
          </div>
          <p className="mt-6 md:mt-0 text-[1.1rem] leading-relaxed text-[#7a4338] max-w-sm md:text-right font-['Switzer-Medium']">
            Designed for deep rest, quiet contemplation, and complete connection with the surrounding nature.
          </p>
        </motion.div>
      </section>

      {/* Main Intro */}
      <section className="mt-16 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="w-full overflow-hidden border border-[#d6c2a8] shadow-[0_20px_40px_rgba(101,73,55,0.12)] rounded-lg mb-20">
          <img 
            src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200" 
            alt="Estate swimming pool overlooking hills" 
            className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
          />
        </div>
      </section>

      {/* Accommodations List */}
      <section className="px-6 md:px-12 max-w-6xl mx-auto flex flex-col gap-24">
        {accommodations.map((item, index) => (
          <motion.div 
            key={item.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
          >
            <div className={`overflow-hidden border border-[#d6c2a8] shadow-lg rounded-lg ${index % 2 === 1 ? 'md:order-last' : ''}`}>
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div>
              <span className="font-['Switzer-Semibold'] uppercase tracking-[0.2em] text-[0.75rem] text-[#a55d43]">
                {item.size} &bull; {item.view}
              </span>
              <h2 className="mt-4 font-['Bonny-Bold'] text-[2.5rem] leading-tight text-[#8a1c25]">
                {item.title}
              </h2>
              <p className="mt-6 text-[1.05rem] leading-[1.8] text-[#7a4338]">
                {item.description}
              </p>
              <button className="mt-8 border border-[#264E33] text-[#264E33] font-['Switzer-Semibold'] px-8 py-3 rounded hover:bg-[#264E33] hover:text-white transition-colors duration-300">
                Inquire & Book
              </button>
            </div>
          </motion.div>
        ))}
      </section>
    </div>
  )
}
