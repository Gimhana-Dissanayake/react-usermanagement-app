import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaExclamation } from "react-icons/fa";
import { Link } from "react-router-dom";
import LoadingIndicator from "../components/LoadingIndicator";
import { RegisterDTO } from "../dtos/RegisterDTO";
import UserServices from "../service/UserServices";
import { toTitleCase } from "../util";
import Notification from "./../components/Notification";

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
  });

  const [isTouched, setIsTouched] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
  });

  const setIsTouchedOnBlurHandler = (
    e: React.FocusEvent<HTMLInputElement, Element>
  ) => {
    let text = "";
    if (e.target.name === "firstName" && !e.target.value) {
      text = "First Name cannot be empty";
    } else if (e.target.name === "lastName" && !e.target.value) {
      text = "Last Name cannot be empty";
    } else if (e.target.name === "username" && !e.target.value) {
      text = "Username cannot be empty";
    } else if (e.target.name === "email" && !e.target.value) {
      text = "Email cannot be empty";
    }

    setIsTouched((ps: any) => ({
      ...ps,
      [e.target.name]: text,
    }));
  };

  const setIsTouchedOnFocusHandler = (
    e: React.FocusEvent<HTMLInputElement, Element>
  ) => {
    setIsTouched((ps: any) => ({
      ...ps,
      [e.target.name]: "",
    }));
  };

  const stateInputHandler = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setState((ps: any) => ({
      ...ps,
      [e.target.name]: e.target.value,
    }));
  };

  const isFormValid = () => {
    return (
      isValidEmail() &&
      state.firstName &&
      state.lastName &&
      state.username &&
      state.email
    );
  };

  const isValidEmail = () => {
    let validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    return state.email.match(validRegex);
  };

  const submitHandler = () => {
    setIsLoading(true);

    const registerDTO: RegisterDTO = {
      firstName: state.firstName,
      lastName: state.lastName,
      username: state.username,
      email: state.email,
    };
    UserServices.register(registerDTO)
      .then((res) => {
        Notification({
          isSuccess: true,
          message: `A new account was created for ${res.data.firstName}. Please check your email for password to sign in.`,
          closeTime: 10000,
        });
      })
      .catch((err) => {
        Notification({
          isSuccess: false,
          message: toTitleCase(err.message),
          closeTime: 10000,
          icon: FaExclamation,
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <Container>
      <Row>
        <Col md={6} className="offset-md-3">
          <h2 className="text-center text-dark mt-5">Sign In</h2>

          <div className="card my-5">
            <form
              className="card-body cardbody-color p-lg-5"
              onSubmit={(e) => {
                submitHandler();
                e.preventDefault();
              }}
            >
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
                  onChange={stateInputHandler}
                  onFocus={setIsTouchedOnFocusHandler}
                  onBlur={setIsTouchedOnBlurHandler}
                />
                {isTouched.username ? (
                  <div className="text-danger mt-1">{isTouched.username}</div>
                ) : (
                  <></>
                )}
              </div>

              <div className="mb-2 mt-3">
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  onChange={stateInputHandler}
                  onFocus={setIsTouchedOnFocusHandler}
                  onBlur={setIsTouchedOnBlurHandler}
                />
                {isTouched.firstName ? (
                  <div className="text-danger mt-1">{isTouched.firstName}</div>
                ) : (
                  <></>
                )}
              </div>

              <div className="mb-2 mt-3">
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  onChange={stateInputHandler}
                  onFocus={setIsTouchedOnFocusHandler}
                  onBlur={setIsTouchedOnBlurHandler}
                />
                {isTouched.lastName ? (
                  <div className="text-danger mt-1">{isTouched.lastName}</div>
                ) : (
                  <></>
                )}
              </div>

              <div className="mb-2 mt-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Email"
                  onChange={stateInputHandler}
                  onFocus={setIsTouchedOnFocusHandler}
                  onBlur={setIsTouchedOnBlurHandler}
                />
                {isTouched.email && !isValidEmail() ? (
                  <div className="text-danger mt-1">{isTouched.email}</div>
                ) : (
                  <></>
                )}
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className={`btn btn-primary px-5 mb-1 w-100 mt-4 ${
                    !isFormValid() && "disabled"
                  }`}
                >
                  Register
                </button>
                {isLoading && <LoadingIndicator className="mb-4" />}
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
