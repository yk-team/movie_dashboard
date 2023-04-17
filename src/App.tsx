import { Landing } from "./pages/landing";
import "./App.css";
import ComplexNavbar from "./components/ComplexNavbar.tsx/ComplexNavbar";
import { Dashboard } from "./pages/Dashboard";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      {/* <Landing /> */}
      <Dashboard />
      <Footer />
    </>
  );
}

export default App;
