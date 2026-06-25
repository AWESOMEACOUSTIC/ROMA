import React from 'react'
import { motion } from 'framer-motion'

export default function Resturant() {
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
              The Culinary Heart of Roma
            </p>
            <h1 className="mt-4 font-['Bonny-Bold'] text-[3.5rem] md:text-[5rem] leading-none text-[#1f3b2a]">
              THE RESTAURANT
            </h1>
          </div>
          <p className="mt-6 md:mt-0 text-[1.1rem] leading-relaxed text-[#7a4338] max-w-sm md:text-right font-['Switzer-Medium']">
            Honest ingredients, time-honored techniques, and a kitchen filled with warmth and Italian heritage.
          </p>
        </motion.div>
      </section>

      {/* Main Feature */}
      <section className="mt-16 px-6 md:px-12 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="font-['Switzer-Semibold'] uppercase tracking-[0.2em] text-[0.75rem] text-[#a55d43]">
            Our Philosophy
          </span>
          <h2 className="mt-4 font-['Bonny-Bold'] text-[2.5rem] leading-tight text-[#8a1c25]">
            FROM LAND TO TABLE
          </h2>
          <p className="mt-6 text-[1.05rem] leading-[1.8] text-[#7a4338]">
            At Roma, the menu is dictated by the seasons and the rich soil of the surrounding estate. Our pasta is hand-rolled daily, our olive oil is pressed from our own groves, and our wine cellar features carefully selected local varieties that complement every dish.
          </p>
          <p className="mt-4 text-[1.05rem] leading-[1.8] text-[#7a4338]">
            We invite you to sit back, share stories, and taste the true soul of traditional Italian cooking in an atmosphere that makes you feel completely at home.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full overflow-hidden border border-[#d6c2a8] shadow-[0_20px_40px_rgba(101,73,55,0.12)] rounded-lg"
        >
          <img 
            src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200" 
            alt="Beautiful rustic dining table setting in Italy" 
            className="w-full h-[450px] object-cover hover:scale-105 transition-transform duration-700"
          />
        </motion.div>
      </section>

      {/* Image Gallery Grid */}
      <section className="mt-24 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="overflow-hidden border border-[#d6c2a8] shadow-lg rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1546549032-9571cd6b27df?q=80&w=600" 
              alt="Freshly made artisanal pasta" 
              className="w-full h-[300px] object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="overflow-hidden border border-[#d6c2a8] shadow-lg rounded-lg">
            <img 
              src="https://framerusercontent.com/images/Ao6XlEVJkfWlugnYkzzoHWB4QUE.jpeg" 
              alt="Freshly baked sourdough brioche" 
              className="w-full h-[300px] object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="overflow-hidden border border-[#d6c2a8] shadow-lg rounded-lg">
            <img 
              src="https://framerusercontent.com/images/RsFlWUURYmOGf0LDMMb2Xnass.jpg" 
              alt="Artisanal cocktail" 
              className="w-full h-[300px] object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
