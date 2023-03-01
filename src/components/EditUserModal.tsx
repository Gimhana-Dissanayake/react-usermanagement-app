import React, { FC, useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { UpdateUserDTO } from "../dtos/UpdateUserDTO";
import User, { initUser } from "../models/User";
import UserServices from "./../service/UserServices";
interface Props {
  user: User | null;
  show: boolean;
  handleClose: () => void;
  setUpdateUser: (user: User) => void;
  isLoadingHandler: (value: boolean) => void;
}

const EditUserModal: FC<Props> = (props) => {
  const [state, setState] = useState<User>(initUser);

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

  const checkboxInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState((ps: any) => ({
      ...ps,
      [e.target.name]: e.target.checked,
    }));
  };

  useEffect(() => {
    props.user && setState(props.user);
  }, [props.user]);

  const submitHandler = () => {
    if (state) {
      props.isLoadingHandler(true);
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
        .then((val) => {
          props.setUpdateUser(val.data);
        })
        .catch(() => {
          console.log("ERROR");
        })
        .finally(() => {
          props.isLoadingHandler(false);
        });
    }
  };

  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title text-center">Edit First Name Last Name</h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true" onClick={props.handleClose}>
              &times;
            </span>
          </button>
        </div>
        <div className="modal-body">
          <div className="">
            <form>
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
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
                  <div className="text-danger mt-1">{isTouched.firstName}</div>
                ) : (
                  <></>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
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
                  <div className="text-danger mt-1">{isTouched.lastName}</div>
                ) : (
                  <></>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="username">Username</label>
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
                  <div className="text-danger mt-1">{isTouched.username}</div>
                ) : (
                  <></>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={state?.email}
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
              <div className="form-group">
                <label htmlFor="authority">Role</label>
                <select
                  name="role"
                  className="form-control"
                  onChange={stateInputHandler}
                >
                  <option value="ROLE_USER">USER</option>
                  <option value="ROLE_HR">HR</option>
                  <option value="ROLE_MANAGER">MANAGER</option>
                  <option value="ROLE_ADMIN">ADMIN</option>
                  <option value="ROLE_SUPER_ADMIN">SUPER ADMIN</option>
                </select>
              </div>
              {/* <div className="input-group mb-2">
                <div className="input-group-prepend">
                  <span className="input-group-text">Profile Picture </span>
                </div>
                <div className="custom-file">
                  <input
                    type="file"
                    accept="image/*"
                    name="profileImageUrl"
                    className="custom-file-input"
                    onChange={(e) => {
                      setFile(fileRef?.current?.files[0]);
                      setFileHandler(e);
                    }}
                    ref={fileRef}
                  />
                  <label className="custom-file-label">
                    <span>Choose File</span>
                  </label>
                </div>
              </div> */}
              <fieldset className="form-group">
                <div className="form-check">
                  <label className="form-check-label">
                    <input
                      name="active"
                      type="checkbox"
                      className="form-check-input"
                      onChange={checkboxInputHandler}
                      checked={state?.active}
                    />
                    Acitve
                  </label>
                </div>
                <div className="form-check disabled">
                  <label className="form-check-label">
                    <input
                      name="notLocked"
                      type="checkbox"
                      className="form-check-input"
                      onChange={checkboxInputHandler}
                      checked={state?.notLocked}
                    />
                    Unlocked
                  </label>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-dismiss="modal"
            id="closeEditUserModalButton"
            onClick={props.handleClose}
          >
            Close
          </button>
          <button
            type="button"
            className={`btn btn-primary ${!isFormValid() && "disabled"}`}
            onClick={() => {
              if (isFormValid()) {
                submitHandler();
                props.handleClose();
              }
            }}
          >
            Save changes
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default EditUserModal;
