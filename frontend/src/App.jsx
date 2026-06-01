import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Schedule from "./components/Schedule";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AdminPanel from "./AdminPanel";

function PortfolioPage() {
  const [paket, setPaket] = useState("");

  function handlePesan(category) {
    setPaket(category);
    document.getElementById("schedule")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="bg-stone-950">
      <Navbar />
      <Hero />
      <Services onPesan={handlePesan} />
      <Portfolio />
      <Schedule paket={paket} setPaket={setPaket} />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PortfolioPage />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </BrowserRouter>
  );
}