import moment from "moment";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { FaSignInAlt } from "react-icons/fa";
import LoadingIndicator from "../components/LoadingIndicator";
import { UpdateUserDTO } from "../dtos/UpdateUserDTO";
import { useAuth } from "../hooks/useAuth";
import { initUser } from "../models/User";
import UserServices from "../service/UserServices";

const Profile = () => {
  const { user, logout, setAppUser } = useAuth();

  const [state, setState] = useState(user || initUser);

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
      state.role
    );
  };

  const isValidEmail = () => {
    let validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    return state.email.match(validRegex);
  };

  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = () => {
    setIsLoading(true);

    const updateUserDTO: UpdateUserDTO = {
      currentUsername: state.username,
      firstName: state.firstName,
      lastName: state.lastName,
      username: state.username,
      email: state.email,
      role: state.role,
      profileImage: state.profileImageUrl,
      isActive: state.active,
      isNotLocked: state.notLocked,
    };
    UserServices.updateUser(updateUserDTO)
      .then((res) => {
        setAppUser(res.data);
      })
      .catch(() => {
        console.log("ERROR");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <Container>
      <div className="mt-3">
        {/* user profile */}
        {isLoading && <LoadingIndicator />}
        <div className="tab-pane" id="profile">
          <div className="container">
            <div className="row flex-lg-nowrap">
              <div className="col">
                <div className="row">
                  <div className="col mb-3">
                    <div className="card">
                      <div className="card-body">
                        <div className="e-profile">
                          <div className="row">
                            <div className="col-12 col-sm-auto">
                              <div className="mx-auto" style={{ width: 120 }}>
                                <div className="d-flex justify-content-center align-items-center rounded">
                                  <img
                                    className="rounded"
                                    height="135"
                                    width="135"
                                    src={state?.profileImageUrl || ""}
                                    alt=""
                                  />
                                </div>
                                {/* <div className="progress mt-1">
                                  <div
                                    className="progress-bar bg-info"
                                    role="progressbar"
                                  >
                                    %
                                  </div>
                                </div> */}
                              </div>
                            </div>
                            <div className="col d-flex flex-column flex-sm-row justify-content-between mb-3">
                              <div className="text-center text-sm-left mb-2 mb-sm-0">
                                <h4 className="pt-sm-2 pb-1 mb-0 text-nowrap">
                                  {state?.firstName} {state?.lastName}
                                </h4>
                                <p className="mb-0">{state?.username}</p>
                                <div className="text-muted">
                                  <small>
                                    Last login:{" "}
                                    {moment(
                                      state?.lastLoginDate || new Date()
                                    ).format("lll")}
                                  </small>
                                </div>
                                {/* <div className="mt-2">
                                  <button
                                    onClick={() => {}}
                                    className="btn btn-primary"
                                    type="button"
                                  >
                                    <i className="fa fa-fw fa-camera"></i>
                                    <span>Change Photo</span>
                                  </button>
                                </div> */}
                              </div>
                              <div className="text-center text-sm-right">
                                <div className="text-muted">
                                  <small>
                                    Joined:{" "}
                                    {moment(state?.joinDate).format("ll")}
                                  </small>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="tab-content pt-3">
                            <div className="tab-pane active">
                              <form
                                className="form"
                                onSubmit={(e) => {
                                  submitHandler();
                                  e.preventDefault();
                                }}
                              >
                                <div className="row">
                                  <div className="col">
                                    <div className="row">
                                      <div className="col">
                                        <div className="form-group">
                                          <label>First Name</label>
                                          <input
                                            type="text"
                                            name="firstName"
                                            className="form-control"
                                            value={state?.firstName}
                                            onChange={stateInputHandler}
                                            onFocus={setIsTouchedOnFocusHandler}
                                            onBlur={setIsTouchedOnBlurHandler}
                                          />
                                          {isTouched.firstName ? (
                                            <div className="text-danger mt-1">
                                              {isTouched.firstName}
                                            </div>
                                          ) : (
                                            <></>
                                          )}
                                        </div>
                                      </div>
                                      <div className="col">
                                        <div className="form-group">
                                          <label>Last Name</label>
                                          <input
                                            type="text"
                                            name="lastName"
                                            className="form-control"
                                            value={state?.lastName}
                                            onChange={stateInputHandler}
                                            onFocus={setIsTouchedOnFocusHandler}
                                            onBlur={setIsTouchedOnBlurHandler}
                                          />
                                          {isTouched.lastName ? (
                                            <div className="text-danger mt-1">
                                              {isTouched.lastName}
                                            </div>
                                          ) : (
                                            <></>
                                          )}
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col">
                                        <div className="form-group">
                                          <label>Username</label>
                                          <input
                                            type="text"
                                            name="username"
                                            className="form-control"
                                            value={state?.username}
                                            onChange={stateInputHandler}
                                            onFocus={setIsTouchedOnFocusHandler}
                                            onBlur={setIsTouchedOnBlurHandler}
                                          />
                                          {isTouched.username ? (
                                            <div className="text-danger mt-1">
                                              {isTouched.username}
                                            </div>
                                          ) : (
                                            <></>
                                          )}
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col">
                                        <div className="form-group">
                                          <label>Email</label>
                                          <input
                                            type="text"
                                            name="email"
                                            className="form-control"
                                            value={state?.email}
                                            onChange={stateInputHandler}
                                            onFocus={setIsTouchedOnFocusHandler}
                                            onBlur={setIsTouchedOnBlurHandler}
                                          />
                                          {isTouched.email &&
                                          !isValidEmail() ? (
                                            <div className="text-danger mt-1">
                                              {isTouched.email}
                                            </div>
                                          ) : (
                                            <></>
                                          )}
                                        </div>
                                      </div>
                                    </div>
                                    <div className="row">
                                      <div className="col mb-3">
                                        <div className="form-group">
                                          <label>Role</label>
                                          <small>(read only)</small>
                                          <select
                                            name="role"
                                            required
                                            className="form-control"
                                          >
                                            <option value="ROLE_USER">
                                              USER
                                            </option>
                                            <option value="ROLE_HR">HR</option>
                                            <option value="ROLE_MANAGER">
                                              MANAGER
                                            </option>
                                            <option value="ROLE_ADMIN">
                                              ADMIN
                                            </option>
                                            <option value="ROLE_SUPER_ADMIN">
                                              SUPER ADMIN
                                            </option>
                                          </select>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                {/* <div className="row">
                                  <div className="col-12 col-sm-5 offset-sm-1 mb-3">
                                    <div className="mb-2">
                                      <b>Account Settings</b>
                                    </div>
                                    <div className="row">
                                      <div className="col">
                                        <div className="custom-controls-stacked px-2">
                                          <div className="custom-control custom-checkbox">
                                            <input
                                              name="active"
                                              type="checkbox"
                                              className="custom-control-input"
                                            />
                                            <label className="custom-control-label">
                                              Active
                                            </label>
                                          </div>
                                          <div className="custom-control custom-checkbox">
                                            <input
                                              name="notLocked"
                                              type="checkbox"
                                              className="custom-control-input"
                                            />
                                            <label className="custom-control-label">
                                              Unlocked
                                            </label>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div> */}
                                <div className="row">
                                  <div className="col d-flex justify-content-end">
                                    <button
                                      className={`btn btn-primary ${
                                        !isFormValid() && "disabled"
                                      }`}
                                      type="submit"
                                      onClick={submitHandler}
                                    >
                                      <span>Save Changes</span>
                                    </button>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-3 mb-3">
                    <div className="card mb-3">
                      <div className="card-body">
                        <div className="px-xl-3">
                          <button
                            onClick={() => {
                              logout();
                            }}
                            className="btn btn-block btn-secondary d-flex align-items-center justify-content-center"
                          >
                            Logout
                            <FaSignInAlt className="ml-2" />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-body">
                        <h6 className="card-title font-weight-bold">
                          Permissions From Role
                        </h6>
                        {state.authorities.map((a) => {
                          return <h6 className="card-text">{a}</h6>;
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Profile;
