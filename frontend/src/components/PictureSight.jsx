import React, { useState } from "react";
import picture1 from "../assets/image/picture1.jpg";
import picture2 from "../assets/image/picture2.jpg";
import picture3 from "../assets/image/picture3.jpg";
import picture4 from "../assets/image/picture4.jpg";
import picture5 from "../assets/image/picture5.jpg";
import picture6 from "../assets/image/picture6.jpg";
import picture7 from "../assets/image/picture7.jpg";
import picture8 from "../assets/image/picture8.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";

const cards = [
  {
    images: [picture1, picture2],
    title: "Surgical Excellence",
    description:
      "Delivering precise and life-saving surgeries with utmost care and professionalism. Our surgical team is composed of highly skilled and dedicated professionals who utilize the latest techniques and technologies to ensure the best possible outcomes. From diagnostic procedures to complex surgeries, we emphasize the importance of precision, safety, and patient comfort. With each procedure, we strive to not only restore health but also to give our patients the best quality of life post-surgery.",
  },
  {
    images: [picture3, picture4],
    title: "Innovative Techniques",
    description:
      "Advancing healthcare through minimally invasive and modern medical procedures. We are constantly researching and adopting new and effective surgical techniques, including laparoscopic and robotic surgeries, that reduce recovery time, minimize complications, and offer quicker return to daily life activities. These cutting-edge methods enable our doctors to perform surgeries with precision, significantly reducing patient discomfort and enhancing recovery outcomes.",
  },
  {
    images: [picture5, picture6],
    title: "Patient-Centered Care",
    description:
      "Treating every patient with compassion, dignity, and personalized attention. We understand that each patient’s journey is unique, which is why we provide individualized care tailored to their specific needs. Our doctors, nurses, and support staff work together to ensure that patients feel heard, respected, and cared for every step of the way. We prioritize clear communication, understanding patient concerns, and offering support during their treatment and recovery. Our goal is to ensure that every patient feels confident in their care and valued as an individual.",
  },
  {
    images: [picture7, picture8],
    title: "State-of-the-Art Facilities",
    description:
      "Empowering healing with cutting-edge equipment and a safe environment. Our medical facilities are equipped with the latest technology, including diagnostic imaging systems, surgical robots, and advanced anesthesia machines, to ensure the highest standards of care. The sterile, comfortable, and well-maintained environment promotes optimal healing and safety. We continually upgrade our equipment to stay at the forefront of medical advances, ensuring that patients receive the best possible care throughout their treatment.",
  },
];

const ImageSlider = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState("next");
  const total = images.length;

  const nextSlide = () => {
    setDirection("next");
    setCurrent((prev) => (prev + 1) % total);
  };

  const prevSlide = () => {
    setDirection("prev");
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  return (
    <div className="relative w-full h-64 overflow-hidden">
      <div
        className={`w-full h-full flex transition-transform duration-700 ease-in-out ${
          direction === "next"
            ? "transform translate-x-0"
            : "transform translate-x-full"
        }`}
      >
        <img
          src={images[current]}
          alt="Slider"
          className="w-full h-full object-cover rounded-t-2xl"
        />
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-white bg-opacity-60 p-2 rounded-full hover:bg-opacity-90"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-white bg-opacity-60 p-2 rounded-full hover:bg-opacity-90"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

const PictureSight = () => {
  return (
    <div className="bg-gray-100 py-12 px-4">
      <h1 className="text-4xl font-extrabold text-center text-blue-900 mb-10 py-10">
        Promoting Excellence in Medicine
      </h1>

      <div className="max-w-8xl mx-auto">
        {/* Cards in two rows */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <ImageSlider images={card.images} />
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  {card.title}
                </h2>
                <p className="text-gray-600 text-base">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PictureSight;
