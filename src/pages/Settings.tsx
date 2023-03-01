import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { FaExclamation } from "react-icons/fa";
import LoadingIndicator from "../components/LoadingIndicator";
import userService from "../service/UserServices";
import { toTitleCase } from "../util";
import Notification from "./../components/Notification";

const Settings = () => {
  const [state, setState] = useState<{ loading: boolean; email: string }>({
    loading: false,
    email: "",
  });

  const changeEmailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState((ps) => ({ ...ps, email: e.target.value }));
  };

  const loadingHandler = (value: boolean) => {
    setState((ps) => ({ ...ps, loading: value }));
  };

  const onSubmitHandler = () => {
    loadingHandler(true);
    userService
      .resetPassword(state.email)
      .then((e) => {
        Notification({
          isSuccess: true,
          message: toTitleCase(e.data.message),
        });
      })
      .catch((err) => {
        Notification({
          isSuccess: false,
          message: toTitleCase(err.message),
          icon: FaExclamation,
        });
      })
      .finally(() => {
        loadingHandler(false);
      });
  };

  return (
    <Container>
      {/* change password */}
      <div className="tab-pane" id="reset-password">
        {state.loading ? <LoadingIndicator /> : <></>}
        <form
          onSubmit={(e) => {
            onSubmitHandler();
            e.preventDefault();
          }}
        >
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
                onChange={changeEmailHandler}
              />
              <small className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <button
              type="submit"
              className={`btn btn-primary ${
                (state.loading || !state.email) && "disabled"
              }`}
            >
              <span>Reset Password</span>
            </button>
          </fieldset>
        </form>
      </div>
    </Container>
  );
};

export default Settings;
