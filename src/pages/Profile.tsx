import React from "react";
import { Container } from "react-bootstrap";

const Profile = () => {
  return (
    <Container>
      <div className="mt-3">
        {/* user profile */}
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
                                    src={
                                      "https://thumbs.dreamstime.com/z/beautiful-historic-traditional-home-marietta-georgia-40733570.jpg"
                                    }
                                    alt=""
                                  />
                                </div>
                                <div className="progress mt-1">
                                  <div
                                    className="progress-bar bg-info"
                                    role="progressbar"
                                  >
                                    %
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col d-flex flex-column flex-sm-row justify-content-between mb-3">
                              <div className="text-center text-sm-left mb-2 mb-sm-0">
                                <h4 className="pt-sm-2 pb-1 mb-0 text-nowrap">
                                  first name last name
                                </h4>
                                <p className="mb-0">user name</p>
                                <div className="text-muted">
                                  <small>Last login: last login date</small>
                                </div>
                                <div className="mt-2">
                                  <button
                                    onClick={() => {}}
                                    className="btn btn-primary"
                                    type="button"
                                  >
                                    <i className="fa fa-fw fa-camera"></i>
                                    <span>Change Photo</span>
                                  </button>
                                </div>
                              </div>
                              <div className="text-center text-sm-right">
                                <div className="text-muted">
                                  <small>Joined </small>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="tab-content pt-3">
                            <div className="tab-pane active">
                              <form className="form">
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
                                          />
                                        </div>
                                      </div>
                                      <div className="col">
                                        <div className="form-group">
                                          <label>Last Name</label>
                                          <input
                                            type="text"
                                            name="lastName"
                                            className="form-control"
                                          />
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
                                          />
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
                                          />
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
                                <div className="row">
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
                                </div>
                                <div className="row">
                                  <div className="col d-flex justify-content-end">
                                    <button
                                      className="btn btn-primary"
                                      type="submit"
                                    >
                                      <i className="fas fa-spinner fa-spin"></i>
                                      &nbsp;&nbsp;
                                      <span>Loading...</span>
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
                            onClick={() => {}}
                            className="btn btn-block btn-secondary"
                          >
                            <span>Logout</span>
                            <i className="fas fa-sign-in-alt ml-1"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="card">
                      <div className="card-body">
                        <h6 className="card-title font-weight-bold">
                          Permissions From Role
                        </h6>
                        <h6 className="card-text">Card header</h6>
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
