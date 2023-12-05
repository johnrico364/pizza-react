import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

export const SignupForm = () => {
  const navigate = useNavigate();


  return (
    <div className="contaner-fluid">
      <div className="row">
        <div className="login-pic-side col-6 "></div>
        <div className="login-form-side col-6">
          <div className="login-container row g-3 justify-content-center align-content-center">
            <div className="col-9"></div>
              <div className="row">
                <div className="col-6">Create account</div>
                <div className="row mt-4">
                <div className="col mt-3">
                  <input
                    className="signup-input w-100"
                    type="text"
                    placeholder="Firstname:"
                  />
                </div>
                <div className="col mt-3">
                  <input
                    className="signup-input w-100"
                    type="text"
                    placeholder="Lastname:"
                  />
                </div>
                <div className="row mt-3">
                  <input
                    className="signup-input w-100"
                    type="text"
                    placeholder="Email"
                  />
                </div>
                <div className="row mt-3">
                  <input
                    className="signup-input w-100"
                    type="text"
                    placeholder="Contact Number:"
                  />
                </div>
                <div className="row mt-4">
                <div className="col">
                  <button onClick={() => navigate("/login ")} className="signup-btn w-100">Create account</button>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
