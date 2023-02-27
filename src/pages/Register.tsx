import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <Container>
      <Row>
        <Col md={6} className="offset-md-3">
          <h2 className="text-center text-dark mt-5">Sign In</h2>

          <div className="card my-5">
            <form className="card-body cardbody-color p-lg-5">
              <div className="text-center">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/3242/3242257.png"
                  className="img-fluid profile-image-pic img-thumbnail rounded-circle my-3"
                  width="200px"
                  alt="profile"
                />
              </div>

              <div className="mb-2 mt-3">
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  placeholder="User Name"
                />
              </div>
              <span style={{ color: "red" }}>Please enter a User Name</span>

              <div className="mb-2 mt-3">
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                />
              </div>
              <span style={{ color: "red" }}>Please enter a First Name</span>

              <div className="mb-2 mt-3">
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                />
              </div>
              <span style={{ color: "red" }}>Please enter a Last Name</span>

              <div className="mb-2 mt-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Email"
                />
              </div>
              <span style={{ color: "red" }}>Please enter a Email</span>

              <div className="text-center">
                <button
                  type="submit"
                  className="btn btn-primary px-5 mb-3 w-100 mt-4"
                >
                  <i className="fas fa-spinner fa-spin"></i>Register
                </button>
              </div>
              <div
                id="emailHelp"
                className="form-text text-center mb-5 text-dark"
              >
                Already have an account?
                <Link to="/login" className="text-dark fw-bold">
                  Sign In
                </Link>
              </div>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
