import Layout from "../components/Layout/Layout.jsx";
import Meda from "../assets/Home/meda-igraliste.webp";
import Panda from "../assets/Home/panda-igraliste.webp";
import SaidAboutUs from "../components/SaidAboutUs/SaidAboutUs.jsx";
import Carousel from "../components/CarouselHome/Carousel.jsx";
// import WhyWeAreSpecial from '../components/WhyWeAreSpecial/WhyWeAreSpecial.jsx'
import BlogPostHome from "./BlogPostHome.jsx";
import TextComponent from "../components/TextComponent/TextComponent.jsx";
import ImageGallery from "../components/4ImagesComponent/ImageGallery.jsx";
//import "../../components/4ImagesComponent/ImageGallery.css";
 import RodjendaniGalerija from "../components/Galerie/galerija-torta.webp";
 import IgraonicaGalerija from "../components/Galerie/galerija-nasaigraonica.webp";
 import SpecijalniDogadjajiGalerija from "../components/Galerie/galerija-specijalni-dogadjaji.webp";
 import RadionicaGalerija from "../components/Galerie/galerija-radionica.webp"

function Home() {

   const textContent = [
     "Igralište je dečija igraonica namenjena deci najmladjeg uzrasta. Pored prostora koji je u potpunosti prilagodjen mališanima i njihovoj bezbednoj igri, Igralište sadrži i kafić u kome naši odrasli gosti mogu da se opuste u prijatnoj atmosferi.",
     "Igraonica i kafić su u istom nivou pa deca nesmetano mogu prilaziti odraslima što im daje dodatan osećaj sigurnosti.",
     "U prostoru za igru se nalaze originalni i edukativni dečiji sadržaji. Pored 3D Lavirinta nudimo i čitav niz igračaka u kojima deca mogu da se igraju igre uloga, pa tako postaju pravi mali kuvari, majstori, lekari, prodavci, vozači, vatrogasci, princeze… Imamo i veliki izbor društvenih igara, kocaka i sličnih igračaka za decu veliku i malu.",
     "Za najmladje goste tu je bazenčić sa lopticama, ljuljaška, guralice i igračke za bebe.",
     "U našoj igraonici možete proslaviti nezaboravne rodjendane vašim mališanima, uživati u svakodnevnoj igri i učestvovati u kreativnim radionicama koje sa puno pažnje priprema naše stručno osoblje. Prostor je klimatizovan, postoji i odvojen deo namenjen pušačima, a za najmladje postoji deo za presvlačenje.",
   ];

   const title = " Zasto smo posebni...";
  const images = [
    {
      src: RodjendaniGalerija,
      alt: "Rodjendani Galerija",
      caption: "Nasa rodjendaonica",
    },
    {
      src: IgraonicaGalerija,
      alt: "Igraonica Galerija",
      caption: "Nasa igraonica",
    },
    {
      src: SpecijalniDogadjajiGalerija,
      alt: "Specijalni Dogadjaji Galerija",
      caption: "Nasi specijalni događaji",
    },
    {
      src: RadionicaGalerija,
      alt: "Radionica Galerija",
      caption: "Nase radionice",
    },
  ];
  return (
    <Layout>
      <Carousel />
       <TextComponent leftImage={Meda} rightImage={Panda} text={textContent} />

      <ImageGallery title={title} images={images} />
      <SaidAboutUs /> 
      <BlogPostHome title=" Sa naseg bloga..." /> 
    </Layout>
  );
}

export default Home;
