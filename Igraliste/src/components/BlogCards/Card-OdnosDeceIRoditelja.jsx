import { useState } from "react";
import Maskenbal from "../../assets/BlogImages/naslovna-maskenbal.webp";

const OdnosDeceIRoditelja = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleToggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  return (
    <div>
      <div
        onClick={handleToggleModal}
        className="cursor-pointer w-1/2 py-2 px-2 mb-2 md:px-4 md:py-4 lg:px-8 lg:py-2 bg-gray-200"
      >
        <img src={Maskenbal} alt="Maskenbal Image" />
        <p className="text-center text-sm md:text-lg px-4 py-2">
          Igraliste pod maskama test
        </p>
      </div>

      {isModalVisible && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg w-3/4 h-3/4 relative">
            <button
              className="absolute top-2 right-2 text-gray-600"
              onClick={handleToggleModal}
            >
              Close
            </button>
            <div className="w-full h-full overflow-y-auto">
              <p>j,sbfjdjsdbfbndbsxbfs</p>
              <img src={Maskenbal} alt="Maskenbal Image" className="w-full" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OdnosDeceIRoditelja;
