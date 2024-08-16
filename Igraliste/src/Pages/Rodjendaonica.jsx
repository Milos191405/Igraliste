import Layout from "../components/Layout/Layout.jsx";
import Carousel from "../components/CarouselHome/Carousel.jsx";
import Footer from "../components/Footer/Footer.jsx";
import TextComponent from "../components/TextComponent/TextComponent.jsx";

import Cat1 from "../assets/Rodjendaonica/rodjendaonica-cat1.jpeg";
import Cat2 from "../assets/Rodjendaonica/rodjendaonica-cat2.jpeg";
import ImageGallery from "../components/4ImagesComponent/ImageGallery.jsx";
// import RodjendaonicaImages from "../components/Rodjendaonica/Rodjendaonica-images.jsx";
import rodjendaonica1 from "../assets/Rodjendaonica/rodjendaonica1.jpeg";
import rodjendaonica2 from "../assets/Rodjendaonica/rodjendaonica2.jpeg";
import rodjendaonica3 from "../assets/Rodjendaonica/rodjendaonica3.jpeg";
import rodjendaonica4 from "../assets/Rodjendaonica/rodjendaonica4.jpeg";

function Rodjendaonica() {
  const textContent = [
    "Nezaboravne i maštovite proslave!",
    "Svojim posetiocima Igralište nudi i mogućnost organizovane proslave dečijih rođendana - bez prisustva drugih gostiju, tako da je čitav prostor samo slavljenicima na raspolaganju.",
    "Preporučuje se proslava sa maksimalno 45 odraslih osoba i 30 mališana.",
    "Hranu i torte posetioci mogu sami da obezbede, ili pak kompletnu organizaciju posluženja mogu prepustiti nama i našim saradnicima.",
  ];

  const title = "Nasi drugari su se ovako proveli ...";
  const images = [
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
  return (
    <>
      <Layout>
        <Carousel />
        <TextComponent leftImage={Cat1} rightImage={Cat2} text={textContent} />
        <ImageGallery title={title} images={images} />
        <Footer />
      </Layout>
    </>
  );
}

export default Rodjendaonica;
