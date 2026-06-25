import React from "react";
import ImageZoomCard from "../components/ZoomCard";

function Stories() {
  // Positions/sizes mapped from the reference design.
  // left = % of container width, top = px from top of gallery.
  const cards = [
    {
      src: "https://framerusercontent.com/images/Ao6XlEVJkfWlugnYkzzoHWB4QUE.jpeg",
      alt: "Brioche Bun",
      top: 248,
      left: 10.5,
      width: 486,
      height: 359,
    },
    {
      src: "https://framerusercontent.com/images/RsFlWUURYmOGf0LDMMb2Xnass.jpg",
      alt: "Cocktail in a glass",
      top: 10,
      left: 87,
      width: 426,
      height: 479,
    },
    {
      src: "https://framerusercontent.com/images/DVR9GwhSBDd4i12phYJP7sR4nk.jpg",
      alt: "Hands prepping vegetables",
      top: 706,
      left: 66.5,
      width: 389,
      height: 288,
    },
    {
      src: "https://framerusercontent.com/images/7gGEROASRKx7ydb5orCL3sj1G0.png",
      alt: "Halved tomato",
      top: 1099,
      left: 2.5,
      width: 467,
      height: 486,
    },
    {
      src: "https://framerusercontent.com/images/na5jfd4ADOii27QRbWJ4Tp6xSdo.jpg",
      alt: "Bunch of grapes",
      top: 1277,
      left: 85,
      width: 467,
      height: 458,
    },
  ];

  return (
    <div className="min-h-screen bg-[#f3efe9] px-8 py-12 overflow-x-hidden">
      <p className="text-center text-xs tracking-wide text-green-800">
        @ROMA_RESTAURANT
      </p>
      <h1 className="mb-8 text-center text-2xl font-bold tracking-[0.2em] text-green-900">
        ROMA STORIES
      </h1>

      {/* Fixed-aspect canvas so absolute placement matches the design */}
      <div className="relative mx-auto h-[1750px] w-full max-w-5xl">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="absolute"
            style={{
              top: `${card.top}px`,
              left: `${card.left}%`,
              width: `${card.width}px`,
              transform: "translateX(-50%)",
            }}
          >
            <ImageZoomCard
              src={card.src}
              alt={card.alt}
              caption={card.alt}
              href="https://www.instagram.com/roma_restaurant/"
              className="w-full font-[Switzer-Medium]"
              imageStyle={{ height: `${card.height}px`, width: "100%" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stories;