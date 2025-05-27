import React from "react";
import TeamIdentity from "../../../components/ui/TeamIdentity";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { iconMap } from "../../../hooks/iconmap";
const ContactForm = () => {
  const validateForm = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const submitBtn = form.querySelector("button[type='submit']");
    const submitText = submitBtn.querySelector(".submit-text");
    const spinner = submitBtn.querySelector(".spinner-border");
    const successMsg = document.getElementById("success-message");
    const errorMsg = document.getElementById("error-message");

    // Validate form
    let isValid = true;
    form.querySelectorAll("[required]").forEach((field) => {
      if (!field.value) {
        field.classList.add("is-invalid");
        isValid = false;
      } else {
        field.classList.remove("is-invalid");
      }
      if (
        field.type === "email" &&
        field.value &&
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)
      ) {
        field.classList.add("is-invalid");
        field.nextElementSibling.textContent =
          "Please enter a valid email address.";
        isValid = false;
      }
    });

    if (!isValid) {
      form.classList.add("shake");
      setTimeout(() => {
        form.classList.remove("shake");
      }, 400);
      return;
    }

    // Show loading state
    submitText.textContent = "Sending...";
    spinner.classList.remove("d-none");
    submitBtn.disabled = true;

    // Simulate form submission
    setTimeout(() => {
      // Hide loading state
      submitText.textContent = "Send Message";
      spinner.classList.add("d-none");
      submitBtn.disabled = false;

      // Show success message
      successMsg.classList.remove("d-none");
      errorMsg.classList.add("d-none");
      form.reset();

      // Hide success message after 5 seconds
      setTimeout(() => {
        successMsg.classList.add("d-none");
      }, 5000);
    }, 1500);
  };
  const details = {
    name: "Sarah Johnson",
    role: "Support",
    bio: "You Can ask the issue by contacting him",
    social: ["twitter", "linkedin", "instagram"],
    image: "https://randomuser.me/api/portraits/women/43.jpg",
  };
  return (
    <section className="py-5 bg-light" id="contact-form">
      <div className="container">
        <div className="row g-4">
          <div
            className="col-lg-7 mb-4"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <div className="form-section">
              <h2 className="section-title">Send Us a Message</h2>

              <div className="alert alert-success d-none" id="success-message">
                <FontAwesomeIcon icon={iconMap["checkCircle"]} className="alert-icon" />
                Your message
                has been sent successfully! We'll get back to you soon.
              </div>

              <div className="alert alert-danger d-none" id="error-message">
                <FontAwesomeIcon icon={iconMap["exclamationCircle"]} />
                There was an error sending your message. Please try again.
              </div>

              <form
                id="contactForm"
                noValidate
                onSubmit={validateForm}
              // onInput={realtimeValidate}
              >
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    required
                  />
                  <label htmlFor="name">Your Name</label>
                  <div className="invalid-feedback">
                    Please provide your name.
                  </div>
                </div>
                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Your Email"
                    required
                  />
                  <label htmlFor="email">Your Email</label>
                  <div className="invalid-feedback">
                    Please provide a valid email address.
                  </div>
                </div>
                <div className="form-floating">
                  <select className="form-select" id="subject" defaultValue="" required>
                    <option value="" disabled>
                      Select a subject
                    </option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Support">Support</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Partnership">Partnership</option>
                  </select>
                  <label htmlFor="subject">Subject</label>
                  <div className="invalid-feedback">Please select a subject.</div>
                </div>

                <div className="form-floating">
                  <textarea
                    className="form-control"
                    id="message"
                    placeholder="Your Message"
                    required
                  ></textarea>
                  <label htmlFor="message">Your Message</label>
                  <div className="invalid-feedback">
                    Please enter your message.
                  </div>
                </div>
                <div className="form-check mb-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="consent"
                    required
                  />
                  <label className="form-check-label" htmlFor="consent">
                    I agree to the{" "}
                    <a href="#" className="text-primary">
                      privacy policy
                    </a>{" "}
                    and terms of service
                  </label>
                  <div className="invalid-feedback">
                    You must agree before submitting.
                  </div>
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  <span className="submit-text">Send Message</span>
                  <span
                    className="spinner-border spinner-border-sm d-none"
                    role="status"
                    aria-hidden="true"
                  ></span>
                </button>
              </form>
            </div>
          </div>

          {/* <!-- Team Section --> */}
          <div className="col-lg-5" data-aos="fade-left" data-aos-delay="200">
            <TeamIdentity details={details} />
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactForm;
