import { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";

import galerija2 from "../assets/Galerija/decije-mudrolije.webp";
import galerija3 from "../assets/Galerija/sovaA.webp";
import galerija4 from "../assets/Galerija/igraliste-momenti.webp";
import galerija5 from "../assets/Galerija/igraliste-momenti1.webp";
import galerija6 from "../assets/Galerija/igraliste-momenti2.webp";
import galerija7 from "../assets/Galerija/igraliste-momenti3.webp";

// import images from rodjendaonica
import ImageGallery from "../components/4ImagesComponent/ImageGallery";
import rodjendaonica1 from "../assets/Rodjendaonica/rodjendaonica1.jpeg";
import rodjendaonica2 from "../assets/Rodjendaonica/rodjendaonica2.jpeg";
import rodjendaonica3 from "../assets/Rodjendaonica/rodjendaonica3.jpeg";
import rodjendaonica4 from "../assets/Rodjendaonica/rodjendaonica4.jpeg";

//import images from home
import RodjendaniGalerija from "../components/Galerie/galerija-torta.webp";
import IgraonicaGalerija from "../components/Galerie/galerija-nasaigraonica.webp";
import SpecijalniDogadjajiGalerija from "../components/Galerie/galerija-specijalni-dogadjaji.webp";
import RadionicaGalerija from "../components/Galerie/galerija-radionica.webp";

const title = "";
const images = [
  {
    src: RodjendaniGalerija,
    alt: "Rodjendani Galerija",
    caption: "Nasa rodjendaonica",
    link: "/nasa-rodjendaonica", // Adding a link for this image
  },
  {
    src: IgraonicaGalerija,
    alt: "Igraonica Galerija",
    caption: "Nasa igraonica",
    link: "/nasa-igraonica", // Adding a link for this image
  },
  {
    src: SpecijalniDogadjajiGalerija,
    alt: "Specijalni Dogadjaji Galerija",
    caption: "Nasi specijalni događaji",
    link: "/nasi-specijalni-dogadjaji", // This image already had a link
  },
  {
    src: RadionicaGalerija,
    alt: "Radionica Galerija",
    caption: "Nase radionice",
    link: "/nase-radionice", // Adding a link for this image
  },
];

const imagesRodjendani = [
  {
    src: rodjendaonica1,
    alt: "Rodjendaonica 1",
    caption: "Proslava rodjendana 1",
  },
  {
    src: rodjendaonica2,
    alt: "Rodjendaonica 2",
    caption: "Proslava rodjendana 2",
  },
  {
    src: rodjendaonica3,
    alt: "Rodjendaonica 3",
    caption: "Proslava rodjendana 3",
  },
  {
    src: rodjendaonica4,
    alt: "Rodjendaonica 4",
    caption: "Proslava rodjendana 4",
  },
];

function Galerija() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Layout>
      <div className="pt-[80px] lg:pt-[120px] bg-white">
        <h1 className="text-center text-lg pb-3 md:text-xl lg:text-2xl style italic lg:pb-10 ">
          “Dečije igre nisu samo igre, nego ih treba smatrati ozbiljnom dečjom
          delatnošću.”
        </h1>
        <p className="text-center text-sm md:text-lg lg:text-2xl text-red-500">
          Mišel de Montenj
        </p>
      </div>
      <article className="parallax-container">
        <div
          className="parallax-bg"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        ></div>
        <div className="">
          <div className="mx-20 md:mx-10 lg:px-16">
            <div className="flex flex-col  text-sm py-5 md:flex-row  lg:flex-row justify-between lg:py-10   ">
              <img src={galerija5} alt="" className="md:w-1/3 lg:w-1/4" />
              <img src={galerija4} alt="" className="md:w-1/3 lg:w-1/4" />
              <img src={galerija6} alt="" className="md:w-1/3 lg:w-1/4" />
            </div>

            <div className="flex flex-col  text-sm py-5 md:flex-row lg:flex-row justify-between lg:py-10  ">
              <img src={galerija2} alt="" className="md:w-1/3 lg:w-1/4" />
              <img src={galerija3} alt="" className="md:w-1/3 lg:w-1/4" />
              <img src={galerija7} alt="" className="md:w-1/3 lg:w-1/4" />
            </div>
          </div>
          <div className="md:mx-10 ">
            <div>
              <ImageGallery
                title={title}
                images={images}
                className="rounded-images"
              />
            </div>

            <div className="">
              <ImageGallery
                images={imagesRodjendani}
                className="rounded-images"
              />
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}

export default Galerija;
