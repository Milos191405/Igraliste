
import Dobrodosli1 from "../assets/dobrodosli-u-deciju-igraonicu.webp";

function Dobrodosli() {
  return (
    <div className="fixed inset-0 flex flex-col justify-center items-center bg-white z-50">
      <img
        src={Dobrodosli1}
        alt="Dobrodosli u deciju igraonicu"
        className="h-[250px]"
      />
      <p className='text-4xl'>U Vase i nase Igraliste</p>
    </div>
  );
}

export default Dobrodosli