const FeatureGrid = ({ items }) => {
	return (
		<div className="border border-[#1f3b2a] bg-[rgba(237,234,226,0.45)]">
			<div className="grid grid-cols-1 md:grid-cols-3">
				{items.map((item, index) => {
					const isLastColumn = (index + 1) % 3 === 0;
					const totalRows = Math.ceil(items.length / 3);
					const currentRow = Math.floor(index / 3);
					const isLastRow = currentRow === totalRows - 1;
					const cellClasses = [
						"flex flex-col items-center justify-start gap-6 px-10 py-16 text-center",
						"border-b border-[#1f3b2a]/50"
					];

					if (!isLastColumn) {
						cellClasses.push("md:border-r md:border-[#1f3b2a]/50");
					}

					if (isLastRow) {
						cellClasses.push("md:border-b-0");
					}

					return (
						<div key={item.id} className={cellClasses.join(" ")}>
							<span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#1f3b2a]/60 text-xs uppercase tracking-[0.35em] text-[#1f3b2a]">
								{item.id}
							</span>

							{item.imageUrl ? (
								<img
									src={item.imageUrl}
									alt={item.alt ?? "Feature visual"}
									className="h-[140px] w-[140px] object-cover"
									loading="lazy"
								/>
							) : null}

							<div className="flex flex-col items-center gap-6">
								{item.description ? (
									<p className="max-w-[220px] text-sm leading-relaxed text-[#1f3b2a]">
										{item.description}
									</p>
								) : null}

								{item.cta ? (
									<div className="flex flex-col items-center gap-5">
										{item.ctaText ? (
											<p className="max-w-sm text-sm leading-relaxed text-[#1f3b2a]">
												{item.ctaText}
											</p>
										) : null}
										<div className="flex items-center gap-3">
											<button className="rounded-md bg-[#1f3b2a] px-6 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#f3efe9] transition-colors hover:bg-[#264d35]">
												More about us
											</button>
											<button className="flex h-10 w-10 items-center justify-center rounded-md border border-[#1f3b2a] text-[#1f3b2a] transition-colors hover:bg-[#1f3b2a] hover:text-[#f3efe9]">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 24 24"
													fill="none"
													stroke="currentColor"
													strokeWidth="1.5"
													className="h-5 w-5"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														d="M5 12h14m0 0-6-6m6 6-6 6"
													/>
												</svg>
											</button>
										</div>
									</div>
								) : null}
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default FeatureGrid;
