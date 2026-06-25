import React from 'react'
import { motion } from 'framer-motion'

export default function Rooted() {
    return (
        <section className="w-full bg-[#f3efe9] py-24 px-6 md:px-12 md:py-12 mb-12 text-center overflow-hidden">
            {/* Top Heading Group */}
            <div className="mx-auto max-w-3xl select-none mb-12 md:mb-16">
                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="font-['Switzer-Semibold'] text-[0.8rem] text-[#8a1c25] uppercase"
                >
                    Rooted in nature
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                    className="mt-4 font-['Bonny-Bold'] text-[3rem] md:text-[3.2rem] leading-none text-[#8a1c25]"
                >
                    A PLACE TO SLOW DOWN
                </motion.h2>
            </div>

            {/* Centered Main Image */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mx-auto w-full max-w-[330px] overflow-hidden border border-[#d6c2a8] shadow-[0_20px_40px_rgba(101,73,55,0.12)] rounded-sm aspect-[3/4]"
            >
                <motion.img
                    src="https://framerusercontent.com/images/EzyGg9mehvKz44QhmqIjpyhiMEQ.jpg"
                    alt="Ancient olive tree on the coast of Lake Garda"
                    className="w-full h-full object-cover origin-center cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
                />
            </motion.div>

            {/* Bottom Description */}
            <div className="mx-auto max-w-[44vw] mt-12 md:mt-16">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.35 }}
                    className="font-['Switzer-Medium'] text-[1.05rem] md:text-[1.1rem] leading-[1.25em] text-[#8a1c25]"
                >
                    Surrounded by olive trees and open skies, Roma invites you to pause. Every corner is designed to bring calm whether you're dining, resting, or simply breathing.
                </motion.p>
            </div>
        </section>
    )
}
