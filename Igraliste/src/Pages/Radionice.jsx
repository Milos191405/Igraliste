import Carousel from "../components/CarouselHome/Carousel.jsx";
import Footer from "../components/Footer/Footer.jsx";
import jelen from "../assets/Radionice/jelen.webp";
import zec from "../assets/Radionice/zec.webp";
import radionice1 from "../assets/Radionice/radionice1.webp";
import radionice2 from "../assets/Radionice/radionice2.webp";
import radionice3 from "../assets/Radionice/radionice3.webp";
import radionice4 from "../assets/Radionice/radionice4.webp";

function Radionice() {
  return (
    <>
      <main className="pt-[80px] xl:pt-[100px] w-full overflow-x-hidden">
        <Carousel />
        <article className="flex flex-col md:flex-row  px-2 w-screen bg-white      ">
          <img
            src={jelen}
            alt=""
            className="w-1/2 md:w-1/5 xl:w-[30%] my-auto  mx-auto md:px-2 xl:mx-auto    "
          />
          <div className="text-center text-sm md:text-lg   font-style: italic px-8  md:py-4 xl:mx-4 tracking-widest  leading-relaxed  ">
            <p className="xl:px-20 ">
              {" "}
              Idealno mesto za decu različitih uzrasta koja uživaju u kreativnom
              radu – decu koja vole da crtaju, oblikuju, slažu, mažu, peku,
              seku, cepaju, lepe, prave i stvaraju!!
            </p>
            <p>
              Za svakog učesnika radionice uvek se pronađe neka zanimljiva i
              maštovita aktivnost! U kreativnim radionicama svaki put se dešava
              nešto novo, a teme su određene aktuelnim događajima, značajnim
              datumima, godišnjim dobima…
            </p>
            <p className="xl:px-20 ">
              Cilj je da se kod mališana, od najranijeg uzrasta, razvija
              kreativnost i fina motorika, te da se podstiče mašta i uživanje u
              stvaralačkoj igri!
            </p>
            <p className="xl:px-20 ">
              Na našoj facebook stranici možete pogledati fotografije sa već
              održanih radionica, i informisati se o sadržaju i terminima
              narednihih kreativnih programa,te slati svoje ideje,predloge i
              sugestije u vezi sa radom kreativnih radionica.
            </p>
            <p className="xl:px-20 ">
              Za sve informacije možete nas kontaktirati na telefone:
              021/547-039, 069/5547-039 ili nas posetiti u Igralištu.
            </p>
          </div>
          <img
            src={zec}
            alt=""
            className="w-1/2 md:w-1/5 xl:w-[30%] my-auto  mx-auto md:px-2 xl:mx-auto   "
          />
        </article>

        <article className="text-center text-3xl  bg-gray-200  ">
          <h2 className="font-style: italic text-lg md:text-xl pt-5 pb-10 xl:py-5">
            Kako smo bili kreativni ...
          </h2>

          <div className="flex flex-col md:grid grid-cols-2 lg:flex lg:flex-row xl:flex xl:flex-row xl:justify-center lg:px-10 pb-5 gap-y-2 xl:w-[90%] xl:mx-auto gap-x-5">
            <div className="relative group w-1/2 xl:w-1/4 mx-auto md:mx-[50%] lg:mx-0 pb-2 md:pb-0">
              <img
                src={radionice1}
                alt=""
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out "
              />
              <div className="overlay group-hover:opacity-100">
                <span className="overlay-text">Mali kuvari</span>
              </div>
            </div>

            <div className="relative group w-1/2 xl:w-1/4 mx-auto  md:mx-[50%] lg:mx-0 pb-2 md:pb-0">
              <img
                src={radionice2}
                alt=""
                className=" w-full h-full object-cover transition-transform duration-300 ease-in-out "
              />
              <div className="overlay group-hover:opacity-100">
                <span className="overlay-text">Nase more</span>
              </div>
            </div>

            <div className="relative group w-1/2 xl:w-1/4 mx-auto  md:mx-[50%] lg:mx-0 pb-2 md:pb-0">
              <img
                src={radionice3}
                alt=""
                className=" w-full h-full object-cover transition-transform duration-300 ease-in-out"
              />
              <div className="overlay group-hover:opacity-100">
                <span className="overlay-text">Zrno po zrno...</span>
              </div>
            </div>

            <div className="relative group w-1/2 xl:w-1/4 mx-auto  md:mx-[50%] lg:mx-0 pb-2 md:pb-0">
              <img
                src={radionice4}
                alt=""
                className=" w-full h-full object-cover transition-transform duration-300 ease-in-out "
              />
              <div className="overlay group-hover:opacity-100">
                <span className="overlay-text">Novogodisnja</span>
              </div>
            </div>
          </div>
        </article>

        <Footer />
      </main>
    </>
  );
}

export default Radionice;
