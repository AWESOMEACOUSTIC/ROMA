import React from 'react'
import { motion } from 'framer-motion'
import SkewedCard from '../components/SkewedCard'

export default function FamilyStory() {
    return (
        <section className="w-full bg-[#f3efe9] py-24 px-6 md:px-12 md:py-28 overflow-hidden text-center">
            {/* Text Content */}
            <div className="mx-auto max-w-3xl text-center select-none">
                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="font-[Switzer-Medium] text-[0.8rem] text-[#264E33] uppercase"
                >
                    Rooted legacy
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                    className="mt-4 font-[Bonny-Bold] text-[3rem] md:text-[4.2rem] leading-none text-[#1f3b2a]"
                >
                    A FAMILIY STORY
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="mt-6 font-['Switzer-Regular'] text-[1.1rem] leading-[1.8] text-[#7a4338] max-w-2xl mx-auto"
                >
                    Roma began as a family home, passed down through generations who shared a love for hospitality. That legacy shapes how we welcome and cook today.
                </motion.p>
            </div>

            {/* Skewed Images Grid */}
            <div className="mx-auto mt-16 md:mt-24 max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16 items-start">
                    {/* Left Card: Tilted upwards from left to right */}
                    <div className="md:mt-16">
                        <SkewedCard
                            src="https://framerusercontent.com/images/4U6igalmD9ubjR74kQER9zb2lE.jpeg"
                            alt="Vintage family outdoor photo"
                            skewY={-12}
                            aspectRatio="aspect-[3/4]"
                        />
                    </div>

                    {/* Center Card: Perfectly square and straight */}
                    <div className="z-10">
                        <SkewedCard
                            src="https://framerusercontent.com/images/QkOrPsj9wbFgJtrGbVyF5APOIHQ.jpeg"
                            alt="Smiling professional chef"
                            skewY={0}
                            aspectRatio="aspect-square"
                        />
                    </div>

                    {/* Right Card: Tilted downwards from left to right */}
                    <div className="md:mt-16">
                        <SkewedCard
                            src="https://framerusercontent.com/images/vNcRGdTcycpT3qqHJczSEXlzc.png"
                            alt="Hands eating pasta with fork"
                            skewY={12}
                            aspectRatio="aspect-[3/4]"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
