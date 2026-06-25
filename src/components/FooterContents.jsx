import { motion } from "framer-motion";
import { Link } from "react-router";

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: { staggerChildren: 0.1, delayChildren: 0.05 },
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 16 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const HatImage = () => (
	<img
		src="https://framerusercontent.com/images/rSfyYmWvTQvD3FYMxHIkiVMy6w.png?width=505&height=347"
		alt="Hat"
		className="w-20 h-auto"
	/>
);

/* ─── reusable label ─── */
const Label = ({ children }) => (
	<p className="font-[Switzer-Regular] text-[11px] uppercase text-[#1f3b2a]/60 mb-5">
		{children}
	</p>
);

/* ─── reusable link/text ─── */
const FooterText = ({ children }) => (
	<p className="font-[Switzer-Medium] text-[12px] uppercase text-[#1f3b2a] leading-relaxed">
		{children}
	</p>
);

const FooterLink = ({ to, children }) => (
	<Link to={to} className="font-[Switzer-Medium] text-[12px] uppercase text-[#1f3b2a] leading-relaxed hover:text-[#8a1c25] transition-colors duration-300">
		{children}
	</Link>
);


const FooterContents = () => (
	<motion.div
		initial="hidden"
		whileInView="visible"
		viewport={{ once: true, amount: 0.15 }}
		variants={containerVariants}
		className="flex flex-col"
	>
		{/* ── top hairline ── */}
		<div className="border-t border-[#1f3b2a]/30" />

		{/* ── CONTACT ROW ── */}
		<motion.div
			variants={itemVariants}
			className="grid grid-cols-4 border-b border-[#1f3b2a]/30 px-8 py-10"
		>
			{/* Email */}
			<div>
				<Label>Email</Label>
				<FooterText>CONTACT@IZABYSOF.COM</FooterText>
			</div>

			{/* Tel */}
			<div>
				<Label>Tel</Label>
				<FooterText>0039 345 678 90</FooterText>
			</div>

			{/* Follow Us */}
			<div>
				<Label>Follow Us</Label>
				<FooterText>INSTAGRAM</FooterText>
				<FooterText>FACEBOOK</FooterText>
			</div>

			{/* Address */}
			<div>
				<Label>Address</Label>
				<FooterText>VIA DEI SANTI SEGRETI,</FooterText>
				<FooterText>24, 00186 Roma, Italy</FooterText>
			</div>
		</motion.div>

		{/* ── NAV ROW ── */}
		<motion.div
			variants={itemVariants}
			className="grid grid-cols-4 items-center border-b border-[#1f3b2a]/30 px-8 py-10"
		>
			{/* Left nav */}
			<div className="flex flex-col gap-2">
				<FooterLink to="/">HOME</FooterLink>
				<FooterLink to="/about">ABOUT</FooterLink>
				<FooterLink to="/restaurant">RESTAURANT</FooterLink>
			</div>

			{/* Hat — aligned below Tel */}
			<div className="flex items-center justify-start">
				<HatImage />
			</div>

			{/* Right nav */}
			<div className="flex flex-col gap-2">
				<FooterLink to="/villas">VILLAS</FooterLink>
				<FooterLink to="/journal">JOURNAL</FooterLink>
				<FooterText>CONTACT</FooterText>
			</div>

			{/* Legal — right-aligned */}
			<div className="flex flex-col gap-2 items-end text-right">
				<FooterText>TERMS OF USE</FooterText>
				<FooterText>PRIVACY POLICY</FooterText>
			</div>
		</motion.div>

		{/* ── ROMA. ── */}
		<motion.div
			variants={itemVariants}
			className="flex w-full pt-4 pb-0 select-none"
		>
			<div className="w-1/2 text-right pr-4 md:pr-8">
				<span
					className="font-[Bonny-Bold] text-[#1f3b2a] leading-none"
					style={{ fontSize: "clamp(120px, 26vw, 400px)" }}
				>
					RO.
				</span>
			</div>
			<div className="w-1/2 text-left pl-4 md:pl-8">
				<span
					className="font-[Bonny-Bold] text-[#1f3b2a] leading-none"
					style={{ fontSize: "clamp(120px, 26vw, 400px)" }}
				>
					MA.
				</span>
			</div>
		</motion.div>
	</motion.div>
);

export default FooterContents;