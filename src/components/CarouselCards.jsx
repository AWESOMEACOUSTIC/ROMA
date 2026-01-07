import React from 'react'

export default function CarouselCard({ title, image }) {
  return (
    <div className="flex flex-col">
      <h3 className="text-sm text-green-800 mb-2">{title}</h3>
      <img
        src={image}
        alt={title}
        className="w-full h-auto object-cover rounded-md"
      />
    </div>
  )
}