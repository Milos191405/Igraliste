import Maskenbal from '../../assets/BlogImages/naslovna-maskenbal.webp'

function Card() {
  return (
    <>
      <div className="w-1/2  py-2 px-2 mb-2 md:px-4 md:py-4  lg:px-8 lg:py-2 bg-gray-200">
        <img src={Maskenbal} alt="" />
        <p className="  text-center text-sm  md:text-lg px-4 py-2 ">
          Igraliste pod maskama
        </p>
      </div>
    </>
  );
}

export default Card