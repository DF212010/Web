import React from "react";
import { useContent } from "./hooks/useContent";
import NavBar from "./components/ui/NavBar";
import Footer from "./components/ui/Footer";
import AboutHero from "./pages/about/sections/Hero";
import HomeHero from "./pages/home/sections/Hero";
import AboutLayout from "./pages/about/AboutLayout";
import HomeLayout from "./pages/home/HomeLayout";
import YouthLayout from "./pages/youthcorner/YouthLayout";
import YouthHero from "./pages/youthcorner/sections/Hero";
import DonateLayout from "./pages/donate/DonateLayout";
import ContactLayout from "./pages/contact/ContactLayout";
import ContactHero from "./pages/contact/sections/Hero";
import ProgramsLayout from "./pages/programs/ProgramsLayout";
import NotFound from "./components/errors/NotFound";
import ProgramsHero from "./pages/programs/sections/Hero";
import ProgramsDetails from "./pages/programs/sections/ProgramsDetails";
import BacktoTop from "./components/ui/BacktoTop";
import Test from "../tests/Test";
import OurTeamLayout from "./pages/team/OurTeamLayout";
import Hero from "./pages/team/sections/Hero";
const Layout = ({ page }) => {
  const { state } = useContent();
  const pages = {
    home: <HomeLayout state={state} />,
    about: <AboutLayout state={state} />,
    youthcorner: <YouthLayout state={state} />,
    donate: <DonateLayout />,
    contact: <ContactLayout />,
    programs: <ProgramsLayout state={state} />,
    programsDetails: <ProgramsDetails state={state} />,
    ourteam: <OurTeamLayout state={state} />,
    notFound: <NotFound />,
    test: <Test state={state} />
  };
  const heroes = {
    home: <HomeHero />,
    about: <AboutHero />,
    youthcorner: <YouthHero />,
    contact: <ContactHero />,
    programs: <ProgramsHero />,
    ourteam: <Hero />
  };
  return (
    <>
      <header>
        <NavBar />
        {heroes[page] || ""}
      </header>
      <main>
        <BacktoTop />
        {
          pages[page] || <NotFound />
        }
      </main>


      <Footer />
    </>
  );
};

export default Layout;
