import { useState } from 'react';
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Igraliste1 from "../assets/Home/Igraliste1.jpg";
import Igraliste2 from "../assets/Home/Igraliste2.jpg";
import Igraliste3 from "../assets/Home/Igraliste3.jpg";


export default function App() {

  

    
     const [showNavigation, setShowNavigation] = useState(true);
  return (
    <>
      <Swiper
        navigation={showNavigation}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
          restartDelay: 1000,
        }}
        onAutoplayStart={() => setShowNavigation(false)}
        onAutoplayStop={() => setShowNavigation(true)}
        onSlideChange={() => setShowNavigation(false)}
        modules={[Navigation, Autoplay]}
        className="mySwiper  border-blue-600 w-screen h-[600px] "
      >
        <SwiperSlide >
          <img
            src={Igraliste1}
            alt="Logo"
            className="absolute inset-0 h-full w-full object-cover"
          />
          Slide 1
        </SwiperSlide>
        <SwiperSlide >
          <img
            src={Igraliste2}
            alt="Logo"
            className="absolute inset-0 h-full w-full object-cover"
          />
          Slide 2
        </SwiperSlide>
        <SwiperSlide >
          <img
            src={Igraliste3}
            alt="Logo"
            className="absolute inset-0 h-full w-full object-cover"
          />
          Slide 3
        </SwiperSlide>
      </Swiper>
    </>
  );
}
