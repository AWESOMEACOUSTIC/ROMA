import React from 'react'
import { motion } from 'framer-motion'
import Menu from '../sections/Menu'
import Reservation from '../sections/Reservation'
import BannerImage from '../sections/BannerImage'

export default function Resturant() {
  return (
    <div className="w-full bg-[#f3efe9] text-[#1f3b2a] font-['Switzer-Regular'] pb-0">
      {/* Reservation Section */}
      <Reservation />
      <BannerImage />
      <Menu />
    </div>
  )
}


