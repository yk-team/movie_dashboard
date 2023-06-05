/* import { Landing } from "./pages/Landing"; */
import "./App.css";
import React, { useEffect, useState } from "react";
import { Dashboard } from "./pages/dashboard";
import Footer from "./components/Footer/Footer";
import { NavBarLeft } from "./components/ComplexNavbar/NavBarLeft";
import { IsLoading } from "./components/IsLoading/IsLoading";
import { Cart } from "./components/Cart/Cart";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 50);
  }, []);

  return <Cart />;
  // return <>{isLoading ? <IsLoading /> : <Dashboard />}</>;
}

export default App;
