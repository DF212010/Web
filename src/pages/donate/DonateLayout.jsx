import React, { useState, useEffect } from "react";
import "../../styles/donate.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { iconMap } from "../../hooks/iconmap";

const CheckCircleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
  </svg>
);

const DonateLayout = () => {
  const [currentAmount, setCurrentAmount] = useState(10);
  const [currentFrequency, setCurrentFrequency] = useState("monthly");
  const [showCustomAmount, setShowCustomAmount] = useState(false);
  const [customAmount, setCustomAmount] = useState("");
  const [donationCount, setDonationCount] = useState(247);
  const [amountRaised, setAmountRaised] = useState(7625);
  const [showThankYou, setShowThankYou] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
  });

  // Predefined donation amounts
  const amounts = [10, 30, 50, 100, 250, "custom"];

  // Update impact text based on amount and frequency
  const getImpactText = () => {
    const amount = currentAmount;
    const isMonthly = currentFrequency === "monthly";

    if (isMonthly) {
      if (amount < 20)
        return `Your $${amount} monthly donation provides community support for 2 people`;
      if (amount < 50)
        return `Your $${amount} monthly donation provides community support for 5 people`;
      if (amount < 100)
        return `Your $${amount} monthly donation supports a small community event`;
      return `Your $${amount} monthly donation helps fund a major community project`;
    } else {
      if (amount < 20)
        return `Your one-time $${amount} donation helps with immediate community needs`;
      if (amount < 50)
        return `Your one-time $${amount} donation supports a family in need`;
      if (amount < 100)
        return `Your one-time $${amount} donation helps organize a neighborhood event`;
      return `Your one-time $${amount} donation makes a significant impact on our community projects`;
    }
  };

  // Handle amount selection
  const handleAmountSelect = (amount) => {
    if (amount === "custom") {
      setShowCustomAmount(true);
      return;
    }

    setShowCustomAmount(false);
    setCurrentAmount(amount);
  };

  // Handle custom amount change
  const handleCustomAmountChange = (e) => {
    const value = e.target.value;
    setCustomAmount(value);

    if (value && !isNaN(value) && value > 0) {
      setCurrentAmount(Number(value));
    }
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormErrors((prev) => ({ ...prev, [name]: false }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;
    const newErrors = { ...formErrors };

    // Validate name
    if (!formData.name.trim()) {
      newErrors.name = true;
      isValid = false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = true;
      isValid = false;
    }

    setFormErrors(newErrors);

    if (isValid) {
      // Simulate API call
      setTimeout(() => {
        // Update stats
        setDonationCount((prev) => prev + 1);
        setAmountRaised((prev) => prev + currentAmount);
        setShowThankYou(true);
      }, 1000);
    }
  };

  // Reset form for another donation
  const handleDonateAgain = () => {
    setShowThankYou(false);
    setFormData({ name: "", email: "", phone: "" });
  };

  // Calculate progress percentage
  const progressPercentage = Math.min(100, (amountRaised / 10000) * 100);

  // Simulate occasional donor count increase
  useEffect(() => {
    const interval = setInterval(() => {
      const randomIncrease = Math.floor(Math.random() * 3);
      if (randomIncrease > 0) {
        setDonationCount((prev) => prev + randomIncrease);
      }
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="donation-container">
      <div className="row align-items-center">
        {/* Left Column */}
        <div className="col-lg-6 col-md-12 text-center text-lg-start mb-5 mb-lg-0 animate-fade-in-left">
          <h1 className="title">
            Contribute to <span className="highlight">change</span>
            <br /> in your community
          </h1>

          <p className="description">
            Help us bring companionship and community back to our streets. Your
            donation makes a real difference.
          </p>

          <div className="image-container">
            <img
              src="https://picsum.photos/400/300"
              className="community-image"
              alt="Community support"
              loading="lazy"
            />
            <div className="donation-badge">
              <FontAwesomeIcon icon={iconMap["heart"]} />
              <span>{donationCount}</span> people donated this week
            </div>
          </div>

          <div className="donation-stats">
            <div>Target: $10,000</div>
            <div>Raised: ${amountRaised.toLocaleString()}</div>
          </div>

          <div className="progress-bar-container">
            <div
              className="progress-fill"
              style={{ width: `${progressPercentage}%` }}
              aria-valuenow={progressPercentage}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>

          <div className="features">
            <div className="feature">
              <FontAwesomeIcon icon={iconMap["leaf"]} />
              <div className="feature-text">
                <h6>Sustainable Impact</h6>
                <p>
                  Your donation creates lasting change in communities that need
                  it most.
                </p>
              </div>
            </div>

            <div className="feature">
              <FontAwesomeIcon icon={iconMap["HeartInHand"]} />
              <div className="feature-text">
                <h6>Local Focus</h6>
                <p>
                  100% of your contribution goes directly to community programs.
                </p>
              </div>
            </div>
          </div>

          <div className="testimonial">
            "The community support program has transformed our neighborhood.
            More than just financial aid, it's brought people together." -{" "}
            <strong>Sarah K.</strong>
          </div>
        </div>

        {/* Right Column - Donation Form */}
        <div className="col-lg-6 col-md-12 animate-fade-in-right">
          {!showThankYou ? (
            <div className="donation-card">
              <h4 className="section-title">Make Your Donation</h4>

              <div className="form-group">
                <label>Select Frequency</label>
                <div className="button-group">
                  <button
                    className={currentFrequency === "monthly" ? "active" : ""}
                    onClick={() => setCurrentFrequency("monthly")}
                  >
                    Monthly
                  </button>
                  <button
                    className={currentFrequency === "one-time" ? "active" : ""}
                    onClick={() => setCurrentFrequency("one-time")}
                  >
                    One-time
                  </button>
                </div>
              </div>

              <div className="form-group">
                <label>Select Amount</label>
                <div className="button-group">
                  {amounts.map((amount) => (
                    <button
                      key={amount}
                      className={currentAmount === amount ? "active" : ""}
                      onClick={() => handleAmountSelect(amount)}
                    >
                      ${amount}
                    </button>
                  ))}
                  <button
                    className={showCustomAmount ? "active" : ""}
                    onClick={() => setShowCustomAmount(true)}
                  >
                    Custom
                  </button>
                </div>
              </div>
              <div className="impact-container">
                <h6>Your Impact</h6>
                <div className="impact-item">
                  <FontAwesomeIcon icon={iconMap["check"]} />
                  <span>{getImpactText()}</span>
                </div>
              </div>

              <form onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                  <label>Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className={formErrors.name ? "invalid" : ""}
                    required
                  />
                  {formErrors.name && (
                    <div className="error-message">Please enter your name</div>
                  )}
                </div>

                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    className={formErrors.email ? "invalid" : ""}
                    required
                  />
                  {formErrors.email && (
                    <div className="error-message">
                      Please enter a valid email address
                    </div>
                  )}
                </div>

                <div className="form-group">
                  <label>Phone Number (Optional)</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                  />
                </div>

                <button type="submit" className="donate-btn">
                  Donate ${currentAmount}{" "}
                  {currentFrequency === "monthly" ? "Monthly" : ""}
                  <FontAwesomeIcon icon={iconMap["heart"]} />
                </button>
              </form>

              <div className="security-badges">
                <div className="security-badge">
                  <FontAwesomeIcon icon={iconMap["lock"]} /> Secure Payment
                </div>
                <div className="security-badge">
                  <FontAwesomeIcon icon={iconMap["sheild"]} /> SSL Encrypted
                </div>
              </div>
            </div>
          ) : (
            <div className="donation-card thank-you-message">
              <CheckCircleIcon className="animate-bounce-in" />
              <h4 className="thank-you-title">Thank You for Your Donation!</h4>
              <p>
                Your contribution will make a real difference in our community.
                A confirmation email has been sent to your inbox.
              </p>
              <button className="donate-again-btn" onClick={handleDonateAgain}>
                <FontAwesomeIcon icon={iconMap["reload"]} /> Make Another
                Donation
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DonateLayout;
