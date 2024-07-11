import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import Logo from "../assets/Logo.jpeg";
import { FaBars, FaTimes } from "react-icons/fa";




function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const closeMenu = () => setNav(false);

  return (
    <nav className="fixed top h-[80px] w-screen flex justify-between items-center px-4 bg-[#fffdfd] text-gray-700">
      <div className="border-red-600">
        <img src={Logo} alt="Logo" className="w-[200px]" />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-3 border-red-600">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-red-500" : "hover:text-red-500"
            }
          >
            Igraonica
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/rodjendaonica"
            className={({ isActive }) =>
              isActive ? "text-red-500" : "hover:text-red-500"
            }
          >
            Rodjendaonica
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/radionice"
            className={({ isActive }) =>
              isActive ? "text-red-500" : "hover:text-red-500"
            }
          >
            Radionice
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive ? "text-red-500" : "hover:text-red-500"
            }
          >
            Blog
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/cenovnik"
            className={({ isActive }) =>
              isActive ? "text-red-500" : "hover:text-red-500"
            }
          >
            Cenovnik
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/galerija"
            className={({ isActive }) =>
              isActive ? "text-red-500" : "hover:text-red-500"
            }
          >
            Galerija
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/kontakt"
            className={({ isActive }) =>
              isActive ? "text-red-500" : "hover:text-red-500"
            }
          >
            Kontakt
          </NavLink>
        </li>
      </ul>

      {/* Hamburger Icon */}
      <div
        onClick={handleClick}
        className="md:hidden z-10 cursor-pointer"
        aria-controls="mobile-menu"
        aria-expanded={nav ? "true" : "false"}
      >
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul
        id="mobile-menu"
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-screen h-screen bg-[#fffdfd] text-gray-500 flex flex-col justify-center items-center "
        }
      >
        <li
          onClick={closeMenu}
          className="text-2xl py-2 w-3/4 text-center  hover:text-gray-700 mb-2"
        >
          <Link to="/">Igraonica</Link>
        </li>

        <li
          onClick={closeMenu}
          className="text-2xl py-2 w-3/4 text-center  hover:text-gray-700 mb-2"
        >
          <Link to="/rodjendaonica">Rodjendaonica</Link>
        </li>

        <li
          onClick={closeMenu}
          className="text-2xl py-2 w-3/4 text-center  hover:text-gray-700 mb-2"
        >
          <Link to="/radionice">Radionice</Link>
        </li>

        <li
          onClick={closeMenu}
          className="text-2xl py-2 w-3/4 text-center  hover:text-gray-700 mb-2"
        >
          <Link to="/blog">Blog</Link>
        </li>

        <li
          onClick={closeMenu}
          className="text-2xl py-2 w-3/4 text-center  hover:text-gray-700 mb-2"
        >
          <Link to="/cenovnik">Cenovnik</Link>
        </li>

        <li
          onClick={closeMenu}
          className="text-2xl py-2 w-3/4 text-center  hover:text-gray-700 mb-2"
        >
          <Link to="/galerija">Galerija</Link>
        </li>

        <li
          onClick={closeMenu}
          className="text-2xl py-2 w-3/4 text-center  hover:text-gray-700 mb-2"
        >
          <Link to="/kontakt">Kontakt</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
