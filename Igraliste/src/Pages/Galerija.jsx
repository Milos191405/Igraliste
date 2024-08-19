import  { useEffect, useState} from  'react'
import Layout from '../components/Layout/Layout'
import galerija1 from '../assets/Galerija/A.webp'
import galerija2 from '../assets/Galerija/decije-mudrolije.webp'
import galerija3 from '../assets/Galerija/sovaA.webp'
import galerija4 from '../assets/Galerija/igraliste-momenti.webp'    
import galerija5 from '../assets/Galerija/igraliste-momenti1.webp'
import galerija6 from '../assets/Galerija/igraliste-momenti2.webp'  
import galerija7 from '../assets/Galerija/igraliste-momenti3.webp'


function Galerija() {

    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        setScrollY(window.pageYOffset);
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
    return (
      <Layout>
        <div className="pt-[120px] bg-white">
          <h1 className="text-center text-lg pb-3 md:text-xl lg:text-2xl style italic lg:pb-10 ">
            “Dečije igre nisu samo igre, nego ih treba smatrati ozbiljnom dečjom
            delatnošću.”
          </h1>
          <p className="text-center text-sm md:text-lg lg:text-2xl text-red-500">
            Mišel de Montenj
          </p>
        </div>
        <div className="parallax-container">
          <div
            className="parallax-bg"
            style={{ transform: `translateY(${scrollY * 0.5}px)` }}
          ></div>
          <div className="border border-red-500 px-5  ">
            <div className="flex flex-col  text-sm py-5 md:flex-row md:px- lg:flex-row justify-between lg:py-10 border border-red-500  ">
              <img src={galerija5} alt="" className="md:w-1/3 lg:w-1/4" />
              <img src={galerija4} alt="" className="md:w-1/3 lg:w-1/4" />
              <img src={galerija6} alt="" className="md:w-1/3 lg:w-1/4" />
            </div>

            <div className="fflex flex-col  text-sm py-5 md:flex-row md:px- lg:flex-row justify-between lg:py-10 border border-red-500 ">
              <img src={galerija2} alt="" className="md:w-1/3 lg:w-1/4" />
              <img src={galerija3} alt="" className="md:w-1/3 lg:w-1/4" />
              <img src={galerija7} alt="" className="md:w-1/3 lg:w-1/4" />
            </div>
          </div>
        </div>
      </Layout>
    );
}

export default Galerija