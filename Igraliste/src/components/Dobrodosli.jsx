
import Dobrodosli1 from "../assets/dobrodosli-u-deciju-igraonicu.webp";
import Logo from "../assets/Logo.jpeg";

function Dobrodosli() {
  return (
    <div className="fixed inset-0 flex flex-col justify-center items-center bg-white">
      <img src={Dobrodosli1} alt="Dobrodosli u deciju igraonicu" className="" />
      <p className="text-center text-3xl font-style: italic">
        u
      </p>
      <img src={Logo} alt="" />
    </div>
  );
}

export default Dobrodosli