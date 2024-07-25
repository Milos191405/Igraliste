
import Meda from "../assets/Home/meda-igraliste.webp";
import Panda from "../assets/Home/panda-igraliste.webp";
import SaidAboutUs from "../components/SaidAboutUs/SaidAboutUs.jsx";
import Carousel from "../components/CarouselHome/Carousel.jsx";
import WhyWeAreSpecial from '../components/WhyWeAreSpecial/WhyWeAreSpecial.jsx'
import BlogPostHome from "./BlogPostHome.jsx";
import Footer from "../components/Footer/Footer.jsx";
// import RodjendaniGalerija from "../components/Galerie/galerija-torta.webp";
// import IgraonicaGalerija from "../components/Galerie/galerija-nasaigraonica.webp";
// import SpecijalniDogadjajiGalerija from "../components/Galerie/galerija-specijalni-dogadjaji.webp";
// import RadionicaGalerija from "../components/Galerie/galerija-radionica.webp";


function Home() {
  return (
    <main className="pt-[80px] xl:pt-[100px] w-full overflow-x-hidden ">
     
      <Carousel />
      <article className="flex flex-col md:flex-row  px-2 w-screen bg-white    ">
        <img
          src={Meda}
          className="w-1/2 md:w-1/5 xl:w-[30%] my-auto  mx-auto md:px-2 xl:mx-auto   "
        />
        <div className="text-center text-sm md:text-lg font-style: italic px-8  md:py-4 xl:mx-4 tracking-widest  leading-relaxed ">
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
      <WhyWeAreSpecial/>
      <h2 className="text-center text-lg md:text-xl bg-white w-screen pt-4">
        Rekli su o nama ...
      </h2>

      <article>
        <SaidAboutUs />
      </article>

      <h2 className="text-center text-lg md:text-2xl py-2 bg-gray-200 ">
        Sa naseg bloga...
      </h2>
      <BlogPostHome/>
     
      <Footer />
    </main>
  );
}

export default Home;
