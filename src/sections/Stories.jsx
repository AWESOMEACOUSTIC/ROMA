import React from "react";
import ImageZoomCard from "../components/ZoomCard";

function Stories() {
  // Positions/sizes mapped from the reference design.
  // left = % of container width, top = px from top of gallery.
  const cards = [
    {
      src: "https://framerusercontent.com/images/Ao6XlEVJkfWlugnYkzzoHWB4QUE.jpeg",
      alt: "Brioche bun on a plate",
      top: 70,
      left: 21.5,
      width: 340,
      height: 235,
    },
    {
      src: "https://framerusercontent.com/images/RsFlWUURYmOGf0LDMMb2Xnass.jpg",
      alt: "Cocktail in a glass",
      top: 0,
      left: 97,
      width: 390,
      height: 285,
    },
    {
      src: "https://framerusercontent.com/images/DVR9GwhSBDd4i12phYJP7sR4nk.jpg",
      alt: "Hands prepping vegetables",
      top: 290,
      left: 46.5,
      width: 135,
      height: 134,
    },
    {
      src: "https://framerusercontent.com/images/7gGEROASRKx7ydb5orCL3sj1G0.png",
      alt: "Halved tomato",
      top: 485,
      left: 17.5,
      width: 191,
      height: 190,
    },
    {
      src: "https://framerusercontent.com/images/na5jfd4ADOii27QRbWJ4Tp6xSdo.jpg",
      alt: "Bunch of grapes",
      top: 555,
      left: 75,
      width: 191,
      height: 184,
    },
  ];

  return (
    <div className="min-h-screen bg-[#f3efe9] px-8 py-12">
      <p className="text-center text-xs tracking-wide text-green-800">
        @ROMA_RESTAURANT
      </p>
      <h1 className="mb-8 text-center text-2xl font-bold tracking-[0.2em] text-green-900">
        ROMA STORIES
      </h1>

      {/* Fixed-aspect canvas so absolute placement matches the design */}
      <div className="relative mx-auto h-[800px] w-full max-w-3xl">
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
              imageStyle={{ height: `${card.height}px`, width: "100%" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stories;