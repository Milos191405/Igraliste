import Carousel from "../components/CarouselHome/Carousel.jsx";
import Footer from "../components/Footer/Footer.jsx";

import Cat1 from '../assets/Rodjendaonica/rodjendaonica-cat1.jpeg'
import Cat2 from '../assets/Rodjendaonica/rodjendaonica-cat2.jpeg'
import rodjendaonica1 from '../assets/Rodjendaonica/rodjendaonica1.jpeg'
import rodjendaonica2 from '../assets/Rodjendaonica/rodjendaonica2.jpeg'
import rodjendaonica3 from '../assets/Rodjendaonica/rodjendaonica3.jpeg'
import rodjendaonica4 from '../assets/Rodjendaonica/rodjendaonica4.jpeg'

function Rodjendaonica() {
  return (
    <>
      <main className="pt-[80px] xl:pt-[100px] w-full overflow-x-hidden">
        <Carousel />
        <article className="flex flex-col md:flex-row  px-2 w-screen bg-white    ">
          <img
            src={Cat1}
            alt=""
            className="w-1/2 md:w-1/5 xl:w-[30%] my-auto  mx-auto md:px-2 xl:mx-auto   "
          />
          <div className="text-center text  font-style: italic px-8  md:py-4 xl:mx-4 tracking-widest  leading-relaxed ">
            <p> Nezaboravne i maštovite proslave !</p>
            <p>
              Svojim posetiocima Igralište nudi i mogućnost organizovane
              proslave dečijih rođendana - bez prisustva drugih gostiju, tako da
              je čitav prostor samo slavljenicima na raspolaganju.{" "}
            </p>
            <p>
              Preporučuje se proslava sa maksimalno 45 odraslih osoba i 30
              mališana.
            </p>
            <p>
              Preporučuje se proslava sa maksimalno 45 odraslih osoba i 30
              mališana. Hranu i torte posetioci mogu sami da obezbede, ili pak
              kompletnu organizaciju posluženja mogu prepustiti nama i našim
              saradnicima.
            </p>
          </div>
          <img
            src={Cat2}
            alt=""
            className="w-1/2 md:w-1/5 xl:w-[30%] my-auto  mx-auto md:px-2 xl:mx-auto   "
          />
        </article>

        <article className="text-center text-3xl  bg-gray-200  ">
          <h2 className="font-style: italic text-lg md:text-xl pt-5 pb-10 xl:py-5">
            Nasi drugari su se ovako proveli ...
          </h2>
          <div className="flex flex-col  md:grid grid-cols-2 xl:flex xl:flex-row xl:justify-center pb-5 gap-y-2 gap-x-2   ">
            <img
              src={rodjendaonica1}
              alt=""
              className="  w-1/2 xl:w-1/6  mx-auto md:mx-[50%] xl:mx-0   pb-2 md:pb-0  "
            />
            <img
              src={rodjendaonica2}
              alt=""
              className="   w-1/2 xl:w-1/6 mx-auto md:mx-0  pb-2 md:pb-0 "
            />
            <img
              src={rodjendaonica3}
              alt=""
              className="   w-1/2 xl:w-1/6 mx-auto md:mx-[50%] xl:mx-0 pb-2 md:pb-0"
            />
            <img
              src={rodjendaonica4}
              alt=""
              className="   w-1/2 xl:w-1/6 mx-auto md:mx-0  pb-2 md:pb-0 "
            />
          </div>
        </article>

        <Footer />
      </main>
    </>
  );
}

export default Rodjendaonica;
