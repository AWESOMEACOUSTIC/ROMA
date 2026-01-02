import { motion } from "framer-motion";

const contactColumns = [
	{
		title: "Email",
		lines: ["CONTACT@IZABYSOF.COM"]
	},
	{
		title: "Tel",
		lines: ["0039 345 678 90"]
	},
	{
		title: "Follow Us",
		lines: ["INSTAGRAM", "FACEBOOK"]
	},
	{
		title: "Address",
		lines: ["VIA DEI SANTI SEGRETI,", "24, 00186 ROMA, ITALY"]
	}
];

const navigationColumns = [
	{
		lines: ["HOME", "ABOUT", "RESTAURANT"]
	},
	{
		lines: ["VILLAS", "JOURNAL", "CONTACT"]
	},
	{
		lines: ["TERMS OF USE", "PRIVACY POLICY"],
		align: "lg:items-end lg:text-right"
	}
];

const rowVariants = {
	hidden: { opacity: 0, y: 24 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			staggerChildren: 0.12,
			delayChildren: 0.05,
			type: "spring",
			stiffness: 60,
			damping: 18
		}
	}
};

const itemVariants = {
	hidden: { opacity: 0, y: 18 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: "easeOut" }
	}
};

const hatIconVariants = {
	hidden: { scale: 0.85, opacity: 0 },
	visible: {
		scale: 1,
		opacity: 1,
		transition: { duration: 0.5, ease: "easeOut", delay: 0.2 }
	}
};

const HatIcon = () => (
	<svg
		aria-hidden="true"
		width="96"
		height="64"
		viewBox="0 0 96 64"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		className="h-16 w-24 text-[#1f3b2a]"
	>
		<path
			fill="currentColor"
			d="M20.2 40.1c-.6 6.3 1 11.3 5 14.8 8.4 7.6 37 8.5 46.4.5 4.3-3.7 6-8.9 5.6-15.4 4.2-1.5 7.2-5.7 7.2-11.2 0-7-5.1-12.7-12.8-14.8-1.5-7.8-9.9-12.7-19.6-13.2-10.2-.4-19.4 4.1-22 12.5-8.8 1.4-15.1 7-15.1 15.5 0 5.6 3.2 10 5.3 11.3zm7.7 11.8c-3.3-3.1-4-7.5-3.5-12l48.1.1c.4 4.9-.8 9.1-4 12-7 6.2-31.7 5.9-40.6-.1zm-4-14.8c-.5-.3-5.5-2.8-5.5-9.5 0-6.2 5.4-10.2 12.6-11-1 6.8 2.6 11.7 7 14.4-6 .3-10.9 2.4-14.1 6.1zM53.3 31c-7.3-1.2-11.7-6.1-10.1-13.8 1.3-6.7 9.1-10.1 16.5-9.8 7 .3 13.7 3.8 14.7 9.6.6 3.8 3.9 8.7 8.6 9.6 4.3 1.1 7.1 4.9 7.1 9.2 0 5.5-3.3 8.5-5 9.1l-31.8-.1c.4-6.8-1.2-11-6-14z"
		/>
	</svg>
);

const FooterContents = () => (
	<motion.section
		initial="hidden"
		whileInView="visible"
		viewport={{ once: true, amount: 0.25 }}
		className="flex flex-col gap-16 text-[#1f3b2a]"
	>
		<div className="border-t border-b border-[#1f3b2a]/60">
			<motion.div
				variants={rowVariants}
				className="grid grid-cols-1 gap-12 px-6 py-12 text-left md:grid-cols-2 md:px-10 lg:grid-cols-4 lg:px-16"
			>
				{contactColumns.map((column) => (
					<motion.div key={column.title} variants={itemVariants} className="flex flex-col gap-6">
						<span className="text-xs uppercase tracking-[0.5em] text-[#1f3b2a]/80">
							{column.title}
						</span>
						<div className="flex flex-col gap-2">
							{column.lines.map((line) => (
								<p key={line} className="text-lg uppercase tracking-[0.25em] text-[#1f3b2a]">
									{line}
								</p>
							))}
						</div>
					</motion.div>
				))}
			</motion.div>
		</div>

		<div className="border-b border-[#1f3b2a]/60">
			<motion.div
				variants={rowVariants}
				className="grid grid-cols-1 gap-12 px-6 py-12 text-left md:grid-cols-2 md:px-10 lg:grid-cols-4 lg:px-16"
			>
				<motion.div variants={itemVariants} className="flex flex-col gap-3">
					{navigationColumns[0].lines.map((line) => (
						<p key={line} className="text-base uppercase tracking-[0.35em] text-[#1f3b2a]">
							{line}
						</p>
					))}
				</motion.div>

				<motion.div
					variants={hatIconVariants}
					className="flex items-center justify-center"
				>
					<HatIcon />
				</motion.div>

				<motion.div variants={itemVariants} className="flex flex-col gap-3">
					{navigationColumns[1].lines.map((line) => (
						<p key={line} className="text-base uppercase tracking-[0.35em] text-[#1f3b2a]">
							{line}
						</p>
					))}
				</motion.div>

				<motion.div
					variants={itemVariants}
					className={`flex flex-col gap-3 ${navigationColumns[2].align ?? ""}`}
				>
					{navigationColumns[2].lines.map((line) => (
						<p key={line} className="text-base uppercase tracking-[0.35em] text-[#1f3b2a]">
							{line}
						</p>
					))}
				</motion.div>
			</motion.div>
		</div>
	</motion.section>
);

export default FooterContents;
