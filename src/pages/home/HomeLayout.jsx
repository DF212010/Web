import React from "react";
import OurVolunteers from "./sections/OurVolunteers";
import OurWork from "./sections/OurWork";
import OurPrograms from "./sections/OurPrograms";
import OurStory from "./sections/OurStory";
import StudentHelp from "./sections/StudentHelp";
import Donation from "./sections/Donation";
import UpcomingEvents from "./sections/UpcomingEvents";

const HomeLayout = ({ state }) => {
  const { content, loading, error } = state;
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  const contentFlow = {
    ourwork: content.staticContent["textmedia-global"]["ourImpact-home"],
    ourvalues: content?.staticContent?.ourvalues,
    ourstory: content.staticContent["textmedia-global"]["aboutUs-home"],
    volunteers: content?.dynamicContent?.["volunteers-global"],
    ourprograms: content?.dynamicContent?.["ourprograms-home"],
    events: content?.dynamicContent?.events
  };
  return (
    <section className="main-sec conatiner-fluid">
      <main className="main">
        <OurWork props={contentFlow.ourwork} />
        <StudentHelp ourvalues={contentFlow.ourvalues} />
        <OurStory props={contentFlow.ourstory} />
        <OurPrograms programs={contentFlow.ourprograms} />
        <OurVolunteers volunteers={contentFlow.volunteers} />
        <Donation />
        <UpcomingEvents events={contentFlow.events} />
      </main>
    </section>
  );
};

export default HomeLayout;
