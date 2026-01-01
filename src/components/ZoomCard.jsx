import React from 'react'
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
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block ${className}`}
    >
      <div className="overflow-hidden rounded-lg">
        <motion.img
          src={src}
          alt={alt}
          className="w-full h-auto object-cover"
          // scale up slightly on hover
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          style={{ transformOrigin: 'center center', ...imageStyle }}
        />
      </div>
      {caption && (
        <p className="mt-2 text-center text-sm font-medium text-green-800">
          {caption}
        </p>
      )}
    </a>
  )
}