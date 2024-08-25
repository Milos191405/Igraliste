import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Home from "./Pages/Home.jsx";
import Dobrodosli from "./Pages/Dobrodosli.jsx";
import Rodjendaonica from "./Pages/Rodjendaonica.jsx";
import Radionice from './Pages/Radionice.jsx';
import Blog from './Pages/Blog.jsx';
import BlogPost from "./Pages/BlogPost.jsx";
import Cenovnik from './Pages/Cenovnik.jsx';
import Galerija from './Pages/Galerija.jsx';
import NasiSpecijalniDogadjaji from './Pages/NasiSpecijalniDogadjaji.jsx';
import Kontakt from './Pages/Kontakt.jsx';


function App() {
  const [showDobrodosli, setShowDobrodosli] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDobrodosli(false);
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showDobrodosli ? (
        <Dobrodosli />
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rodjendaonica" element={<Rodjendaonica />} />
            <Route path="/radionice" element={<Radionice />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:title" element={<BlogPost />} />
            <Route path="/cenovnik" element={<Cenovnik />} />
            <Route path="/galerija" element={<Galerija />} />
            <Route
              path="/nasi-specijalni-dogadjaji"
              element={<NasiSpecijalniDogadjaji />}
            />
            <Route path="/kontakt" element={<Kontakt />} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </>
      )}
    </>
  );
}

export default App;

