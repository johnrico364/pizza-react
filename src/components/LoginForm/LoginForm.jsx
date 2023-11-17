import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

export const LoginForm = () => {
  const navigate = useNavigate();

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="login-pic-side col-6 "></div>
        <div className="login-form-side col-6">
          <div className="login-container row g-3 justify-content-center align-content-center">
            <div className="col-9">
              <h1>Sign up</h1>
              <div className="row mt-4">
                <div className="col">
                  <input
                    className="login-input w-100"
                    type="text"
                    placeholder="Email:"
                  />
                </div>
              </div>
              <div className="row mt-4">
                <div className="col">
                  <input
                    className="login-input w-100"
                    type="text"
                    placeholder="Password:"
                  />
                </div>
              </div>
              <div className="row mt-4">
                <div className="col">
                  <button onClick={() => navigate("/home ")} className="login-btn w-100">Sign up</button>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="mt-2 text-end">
                    <Link className="Link-create nav-link" to={"/signup"}>
                      Create Account?
                    </Link>
                  </div>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-5 ">
                  <hr className="hr" />
                </div>
                <div className="col-2 p-0">Sign Up with</div>
                <div className="col-4">
                  <hr className="hr" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
