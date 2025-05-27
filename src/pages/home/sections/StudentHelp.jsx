import React from "react";
import Card from "../../../components/ui/card";
const StudentHelp = ({ ourvalues }) => {
  return (
    <section className="or-srv-sec bg-white py-4 py-md-5">
      <div className="or-srv-box container px-3 px-md-0">
        <div
          className="or-srv-text text-center pb-4 pb-md-5 px-md-5 mx-auto"
          style={{ maxWidth: "800px" }}
        >
          <h5 className="fs-3 fw-semibold mb-3 text-primary">
            We Help Students in This Way
          </h5>
          <p className="fs-6 text-muted mb-0">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet
            soluta deleniti tenetur dicta totam, illum, sapiente debitis quas
            necessitatibus consequuntur architecto.
          </p>
        </div>

        <div className="values-grid">
          {ourvalues.map((elem, index) => (
            <Card content={elem} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentHelp;
