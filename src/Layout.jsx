import React from "react";
import NavBar from "./components/ui/NavBar";
import Footer from "./components/ui/Footer";
import { useContent } from "./hooks/useContent";
import AboutHero from "./pages/about/sections/Hero";
import HomeHero from "./pages/home/sections/Hero";
import AboutLayout from "./pages/about/AboutLayout";
import HomeLayout from "./pages/home/HomeLayout";
import YouthLayout from "./pages/youthcorner/YouthLayout";
import YouthHero from "./pages/youthcorner/sections/Hero";
import DonateLayout from "./pages/donate/DonateLayout";
import ContactLayout from "./pages/contact/ContactLayout";
import ContactHero from "./pages/contact/sections/Hero";
import ProgramsLayout from "./pages/programs/programsLayout";
import NotFound from "./components/errors/NotFound";
const Layout = ({ page }) => {
  const { state } = useContent();
  const pages = {
    home: <HomeLayout state={state} />,
    about: <AboutLayout state={state} />,
    youthcorner: <YouthLayout state={state} />,
    donate: <DonateLayout />,
    contact: <ContactLayout />,
    programs: <ProgramsLayout state={state} />
  };
  const heroes = {
    home: <HomeHero />,
    about: <AboutHero />,
    youthcorner: <YouthHero />,
    contact: <ContactHero />,
  };
  return (
    <>
      <header>
        <NavBar />
        {heroes[page] || ""}
      </header>
      <main>{pages[page] || <NotFound />}</main>
      <Footer />
    </>
  );
};

export default Layout;
