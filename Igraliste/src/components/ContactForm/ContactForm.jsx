import React from 'react'


function ContactForm() {
  return (
    <>
      <form
        action=""
        className="flex flex-col w-1/2  py-10  items-center justify-center  bg-gray-200   "
      >
        <div className="pb-10 text-lg">Posaljite nam poruku </div>
        <input
          type="text"
          placeholder="Vase ime"
          required
          className="active mb-4 p-2 border border-gray-300 rounded w-1/2 py-2 text-lg "
        />
        <input
          type="text"
          placeholder="Vas broj telefona"
          required
          className="mb-4 p-2 border border-gray-300 rounded w-1/2 py-2 text-lg "
        />
        <input
          type="email"
          placeholder="Vas Email"
          required
          className="mb-4 p-2 border border-gray-300 rounded w-1/2 py-2 text-lg"
        />

        <textarea
          placeholder="Recite nam nesto o Vama"
          rows="10"
          className="mb-4 p-2 border border-gray-300 rounded w-1/2 py-2 text-lg "
        ></textarea>

        <input
          type="file"
          name="fil"
          id="file"
          className="mb-5  w-1/2  p-2 pl-0 text-lg"
        />

        <div className="w-1/2 flex items-start">
          <button
            type="submit"
            className="mb-4 p-2 border border-gray-300 w-1/4 rounded  bg-red-500 py-2 text-lg hover:bg-black hover:text-white "
          >
            Posalji
          </button>
        </div>
      </form>
    </>
  );
}

export default ContactForm