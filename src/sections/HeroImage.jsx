const HeroImage = () => {
	return (
		<section className="relative w-full bg-[#f3efe9] flex flex-col">
			{/* ROMA. Heading */}
			<div className="flex w-full pt-60 pb-0 select-none">
				<div className="w-1/2 text-right pr-4 md:pr-68">
					<span
						className="font-[Bonny-Bold] text-[#1f3b2a] leading-none"
						style={{ fontSize: "clamp(120px, 26vw, 400px)" }}
					>
						RO.
					</span>
				</div>
				<div className="w-1/2 text-left pl-4 md:pl-48">
					<span
						className="font-[Bonny-Bold] text-[#1f3b2a] leading-none"
						style={{ fontSize: "clamp(120px, 26vw, 400px)" }}
					>
						MA.
					</span>
				</div>
			</div>

			{/* Image */}
			<div className="w-full h-[110vh] overflow-hidden">
				<img
					src="https://framerusercontent.com/images/w2aYxTkndYpx5R4uTkCI6Y2cUXM.jpg?width=3807&height=4559"
					alt="Roma fashion editorial"
					className="h-full w-full object-cover"
				/>
			</div>
		</section>
	);
};

export default HeroImage;

