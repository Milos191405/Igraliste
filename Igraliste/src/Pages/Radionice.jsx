import Layout from "../components/Layout/Layout.jsx";
import Carousel from "../components/CarouselHome/Carousel.jsx";
import Footer from "../components/Footer/Footer.jsx";
import TextComponent from "../components/TextComponent/TextComponent.jsx";
import jelen from "../assets/Radionice/jelen.webp";
import zec from "../assets/Radionice/zec.webp";
import ImageGallery from "../components/4ImagesComponent/ImageGallery.jsx";
import radionice1 from "../assets/Radionice/radionice1.webp";
import radionice2 from "../assets/Radionice/radionice2.webp";
import radionice3 from "../assets/Radionice/radionice3.webp";
import radionice4 from "../assets/Radionice/radionice4.webp";

function Radionice() {
  const textContent = [
    "Idealno mesto za decu različitih uzrasta koja uživaju u kreativnom radu – decu koja vole da crtaju, oblikuju, slažu, mažu, peku, seku, cepaju, lepe, prave i stvaraju!!",
    "Za svakog učesnika radionice uvek se pronađe neka zanimljiva i maštovita aktivnost! U kreativnim radionicama svaki put se dešava nešto novo, a teme su određene aktuelnim događajima, značajnim datumima, godišnjim dobima…",
    "Cilj je da se kod mališana, od najranijeg uzrasta, razvija kreativnost i fina motorika, te da se podstiče mašta i uživanje u stvaralačkoj igri!",
    "Na našoj Facebook stranici možete pogledati fotografije sa već održanih radionica, i informisati se o sadržaju i terminima narednih kreativnih programa, te slati svoje ideje, predloge i sugestije u vezi sa radom kreativnih radionica.",
    "Za sve informacije možete nas kontaktirati na telefone: 021/547-039, 069/5547-039 ili nas posetiti u Igralištu.",
  ];

  const title = " Kako smo bili kreativni ...";
  const images = [
    {
      src: radionice1,
      alt: "Radionica 1",
      caption: "Mali kuvari",
    },
    {
      src: radionice2,
      alt: "Radionica 2",
      caption: "Nase more",
    },
    {
      src: radionice3,
      alt: "Radionica 3",
      caption: "Zrno po zrno...",
    },
    {
      src: radionice4,
      alt: "Radionica 4",
      caption: "Novogodisnja",
    },
  ];

  return (
    <>
      <Layout>
        <Carousel />
        <TextComponent leftImage={jelen} rightImage={zec} text={textContent} />
        <ImageGallery title={title} images={images} />

        <Footer />
      </Layout>
    </>
  );
}

export default Radionice;
