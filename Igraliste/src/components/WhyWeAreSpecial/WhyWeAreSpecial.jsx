import RodjendaniGalerija from "../Galerie/galerija-torta.webp";
import IgraonicaGalerija from "../Galerie/galerija-nasaigraonica.webp";
import SpecijalniDogadjajiGalerija from "../Galerie/galerija-specijalni-dogadjaji.webp";
import RadionicaGalerija from "../Galerie/galerija-radionica.webp";
import "./WhyWeAreSpecial.css"; // Import the CSS file

function WhyWeAreSpecial() {
  return (
    <article className="text-center text-3xl bg-gray-200">
      <h2 className="font-italic text-lg md:text-xl pt-5 pb-10 xl:py-5">
        Zasto smo posebni...
      </h2>
      <div className="flex flex-col md:grid grid-cols-2 xl:flex xl:flex-row xl:justify-center pb-5 gap-y-2 gap-x-2">
        <div className="relative group w-1/2 xl:w-1/5 mx-auto md:mx-0 pb-2 md:pb-0">
          <img
            src={RodjendaniGalerija}
            alt="Rodjendani Galerija"
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out"
          />
          <div className="overlay group-hover:opacity-100">
            <span className="overlay-text">Nasa rodjendaonica</span>
          </div>
        </div>
        <div className="relative group w-1/2 xl:w-1/5 mx-auto md:mx-0 pb-2 md:pb-0">
          <img
            src={IgraonicaGalerija}
            alt="Igraonica Galerija"
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out"
          />
          <div className="overlay group-hover:opacity-100">
            <span className="overlay-text">Nasa igraonica</span>
          </div>
        </div>
        <div className="relative group w-1/2 xl:w-1/5 mx-auto md:mx-0 pb-2 md:pb-0">
          <img
            src={SpecijalniDogadjajiGalerija}
            alt="Specijalni Dogadjaji Galerija"
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out"
          />
          <div className="overlay group-hover:opacity-100">
            <span className="overlay-text">Nasi specijalni događaji</span>
          </div>
        </div>
        <div className="relative group w-1/2 xl:w-1/5 mx-auto md:mx-0 pb-2 md:pb-0">
          <img
            src={RadionicaGalerija}
            alt="Radionica Galerija"
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out"
          />
          <div className="overlay group-hover:opacity-100">
            <span className="overlay-text">Nase radionice</span>
          </div>
        </div>
      </div>
    </article>
  );
}

export default WhyWeAreSpecial;
