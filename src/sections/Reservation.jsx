import React from 'react'
import { motion } from 'framer-motion'
import { FiArrowRight } from 'react-icons/fi'
import ReservationCard from '../components/ReservationCard'

export default function Reservation() {
    const arrowVariants = {
        initial: { x: 0 },
        hover: { x: 6, transition: { type: 'spring', stiffness: 300, damping: 15 } }
    }

    const cards = [
        {
            title: 'DRINKS',
            subtitle: 'Sip & savor',
            image: 'https://framerusercontent.com/images/RsFlWUURYmOGf0LDMMb2Xnass.jpg'
        },
        {
            title: 'MEALS',
            subtitle: 'From our kitchen',
            image: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=600'
        },
        {
            title: 'DESSERTS',
            subtitle: 'Sweet endings',
            image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=600'
        }
    ]

    return (
        <section className="w-full bg-[#8a1c25] py-20 md:py-41 px-6 md:px-12 select-none overflow-hidden relative">
            {/* Background grain or texture overlay can go here if needed, keeping it clean for premium performance */}

            <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="font-['Bonny-Bold'] text-[#F9F7EF] text-[2rem] md:text-[3.2rem] leading-tight max-w-4xl tracking-normal text-center"
                >
                    A culinary journey through Italy's finest traditions,
                    <br className="hidden md:inline" />
                    reimagined with precision, elegance, and soul.
                </motion.h2>

                {/* Reservation Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                    className="mt-10"
                >
                    <motion.a
                        href="#make-reservation"
                        initial="initial"
                        whileHover="hover"
                        className="inline-flex items-center gap-3 px-7 py-3.5 bg-[#F9F7EF] text-[#8a1c25] hover:bg-white rounded-full font-['Switzer-Semibold'] text-[0.9rem] tracking-wide shadow-md transition-colors duration-300 cursor-pointer"
                    >
                        <span>Make a reservation</span>
                        <motion.div variants={arrowVariants}>
                            <FiArrowRight className="w-4 h-4" />
                        </motion.div>
                    </motion.a>
                </motion.div>

                {/* 3-Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16 w-full mt-20 md:mt-24">
                    {cards.map((card, index) => (
                        <motion.div
                            key={card.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.15 * (index + 1), ease: 'easeOut' }}
                        >
                            <ReservationCard
                                image={card.image}
                                title={card.title}
                                subtitle={card.subtitle}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
