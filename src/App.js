import "./App.css";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Customers from "./pages/Customers";
import Group from "./pages/Group";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

// onst NavItems = [
//   { icon: "", name: "Asosiy", link: "/" },
//   { icon: "", name: "Biz haqimizda", link: "/about" },
//   { icon: "", name: "Mijozlar", link: "/customers" },
//   { icon: "", name: "Jamoa", link: "/group" },
//   { icon: "", name: "Xizmatlar", link: "/services" },
//   { icon: "", name: "Aloqa", link: "/contact" },

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/group" element={<Group />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
