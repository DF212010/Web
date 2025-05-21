import React from "react";
import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from "./Layout";
import AOS from "aos";
import "aos/dist/aos.css";
import "./styles/globel.css";
import Loader from "./components/ui/Loader";

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  useEffect(() => {
    AOS.init({
      offset: 120, // Distance to trigger animation (can reduce if causing overflow)
      duration: 400, // Animation duration
      easing: "ease", // Easing function
      once: true, // Animate only once (set to true to avoid repeated anims)
      anchorPlacement: "top-bottom", // Trigger position
    });
  }, []);

  useEffect(() => {
    console.log("Route changed:", location.pathname);
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, [location]);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout page={"home"} />} />
        <Route path="/about" element={<Layout page={"about"} />} />
        <Route path="/donate" element={<Layout page={"donate"} />} />
        <Route path="/contact" element={<Layout page={"contact"} />} />
        <Route path="/youthCorner" element={<Layout page={"youthcorner"} />} />
        <Route path="/programs" element={<Layout page={"programs"} />} />
        <Route path="*" element={<Layout page={""} />} />
      </Routes>
    </>
  );
  // return <Test />;
}
export default App;
