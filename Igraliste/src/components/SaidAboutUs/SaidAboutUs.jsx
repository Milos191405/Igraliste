import { useState, useEffect, useRef } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
// Import Swiper React components
//import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
//import "swiper/css";
//import "swiper/css/pagination";
import "./styles.css";
// Import required modules
// import { Pagination, Autoplay } from "swiper/modules";
export default function App() {
  const slides = [
    {
      text: `Poštovani, hvala vam na slikama. Prelepe su, sve je lepo zabeleženo.
     Deca su prezadovoljna rođendanskom žurkom i svima se hvale da je
     bilo mnogo lepo 🙂 Hvala vam na divnoj saradnji i hvala devojkama
     koje su radile sa decom. Bile su baš kreativne i deca su uživala u
     igrama! Hvala na svemu! Prezadovoljni smo i doći ćemo sigurno opet! 🙂`,
      author: "Porodica Bunjevački",
    },
    {
      text: `Svi gosti su oduševljeni osobljem, mestom i prijatnom atmosferom u
     prostoru, kao i mi koji smo se odlučili za vašu igraonicu. Nadamo se
     da ćemo i u buduće imati prilike da se družimo i kod vas slavimo
     rođendan. Hvala na odličnim fotografijama!`,
      author: "Tihana Putin",
    },
    {
      text: `Doći u Igralište nije igra i uživanje za decu nego i antistres
     terapija za mame i tate, a naravno i za nas bake. Uz igru, lepu
     dečiju muziku i ljubazno osoblje "Igrališta", provodim vreme sa
     svojim unukom na najkvalitetniji način. Hvala Vam što ste uredni,
     ljubazni i profesionalni!`,
      author: "baka Dragana i unuk Nikola",
    },
    {
      text: `Ovo je predivna igraonica. Čista, uredna i lep joj je enterijer.
     Deca se ovde lepo igraju. Prostor i oprema je čista i uredna.
     Ljubaznost je super. Jako ste kreativni. Veoma je veselih boja i ima
     puno zanimljivih knjiga i stvari za najmlađe. Jedinstvena! Igralište
     je fenomenalno.Rodjusi su uvek sjajni...Odličan ambijent i sadržaj,
     veseli domaćini, nasmejana deca 🙂 Sve preporuke!!!`,
      author: "",
    },
    {
      text: `Igralište je fenomenalno.Rodjusi su uvek sjajni...Odličan ambijent i
     sadržaj, veseli domaćini, nasmejana deca 🙂 Sve preporuke!!!`,
      author: "Goran Bajić",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0)
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
  }, [isHovered, slides.length])

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  }


  // const pagination = {
  //   clickable: true,
  //   renderBullet: function (index, className) {
  //     return '<span class="custom-pagination ' + className + '"></span>';
  //   },
  // };
  return (
    <>
      <h2 className="text-center text-lg md:text-xl  bg-gray-100 w-screen  pt-4">
        Rekli su o nama ...
      </h2>
      <div
        className="relative w-full  bg-gray-100 overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Slide */}
        <div className="flex items-center justify-center lg:min-h-[300px] p-6 text-center">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg mb-4">{slides[currentIndex].text}</p>
            {slides[currentIndex].author && (
              <p className="text-red-600 text-md pt-4 pb-4">
                {slides[currentIndex].author}
              </p>
            )}
          </div>
        </div>

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

        {/* Pagination */}
        <div
          className={`absolute bottom-4 w-full flex justify-center transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          {slides.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full mx-1 cursor-pointer transition-colors duration-300 ${
                index === currentIndex ? "bg-red-500" : "bg-gray-500"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
}
  

// // import { useState } from "react";
// // // Import Swiper React components
// // import { Swiper, SwiperSlide } from "swiper/react";

// // // Import Swiper styles
// // import "swiper/css";
// // import "swiper/css/pagination";
// // import "swiper/css/navigation";

// // import "./styles.css";

// // // Import required modules
// // import { Pagination, Autoplay} from "swiper/modules";

// // export default function SaidAboutUs() {
// //   const [isHovered, setIsHovered] = useState(false);

// //   const pagination = {
// //     clickable: true,
// //     renderBullet: function (index, className) {
// //       return '<span class="custom-pagination ' + className + '"></span>';
// //     },
// //   };

// //   return (
// //     <div
// //       className={isHovered ? "visible-pagination" : "hidden-pagination"}
// //       onMouseEnter={() => setIsHovered(true)}
// //       onMouseLeave={() => setIsHovered(false)}
// //       style={{ position: "relative", zIndex:"-10" }}
// //     >
// //       <Swiper
// //         pagination={pagination}
// //         modules={[Pagination, Autoplay]}
// //         autoplay={{
// //           delay: 5000, // Adjust the delay as needed
// //           disableOnInteraction: true,
// //         }}
// //         navigation={false}
// //         loop={true}
// //         loopFillGroupWithBlank={true}
// //         className="h-[450px]"
// //       >
// //         <SwiperSlide className="flex flex-col border border-red-600">
// //           <div className="py-4 px-4 ">
// //             Poštovani, hvala vam na slikama. Prelepe su, sve je lepo zabeleženo.
// //             Deca su prezadovoljna rođendanskom žurkom i svima se hvale da je
// //             bilo mnogo lepo 🙂 Hvala vam na divnoj saradnji i hvala devojkama
// //             koje su radile sa decom. Bile su baš kreativne i deca su uživala u
// //             igrama! Hvala na svemu! Prezadovoljni smo i doći ćemo sigurno opet!
// //             🙂
// //           </div>
// //           <p className="text-red-600 py-2">Porodica Bunjevački</p>
// //         </SwiperSlide>

// //         <SwiperSlide className="flex flex-col border border-red-600">
// //           <div className="py-4 px-4 ">
// //             Svi gosti su oduševljeni osobljem, mestom i prijatnom atmosferom u
// //             prostoru, kao i mi koji smo se odlučili za vašu igraonicu. Nadamo se
// //             da ćemo i u buduće imati prilike da se družimo i kod vas slavimo
// //             rođendan. Hvala na odličnim fotografijama!
// //           </div>
// //           <p className="text-red-600 py-2">Tihana Putin</p>
// //         </SwiperSlide>

// //         <SwiperSlide className="flex flex-col border border-red-600">
// //           <div className="py-4 px-4 ">
// //             Doći u Igralište nije igra i uživanje za decu nego i antistres
// //             terapija za mame i tate, a naravno i za nas bake. Uz igru, lepu
// //             dečiju muziku i ljubazno osoblje "Igrališta", provodim vreme sa
// //             svojim unukom na najkvalitetniji način. Hvala Vam što ste uredni,
// //             ljubazni i profesionalni!
// //           </div>
// //           <p className="text-red-600 py-2">baka Dragana i unuk Nikola</p>
// //         </SwiperSlide>

// //         <SwiperSlide className="flex flex-col border border-red-600">
// //           <div className="py-2 px-4 ">
// //             Ovo je predivna igraonica. Čista, uredna i lep joj je enterijer.
// //             Deca se ovde lepo igraju. Prostor i oprema je čista i uredna.
// //             Ljubaznost je super. Jako ste kreativni. Veoma je veselih boja i ima
// //             puno zanimljivih knjiga i stvari za najmlađe. Jedinstvena! Igralište
// //             je fenomenalno.Rodjusi su uvek sjajni...Odličan ambijent i sadržaj,
// //             veseli domaćini, nasmejana deca 🙂 Sve preporuke!!!
// //           </div>
// //           <p className="text-red-600 py-2"></p>
// //         </SwiperSlide>

// //         <SwiperSlide className="flex flex-col border border-red-600">
// //           <div className="py-2 px-4 ">
// //             Igralište je fenomenalno.Rodjusi su uvek sjajni...Odličan ambijent i
// //             sadržaj, veseli domaćini, nasmejana deca 🙂 Sve preporuke!!!
// //           </div>
// //           <p className="text-red-600 py-2">Goran Bajić</p>
// //         </SwiperSlide>
// //       </Swiper>
// //     </div>
// //   )
