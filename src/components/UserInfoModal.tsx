import React, { FC } from "react";
import { Modal } from "react-bootstrap";
import { FaLock, FaUnlock } from "react-icons/fa";
import User from "../models/User";

interface Props {
  user: User | null;
  show: boolean;
  handleClose: () => void;
}

const UserInfoModal: FC<Props> = (props) => {
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title text-center" id="exampleModalLongTitle">
            {props.user?.firstName} {props.user?.lastName}
          </h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <div>
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col-12 col-sm-auto">
                    <div className="mx-auto" style={{ width: 120 }}>
                      <div className="d-flex justify-content-center align-items-center rounded">
                        <img
                          className="rounded"
                          height="120"
                          width="120"
                          src={props.user?.profileImageUrl || ""}
                          alt={props.user?.firstName}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col d-flex flex-column flex-sm-row justify-content-between">
                    <div className="text-center text-sm-left mb-sm-0">
                      <h6 className="pt-sm-2 pb-1 mb-0 text-nowrap">
                        {props.user?.firstName} {props.user?.lastName}
                      </h6>
                      <p className="mb-1">Username</p>
                      <div className="">
                        Status:<span className="inline-block mr-2"></span>
                        <span className="badge badge-success">Active</span>
                        <span className="badge badge-danger">Inactive</span>
                      </div>
                      <div className="text-muted">
                        <small>
                          Last Login:{" "}
                          {props.user?.lastLoginDateDisplay?.toString() || ""}
                        </small>
                      </div>
                    </div>
                    <div className="text-center text-sm-right">
                      <div className="text-muted">
                        <small>Joined - date here</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item"></li>
                <li className="list-group-item">
                  <i className="fa fa-id-badge float-right"></i>
                  {props.user?.userId}
                </li>
                <li className="list-group-item">
                  <i className="fa fa-envelope float-right"></i>
                  {props.user?.email}
                </li>
                <li className="list-group-item">
                  <i className="fas fa-shield-alt float-right"></i>Role
                </li>
                <li className="list-group-item">
                  <i className="fas fa-sign-in-alt float-right"></i>
                  {props.user?.lastLoginDateDisplay?.toDateString()}
                </li>
                <li className="list-group-item">
                  <span>
                    <FaLock />
                    Account Locked
                  </span>
                  <span>
                    <FaUnlock className="ml-2" />
                    Account Unlocked
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-dismiss="modal"
          >
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default UserInfoModal;
