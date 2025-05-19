import React from "react";
import CTA from "./sections/CTA";
// import Hero from "../src/components/about/sections/Hero";
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

  // // Form validation
  // const forms = document.querySelectorAll("form");

  // forms.forEach((form) => {
  //   form.addEventListener("submit", function (event) {
  //     event.preventDefault();

  //     // Simple form validation
  //     let valid = true;
  //     const inputs = form.querySelectorAll("input, textarea");

  //     inputs.forEach((input) => {
  //       if (!input.value.trim()) {
  //         input.classList.add("is-invalid");
  //         valid = false;
  //       } else {
  //         input.classList.remove("is-invalid");
  //         input.classList.add("is-valid");
  //       }
  //       if (input.type === "email" && input.value) {
  //         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //         if (!emailRegex.test(input.value)) {
  //           input.classList.add("is-invalid");
  //           valid = false;
  //         }
  //       }
  //     });

  //     if (valid) {
  //       // Show success message (in a real application you would submit the form)
  //       const successMessage = document.createElement("div");
  //       successMessage.className = "alert alert-success mt-3";
  //       successMessage.innerText =
  //         "Thank you for your message! We will get back to you soon.";
  //       form.appendChild(successMessage);

  //       // Reset form
  //       form.reset();
  //       inputs.forEach((input) => {
  //         input.classList.remove("is-valid");
  //       });

  //       // Remove message after 5 seconds
  //       setTimeout(() => {
  //         successMessage.remove();
  //       }, 5000);
  //     }
  //   });

  //   // Remove validation styling on input
  //   const inputs = form.querySelectorAll("input, textarea");
  //   inputs.forEach((input) => {
  //     input.addEventListener("focus", () => {
  //       input.classList.remove("is-invalid");
  //     });
  //   });
  // });

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
