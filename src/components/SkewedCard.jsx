import React from 'react'
import { motion } from 'framer-motion'

/**
 * A card component that applies a Y-axis skew to the container
 * and an inverse skew/scale to the image to keep the subject natural
 * while providing a stylized frame.
 * 
 * @param {string} src - Image source URL
 * @param {string} alt - Alt text
 * @param {number} skewY - Skew angle in degrees (e.g. -10, 10, 0)
 * @param {string} className - Additional classes for the container
 * @param {string} aspectRatio - Aspect ratio of the card container (default: 'aspect-[3/4]')
 */
export default function SkewedCard({
  src,
  alt = '',
  skewY = 0,
  className = '',
  aspectRatio = 'aspect-[3/4]',
}) {
  const isSkewed = skewY !== 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      whileHover={{ y: -8 }}
      className={`relative w-full overflow-hidden border border-[#d6c2a8]/60 shadow-[0_15px_35px_rgba(101,73,55,0.1)] rounded-sm grayscale hover:grayscale-0 transition-all duration-700 cursor-pointer ${aspectRatio} ${className}`}
      style={{
        transform: isSkewed ? `skewY(${skewY}deg)` : 'none',
      }}
    >
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        style={{
          // Apply inverse skew to prevent image distortion, and scale up to fill corners
          transform: isSkewed ? `skewY(${-skewY}deg) scale(1.25)` : 'scale(1.02)',
          transformOrigin: 'center center',
        }}
        whileHover={{
          transform: isSkewed 
            ? `skewY(${-skewY}deg) scale(1.35)` 
            : 'scale(1.08)',
        }}
        transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
      />
    </motion.div>
  )
}
