'use client';
import { useEffect } from "react";
import "./App.css";
import Comparison from "./components/Comparison.jsx";
import FAQ from "./components/FAQ.jsx";
import Features from "./components/Features.jsx";
import Landing from "./components/Landing.jsx";
import Navigation from "./components/Navigation.jsx";
import Usecase from "./components/Usecase.jsx";
import DarkVeil from "./reactBits/DarkVeil.jsx";
import Lenis from "lenis";

export default function App() {

  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
    });
    function raf(time){
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
        <div className="app-shell ">
      <div className="app-bg-layer">
        <DarkVeil
          hueShift={0}
          noiseIntensity={0}
          scanlineIntensity={0}
          speed={0.5}
          scanlineFrequency={0}
          warpAmount={0}
        />
      </div>

      <div className="app-content-layer">
        <Navigation />
        <Landing />
        <Features />
        <Comparison />
        <Usecase />
        <FAQ />
      </div>
    </div>
  );
}
