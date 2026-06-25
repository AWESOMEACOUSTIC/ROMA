import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import ImageZoomCard from './ZoomCard'

export default function CarouselCard({ title, image, href = "https://www.instagram.com/roma_restaurant/" }) {
  return (
    <div className="flex flex-col px-6">
      {/* header row: title + diagonal arrow */}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-start justify-between mb-3 min-h-[20px] cursor-pointer"
      >
        <h3 className="text-sm font-medium text-green-800">{title}</h3>
        <FiArrowUpRight className="w-4 h-4 text-green-800 shrink-0 ml-2" />
      </a>

      {/* tall portrait image wrapper using ImageZoomCard */}
      <div className="w-full">
        <ImageZoomCard
          src={image}
          alt={title}
          href={href}
          imageStyle={{ height: '560px', width: '100%', objectFit: 'cover' }}
          innerClassName=""
        />
      </div>
    </div>
  )
}