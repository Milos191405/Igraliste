import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
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

// import Meda from "../assets/Home/meda-igraliste.webp";
// import Panda from "../assets/Home/panda-igraliste.webp";
// import Cat1 from "../assets/Rodjendaonica/rodjendaonica-cat1.jpeg";
// import Cat2 from "../assets/Rodjendaonica/rodjendaonica-cat2.jpeg";

// function NasiSpecijalniDogadjaji() {
//   return (
//     <Layout>
//       <article className="flex pt-[100px] lg:pt-[100px] bg-white  border border-red-500">
//         <section className=" w-full mx-5">
//           <div className="text-center   text-xl border border-red-500">
//             <h1 className="pb-2 style italic md:text-2xl lg:pb-5 xl:text-3xl">
//               Nasi specijalni dogadjaji...
//             </h1>
//             <div>
//               <h2 className="text-lg pb-2 md:text-xl lg:text-2xl  ">
//                 Maskenbali u Igralistu
//               </h2>

//               {/* <div className=" hidden md:flex md:flex-row md:items-center justify-between  border border-red-500 ">
//                 <img
//                   src={Meda}
//                   alt=""
//                   className=" hidden md:hidden md:flex md:w-1/4  border border-red-500 "
//                 />
//                 <img
//                   src={Cat1}
//                   alt=""
//                   className=" hidden md:hidden md:flex md:w-1/4  border border-red-500 "
//                 />
//                 <img
//                   src={Cat2}
//                   alt=""
//                   className=" hidden md:hidden md:flex md:w-1/4  border border-red-500 "
//                 />
//                 <img
//                   src={Panda}
//                   alt=""
//                   className=" hidden md:hidden md:flex md:w-1/4  border border-red-500 "
//                 />
//               </div> */}
//             </div>
//             <p className="hidden text-sm pb-2 md:text-lg lg:block lg:pb-4 lg:text-xl ">
//               U Igralištu vole da se okupljaju princeze, heroji, policajci,
//               dobre vile, vatrogasci, duhovi, veštice i svima njima je
//               zajedničko da vole da se igraju…
//             </p>
//             <div className="md:grid md:grid-cols-2 lg:grid-cols-3  ">
//               <p className=" hidden  text-sm pb-2 md:text-lg md:grid border border-red-500 my-auto lg:hidden  ">
//                 U Igralištu vole da se okupljaju princeze, heroji, policajci,
//                 dobre vile, vatrogasci, duhovi, veštice i svima njima je
//                 zajedničko da vole da se igraju…
//               </p>
//               <img
//                 src={specijalni1}
//                 alt=""
//                 className="p-2 rounded-xl  border border-red-500 "
//               />
//               <img
//                 src={specijalni2}
//                 alt=""
//                 className="p-2 rounded-xl  border border-red-500 "
//               />
//               <img
//                 src={specijalni3}
//                 alt=""
//                 className="p-2 rounded-xl border border-red-500 "
//               />
//               <img
//                 src={specijalni4}
//                 alt=""
//                 className="p-2 rounded-xl  border border-red-500 "
//               />
//               <img
//                 src={specijalni5}
//                 alt=""
//                 className="p-2 rounded-xl  border border-red-500 "
//               />
//               <img
//                 src={specijalni6}
//                 alt=""
//                 className="p-2 rounded-xl w-1/ border border-red-500 "
//               />
//               <img
//                 src={specijalni7}
//                 alt=""
//                 className="p-2 rounded-xl w-1/ border border-red-500 "
//               />
//               <img
//                 src={specijalni8}
//                 alt=""
//                 className="p-2 rounded-xl w-1/ border border-red-500 "
//               />
//               <img
//                 src={specijalni9}
//                 alt=""
//                 className="p-2 rounded-xl w-1/ border border-red-500 "
//               />
//             </div>
//           </div>
//         </section>

//       </article>
//     </Layout>
//   );
// }

// export default NasiSpecijalniDogadjaji;

function NasiSpecijalniDogadjaji() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Layout>
      <div className="parallax-container">
        <div
          className="parallax-bg"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        ></div>
        <article className="flex pt-[100px] lg:pt-[100px] bg-white border border-red-500">
          <section className="w-full mx-5">
            <div className="text-center text-xl border border-red-500">
              <h1 className="pb-2 italic md:text-2xl lg:pb-5 xl:text-3xl">
                Nasi specijalni dogadjaji...
              </h1>
              <div>
                <h2 className="text-lg pb-2 md:text-xl lg:text-2xl">
                  Maskenbali u Igralistu
                </h2>
              </div>
              <p className="hidden text-sm pb-2 md:text-lg lg:block lg:pb-4 lg:text-xl">
                U Igralištu vole da se okupljaju princeze, heroji, policajci,
                dobre vile, vatrogasci, duhovi, veštice i svima njima je
                zajedničko da vole da se igraju…
              </p>
              <div className="md:grid md:grid-cols-2 lg:grid-cols-3">
                <p className="hidden text-sm pb-2 md:text-lg md:grid border border-red-500 my-auto lg:hidden">
                  U Igralištu vole da se okupljaju princeze, heroji, policajci,
                  dobre vile, vatrogasci, duhovi, veštice i svima njima je
                  zajedničko da vole da se igraju…
                </p>
                <img
                  src={specijalni1}
                  alt="Specijalni događaj 1"
                  className="p-2 rounded-xl border border-red-500"
                />
                <img
                  src={specijalni2}
                  alt="Specijalni događaj 2"
                  className="p-2 rounded-xl border border-red-500"
                />
                <img
                  src={specijalni3}
                  alt="Specijalni događaj 3"
                  className="p-2 rounded-xl border border-red-500"
                />
                <img
                  src={specijalni4}
                  alt="Specijalni događaj 4"
                  className="p-2 rounded-xl border border-red-500"
                />
                <img
                  src={specijalni5}
                  alt="Specijalni događaj 5"
                  className="p-2 rounded-xl border border-red-500"
                />
                <img
                  src={specijalni6}
                  alt="Specijalni događaj 6"
                  className="p-2 rounded-xl w-1/ border border-red-500"
                />
                <img
                  src={specijalni7}
                  alt="Specijalni događaj 7"
                  className="p-2 rounded-xl w-1/ border border-red-500"
                />
                <img
                  src={specijalni8}
                  alt="Specijalni događaj 8"
                  className="p-2 rounded-xl w-1/ border border-red-500"
                />
                <img
                  src={specijalni9}
                  alt="Specijalni događaj 9"
                  className="p-2 rounded-xl w-1/ border border-red-500"
                />
              </div>
            </div>
          </section>
        </article>
      </div>
    </Layout>
  );
}

export default NasiSpecijalniDogadjaji;
