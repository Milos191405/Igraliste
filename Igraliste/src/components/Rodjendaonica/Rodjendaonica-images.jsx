import rodjendaonica1 from "../../assets/Rodjendaonica/rodjendaonica1.jpeg";
import rodjendaonica2 from "../../assets/Rodjendaonica/rodjendaonica2.jpeg";
import rodjendaonica3 from "../../assets/Rodjendaonica/rodjendaonica3.jpeg";
import rodjendaonica4 from "../../assets/Rodjendaonica/rodjendaonica4.jpeg";
import './Rodjendaonica.css'
function RodjendaonicaImages() {
  return (
    <article className="text-center text-3xl bg-white">
      <h2 className="italic text-lg md:text-xl pt-5 pb-10 xl:py-5">
        Nasi drugari su se ovako proveli ...
      </h2>
      <div className="flex flex-col md:grid grid-cols-2 lg:flex lg:flex-row xl:flex xl:flex-row xl:justify-center lg:px-10 pb-5 gap-y-2 xl:w-[90%] xl:mx-auto gap-x-5">
        <div className="relative group w-1/2 xl:w-1/4 mx-auto md:mx-[50%] lg:mx-0 pb-2 md:pb-0">
          <img
            src={rodjendaonica1}
            alt="Rodjendani Galerija"
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out"
          />
          <div className="overlay group-hover:opacity-100">
            <span className="overlay-text">Dodati mesec rodjendana</span>
          </div>
        </div>

        <div className="relative group w-1/2 xl:w-1/4 mx-auto md:mx-0 pb-2 md:pb-0">
          <img
            src={rodjendaonica2}
            alt="Igraonica Galerija"
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out"
          />
          <div className="overlay group-hover:opacity-100">
            <span className="overlay-text">Dodati mesec rodjendana</span>
          </div>
        </div>

        <div className="relative group w-1/2 xl:w-1/4 mx-auto md:mx-[50%] lg:mx-0 pb-2 md:pb-0">
          <img
            src={rodjendaonica3}
            alt="Specijalni Dogadjaji Galerija"
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out"
          />
          <div className="overlay group-hover:opacity-100">
            <span className="overlay-text">Dodati mesec rodjendana</span>
          </div>
        </div>

        <div className="relative group w-1/2 xl:w-1/4 mx-auto md:mx-0 pb-2 md:pb-0">
          <img
            src={rodjendaonica4}
            alt="Radionica Galerija"
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out"
          />
          <div className="overlay group-hover:opacity-100">
            <span className="overlay-text">Dodati mesec rodjendana</span>
          </div>
        </div>
      </div>
    </article>
  );
}

export default RodjendaonicaImages;
