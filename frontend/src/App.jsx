import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Services from "./components/Services";

export default function App() {
  return (
    <div className="bg-stone-950">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
       <About />
      <Contact />
      <Footer />
    </div>
  );
}