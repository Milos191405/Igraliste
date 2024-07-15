import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
 import Home from "./Pages/Home.jsx";
import Dobrodosli from "./Pages/Dobrodosli.jsx";




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
      {showDobrodosli && <Dobrodosli />}
      {!showDobrodosli && (
        <>
          <Navbar />
           <Routes>
            <Route path="/" element={<Home />} />
         
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
