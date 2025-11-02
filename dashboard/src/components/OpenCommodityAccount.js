import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function OpenCommodityAccount() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    pan: "",
    email: "",
    bankName: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Commodity account request submitted successfully!");
    navigate("/dashboard"); // redirect after submission
  };

  const handleGoBack = () => navigate("/dashboard");

  return (
    <div className="container mt-5 p-5 shadow-lg rounded bg-light">
      {/* Header */}
      <div className="text-center mb-5">
        <h1 className="fw-bold">Open a Commodity Account</h1>
        <p className="text-muted fs-5">
          Start trading commodities like gold, crude oil, and agricultural products.
        </p>
      </div>

      {/* Progress */}
      <div className="d-flex justify-content-center mb-4">
        <div className="progress" style={{ width: "60%" }}>
          <div
            className="progress-bar progress-bar-striped progress-bar-animated"
            role="progressbar"
            style={{ width: "40%" }}
            aria-valuenow="40"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            Step 1 of 3
          </div>
        </div>
      </div>

      {/* Form */}
      <form
        className="p-4 border rounded bg-white"
        onSubmit={handleSubmit}
        style={{ maxWidth: "600px", margin: "0 auto" }}
      >
        <div className="mb-3 text-start">
          <label className="form-label fw-semibold">Full Name</label>
          <input
            type="text"
            className="form-control"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
          />
        </div>

        <div className="mb-3 text-start">
          <label className="form-label fw-semibold">PAN Number</label>
          <input
            type="text"
            className="form-control"
            name="pan"
            value={formData.pan}
            onChange={handleChange}
            placeholder="Enter PAN (e.g. ABCDE1234F)"
            required
          />
        </div>

        <div className="mb-3 text-start">
          <label className="form-label fw-semibold">Email ID</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="mb-3 text-start">
          <label className="form-label fw-semibold">Bank Name</label>
          <input
            type="text"
            className="form-control"
            name="bankName"
            value={formData.bankName}
            onChange={handleChange}
            placeholder="Enter linked bank name"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100 mt-3 fs-5">
          Proceed to Verification
        </button>
      </form>

      {/* Footer Buttons */}
      <div className="text-center mt-4">
        <button
          className="btn btn-outline-secondary"
          onClick={handleGoBack}
          style={{ width: "150px" }}
        >
          Go Back
        </button>
      </div>
    </div>
  );
}

export default OpenCommodityAccount;
