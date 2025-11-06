import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/global/Header";
import Footer from "./components/global/Footer";
import ErrorBoundary from "./components/ErrorBoundary";
import { gsap } from "gsap";

const App: React.FC = () => {
  useEffect(() => {
    // Enable GSAP smooth scroll
    gsap.config({
      autoSleep: 60,
      force3D: true,
      nullTargetWarn: false,
    });
  }, []);

  return (
    <ErrorBoundary>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  );
};

export default App;
