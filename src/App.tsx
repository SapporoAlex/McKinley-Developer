import "./assets/Reset.scss";
import "./assets/NavBar.scss";
import "./assets/Lottie.scss";
import "./App.css";
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import KV from "./components/KV";
import WorkHistory from "./components/WorkHistory";
import GridTools from "./components/GridTools";
import GridWorks from "./components/GridWorks";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";

const PARALLAX_SPEED = 0.12;

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const bgLayers = Array.from(
      document.querySelectorAll<HTMLElement>(".bg-wrapper"),
    );
    let ticking = false;

    const applyParallax = () => {
      const offset = window.scrollY * PARALLAX_SPEED;
      bgLayers.forEach((layer) => {
        layer.style.transform = `translateY(-${offset}px)`;
      });
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(applyParallax);
        ticking = true;
      }
    };

    applyParallax();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="App">
      {loading && <LoadingScreen onDone={() => setLoading(false)} />}
      <Navbar />
      <main>
        <KV />
        <WorkHistory />
        <GridTools />
        <GridWorks />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
