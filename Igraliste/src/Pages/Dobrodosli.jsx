
import Dobrodosli1 from "../assets/dobrodosli-u-deciju-igraonicu.webp";
import Logo from "../assets/Logo.jpeg";

function Dobrodosli() {
  return (
    <div className="fixed inset-0 flex flex-col justify-center items-center bg-white">
      <img src={Dobrodosli1} alt="Dobrodosli u deciju igraonicu" className="xl:w-[600px] py-10" />
      <p className="text-center text-3xl font-style: italic">
        
      </p>
      <img src={Logo} alt="" className="xl:w-[600px]" />
    </div>
  );
}

export default Dobrodosli