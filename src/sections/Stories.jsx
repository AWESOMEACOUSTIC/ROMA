import React from "react";
import ImageZoomCard from "../components/ZoomCard";

function Stories() {
  const cards = [
    {
      src:
        "https://framerusercontent.com/images/Ao6XlEVJkfWlugnYkzzoHWB4QUE.jpeg",
      alt: "Brioche bun on a plate",
      top: 68,
      left: 16,
      rotation: 0,
      width: 340,
      height: 340,
    },
    {
      src:
        "https://framerusercontent.com/images/RsFlWUURYmOGf0LDMMb2Xnass.jpg",
      alt: "Cocktail in a glass",
      top: 42,
      left: 70,
      rotation: 0,
      width: 400,
      height: 400,
    },
    {
      src:
        "https://framerusercontent.com/images/DVR9GwhSBDd4i12phYJP7sR4nk.jpg",
      alt: "Hands prepping vegetables",
      top: 154,
      left: 42,
      rotation: 0,
      width: 340,
      height: 340,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 px-8 py-16">
      <h1 className="text-2xl font-bold text-center text-green-800 mb-8">
        ROMA STORIES
      </h1>
      <div className="relative mx-auto mt-12 h-[70vh] max-w-6xl">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="absolute"
            style={{
              top: `${card.top}%`,
              left: `${card.left}%`,
              width: `${card.width}px`,
              height: `${card.height}px`,
              transform: `translate(-50%, -50%) rotate(${card.rotation}deg)`
            }}
          >
            <ImageZoomCard
              src={card.src}
              alt={card.alt}
              caption="@ROMA_RESTAURANT"
              href="https://www.instagram.com/roma_restaurant/"
              className="h-full w-full"
              imageStyle={{ width: `${card.width}px`, height: `${card.height}px` }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stories;