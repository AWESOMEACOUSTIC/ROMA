import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'

const textVariants = {
  initial: { x: 0 },
  hover: {
    x: -8,
    transition: { type: 'spring', stiffness: 300, damping: 20 },
  },
}

const arrowVariants = {
  initial: { x: -20, opacity: 0 },
  hover: {
    x: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 300, damping: 20 },
  },
}

export default function Button() {
  const reduceMotion = useReducedMotion()

  return (
    <motion.a
      href="/about"
      initial="initial"
      whileHover="hover"
      className="
        inline-flex
        items-center
        px-6
        py-3
        bg-[#264E33]
        text-[#F9F7EF]
        rounded
        overflow-hidden
        select-none
        cursor-pointer
      "
    >
      <motion.span
        className="whitespace-nowrap font-medium"
        variants={reduceMotion ? {} : textVariants}
      >
        More about us
      </motion.span>

      <motion.svg
        className="w-5 h-5 ml-2 shrink-0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 182 136"
        fill="white"
        variants={reduceMotion ? {} : arrowVariants}
      >
        <path d="M1143 1349 l-23 -8 21 -58 c90 -246 225 -437 379 -537 l55 -36
                 -788 0 -787 0 0 -30 0 -30 786 0 786 0 -59 -39 c-150 -101 -283 -292
                 -372 -534 l-21 -58 23 -8 c16 -7 24 -5 29 8 4 9 27 66 52 126 110 265
                 277 440 471 491 28 8 67 14 88 14 34 0 37 2 37 30 0 28 -3 30 -37 30
                 -112 0 -239 64 -348 175 -91 92 -156 196 -216 342 -22 54 -43 105
                 -47 114 -5 13 -13 15 -29 8z" />
      </motion.svg>
    </motion.a>
  )
}