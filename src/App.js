import "./App.css";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Customers from "./pages/Customers";
import Group from "./pages/Group";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/group" element={<Group />} />

        <Route path="/services" element={<Services />}>
          <Route path="iptelephony" element={<h1>Hello iptelephony</h1>} />
          <Route path="siteservices" element={<h1>Hello siteservices</h1>} />
          <Route path="mobileapps" element={<h1>Hello mobileapps</h1>} />
          <Route path="marketing" element={<h1>Hello marketing</h1>} />
          <Route path="automation" element={<h1>Hello automation</h1>} />
        </Route>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
