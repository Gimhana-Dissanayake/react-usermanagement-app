import React from "react";
import { Container } from "react-bootstrap";

const Settings = () => {
  return (
    <Container>
      {/* change password */}
      <div className="tab-pane" id="reset-password">
        <form>
          <fieldset>
            <legend>User Password Management</legend>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                name="reset-password-email"
                required
                className="form-control"
                placeholder="Enter email (example@email.com)"
              />
              <small className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <button type="submit" className="btn btn-primary">
              <i className="fas fa-spinner fa-spin"></i>&nbsp;&nbsp;
              <span>Loading...</span>
              <span>Reset Password</span>
            </button>
          </fieldset>
        </form>
      </div>
    </Container>
  );
};

export default Settings;
