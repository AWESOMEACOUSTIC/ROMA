import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'
import CarouselCard from '../components/CarouselCards'

const ArrowButton = ({ direction, onClick, disabled }) => {
  const Icon = direction === 'left' ? FiArrowLeft : FiArrowRight
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={[
        'w-12 h-12 rounded-full flex items-center justify-center',
        'border border-green-800 text-green-800 bg-transparent',
        'hover:bg-green-800 hover:text-white transition-colors',
        'disabled:opacity-40 disabled:cursor-not-allowed',
      ].join(' ')}
    >
      <Icon className="w-5 h-5" />
    </button>
  )
}

const posts = [
  {
    id: 1,
    title: 'Fruits and Nuts in Italian Desserts',
    image:
      'https://framerusercontent.com/images/mnZYmT1w79jladihs1C9OD89618.jpg?width=1280&height=854',
    href: 'https://www.instagram.com/roma_restaurant/',
  },
  {
    id: 2,
    title: 'The Place of Lemon in Italian Cuisine',
    image:
      'https://framerusercontent.com/images/YjGSPzcnNLeZTdpKOZcVOLlACU.jpg?width=1280&height=1919',
    href: 'https://www.instagram.com/roma_restaurant/',
  },
  {
    id: 3,
    title: 'Knife Work',
    image:
      'https://framerusercontent.com/images/oyS5ubzSq7PwITym3NSqeK8AjpM.jpg?width=5464&height=8192',
    href: 'https://www.instagram.com/roma_restaurant/',
  },
  {
    id: 4,
    title: 'Crafting Umami',
    image:
      'https://framerusercontent.com/images/xsXjuxhMFul50gIoCFzCxPhqYzA.jpg?width=1280&height=853',
    href: 'https://www.instagram.com/roma_restaurant/',
  },
]

const VISIBLE = 3

export default function Carousel() {
  const [index, setIndex] = useState(0)
  const maxIndex = Math.max(0, posts.length - VISIBLE)

  const handlePrev = () => setIndex((i) => Math.max(i - 1, 0))
  const handleNext = () => setIndex((i) => Math.min(i + 1, maxIndex))

  return (
    <section className="border border-green-800 bg-[#f3efe9]">
      {/* HEADER */}
      <div className="flex justify-between items-center px-10 py-8 border-b border-green-800">
        <h2 className="text-4xl text-green-800 font-[Bonny-Bold]">
          JOURNAL
        </h2>
        <div className="flex items-center gap-2 font-[Switzer-Medium]">
          <button className="bg-green-800 text-white px-5 py-2.5 rounded-md hover:bg-green-900 transition-colors text-sm">
            Read all
          </button>
          <button className="bg-green-800 text-white w-10 h-10 rounded-md flex items-center justify-center hover:bg-green-900 transition-colors">
            <FiArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* SLIDER */}
      <div className="overflow-hidden py-8">
        <motion.div
          className="flex"
          animate={{ x: `calc(${-index * (100 / VISIBLE)}%)` }}
          transition={{ type: 'tween', duration: 0.5 }}
        >
          {posts.map((post) => (
            <div
              key={post.id}
              className="shrink-0 basis-1/3 border-r border-green-800 font-[Switzer-Regular]"
            >
              <CarouselCard title={post.title} image={post.image} href={post.href} />
            </div>
          ))}
        </motion.div>
      </div>

      {/* NAVIGATION */}
      <div className="flex justify-between items-center px-8 pb-8">
        <ArrowButton
          direction="left"
          onClick={handlePrev}
          disabled={index === 0}
        />
        <ArrowButton
          direction="right"
          onClick={handleNext}
          disabled={index === maxIndex}
        />
      </div>
    </section>
  )
}