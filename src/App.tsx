/* import { Landing } from "./pages/Landing"; */
import "./App.css";
import React, { useEffect, useState } from "react";
import { Dashboard } from "./pages/dashboard";
import Footer from "./components/Footer/Footer";
import { NavBarLeft } from "./components/ComplexNavbar/NavBarLeft";
import { IsLoading } from "./components/IsLoading/IsLoading";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Симуляція завантаження даних або дій
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Приблизний час завантаження в мілісекундах
  }, []);

  return (
    <>
      {isLoading ? (
        <IsLoading/>
      ) : (
        // {/* <Landing /> */}
        <Dashboard />
        // {/* <Footer /> */}
      )}
    </>
  );
}

export default App;
