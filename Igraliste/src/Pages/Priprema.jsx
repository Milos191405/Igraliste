import { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";



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