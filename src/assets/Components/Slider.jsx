import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const Slider = () => {
  const images = [
    "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Beauty/GW/makeup_PC._CB550487562_.png",
    "https://images-eu.ssl-images-amazon.com/images/G/31/IMG25/Home/2025/Feb/Megahomesale/Home_winter_ready._CB549483760_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/IMG24/Smart_Watches/FEB24/PC_Hero_3000x1200_samsung_._CB549907989_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Beauty/GW/Shampoos__conditioners_pc._CB550487562_.png",
  ];

  const swiperRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    if (currentIndex < images.length - 1) {
      swiperRef.current.swiper.slideTo(currentIndex + 1);
      setCurrentIndex(currentIndex + 1);
    }
  };

  const goToPrev = () => {
    if (currentIndex > 0) {
      swiperRef.current.swiper.slideTo(currentIndex - 1);
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="relative w-full">
      <Swiper slidesPerView={1} ref={swiperRef}>
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Previous Button */}
      <button
        className="absolute top-1/2 left-2 bg-black text-white px-4 py-2 rounded z-50"
        onClick={goToPrev}
        disabled={currentIndex === 0}
      >
        Previous
      </button>

      {/* Next Button */}
      <button
        className="absolute top-1/2 right-2 bg-black text-white px-4 py-2 rounded z-50"
        onClick={goToNext}
        disabled={currentIndex === images.length - 1}
      >
        Next
      </button>
    </div>
  );
};

export default Slider;
