import { useState } from 'react';
import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Logo from "../assets/Logo.jpeg";

export default function App() {

    
     const [showNavigation, setShowNavigation] = useState(false);
  return (
    <>
      <Swiper
        navigation={true}
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
        className="mySwiper mt-[80px] border-blue-600 w-screen"
      >
        <SwiperSlide className="border border-blue-600 pl-5 pr-5 w-60">
          <img src={Logo} alt="Logo" className="w-screen" />
          Slide 1
        </SwiperSlide>
        <SwiperSlide>
          <img src={Logo} alt="Logo" />
          Slide 2
        </SwiperSlide>
        <SwiperSlide>
          <img src={Logo} alt="Logo" />
          Slide 3
        </SwiperSlide>
        <SwiperSlide>
          <img src={Logo} alt="Logo" />
          Slide 4
        </SwiperSlide>
        <SwiperSlide>
          <img src={Logo} alt="Logo" />
          Slide 5
        </SwiperSlide>
        <SwiperSlide>
          <img src={Logo} alt="Logo" />
          Slide 6
        </SwiperSlide>
        <SwiperSlide>
          <img src={Logo} alt="Logo" />
          Slide 7
        </SwiperSlide>
        <SwiperSlide>
          <img src={Logo} alt="Logo" />
          Slide 8
        </SwiperSlide>
        <SwiperSlide>
          <img src={Logo} alt="Logo" />
          Slide 9
        </SwiperSlide>
      </Swiper>
    </>
  );
}
