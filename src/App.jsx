import "./App.css";
import Landing from "./components/Landing.jsx";
import Navigation from "./components/Navigation.jsx";
import DarkVeil from "./reactBits/DarkVeil.jsx";

export default function App() {
  return (
    <div className="app-shell">
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
        <Landing/>
      </div>
    </div>
  );
}
