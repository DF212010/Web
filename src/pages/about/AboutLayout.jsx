import React,{useEffect} from "react";
import CTA from "./sections/CTA";
import { useLocation } from 'react-router-dom'
import OurImpact from "./sections/OurImpact";
import OurJourney from "./sections/OurJourney";
import OurMission from "./sections/OurMission";
import OurTeam from "./sections/OurTeam";
import OurValues from "./sections/OurValue";
import { useContent } from "../../hooks/useContent";
const AboutLayout = ({ state }) => {
  const { content, loading, error } = state;
  const counters = document.querySelectorAll(".counter");

  counters.forEach((counter) => {
    const target = parseInt(counter.getAttribute("data-target"));
    const duration = 2000; // Animation duration in milliseconds
    const step = target / (duration / 16); // 60fps

    let current = 0;
    const updateCounter = () => {
      current += step;
      counter.innerText = Math.round(current);

      if (current < target) {
        requestAnimationFrame(updateCounter);
      } else {
        counter.innerText = target;
      }
    };

    // Start animation when element comes into view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            updateCounter();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(counter);
  });
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  const contentFlow = {
    ourimpact: content.dynamicContent["ourimpact-about"],
    ourjourney: content.dynamicContent["ourjourney-about"],
    ourmission: content.dynamicContent["ourmission-about"],
    volunteers: content.dynamicContent["volunteers-global"],
    ourvalues: content.dynamicContent["ourvalues-global"]
  };

  return (
    <>
      <OurImpact content={contentFlow.ourimpact} />
      <OurValues content={contentFlow.ourvalues} />
      <OurTeam content={contentFlow.volunteers} />
      <OurJourney content={contentFlow.ourjourney} />
      <OurMission content={contentFlow.ourmission} />
      <CTA />
    </>
  );
};

export default AboutLayout;
