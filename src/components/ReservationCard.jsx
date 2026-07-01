import React from 'react'
import { motion } from 'framer-motion'

/**
 * ReservationCard component representing each category (Drinks, Meals, Desserts)
 * 
 * @param {string} image - URL of the category image
 * @param {string} title - Category name (e.g., DRINKS)
 * @param {string} subtitle - Short description (e.g., Sip & savor)
 */
export default function ReservationCard({ image, title, subtitle }) {
  return (
    <div className="flex flex-col items-center select-none w-full">
      {/* Image Container with Zoom effect on hover */}
      <div className="w-full aspect-[3/4] overflow-hidden rounded-sm border border-white/10 shadow-xl bg-[#6f171e]">
        <motion.img
          src={image}
          alt={`${title} - ${subtitle}`}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
        />
      </div>

      {/* Category Title (Serif) */}
      <h3 className="mt-8 font-['Bonny-Bold'] text-[2rem] tracking-[0.05em] text-[#F9F7EF] uppercase leading-none">
        {title}
      </h3>

      {/* Subtitle Description */}
      <p className="mt-2 font-['Switzer-Regular'] text-[0.95rem] text-[#F9F7EF]/70 font-light">
        {subtitle}
      </p>
    </div>
  )
}
