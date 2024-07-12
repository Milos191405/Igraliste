
import { FaFacebook, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer className="bg-black text-white  px-4 lg:">
        <article className="lg:flex lg:justify-around py-5"> 
          <div>
            <h3 className="text-sm md:text-lg py-2">Info</h3>
            <p className="md:text-sm">Kosancic Ivana 6, 21000 Novi Sad</p>
            <p className="md:text-smtext-gray-400">021/547-039 i 063.....</p>
            <p className="md:text-sm">igralistenovisad@gmail.com</p>
            <p className="md:text-sm text-gray-400">
              Radno vreme: svakog dana 9 - 21h
            </p>
          </div>
          <div>
            <h3 className="text-sm md:text-lg py-2 ">Postanimo prijatelji</h3>
            <div className="flex justify-start items-center gap-3 pb-4 ">
              <a
                href="https://www.facebook.com/igralistens/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <FaFacebook className="text-lg md:text-2xl" />
              </a>

              <a
                href="https://www.instagram.com/igraliste/?hl=sr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <FaInstagram className="text-lg md:text-2xl" />
              </a>
            </div>
          </div>
        </article>
        <div className="lg:flex lg:justify-between">
          <p className="md:text-sm ">
            Nas sajt podrzava Pokrajinski sekretarijat za privredu i turizam
          </p>
          <p className="text-[6px] md:text-xs ">
            Copyright © 2023 Igralište. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
