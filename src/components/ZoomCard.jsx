import React, { useState } from 'react'
import { motion } from 'framer-motion'

/**
 * @param {string} src      – image URL
 * @param {string} alt      – alt text for the image
 * @param {string} caption  – text to show below the image
 * @param {string} href     – link URL for the whole card
 * @param {string} className – additional classes for the card container
 * @param {object} imageStyle – inline style overrides for the image element
 */
export default function ImageZoomCard({
  src,
  alt = '',
  caption,
  href = '#',
  className = '',
  imageStyle = {},
}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block ${className}`}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{ zIndex: isHovered ? 20 : 1 }}
    >
      <div className="overflow-hidden rounded-lg">
        <motion.img
          src={src}
          alt={alt}
          className="w-full h-auto object-cover"
          // delayed, slower hover zoom so move feels more intentional
          whileHover={{ scale: 1.08 }}
          transition={{ delay: 0.18, duration: 0.86, ease: [0.19, 1, 0.22, 1] }}
          style={{ transformOrigin: 'center center', ...imageStyle }}
        />
      </div>
      {caption && (
        <p className="mt-2 text-center text-sm font-medium text-green-800">
          {caption}
        </p>
      )}
    </motion.a>
  )
}