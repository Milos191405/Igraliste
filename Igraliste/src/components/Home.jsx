// import Swiper from './Swiper'
import Meda from "../assets/Home/meda-igraliste.webp";
import Panda from "../assets/Home/panda-igraliste.webp";
import SaidAboutUs from "./SaidAboutUs/SaidAboutUs.jsx";
import Carousel from "./CarouselHome/Carousel.jsx";
import Blog1 from "./Card/odnos-dece-i-roditelja.webp";
import Blog2 from "./Card/naslovna-maskenbal.webp";
import Blog3 from "./Card/igraliste-i-kutkovi-za-decu-4.webp";
import Footer from "./Footer/Footer.jsx";
import RodjendaniGalerija from "./Galerie/galerija-torta.webp"
import IgraonicaGalerija from './Galerie/galerija-nasaigraonica.webp'
import SpecijalniDogadjajiGalerija from './Galerie/galerija-specijalni-dogadjaji.webp'
import RadionicaGalerija from './Galerie/galerija-radionica.webp'

function Home() {
  return (
    <main className="pt-[80px] w-screen   ">
      {/* <Swiper /> */}
      <Carousel />
      <article className="flex flex-col  px-2 bg-white   ">
        <img src={Meda} className="w-1/2 md:w-1/3 mx-auto   " />
        <p className="text-center text-sm md:text-lg  font-style: italic px-8">
          Igralište je dečija igraonica namenjena deci najmladjeg uzrasta. Pored
          prostora koji je u potpunosti prilagodjen mališanima i njihovoj
          bezbednoj igri, Igralište sadrži i kafić u kome naši odrasli gosti
          mogu da se opuste u prijatnoj atmosferi. <br />
          Igraonica i kafić su u istom nivou pa deca nesmetano mogu prilaziti
          odraslima što im daje dodatan osećaj sigurnosti.
          <br />
          U prostoru za igru se nalaze originalni i edukativni dečiji sadržaji.
          Pored 3D Lavirinta nudimo i čitav niz igračaka u kojima deca mogu da
          se igraju igre uloga, pa tako postaju pravi mali kuvari,
          majstori,lekari, prodavci,vozači, vatrogasci, princeze… Imamo i veliki
          izbor društvenih igara, kocaka i sličnih igračaka za decu veliku i
          malu. <br />
          Za najmladje goste tu je bazenčić sa lopticama, ljuljaška, guralice i
          igračke za bebe. <br />
          U našoj igraonici možete proslaviti nezaboravne rodjendane vašim
          mališanima, uživati u svakodnevnoj igri i učestvovati u kreativnim
          radionicama koje sa puno pažnje priprema naše stručno osoblje. <br />
          Prostor je klimatizovan, postoji i odvojen deo namenjen pušačima, a za
          najmladje postoji deo za presvlačenje
        </p>
        <img src={Panda} className="w-1/2 md:w-1/3 mx-auto my-auto " />
      </article>
      <article className="text-center text-3xl  bg-gray-200  ">
        <h2 className="font-style: italic text-lg md:text-2xl pt-5 pb-5">
          Zasto smo posebni...
        </h2>
        <div className="flex flex-col  ">
          <img
            src={RodjendaniGalerija}
            alt=""
            className="  w-1/2 mx-auto pb-2"
          />
          <img
            src={IgraonicaGalerija}
            alt=""
            className="  w-1/2 mx-auto pb-2"
          />
          <img
            src={SpecijalniDogadjajiGalerija}
            alt=""
            className="  w-1/2 mx-auto pb-2"
          />
          <img
            src={RadionicaGalerija}
            alt=""
            className="  w-1/2 mx-auto pb-2"
          />
        </div>
      </article>
      <h2 className="text-center text-lg md:text-2xl bg-white w-screen pt-4">
        Rekli su o nama ...
      </h2>

      <article>
        <SaidAboutUs />
      </article>

      <article className="bg-white ">
        <h2 className="text-center text-lg md:text-2xl py-2 bg-gray-200">
          Sa naseg bloga...
        </h2>

        <div className="py-2 px-2 mb-2 bg-gray-200 ">
          <img src={Blog1} alt="" />
          <p className="text-center text-sm md:text-lg px-4">
            Koliko je bitan topao i prisan odnos dece i roditelja?
          </p>
        </div>

        <div className="py-2 px-2 mb-2 bg-gray-200  ">
          <img src={Blog2} alt="" />
          <p className="text-center text-sm  md:text-lg px-4 py-2">
            Igraliste pod maskama
          </p>
        </div>

        <div className="py-2 px-2 mb-2 bg-gray-200 ">
          <img src={Blog3} alt="" />
          <p className="text-center text-sm md:text-lg px-4 py-2">
            Igraliste i kutkovi
          </p>
        </div>
      </article>
      <Footer />
    </main>
  );
}

export default Home;
