import Layout from '../components/Layout/Layout.jsx'
import Carousel from "../components/CarouselHome/Carousel.jsx";
import ContactForm from '../components/ContactForm/ContactForm.jsx';
import loveImg from '../assets/kontaktImage.webp';

function Kontakt() {
  return (
    <>
      <Layout>
        <Carousel />
        <div className="flex  lg:flex-row text-center items-stretch pt-4  bg-white px-20">
          <div className="flex flex-col  w-1/2  text-lg px-20   ">
            <div className="pt-20 ">
              <p className="tracking-wide">
                Ako si odgovorna i vredna osoba, ako želiš da učestvuješ na
                rođendanima, da se igraš i zabavljaš sa decom, poslužuješ decu i
                odrasle, da crtaš, da pevaš i u tome uživaš, ovo je pravi posao
                za tebe!
              </p>

              <p className="tracking-wide">
                Popunite kontakt formu ili nas pozovite na
              </p>

              <p className="tracking-wide">021/547­039 ili 069/5547­039</p>

              <p className="tracking-wide"> i zakažite sastanak</p>

              <p className="tracking-wide">Vaše Igralište</p>
            </div>
            <div>
              <img
                src={loveImg}
                className="w-3/4 mx-auto pt-20 "
              />
            </div>
          </div>
          <ContactForm />
        </div>
      </Layout>
    </>
  );
}
export default Kontakt