import React, { FC } from "react";
import { Modal } from "react-bootstrap";

interface Props {
  show: boolean;
  handleClose: () => void;
}

const EditUserModal: FC<Props> = (props) => {
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
                <input type="text" name="firstName" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" name="lastName" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="authority">Role</label>
                <select name="role" className="form-control">
                  <option value="ROLE_USER">USER</option>
                  <option value="ROLE_HR">HR</option>
                  <option value="ROLE_MANAGER">MANAGER</option>
                  <option value="ROLE_ADMIN">ADMIN</option>
                  <option value="ROLE_SUPER_ADMIN">SUPER ADMIN</option>
                </select>
              </div>
              <div className="input-group mb-2">
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
                    <span>First Name</span>
                    <span>Choose File</span>
                  </label>
                </div>
              </div>
              <fieldset className="form-group">
                <div className="form-check">
                  <label className="form-check-label">
                    <input
                      name="active"
                      type="checkbox"
                      className="form-check-input"
                    />
                    Acitve
                  </label>
                </div>
                <div className="form-check disabled">
                  <label className="form-check-label">
                    <input
                      name="locked"
                      type="checkbox"
                      className="form-check-input"
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
            className="btn btn-primary"
            onClick={props.handleClose}
          >
            Save changes
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default EditUserModal;
