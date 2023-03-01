import React, { FC, useState } from "react";
import { Modal } from "react-bootstrap";
import { AddNewUserDTO } from "../dtos/AddNewUserDTO";
import User from "../models/User";
import UserServices from "../service/UserServices";

interface Props {
  show: boolean;
  handleClose: () => void;
  isLoadingHandler: (value: boolean) => void;
  setAddNewUser: (user: User) => void;
}

const init: AddNewUserDTO = {
  firstName: "",
  lastName: "",
  username: "",
  email: "",
  role: "",
  profileImage: "",
  isActive: false,
  isNotLocked: false,
};

const AddNewUserModal: FC<Props> = (props) => {
  const [state, setState] = useState<AddNewUserDTO>(init);

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

  const checkboxInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState((ps: any) => ({
      ...ps,
      [e.target.name]: e.target.checked,
    }));
  };

  const submitHandler = () => {
    if (state) {
      props.isLoadingHandler(true);
      const addNewUserDTO: AddNewUserDTO = {
        firstName: state.firstName,
        lastName: state.lastName,
        username: state.username,
        email: state.email,
        role: state.role,
        profileImage: state.profileImage,
        isActive: state.isActive,
        isNotLocked: state.isNotLocked,
      };
      UserServices.addUser(addNewUserDTO)
        .then((val) => {
          props.setAddNewUser(val.data);
        })
        .catch(() => {
          console.log("ERROR");
        })
        .finally(() => {
          props.isLoadingHandler(false);
        });
    }
  };

  console.log("STATE STATE ", state);

  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title text-center">New User</h5>
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
          <div>
            <form>
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  className="form-control"
                  value={state?.firstName}
                  onChange={stateInputHandler}
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  className="form-control"
                  value={state?.lastName}
                  onChange={stateInputHandler}
                />
              </div>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  value={state?.username}
                  onChange={stateInputHandler}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={state?.email}
                  onChange={stateInputHandler}
                />
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
                    name="profileImage"
                    className="custom-file-input"
                  />
                  <label className="custom-file-label">
                    <span>FirstName</span>
                    <span>Choose File</span>
                  </label>
                </div>
              </div> */}
              <fieldset className="form-group">
                <div className="form-check">
                  <label className="form-check-label">
                    <input
                      type="checkbox"
                      name="isActive"
                      className="form-check-input"
                      onChange={checkboxInputHandler}
                      checked={state?.isActive}
                    />
                    Acitve
                  </label>
                </div>
                <div className="form-check disabled">
                  <label className="form-check-label">
                    <input
                      type="checkbox"
                      name="isNotLocked"
                      className="form-check-input"
                      onChange={checkboxInputHandler}
                      checked={state?.isNotLocked}
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
            id="new-user-close"
            onClick={props.handleClose}
          >
            Close
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              submitHandler();
              props.handleClose();
            }}
          >
            Save changes
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default AddNewUserModal;
