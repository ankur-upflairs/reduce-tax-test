import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaTwitter } from "react-icons/fa";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    phone: "",
    email: "",
    pan: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="container-fluid  min-vh-100 d-flex justify-content-center align-items-center ">
      <div className="card mx-auto shadow-lg p-4 row-col-1" style={{ maxWidth: "600px", width: "50%" }}>
        <div className="text-center mb-4 col">
          <div className="bg-primary text-white rounded-circle p-3 mb-3">
            <FaTwitter size={30} />
          </div>
          <h2 className="fw-bold">Sign Up For Treact</h2>
        </div>
        <div className="col d-grid gap-2 mb-3">
          <button className="btn btn-outline-secondary d-flex align-items-center justify-content-center">
            <FcGoogle className="me-2" /> Sign Up With Google
          </button>
          <button className="btn btn-primary text-white d-flex align-items-center justify-content-center">
            <FaTwitter className="me-2" /> Sign Up With Twitter
          </button>
        </div>
        <p className="col text-center text-muted">Or sign up with your details</p>
        <form onSubmit={handleSubmit} className="col">
          <div className="row g-3 mb-3">
            <div className="col-md-4">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="form-control"
                placeholder="First Name"
              />
            </div>
            <div className="col-md-4">
              <input
                type="text"
                name="middleName"
                value={formData.middleName}
                onChange={handleChange}
                className="form-control"
                placeholder="Middle Name"
              />
            </div>
            <div className="col-md-4">
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="form-control"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="mb-3">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="form-control"
              placeholder="Phone Number"
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
              placeholder="Email Address"
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="pan"
              value={formData.pan}
              onChange={handleChange}
              className="form-control"
              placeholder="PAN Number"
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Sign Up
          </button>
        </form>
        <p className="text-muted text-center mt-3">
          I agree to abide by Treact's Terms of Service and Privacy Policy
        </p>
        <p className="text-center mt-2">
          Already have an account? <a href="#">Sign In</a>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
