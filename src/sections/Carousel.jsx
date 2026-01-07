import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import CarouselCard from '../components/CarouselCards'

const ArrowButton = ({ direction, onClick, disabled, className = '' }) => {
  const Icon = direction === 'left' ? FiChevronLeft : FiChevronRight
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={[
        'absolute bg-white border border-green-800',
        'w-10 h-10 rounded-full flex items-center justify-center',
        'text-green-800',
        'hover:bg-green-800 hover:text-white transition-colors',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <Icon className="w-6 h-6" />
    </button>
  )
}

// sample data; replace with your own images
const posts = [
  {
    id: 1,
    title: 'Fruits and Nuts in Italian Desserts',
    image: 'https://framerusercontent.com/images/mnZYmT1w79jladihs1C9OD89618.jpg?width=1280&height=854',
  },
  {
    id: 2,
    title: 'The Place of Lemon in Italian Cuisine',
    image: 'https://framerusercontent.com/images/YjGSPzcnNLeZTdpKOZcVOLlACU.jpg?width=1280&height=1919',
  },
  {
    id: 3,
    title: 'Knife Work',
    image: 'https://framerusercontent.com/images/oyS5ubzSq7PwITym3NSqeK8AjpM.jpg?width=5464&height=8192',
  },
  {
    id: 4,
    title: 'More Italian Stories…',
    image: 'https://framerusercontent.com/images/xsXjuxhMFul50gIoCFzCxPhqYzA.jpg?width=1280&height=853',
  },
]

const VISIBLE = 3

export default function Carousel() {
  const [index, setIndex] = useState(0)
  const maxIndex = Math.max(0, posts.length - VISIBLE)

  const handlePrev = () => setIndex((i) => Math.max(i - 1, 0))
  const handleNext = () => setIndex((i) => Math.min(i + 1, maxIndex))

  return (
    <section className="border border-green-800 p-6 relative">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="font-serif text-3xl text-green-800">JOURNAL</h2>
        <button className="flex items-center bg-green-800 text-white px-4 py-2 rounded-lg hover:bg-green-900 transition-colors">
          Read all
          <span className="ml-2">→</span>
        </button>
      </div>

      {/* SLIDER */}
      <div className="overflow-hidden relative pb-12">
        {/* static vertical dividers */}
        <div className="absolute top-0 bottom-0 left-1/3 border-l border-green-800 pointer-events-none" />
        <div className="absolute top-0 bottom-0 left-2/3 border-l border-green-800 pointer-events-none" />

        <motion.div
          className="flex space-x-4"
          animate={{ x: `-${(index * 100) / VISIBLE}%` }}
          transition={{ type: 'tween', duration: 0.5 }}
        >
          {posts.map((post) => (
            <div key={post.id} className="shrink-0 w-[calc(100%/3)]">
              <CarouselCard title={post.title} image={post.image} />
            </div>
          ))}
        </motion.div>
      </div>

      {/* NAVIGATION */}
      <ArrowButton
        direction="left"
        onClick={handlePrev}
        disabled={index === 0}
        className="bottom-4 left-4"
      />
      <ArrowButton
        direction="right"
        onClick={handleNext}
        disabled={index === maxIndex}
        className="bottom-4 right-4"
      />
    </section>
  )
}