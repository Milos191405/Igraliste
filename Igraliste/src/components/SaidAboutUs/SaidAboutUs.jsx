// import { useState } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";

// import "./styles.css";

// // Import required modules
// import { Pagination, Autoplay} from "swiper/modules";

// export default function SaidAboutUs() {
//   const [isHovered, setIsHovered] = useState(false);

//   const pagination = {
//     clickable: true,
//     renderBullet: function (index, className) {
//       return '<span class="custom-pagination ' + className + '"></span>';
//     },
//   };

//   return (
//     <div
//       className={isHovered ? "visible-pagination" : "hidden-pagination"}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       style={{ position: "relative", zIndex:"-10" }}
//     >
//       <Swiper
//         pagination={pagination}
//         modules={[Pagination, Autoplay]}
//         autoplay={{
//           delay: 5000, // Adjust the delay as needed
//           disableOnInteraction: true,
//         }}
//         navigation={false}
//         loop={true}
//         loopFillGroupWithBlank={true}
//         className="h-[450px]"
//       >
//         <SwiperSlide className="flex flex-col border border-red-600">
//           <div className="py-4 px-4 ">
//             Poštovani, hvala vam na slikama. Prelepe su, sve je lepo zabeleženo.
//             Deca su prezadovoljna rođendanskom žurkom i svima se hvale da je
//             bilo mnogo lepo 🙂 Hvala vam na divnoj saradnji i hvala devojkama
//             koje su radile sa decom. Bile su baš kreativne i deca su uživala u
//             igrama! Hvala na svemu! Prezadovoljni smo i doći ćemo sigurno opet!
//             🙂
//           </div>
//           <p className="text-red-600 py-2">Porodica Bunjevački</p>
//         </SwiperSlide>

//         <SwiperSlide className="flex flex-col border border-red-600">
//           <div className="py-4 px-4 ">
//             Svi gosti su oduševljeni osobljem, mestom i prijatnom atmosferom u
//             prostoru, kao i mi koji smo se odlučili za vašu igraonicu. Nadamo se
//             da ćemo i u buduće imati prilike da se družimo i kod vas slavimo
//             rođendan. Hvala na odličnim fotografijama!
//           </div>
//           <p className="text-red-600 py-2">Tihana Putin</p>
//         </SwiperSlide>

//         <SwiperSlide className="flex flex-col border border-red-600">
//           <div className="py-4 px-4 ">
//             Doći u Igralište nije igra i uživanje za decu nego i antistres
//             terapija za mame i tate, a naravno i za nas bake. Uz igru, lepu
//             dečiju muziku i ljubazno osoblje "Igrališta", provodim vreme sa
//             svojim unukom na najkvalitetniji način. Hvala Vam što ste uredni,
//             ljubazni i profesionalni!
//           </div>
//           <p className="text-red-600 py-2">baka Dragana i unuk Nikola</p>
//         </SwiperSlide>

//         <SwiperSlide className="flex flex-col border border-red-600">
//           <div className="py-2 px-4 ">
//             Ovo je predivna igraonica. Čista, uredna i lep joj je enterijer.
//             Deca se ovde lepo igraju. Prostor i oprema je čista i uredna.
//             Ljubaznost je super. Jako ste kreativni. Veoma je veselih boja i ima
//             puno zanimljivih knjiga i stvari za najmlađe. Jedinstvena! Igralište
//             je fenomenalno.Rodjusi su uvek sjajni...Odličan ambijent i sadržaj,
//             veseli domaćini, nasmejana deca 🙂 Sve preporuke!!!
//           </div>
//           <p className="text-red-600 py-2"></p>
//         </SwiperSlide>

//         <SwiperSlide className="flex flex-col border border-red-600">
//           <div className="py-2 px-4 ">
//             Igralište je fenomenalno.Rodjusi su uvek sjajni...Odličan ambijent i
//             sadržaj, veseli domaćini, nasmejana deca 🙂 Sve preporuke!!!
//           </div>
//           <p className="text-red-600 py-2">Goran Bajić</p>
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// }

import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// Import required modules
import { Pagination, Autoplay } from "swiper/modules";

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

export default function App() {
  const [isHovered, setIsHovered] = useState(false);

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="custom-pagination ' + className + '"></span>';
    },
  };

  return (
    <div
      className={isHovered ? "visible-pagination" : "hidden-pagination"}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ position: "relative", zIndex: "-10" }}
    >
      <Swiper
        pagination={pagination}
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 2000, // Adjust the delay as needed
          disableOnInteraction: true,
        }}
        loop={true}
        loopFillGroupWithBlank={true}
        className="h-[450px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="flex flex-col items-center justify-center px-4 py-8 "
          >
            <div className="text-center md:text-xl">
              <p>{slide.text}</p>
              {slide.author && (
                <p className="text-red-600 py-2">{slide.author}</p>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
