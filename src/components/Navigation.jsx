import { useState } from 'react'
import { motion } from 'framer-motion'

const LINKS = ['Hotel', 'Restaurant', 'Roma']

export default function Navigation() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <motion.nav
            // fade-in + slide down on mount
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="relative flex w-[24vw] h-31"
        >
            {/*  Left “notched” box */}
            <div className="relative flex-1">
                <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 1200 300"
                    preserveAspectRatio="none"
                >
                    <defs>
                        <mask id="nav-left-mask">
                            {/* white = keep, black = cut out */}
                            <rect width="1200" height="300" fill="white" />
                            {/* top-left quarter circle */}
                            <circle cx="0" cy="0" r="38" fill="black" />
                            {/* bottom-left quarter circle */}
                            <circle cx="0" cy="300" r="38" fill="black" />
                            {/* top-right quarter circle */}
                            <circle cx="1200" cy="0" r="38" fill="black" />
                            {/* bottom-right quarter circle */}
                            <circle cx="1200" cy="300" r="38" fill="black" />
                            {/* right-edge half circle (seam notch) */}
                            {/* <circle cx="1200" cy="150" r="50" fill="black" /> */}
                        </mask>
                    </defs>
                    <rect
                        width="1200"
                        height="300"
                        fill="#264E33"
                        mask="url(#nav-left-mask)"
                    />
                </svg>

                <div className="relative flex flex-col h-full">
                    <div className="flex-1" />
                    <div className="flex border-t border-white/20">
                        {LINKS.map((txt, i) => (
                            <motion.a
                                key={txt}
                                href="#"
                                className={
                                    'flex-1 text-center text-white py-4 text-sm font-medium ' +
                                    (i < LINKS.length - 1 ? 'border-r border-white/20' : '')
                                }
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                            >
                                {txt}
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>

            {/*  Vertical dividing line */}
            <motion.div
                initial={{ height: 0 }}
                animate={{ height: '100%' }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="w-px bg-white/20"
            />

            {/*  Right “notched” box */}
            <div className="relative w-[8vw] shrink-0">
                <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 400 300"
                    preserveAspectRatio="none"
                >
                    <defs>
                        <mask id="nav-right-mask">
                            <rect width="400" height="300" fill="white" />
                            {/* top-left quarter circle */}
                            <circle cx="0" cy="0" r="38" fill="black" />
                            {/* bottom-left quarter circle */}
                            <circle cx="0" cy="300" r="38" fill="black" />
                            {/* top-right quarter circle */}
                            <circle cx="400" cy="0" r="38" fill="black" />
                            {/* bottom-right quarter circle */}
                            <circle cx="400" cy="300" r="38" fill="black" />
                            {/* left-edge half circle (seam notch) */}
                            {/* <circle cx="0"   cy="150" r="26" fill="black" /> */}
                        </mask>
                    </defs>
                    <rect
                        width="400"
                        height="300"
                        fill="#264E33"
                        mask="url(#nav-right-mask)"
                    />
                </svg>

                {/*hamburger button*/}
                <div className="relative flex items-center justify-center h-full">
                    <button
                        onClick={() => setMenuOpen((o) => !o)}
                        aria-label="Toggle menu"
                        className="flex flex-col justify-center space-y-1.5 p-2"
                    >
                        {[0, 1, 2].map((i) => (
                            <motion.span
                                key={i}
                                className="block w-8 h-0.5 bg-white rounded-full"
                                animate={
                                    menuOpen
                                        ? {
                                            y: i === 1 ? 0 : i === 0 ? 6 : -6,
                                            rotate: i === 1 ? 0 : i === 0 ? 45 : -45
                                        }
                                        : { y: 0, rotate: 0 }
                                }
                                transition={{ duration: 0.3 }}
                            />
                        ))}
                    </button>
                </div>
            </div>
        </motion.nav>
    )
}