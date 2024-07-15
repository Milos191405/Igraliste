// import Swiper from './Swiper'
import Meda from "../assets/Home/meda-igraliste.webp";
import Panda from "../assets/Home/panda-igraliste.webp";
import SaidAboutUs from "../components/SaidAboutUs/SaidAboutUs.jsx";
import Carousel from "../components/CarouselHome/Carousel.jsx";
import Blog1 from "../components/Card/odnos-dece-i-roditelja.webp";
import Blog2 from "../components/Card/naslovna-maskenbal.webp";
import Blog3 from "../components/Card/igraliste-i-kutkovi-za-decu-4.webp";
import Footer from "../components/Footer/Footer.jsx";
import RodjendaniGalerija from "../components/Galerie/galerija-torta.webp";
import IgraonicaGalerija from '../components/Galerie/galerija-nasaigraonica.webp'
import SpecijalniDogadjajiGalerija from '../components/Galerie/galerija-specijalni-dogadjaji.webp'
import RadionicaGalerija from '../components/Galerie/galerija-radionica.webp'

function Home() {
  return (
    <main className="pt-[80px] w-full overflow-x-hidden ">
      {/* <Swiper /> */}
      <Carousel />
      <article className="flex flex-col md:flex-row  px-2 w-screen bg-white    ">
        <img
          src={Meda}
          className="w-1/2 md:w-1/5 xl:w-[30%] my-auto  mx-auto md:px-2 xl:mx-auto   "
        />
        <div className="text-center text-sm  font-style: italic px-8  md:py-4 xl:mx-4 tracking-widest  leading-relaxed ">
          <p className="xl:px-20 ">
            Igralište je dečija igraonica namenjena deci najmladjeg uzrasta.
            Pored prostora koji je u potpunosti prilagodjen mališanima i
            njihovoj bezbednoj igri, Igralište sadrži i kafić u kome naši
            odrasli gosti mogu da se opuste u prijatnoj atmosferi.
          </p>
          <p className="xl:px-20">
            Igraonica i kafić su u istom nivou pa deca nesmetano mogu prilaziti
            odraslima što im daje dodatan osećaj sigurnosti.
          </p>
          <p className="xl:px-20">
            U prostoru za igru se nalaze originalni i edukativni dečiji
            sadržaji. Pored 3D Lavirinta nudimo i čitav niz igračaka u kojima
            deca mogu da se igraju igre uloga, pa tako postaju pravi mali
            kuvari, majstori,lekari, prodavci,vozači, vatrogasci, princeze…
            Imamo i veliki izbor društvenih igara, kocaka i sličnih igračaka za
            decu veliku i malu.
          </p>
          <p className="xl:px-20">
            Za najmladje goste tu je bazenčić sa lopticama, ljuljaška, guralice
            i igračke za bebe.
          </p>
          <p className="xl:px-20">
            U našoj igraonici možete proslaviti nezaboravne rodjendane vašim
            mališanima, uživati u svakodnevnoj igri i učestvovati u kreativnim
            radionicama koje sa puno pažnje priprema naše stručno osoblje.
            Prostor je klimatizovan, postoji i odvojen deo namenjen pušačima, a
            za najmladje postoji deo za presvlačenje
          </p>
        </div>
        <img
          src={Panda}
          className="w-1/2 md:w-1/5 xl:w-[30%] my-auto  mx-auto md:px-2 xl:mx-auto "
        />
      </article>
      <article className="text-center text-3xl  bg-gray-200  ">
        <h2 className="font-style: italic text-lg md:text-xl pt-5 pb-10 xl:py-5">
          Zasto smo posebni...
        </h2>
        <div className="flex flex-col  md:grid grid-cols-2 xl:flex xl:flex-row xl:justify-center pb-5 gap-y-2 gap-x-2   ">
          <img
            src={RodjendaniGalerija}
            alt=""
            className="  w-1/2 xl:w-1/6  mx-auto md:mx-[50%] xl:mx-0   pb-2 md:pb-0  "
          />
          <img
            src={IgraonicaGalerija}
            alt=""
            className="   w-1/2 xl:w-1/6 mx-auto md:mx-0  pb-2 md:pb-0 "
          />
          <img
            src={SpecijalniDogadjajiGalerija}
            alt=""
            className="   w-1/2 xl:w-1/6 mx-auto md:mx-[50%] xl:mx-0 pb-2 md:pb-0"
          />
          <img
            src={RadionicaGalerija}
            alt=""
            className="   w-1/2 xl:w-1/6 mx-auto md:mx-0  pb-2 md:pb-0 "
          />
        </div>
      </article>
      <h2 className="text-center text-lg md:text-xl bg-white w-screen pt-4">
        Rekli su o nama ...
      </h2>

      <article>
        <SaidAboutUs />
      </article>

      <h2 className="text-center text-lg md:text-2xl py-2 bg-gray-200 ">
        Sa naseg bloga...
      </h2>
      <article className="bg-white xl:flex overflow-hidden ">
        <div className="py-2 px-2 mb-2 md:px-4 md:py-4  lg:px-8 lg:py-2  bg-gray-200 ">
          <img src={Blog1} alt="" />
          <p className="text-center text-sm md:text-lg px-4 pt-4 ">
            Koliko je bitan topao i prisan odnos dece i roditelja?
          </p>
        </div>

        <div className="py-2 px-2 mb-2 md:px-4 md:py-4  lg:px-8 lg:py-2 bg-gray-200">
          <img src={Blog2} alt="" />
          <p className="text-center text-sm  md:text-lg px-4 py-2 ">
            Igraliste pod maskama
          </p>
        </div>

        <div className="py-2 px-2 mb-2 md:px-4 md:py-4  lg:px-8 lg:py-2 bg-gray-200">
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
