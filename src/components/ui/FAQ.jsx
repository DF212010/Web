import React from "react";

const FAQ = ({ faqs = [] }) => {
  return (
    <div>
      <div className="faq-section" data-aos="fade-up">
        <h2 className="section-title text-center mb-4">
          Frequently Asked Questions
        </h2>

        <div className="accordion custom-accordion" id="faqAccordion">
          {faqs.map((item,index) => {
            return (
              <div className="accordion-item faq-item" key={index}>
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed faq-question p-3"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={"#"+item.id.trim()}
                  >
                    <span className="me-auto">
                      {item.question}
                    </span>
                    <div className="faq-toggle ms-2"></div>
                  </button>
                </h2>
                <div
                  id={item.id}
                  className="accordion-collapse collapse"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body faq-answer p-3">
                    <p className="mb-0">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
