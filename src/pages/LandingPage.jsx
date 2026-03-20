import React from 'react'
import Comparison from "../components/Comparison.jsx";
import FAQ from "../components/FAQ.jsx";
import Features from "../components/Features.jsx";
import Landing from "../components/Landing.jsx";
import Navigation from "../components/Navigation.jsx";
import Footer from "../components/ui/Footer.jsx";
import Usecase from "../components/Usecase.jsx";

const LandingPage = () => {
  return (
    <div className="app-content-layer">
        <Navigation />
        <Landing />
        <Features />
        <Comparison />
        <Usecase />
        <FAQ />
        <Footer />
      </div>
  )
}

export default LandingPage