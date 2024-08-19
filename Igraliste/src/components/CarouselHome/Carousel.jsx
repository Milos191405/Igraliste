import { useState, useEffect, useRef } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
//import { RiCheckboxCircleFill } from "react-icons/ri";
import Igraliste1 from "../../assets/Home/Igraliste1.jpg";
import Igraliste2 from "../../assets/Home/Igraliste2.jpg";
import Igraliste3 from "../../assets/Home/Igraliste3.jpg";

function App() {
  const slides = [
    { url: Igraliste1 },
    { url: Igraliste2 },
    { url: Igraliste3 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalIdRef = useRef(null);

  useEffect(() => {
    if (!isHovered) {
      intervalIdRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }, 3000);
    } else {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
        intervalIdRef.current = null;
      }
    }

    return () => {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
      }
    };
  }, [isHovered, slides.length]);

  
    
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  // const goToSlide = (slideIndex) => {
  //   setCurrentIndex(slideIndex);
  // };

  return (
    <div
      className="h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[800px] w-full relative overflow-x-hidden border border-red-600"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full bg-center bg-cover duration-500"
      ></div>
      {/* Left Arrow */}
      <div
        className={`absolute top-[50%] -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        } hidden lg:block`}
        style={{ zIndex: 10 }}
      >
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>

      {/* Right Arrow */}
      <div
        className={`absolute top-[50%] -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        } hidden lg:block`}
        style={{ zIndex: 10 }}
      >
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>

      {/* <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`text-2xl cursor-pointer ${
              slideIndex === currentIndex ? "text-blue-500" : "text-gray-500"
            }`}
          >
             <RiCheckboxCircleFill /> 
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default App;
