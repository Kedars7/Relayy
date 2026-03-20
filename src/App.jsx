'use client';
import { useEffect } from "react";
import "./App.css";
import Lenis from "lenis";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import DocsPage from "./pages/DocsPage";

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
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/docs" element={<DocsPage/>}/>
      </Routes>
    </div>
  );
}
