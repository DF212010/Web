import React from "react";
import FAQ from "../../components/ui/FAQ";
import MapLocation from "./sections/MapLocation";
import ContactInfo from "./sections/ContactInfo";
import ContactForm from "./sections/ContactForm";
const support = [
  {
    id: "support-1",
    question: "How quickly can I expect a response to my inquiry?",
    answer:
      "Our team typically responds to inquiries within 24 hours during business days. For urgent matters, please call our support line for immediate assistance.",
  },
  {
    id: "support-2",
    question: "What are your business hours?",
    answer:
      "We're open Monday to Friday from 9AM to 5PM, and Saturdays from 10AM to 2PM. We're closed on Sundays and public holidays.",
  },
  {
    id: "support-3",
    question: "Do you offer 24/7 customer support?",
    answer:
      "While we don't offer 24/7 support, our team monitors critical issues outside business hours. For emergencies, please call our support line.",
  },
  {
    id: "support-4",
    question: "Where is your office located?",
    answer:
      "Our headquarters is located at 123 Business Avenue, Suite 200, New York, NY 10001. We also have satellite offices in several other cities.",
  },
];
function ContactLayout() {
  const FAQS = () => {
    return (
      <section className="py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <FAQ faqs={support} />
            </div>
          </div>
        </div>
      </section>
    );
  };

  {
    document.querySelectorAll(".contact-card.clickable").forEach((card) => {
      card.addEventListener("click", function () {
        this.classList.add("pulse");
        setTimeout(() => {
          this.classList.remove("pulse");
        }, 500);
      });
    });
  }
  return (
    <>
      <ContactInfo />
      <ContactForm />
      <FAQS />
      <MapLocation />
    </>
  );
}

export default React.memo(ContactLayout);
