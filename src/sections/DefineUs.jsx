import FeatureGrid from "../components/FeatureGrid.jsx";

const FEATURES = [
	{
		id: "01",
		imageUrl:
			"https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=400&q=80",
		alt: "Apricots on a branch",
		description:
			"We embrace a slower, more intentional way of cooking—reductions, fermentations, and preparations that take time to reveal their depth."
	},
	{
		id: "02",
		imageUrl:
			"https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=400&q=80",
		alt: "Hand serving wine",
		description:
			"Every space is designed with the same care as our dishes—thoughtfully, quietly luxurious, and rooted in the Italian art of hospitality."
	},
	{
		id: "03",
		imageUrl:
			"https://images.unsplash.com/photo-1514516345957-556ca7d90a2a?auto=format&fit=crop&w=400&q=80",
		alt: "Dessert on green plate",
		description:
			"Our food tells a story of place. You'll find inspiration from both our region and our roots, blending traditional Italian craft with a modern touch."
	},
	{
		id: "04",
		imageUrl:
			"https://images.unsplash.com/photo-1549187774-b4e9b0445b41?auto=format&fit=crop&w=400&q=80",
		alt: "Striped towel hanging",
		description:
			"We welcome guests not just to dine, but to stay. Our rooms and villas offer a peaceful retreat steps away from the kitchen."
	},
	{
		id: "05",
		imageUrl:
			"https://images.unsplash.com/photo-1586952518485-11b180e92764?auto=format&fit=crop&w=400&q=80",
		alt: "Nest of pasta",
		description:
			"We welcome guests not just to dine, but to stay. Our rooms and villas offer a peaceful retreat steps away from the kitchen."
	},
	{
		id: "06",
		cta: true,
		ctaText:
			"Whether it's a long weekend or a special occasion, our home is yours to discover."
	}
];

const DefineUs = () => {
	return (
		<section className="bg-[#f3efe9] px-6 py-20 md:px-12 lg:px-20">
			<div className="mx-auto flex max-w-6xl flex-col items-center gap-16">
				<header className="text-center">
					<h2 className="text-4xl font-light uppercase tracking-[0.3em] text-[#1f3b2a] md:text-5xl">
						What Defines Us
					</h2>
				</header>

				<FeatureGrid items={FEATURES} />
			</div>
		</section>
	);
};

export default DefineUs;
