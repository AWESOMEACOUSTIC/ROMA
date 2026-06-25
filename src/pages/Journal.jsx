import React from 'react'
import { motion } from 'framer-motion'

export default function Journal() {
  const posts = [
    {
      id: 1,
      category: "Recipes & Desserts",
      title: "Fruits and Nuts in Italian Desserts",
      date: "June 24, 2026",
      image: "https://framerusercontent.com/images/mnZYmT1w79jladihs1C9OD89618.jpg?width=1280&height=854",
      link: "https://www.instagram.com/roma_restaurant/"
    },
    {
      id: 2,
      category: "Culinary Heritage",
      title: "The Place of Lemon in Italian Cuisine",
      date: "May 18, 2026",
      image: "https://framerusercontent.com/images/YjGSPzcnNLeZTdpKOZcVOLlACU.jpg?width=1280&height=1919",
      link: "https://www.instagram.com/roma_restaurant/"
    },
    {
      id: 3,
      category: "Kitchen Secrets",
      title: "Knife Work & Hand Techniques",
      date: "April 30, 2026",
      image: "https://framerusercontent.com/images/oyS5ubzSq7PwITym3NSqeK8AjpM.jpg?width=1280",
      link: "https://www.instagram.com/roma_restaurant/"
    },
    {
      id: 4,
      category: "Culinary Heritage",
      title: "Crafting Umami: Slow-simmered Stocks",
      date: "March 15, 2026",
      image: "https://framerusercontent.com/images/xsXjuxhMFul50gIoCFzCxPhqYzA.jpg?width=1280&height=853",
      link: "https://www.instagram.com/roma_restaurant/"
    },
    {
      id: 5,
      category: "Estate News",
      title: "The Olive Harvest of Autumn 2025",
      date: "November 10, 2025",
      image: "https://framerusercontent.com/images/na5jfd4ADOii27QRbWJ4Tp6xSdo.jpg",
      link: "https://www.instagram.com/roma_restaurant/"
    },
    {
      id: 6,
      category: "Vineyard Notes",
      title: "Ancient Grapes of the Roma Hills",
      date: "October 02, 2025",
      image: "https://framerusercontent.com/images/DVR9GwhSBDd4i12phYJP7sR4nk.jpg",
      link: "https://www.instagram.com/roma_restaurant/"
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
              Stories from the Estate
            </p>
            <h1 className="mt-4 font-['Bonny-Bold'] text-[3.5rem] md:text-[5rem] leading-none text-[#1f3b2a]">
              THE JOURNAL
            </h1>
          </div>
          <p className="mt-6 md:mt-0 text-[1.1rem] leading-relaxed text-[#7a4338] max-w-sm md:text-right font-['Switzer-Medium']">
            Insights, recipes, and seasonal updates from our kitchen and countryside gardens.
          </p>
        </motion.div>
      </section>

      {/* Grid List */}
      <section className="mt-16 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post) => (
            <motion.a 
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: post.id * 0.05 }}
              className="group block"
            >
              <div className="overflow-hidden border border-[#d6c2a8] shadow-md rounded-lg mb-4">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-[250px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <span className="font-['Switzer-Semibold'] text-xs text-[#a55d43] uppercase tracking-wider block">
                {post.category} &bull; {post.date}
              </span>
              <h2 className="font-['Bonny-Bold'] text-2xl text-[#1f3b2a] mt-2 group-hover:text-[#8a1c25] transition-colors duration-300">
                {post.title}
              </h2>
            </motion.a>
          ))}
        </div>
      </section>
    </div>
  )
}
