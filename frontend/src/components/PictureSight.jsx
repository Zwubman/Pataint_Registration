import React, { useState } from "react";
import picture1 from "../assets/image/picture1.jpg";
import picture2 from "../assets/image/picture2.jpg";
import picture3 from "../assets/image/picture3.jpg";
import picture4 from "../assets/image/picture4.jpg";
import picture5 from "../assets/image/picture5.jpg";
import picture6 from "../assets/image/picture6.jpg";
import picture7 from "../assets/image/picture7.jpg";
import picture8 from "../assets/image/picture8.jpg";
import { ChevronRight } from "lucide-react";

const cards = [
  {
    images: [picture1, picture2],
    title: "Surgical Excellence",
    description:
      "Delivering precise and life-saving surgeries with utmost care and professionalism. Our surgical team is composed of highly skilled and dedicated professionals who utilize the latest techniques and technologies to ensure the best possible outcomes.",
  },
  {
    images: [picture3, picture4],
    title: "Innovative Techniques",
    description:
      "Advancing healthcare through minimally invasive and modern medical procedures. These cutting-edge methods enable surgeries with precision, reducing recovery time and enhancing outcomes.",
  },
  {
    images: [picture5, picture6],
    title: "Patient-Centered Care",
    description:
      "Treating every patient with compassion, dignity, and personalized attention. We emphasize clear communication and support throughout treatment and recovery.",
  },
  {
    images: [picture7, picture8],
    title: "State-of-the-Art Facilities",
    description:
      "Empowering healing with cutting-edge equipment and a safe environment. Our facilities promote optimal healing with advanced technologies.",
  },
];

const ImageSlider = ({ images }) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  return (
    <div className="relative w-full h-64 sm:h-80 overflow-hidden">
      <div
        className="w-full h-full flex transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index}`}
            className="w-full h-full object-cover rounded-t-2xl flex-shrink-0"
          />
        ))}
      </div>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-white bg-opacity-60 p-2 rounded-full hover:bg-opacity-90 sm:p-3"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

const PictureSight = () => {
  return (
    <div className="bg-gray-100 py-12 px-4">
      <h1 className="text-2xl font-extrabold text-center text-blue-900 mb-10 sm:text-3xl md:text-4xl py-5">
        Promoting Excellence in Medicine
      </h1>

      <div className="max-w-8xl mx-auto">
        {/* Responsive grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <ImageSlider images={card.images} />
              <div className="p-4 sm:p-6">
                <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
                  {card.title}
                </h2>
                <p className="text-sm sm:text-base text-gray-600">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PictureSight;
