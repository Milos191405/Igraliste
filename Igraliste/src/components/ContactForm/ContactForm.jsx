import { useState } from 'react';


function ContactForm() {

  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  
  return (
    <form
      action=""
      className="flex flex-col lg:w-1/2  py-10  items-center justify-center  bg-gray-200 border border-gray-400  "
    >
      <div className="pb-10 text-lg">Posaljite nam poruku </div>
      <input
        type="text"
        placeholder="Vase ime"
        required
        className="active mb-4 p-2 text-sm border border-gray-300 rounded w-5/6 lg:w-1/2 py-2 lg:text-lg "
      />
      <input
        type="text"
        placeholder="Vas broj telefona"
        required
        className="mb-4 p-2 text-sm border border-gray-300 rounded w-5/6 lg:w-1/2 py-2 lg:text-lg "
      />
      <input
        type="email"
        placeholder="Vas Email"
        required
        className="mb-4 p-2 text-sm border border-gray-300 rounded w-5/6 lg:w-1/2 py-2 lg:text-lg "
      />

      <textarea
        placeholder="Recite nam nesto o Vama"
        rows="10"
        className="mb-4 p-2 text-sm border border-gray-300 rounded w-5/6 lg:w-1/2 py-2 lg:text-lg  "
      ></textarea>

      <div className=" w-1/2 border ">
        <input
          type="file"
          name="file"
          id="file"
          className="hidden"
          onChange={handleFileChange} // Handle file selection
        />
        <label
          htmlFor="file"
          className="cursor-pointer inline-block mb-1 lg:w-1/2 p-2 lg:pl-0 text-sm lg:text-lg  text-center  bg-red-500 text-white hover:bg-black"
        >
          Choose a file
        </label>

        <p className="text-sm lg:text-lg text-gray-700  ">
          {selectedFile
            ? `Selected file: ${selectedFile.name}`
            : "No file selected"}
        </p>
      </div>

      <div className="w-1/2 pt-4 border">
        <button
          type="submit"
          className="mb-4 p-2 border text-white border-gray-300 w-3/4 md:w-1/3 lg:w-1/2 rounded  bg-red-500 py-2 text-sm lg:text-lg hover:bg-black hover:text-white "
        >
          Posalji
        </button>
      </div>
    </form>
  );
}

export default ContactForm