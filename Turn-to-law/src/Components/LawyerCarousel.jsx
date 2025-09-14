import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { PhoneIcon, VideoCameraIcon, StarIcon } from "@heroicons/react/24/solid";
import lawyer from '../assets/image.png'

const lawyers = [
  {
    name: "Ra**************a Sr********a",
    expertise: "Cheque Bounce & Money Recovery+20 more",
    rating: 4.7,
    reviews: 70,
    experience: "7 years of Experience",
    languages: "English, Hindi",
    price: "Rs.42/min",
    image: lawyer,
  },
  {
    name: "Ra*********y Ku*****r",
    expertise: "Criminal Matter, Consumer Protection+6 more",
    rating: 4.8,
    reviews: 519,
    experience: "20 years of Experience",
    languages: "English, Telugu, Hindi",
    price: "Rs.70/min",
    image: lawyer,
  },
  {
    name: "Ra*********y Ku*****r",
    expertise: "Criminal Matter, Consumer Protection+6 more",
    rating: 4.8,
    reviews: 519,
    experience: "20 years of Experience",
    languages: "English, Telugu, Hindi",
    price: "Rs.70/min",
    image: lawyer,
  },
  {
    name: "Ra*********y Ku*****r",
    expertise: "Criminal Matter, Consumer Protection+6 more",
    rating: 4.8,
    reviews: 519,
    experience: "20 years of Experience",
    languages: "English, Telugu, Hindi",
    price: "Rs.70/min",
    image: lawyer,
  },
];

const LawyerCarousel = () => {
  return (
    <div className="w-full py-10">
      <h2 className="text-2xl font-bold  mb-6">
        Consult top experts across legal areas
      </h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        navigation={true}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Navigation]}
        className="px-6"
      >
        {lawyers.map((lawyer, idx) => (
          <SwiperSlide key={idx}>
            <div className="border border-gray-400 rounded-xl shadow-sm p-5 bg-white flex flex-col justify-between h-full">
              {/* Lawyer info */}
              <div>
                <h3 className="font-semibold text-gray-900 truncate">
                  {lawyer.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1">{lawyer.expertise}</p>

                {/* Image */}
                <div className="flex justify-center my-4 blur-sm">
                  <div className="relative">
                    <img
                      src={lawyer.image}
                      alt={lawyer.name}
                      className="h-24 w-24 rounded-lg object-cover"
                    />
                    <span className="absolute bottom-1 right-1 h-3 w-3 rounded-full bg-green-500 border-2 border-white"></span>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 text-sm text-gray-600">
                  <StarIcon className="h-4 w-4 text-yellow-500" />
                  <span className="font-medium">{lawyer.rating}</span> |
                  <span>{lawyer.reviews} reviews</span>
                </div>

                {/* Experience */}
                <div className="mt-2 text-sm text-gray-600 flex items-center gap-2">
                  <span>📅</span> {lawyer.experience}
                </div>

                {/* Languages */}
                <div className="mt-1 text-sm text-gray-600 flex items-center gap-2">
                  <span>🌐</span> {lawyer.languages}
                </div>
              </div>

              {/* Price + actions */}
              <div className="border-t mt-4 pt-3 flex justify-between items-center">
                <div>
                  <p className="text-indigo-600 font-semibold">{lawyer.price}</p>
                  <p className="text-xs text-gray-500">Call charges</p>
                </div>
                <div className="flex gap-3">
                  <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-100">
                    <PhoneIcon className="h-5 w-5 text-green-500" />
                  </button>
                  <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-100">
                    <VideoCameraIcon className="h-5 w-5 text-indigo-500" />
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LawyerCarousel;
