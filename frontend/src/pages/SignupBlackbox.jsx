// SignupPage.js
import React from 'react';
import { FaUser , FaEnvelope, FaPhone, FaIdCard } from 'react-icons/fa';
import './SignupPage.css'; // Import CSS file

const SignupPage = () => {
  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form className="signup-form">
        <div className="form-group">
          <label htmlFor="firstName">
            <FaUser  /> First Name
          </label>
          <input type="text" id="firstName" placeholder="Enter your first name" required />
        </div>
        <div className="form-group">
          <label htmlFor="middleName">
            <FaUser  /> Middle Name
          </label>
          <input type="text" id="middleName" placeholder="Enter your middle name" />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">
            <FaUser  /> Last Name
          </label>
          <input type="text" id="lastName" placeholder="Enter your last name" required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">
            <FaPhone /> Phone
          </label>
          <input type="tel" id="phone" placeholder="Enter your phone number" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">
            <FaEnvelope /> Email
          </label>
          <input type="email" id="email" placeholder="Enter your email" required />
        </div>
        <div className="form-group">
          <label htmlFor="pan">
            <FaIdCard /> PAN
          </label>
          <input type="text" id="pan" placeholder="Enter your PAN" required />
        </div>
        <button type="submit" className="signup-button">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupPage;