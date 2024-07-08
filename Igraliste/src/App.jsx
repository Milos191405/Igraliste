import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../src/components/Navbar";
import Home from "../src/components/Home";
import Dobrodosli from "./components/Dobrodosli.jsx";

function App() {
  const [showDobrodosli, setShowDobrodosli] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDobrodosli(false);
    }, 1000); // 2 seconds

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
