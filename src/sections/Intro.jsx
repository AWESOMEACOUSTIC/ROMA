const Intro = () => {
	return (
		<section className="w-full bg-[#f4ede5] py-24 px-6 md:px-12">
			<div className="mx-auto max-w-2xl text-center">
				<p className="font-['Switzer-Semibold'] uppercase tracking-[0.35em] text-[0.75rem] text-[#a55d43]">
					Warmth, always
				</p>
				<h2 className="mt-6 font-['Bonny-Bold'] text-[2.9rem] leading-tight text-[#8a1c25]">
					A PLACE TO FEEL AT HOME
				</h2>
				<p className="mt-6 font-['Switzer-Regular'] text-[1.05rem] leading-[1.9] text-[#7a4338]">
					Nestled in the heart of the countryside, Roma is also a place to rest. Our charming guest rooms offer comfort, quiet, and a taste of Italian hospitality—just steps away from your table.
				</p>
			</div>
			<div className="mx-auto mt-16 flex w-full justify-center">
				<div className="w-full max-w-[680px] overflow-hidden border border-[#d6c2a8] shadow-[0_20px_40px_rgba(101,73,55,0.18)]">
					<img
						src="https://framerusercontent.com/images/zlWR8yMsoErT5LwZ49DZbIgt0.jpeg?width=2400&height=1808"
						alt="Guests enjoying a quiet drink at Roma"
						className="h-full w-full object-cover"
					/>
				</div>
			</div>
		</section>
	);
};

export default Intro;
