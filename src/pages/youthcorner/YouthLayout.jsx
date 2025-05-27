import React from "react";
import Programs from "./sections/Programs";
import CTA from "./sections/CTA";
import Stats from "./sections/Stats";
import TextMedia from "../../components/ui/TextMedia";
const JoinUsLayout = ({ state }) => {
  const { content, loading, error } = state;
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  const dataFlow = {
    aboutUs: content.staticContent["textmedia-global"]["aboutUs-home"],
    stats: content.staticContent["stats-joinUs"],
    programs: content.staticContent["programs-joinus"],
  };
  return (
    <section className="main-sec conatiner-fluid">
      <main className="main">
        <CTA />
        <TextMedia content={dataFlow.aboutUs} />
        {/* <Stats content={dataFlow.stats} /> */}
        <Programs content={dataFlow.programs} />
      </main>
    </section>
  );
};

export default JoinUsLayout;
