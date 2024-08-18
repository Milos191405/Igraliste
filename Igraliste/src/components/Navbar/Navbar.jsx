import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import Logo from "../../assets/Logo.jpeg";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const closeMenu = () => setNav(false);

  const navLinks = [
    { to: "/", label: "Igraonica" },
    { to: "/rodjendaonica", label: "Rodjendaonica" },
    { to: "/radionice", label: "Radionice" },
    { to: "/blog", label: "Blog" },
    { to: "/cenovnik", label: "Cenovnik" },
    { to: "/galerija", label: "Galerija" },
    { to: "/kontakt", label: "Kontakt" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full ${
        nav ? "h-screen" : "h-[80px]"
      } xl:h-[100px] flex justify-between items-center px-4 md:px-6 bg-[#fffdfd] text-gray-700 z-50 transition-all  duration-300 ease-in-out `}
    >
      <div className="flex justify-between items-center w-full  ">
        {/* Logo */}
        <Link to="/" className="flex items-center" >
          <img
            src={Logo}
            alt="Logo"
            className="w-[200px] xl:w-[250px] z-50 absolute top-0 left-4"
          />
        </Link>
        {/* Hamburger Icon */}
        <button
          onClick={handleClick}
          className="lg:hidden z-50 cursor-pointer absolute top-6 right-4 "
          aria-controls="mobile-menu"
          aria-expanded={nav ? "true" : "false"}
          aria-label="Toggle navigation menu"
        >
          {!nav ? <FaBars /> : <FaTimes />}
        </button>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex gap-2 text-sm lg:text-lg xl:text-lg 2xl:text-xl lg:gap-3">
        {navLinks.map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                isActive ? "text-red-500" : "hover:text-red-500"
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Mobile Menu */}
      <ul
        id="mobile-menu"
        className={`${
          nav ? "flex" : "hidden"
        } absolute top-0 left-0 w-full h-screen bg-[#fffdfd] text-gray-700 flex-col justify-center z-40`}
      >
        {navLinks.map(({ to, label }) => (
          <li
            key={to}
            onClick={closeMenu}
            className="text-xl text-left py-2 hover:text-gray-700 mb-2 w-screen px-6 border-b border-gray-300"
          >
            <Link to={to}>{label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;

// import { Link, NavLink } from "react-router-dom";
// import { useState } from "react";
// import Logo from "../assets/Logo.jpeg";
// import { FaBars, FaTimes } from "react-icons/fa";

// function Navbar() {
//   const [nav, setNav] = useState(false);
//   const handleClick = () => setNav(!nav);
//   const closeMenu = () => setNav(false);

//   return (
//     <nav className="fixed top h-[80px] xl:h-[100px] w-full flex justify-between items-center px-4 md:px-6 bg-[#fffdfd] text-gray-700 overflow-hidden ">
//       <div className="">
//         <img
//           src={Logo}
//           alt="Logo"
//           className="w-[200px] xl:w-[250px]"
//         />
//       </div>

//       {/* Desktop Menu */}
//       <ul className="hidden lg:flex gap-2  text-sm lg:text-sm xl:text-lg lg:gap-3">
//         <li>
//           <NavLink
//             to="/"
//             className={({ isActive }) =>
//               isActive ? "text-red-500" : "hover:text-red-500"
//             }
//           >
//             Igraonica
//           </NavLink>
//         </li>

//         <li>
//           <NavLink
//             to="/rodjendaonica"
//             className={({ isActive }) =>
//               isActive ? "text-red-500" : "hover:text-red-500"
//             }
//           >
//             Rodjendaonica
//           </NavLink>
//         </li>

//         <li>
//           <NavLink
//             to="/radionice"
//             className={({ isActive }) =>
//               isActive ? "text-red-500" : "hover:text-red-500"
//             }
//           >
//             Radionice
//           </NavLink>
//         </li>

//         <li>
//           <NavLink
//             to="/blog"
//             className={({ isActive }) =>
//               isActive ? "text-red-500" : "hover:text-red-500"
//             }
//           >
//             Blog
//           </NavLink>
//         </li>

//         <li>
//           <NavLink
//             to="/cenovnik"
//             className={({ isActive }) =>
//               isActive ? "text-red-500" : "hover:text-red-500"
//             }
//           >
//             Cenovnik
//           </NavLink>
//         </li>

//         <li>
//           <NavLink
//             to="/galerija"
//             className={({ isActive }) =>
//               isActive ? "text-red-500" : "hover:text-red-500"
//             }
//           >
//             Galerija
//           </NavLink>
//         </li>

//         <li>
//           <NavLink
//             to="/kontakt"
//             className={({ isActive }) =>
//               isActive ? "text-red-500" : "hover:text-red-500"
//             }
//           >
//             Kontakt
//           </NavLink>
//         </li>
//       </ul>

//       {/* Hamburger Icon */}
//       <div
//         onClick={handleClick}
//         className="lg:hidden z-10 cursor-pointer"
//         aria-controls="mobile-menu"
//         aria-expanded={nav ? "true" : "false"}
//       >
//         {!nav ? <FaBars /> : <FaTimes />}
//       </div>

//       {/* Mobile Menu */}
//       <ul
//         id="mobile-menu"
//         className={
//           !nav
//             ? "hidden"
//             : "absolute top-0 left-0 w-screen h-screen bg-[#fffdfd] text-gray-700  flex flex-col justify-center items-center "
//         }
//       >
//         <li
//           onClick={closeMenu}
//           className="text-2xl py-2 w-3/4 text-center  hover:text-gray-700 mb-2 "
//         >
//           <Link to="/">Igraonica</Link>
//         </li>

//         <li
//           onClick={closeMenu}
//           className="text-2xl py-2 w-3/4 text-center  hover:text-gray-700 mb-2"
//         >
//           <Link to="/rodjendaonica">Rodjendaonica</Link>
//         </li>

//         <li
//           onClick={closeMenu}
//           className="text-2xl py-2 w-3/4 text-center  hover:text-gray-700 mb-2"
//         >
//           <Link to="/radionice">Radionice</Link>
//         </li>

//         <li
//           onClick={closeMenu}
//           className="text-2xl py-2 w-3/4 text-center  hover:text-gray-700 mb-2"
//         >
//           <Link to="/blog">Blog</Link>
//         </li>

//         <li
//           onClick={closeMenu}
//           className="text-2xl py-2 w-3/4 text-center  hover:text-gray-700 mb-2"
//         >
//           <Link to="/cenovnik">Cenovnik</Link>
//         </li>

//         <li
//           onClick={closeMenu}
//           className="text-2xl py-2 w-3/4 text-center  hover:text-gray-700 mb-2"
//         >
//           <Link to="/galerija">Galerija</Link>
//         </li>

//         <li
//           onClick={closeMenu}
//           className="text-2xl py-2 w-3/4 text-center  hover:text-gray-700 mb-2"
//         >
//           <Link to="/kontakt">Kontakt</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;
