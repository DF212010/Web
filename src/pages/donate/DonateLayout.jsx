import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { iconMap } from "../../hooks/iconmap";
import { useForm } from "react-hook-form";
import "../../styles/donate.css";
// import { useBackendStatus } from "../../hooks/useBackendStatus";
import sendRequest from "./api/handlePayment";
import handlePayment from "./api/handlePayment";

const CheckCircleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
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
  const [dataLoading, setDataLoading] = useState(false)
  // React Hook Form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  let sendAmount = null

  const onSubmit = async (data) => {
    if (showCustomAmount === true) {
      sendAmount = customAmount
    } else {
      sendAmount = currentAmount
    }
    data = {
      "amount": (sendAmount !== null && Number(sendAmount)),
      frequency: currentFrequency,
      ...data
    }
    setDataLoading(true);
    let completed = await handlePayment(data)

    console.log(completed)
    if (completed == true && completed != null) {
      setDataLoading(false)
      setShowThankYou(true)
      console.log(dataLoading)
      console.log(showThankYou)
    }

  };

  const handleDonateAgain = () => {
    setShowThankYou(false);
    reset();
  };

  const amounts = [10, 30, 50, 100, 250];

  const getImpactText = () => {
    const amount = currentAmount;
    const isMonthly = currentFrequency === "monthly";
    if (isMonthly) {
      if (amount < 20) return `Your ₹${amount} monthly donation provides community support for 2 people`;
      if (amount < 50) return `Your ₹${amount} monthly donation provides community support for 5 people`;
      if (amount < 100) return `Your ₹${amount} monthly donation supports a small community event`;
      return `Your ₹${amount} monthly donation helps fund a major community project`;
    } else {
      if (amount < 20) return `Your one-time ₹${amount} donation helps with immediate community needs`;
      if (amount < 50) return `Your one-time ₹${amount} donation supports a family in need`;
      if (amount < 100) return `Your one-time ₹${amount} donation helps organize a neighborhood event`;
      return `Your one-time ₹${amount} donation makes a significant impact on our community projects`;
    }
  };

  const handleAmountSelect = (amount) => {
    if (amount === "custom") {
      setShowCustomAmount(true);
      setCurrentAmount(false)
      return;
    }
    setShowCustomAmount(false);
    setCurrentAmount(amount);
  };

  const progressPercentage = Math.min(100, (amountRaised / 10000) * 100);

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
        <div className="col-lg-6 col-md-12 text-center text-lg-start mb-5 mb-lg-0 animate-fade-in-left">
          <h1 className="title">
            Contribute to <span className="highlight">change</span><br /> in your community
          </h1>
          <p className="description">
            Help us bring companionship and community back to our streets. Your donation makes a real difference.
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
            <div>Target: ₹10,000</div>
            <div>Raised: ₹{amountRaised.toLocaleString()}</div>
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
        </div>

        <div className="col-lg-6 col-md-12 animate-fade-in-right">
          {!showThankYou ? (
            <div className="donation-card">
              <h4 className="section-title">Make Your Donation</h4>
              <div className="form-group">
                <label>Select Frequency</label>
                <div className="button-group">
                  <button className={currentFrequency === "monthly" ? "active" : ""} onClick={() => setCurrentFrequency("monthly")}>Monthly</button>
                  <button className={currentFrequency === "one-time" ? "active" : ""} onClick={() => setCurrentFrequency("one-time")}>One-time</button>
                </div>
              </div>
              <div className="form-group">
                <label>Select Amount</label>
                <div className="button-group">
                  {amounts.map((amount) => (
                    <button key={amount} className={currentAmount === amount ? (showCustomAmount !== true ? "active" : "") : ""} onClick={() => handleAmountSelect(amount)}>
                      ₹{amount}
                    </button>
                  ))}
                  <button className={showCustomAmount ? "active" : ""} onClick={() => setShowCustomAmount(true)}>Custom</button>
                </div>
                {showCustomAmount && (
                  <input
                    type="number"
                    placeholder="Enter custom amount"
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setCurrentAmount(Number(e.target.value));
                    }}
                  />
                )}
              </div>
              <div className="impact-container">
                <h6>Your Impact</h6>
                <div className="impact-item">
                  <FontAwesomeIcon icon={iconMap["check"]} />
                  <span>{getImpactText()}</span>
                </div>
              </div>
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="form-group">
                  <label>Your Name</label>
                  <input
                    type="text"
                    {...register("name", { required: "Name is required" })}
                    placeholder="Enter your full name"
                    className={errors.name ? "invalid" : ""}
                  />
                  {errors.name && <div className="error-message">{errors.name.message}</div>}
                </div>

                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Invalid email format",
                      },
                    })}
                    placeholder="Enter your email"
                    className={errors.email ? "invalid" : ""}
                  />
                  {errors.email && <div className="error-message">{errors.email.message}</div>}
                </div>

                <div className="form-group">
                  <label>Phone Number (Optional)</label>
                  <input
                    type="tel"
                    {...register("phone")}
                    placeholder="Enter your phone number"
                  />
                </div>

                <button type="submit" className="donate-btn">
                  Donate ₹{currentAmount} {currentFrequency === "monthly" ? "Monthly" : ""}
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
              <p>Your contribution will make a real difference in our community. A confirmation email has been sent to your inbox.</p>
              <button className="donate-again-btn" onClick={handleDonateAgain}>
                <FontAwesomeIcon icon={iconMap["reload"]} /> Make Another Donation
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DonateLayout;
