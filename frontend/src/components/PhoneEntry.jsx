import React, { useState } from "react";
import emailjs from "emailjs-com";
import "../styles/PhoneEntry.css";

const PhoneEntry = ({ onSubmit }) => {
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!/^\d{10}$/.test(phone)) {
      alert("Please enter a valid 10-digit phone number");
      return;
    }

    setLoading(true);

    emailjs
      .send(
        "service_prm2wmk",
        "template_tcxlrh8",
        { phone },
        "hmaRsVlaC5M0vGJJY"
      )
      .then(() => {
        setSuccess(true);
        setLoading(false);
        setTimeout(() => {
          onSubmit(); // go to menu page
        }, 1000);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
        alert("Something went wrong! Please try again.");
      });
  };

  return (
    <div className="phone-container">
      <div className="phone-card">
        <h2 className="phone-title">Welcome to TasteBite 🍽️</h2>
        <p className="phone-subtitle">
          Please enter your phone number to continue
        </p>
        <form onSubmit={handleSubmit} className="phone-form">
          <input
            type="tel"
            placeholder="Enter phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="phone-input"
            required
          />
          <button type="submit" className="phone-btn" disabled={loading}>
            {loading ? "Sending..." : "Continue"}
          </button>
        </form>
        {success && <p className="phone-success">✔️ Sent successfully!</p>}
      </div>
    </div>
  );
};

export default PhoneEntry;
