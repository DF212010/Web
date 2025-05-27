import React from "react";
import TextMedia from "../../../components/ui/TextMedia";

const OurWork = ({ props }) => {
  return (
    <section className="or-wrk-wy-sec bg-light">
      <div className="or-wrk-wy-box container-fluid">
        <TextMedia content={props} />
      </div>
    </section>
  );
};

export default OurWork;
