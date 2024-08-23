import specijalni1 from "../assets/Galerija/NasiSpecijalniDogadjaji/specijalni1.webp";
import specijalni2 from "../assets/Galerija/NasiSpecijalniDogadjaji/specijalni2.webp";
import specijalni3 from "../assets/Galerija/NasiSpecijalniDogadjaji/specijalni3.webp";
import specijalni4 from "../assets/Galerija/NasiSpecijalniDogadjaji/specijalni4.webp";
import specijalni5 from "../assets/Galerija/NasiSpecijalniDogadjaji/specijalni5.webp";
import specijalni6 from "../assets/Galerija/NasiSpecijalniDogadjaji/specijalni6.webp";
import specijalni7 from "../assets/Galerija/NasiSpecijalniDogadjaji/specijalni7.webp";
import specijalni8 from "../assets/Galerija/NasiSpecijalniDogadjaji/specijalni8.webp";
import specijalni9 from "../assets/Galerija/NasiSpecijalniDogadjaji/specijalni9.webp";

//  import dedamraz1 from "../assets/Galerija/NasiSpecijalniDogadjaji/dedamraz1.webp";
//  import dedamraz2 from "../assets/Galerija/NasiSpecijalniDogadjaji/dedamraz2.webp";
//  import dedamraz3 from "../assets/Galerija/NasiSpecijalniDogadjaji/dedamraz3.webp";
//  import dedamraz4 from "../assets/Galerija/NasiSpecijalniDogadjaji/dedamraz4.webp";
//  import dedamraz5 from "../assets/Galerija/NasiSpecijalniDogadjaji/dedamraz5.webp";
//  import dedamraz6 from "../assets/Galerija/NasiSpecijalniDogadjaji/dedamraz6.webp";
//  import dedamraz7 from "../assets/Galerija/NasiSpecijalniDogadjaji/dedamraz7.webp";
//  import dedamraz8 from "../assets/Galerija/NasiSpecijalniDogadjaji/dedamraz8.webp";
//  import dedamraz9 from "../assets/Galerija/NasiSpecijalniDogadjaji/dedamraz9.webp";

import Meda from "../assets/Home/meda-igraliste.webp";
import Panda from "../assets/Home/panda-igraliste.webp";
import Cat1 from "../assets/Rodjendaonica/rodjendaonica-cat1.jpeg";
import Cat2 from "../assets/Rodjendaonica/rodjendaonica-cat2.jpeg";

function NasiSpecijalniDogadjaji() {
  return (
    <>
      <article className="flex pt-[100px] lg:pt-[100px] bg-white  border border-red-500">
        <section className=" w-full mx-5">
          <div className="text-center   text-xl border border-red-500">
            <h1 className="pb-2 style italic">Nasi specijalni dogadjaji...</h1>
            <div>
              <h2 className="text-lg pb-2">Maskenbali u Igralistu</h2>
              <p className="text-sm pb-2">
                U Igralištu vole da se okupljaju princeze, heroji, policajci,
                dobre vile, vatrogasci, duhovi, veštice i svima njima je
                zajedničko da vole da se igraju…
              </p>
              <div className="md:flex md:flex-row md:items-center justify-between  border border-red-500 ">
                <img
                  src={Meda}
                  alt=""
                  className=" hidden md:flex md:w-1/4  border border-red-500 "
                />
                <img
                  src={Cat1}
                  alt=""
                  className=" hidden md:flex md:w-1/4  border border-red-500  "
                />
                <img
                  src={Cat2}
                  alt=""
                  className="  hidden md:flex md:w-1/4  border border-red-500  "
                />
                <img
                  src={Panda}
                  alt=""
                  className="  hidden md:flex md:w-1/4  border border-red-500  "
                />
              </div>
            </div>
            <div className="md:grid md:grid-cols-3 ">
              <img
                src={specijalni1}
                alt=""
                className="p-2 rounded-xl  w-1/ border border-red-500 "
              />
              <img
                src={specijalni2}
                alt=""
                className="p-2 rounded-xl w-1/ border border-red-500 "
              />
              <img
                src={specijalni3}
                alt=""
                className="p-2 rounded-xl w-1/ border border-red-500 "
              />
              <img
                src={specijalni4}
                alt=""
                className="p-2 rounded-xl w-1/ border border-red-500 "
              />
              <img
                src={specijalni5}
                alt=""
                className="p-2 rounded-xl w-1/ border border-red-500 "
              />
              <img
                src={specijalni6}
                alt=""
                className="p-2 rounded-xl w-1/ border border-red-500 "
              />
              <img
                src={specijalni7}
                alt=""
                className="p-2 rounded-xl w-1/ border border-red-500 "
              />
              <img
                src={specijalni8}
                alt=""
                className="p-2 rounded-xl w-1/ border border-red-500 "
              />
              <img
                src={specijalni9}
                alt=""
                className="p-2 rounded-xl w-1/ border border-red-500 "
              />
            </div>
          </div>
        </section>

        <section></section>
      </article>
    </>
  );
}

export default NasiSpecijalniDogadjaji;
