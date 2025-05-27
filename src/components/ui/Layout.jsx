import React from "react";
// import CTA from "../about/sections/CTA";
// import Hero from "../src/components/about/sections/Hero";
// import OurImpact from "../src/components/about/sections/OurImpact";
// import OurJourney from "../src/components/about/sections/OurJourney";
// import OurMission from "../src/components/about/sections/OurMission";
// import OurTeam from "../src/components/about/sections/OurTeam";
// import OurValues from "../src/components/about/sections/OurValue";
import Footer from "../src/components/ui/Footer";
import NavBar from "../src/components/ui/NavBar";
const Layout = ({ children }) => {
  return (
    <>
      <header>
        <NavBar />
        {children.hero == "" ? "" : children.hero}
      </header>
      <main>{children.main}</main>
      <Footer />
    </>
  );
};

export default Layout;
