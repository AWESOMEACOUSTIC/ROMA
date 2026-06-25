import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FaInstagram, FaFacebook, FaPinterest } from 'react-icons/fa'

const LINKS = ['Hotel', 'Restaurant', 'Roma']

const MENU_ITEMS = [
    { num: '01', label: 'About' },
    { num: '02', label: 'Restaurant' },
    { num: '03', label: 'Villas' },
    { num: '04', label: 'Journal' },
]

const FOOTER_LINKS = ['Contact', 'Terms of Use', 'Privacy Policy']


export default function Navigation() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <>
            {/* Chef-hat logo — top left */}
            <motion.a
                href="#"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                whileHover={{ scale: 1.08, rotate: -3 }}
                aria-label="Home"
                className="absolute top-4 left-6 z-50"
            >
                <img
                    src="https://framerusercontent.com/images/BvDKz2LWasVftH4S0KIYY89Eok.png"
                    alt="logo"
                    className="w-16 h-16 object-contain"
                />
            </motion.a>

            {/* Top-right menu */}
            <motion.nav
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute top-4 right-6 z-50 flex w-[32vw] h-31"
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
                                <rect width="1200" height="300" fill="white" />
                                <circle cx="0" cy="0" r="38" fill="black" />
                                <circle cx="0" cy="300" r="38" fill="black" />
                                <circle cx="1200" cy="0" r="38" fill="black" />
                                <circle cx="1200" cy="300" r="38" fill="black" />
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
                                        (i < LINKS.length - 1
                                            ? 'border-r border-white/20'
                                            : '')
                                    }
                                    whileHover={{ scale: 1.05 }}
                                    transition={{
                                        type: 'spring',
                                        stiffness: 300,
                                        damping: 20,
                                    }}
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
                                <circle cx="0" cy="0" r="38" fill="black" />
                                <circle cx="0" cy="300" r="38" fill="black" />
                                <circle cx="400" cy="0" r="38" fill="black" />
                                <circle cx="400" cy="300" r="38" fill="black" />
                            </mask>
                        </defs>
                        <rect
                            width="400"
                            height="300"
                            fill="#264E33"
                            mask="url(#nav-right-mask)"
                        />
                    </svg>

                    {/* hamburger button */}
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
                                                y:
                                                    i === 1
                                                        ? 0
                                                        : i === 0
                                                            ? 6
                                                            : -6,
                                                rotate:
                                                    i === 1
                                                        ? 0
                                                        : i === 0
                                                            ? 45
                                                            : -45,
                                                opacity: i === 1 ? 0 : 1,
                                            }
                                            : { y: 0, rotate: 0, opacity: 1 }
                                    }
                                    transition={{ duration: 0.3 }}
                                />
                            ))}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Slide-down menu panel */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        key="menu-panel"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                        className="absolute top-[8.75rem] right-6 z-40 w-[32vw] overflow-hidden bg-[#264E33] rounded-b-3xl"
                    >
                        {/* Notches overlay to align with the navigation bar's bottom notches */}
                        <svg
                            className="absolute top-0 left-0 w-full h-31 pointer-events-none z-10"
                            viewBox="0 0 1600 300"
                            preserveAspectRatio="none"
                        >
                            <circle cx="0" cy="0" r="38" fill="#f3efe9" />
                            <circle cx="1200" cy="0" r="38" fill="#f3efe9" />
                            <circle cx="1600" cy="0" r="38" fill="#f3efe9" />
                        </svg>

                        <div className="flex flex-col px-8 py-8">
                            {/* Nav heads */}
                            <ul className="flex flex-col gap-2">
                                {MENU_ITEMS.map((item, i) => (
                                    <motion.li
                                        key={item.label}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                            delay: 0.1 + i * 0.08,
                                            duration: 0.3,
                                        }}
                                    >
                                        <a
                                            href="#"
                                            className="group flex items-baseline gap-3 py-1 text-white transition-all duration-300 hover:pl-6"
                                        >
                                            <span className="text-xs text-white/50">
                                                {item.num}
                                            </span>
                                            <span className="text-4xl font-[Bonny-Bold]">
                                                {item.label}
                                            </span>
                                        </a>
                                    </motion.li>
                                ))}
                            </ul>

                            {/* Footer links */}
                            <div className="mt-10 flex flex-wrap gap-8 border-t border-white/15 pt-6">
                                {FOOTER_LINKS.map((txt) => (
                                    <a
                                        key={txt}
                                        href="#"
                                        className="text-white/90 transition-all duration-300 hover:pl-2 hover:text-white"
                                    >
                                        {txt}
                                    </a>
                                ))}
                            </div>

                            {/* Social icons */}
                            <div className="mt-6 flex gap-4">
                                {['instagram', 'facebook', 'pinterest'].map(
                                    (name) => (
                                        <a
                                            key={name}
                                            href="#"
                                            aria-label={name}
                                            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10"
                                        >
                                            <SocialIcon name={name} />
                                        </a>
                                    )
                                )}
                            </div>

                            {/* Copyright */}
                            <p className="mt-8 text-2xl font-[Switzer-Regular] text-white/90">
                                @2025 Roma Restaurant
                            </p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

function SocialIcon({ name }) {
    const size = 18;
    switch (name) {
        case 'instagram':
            return <FaInstagram size={size} />
        case 'facebook':
            return <FaFacebook size={size} />
        case 'pinterest':
            return <FaPinterest size={size} />
        default:
            return null
    }
}