import React from "react";

function Banner() {
  return (
    <div>
      <div className="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6 mb-4">
        <div className="container my-5">
          <div className="row text-center">
            {/* Free Consultancy */}
            <div className="col-lg-4 col-md-6 col-6 mb-4">
              <span
                className="material-icons"
                style={{ fontSize: 48, color: "#4CAF50" }}
              >
                support_agent
              </span>
              <h5 className="mt-3">Free Consultancy</h5>
              <p>Get expert advice with no charge to help you get started.</p>
            </div>
            {/* Lowest ITR Filing Cost */}
            <div className="col-lg-4 col-md-6 col-6 mb-4">
              <span
                className="material-icons"
                style={{ fontSize: 48, color: "#FFC107" }}
              >
                attach_money
              </span>
              <h5 className="mt-3">Lowest ITR Filing Cost</h5>
              <p>Affordable ITR filing options tailored to your budget.</p>
            </div>
            {/* Qualified Professionals */}
            <div className="col-lg-4 col-md-6 col-6 mb-4">
              <span
                className="material-icons"
                style={{ fontSize: 48, color: "#2196F3" }}
              >
                verified_user
              </span>
              <h5 className="mt-3">Qualified Professionals</h5>
              <p>Experienced CA and tax professionals to assist you.</p>
            </div>
            {/* 24/7 Support */}
            <div className="col-lg-4 col-md-6 col-6 mb-4">
              <span
                className="material-icons"
                style={{ fontSize: 48, color: "#FF5722" }}
              >
                schedule
              </span>
              <h5 className="mt-3">24/7 Support</h5>
              <p>Assistance available round-the-clock for all queries.</p>
            </div>
            {/* Quick Processing */}
            <div className="col-lg-4 col-md-6 col-6 mb-4">
              <span
                className="material-icons"
                style={{ fontSize: 48, color: "#9C27B0" }}
              >
                speed
              </span>
              <h5 className="mt-3">Quick Processing</h5>
              <p>Fast and efficient service for timely filing.</p>
            </div>
            {/* Secure & Trusted */}
            <div className="col-lg-4 col-md-6 col-6 mb-4">
              <span
                className="material-icons"
                style={{ fontSize: 48, color: "#3F51B5" }}
              >
                security
              </span>
              <h5 className="mt-3">Secure &amp; Trusted</h5>
              <p>Your data is safe with industry-standard security.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
