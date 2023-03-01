import moment from "moment";
import React, { FC } from "react";
import { Modal } from "react-bootstrap";
import {
  FaEnvelope,
  FaLock,
  FaPortrait,
  FaShieldAlt,
  FaUnlock,
} from "react-icons/fa";
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
            <span aria-hidden="true" onClick={props.handleClose}>
              &times;
            </span>
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
                      <p className="mb-1">{props.user?.username}</p>
                      <div className="">
                        <span className="mr-1">Status :</span>
                        {props.user?.active ? (
                          <span className="badge badge-success">Active</span>
                        ) : (
                          <span className="badge badge-danger">Inactive</span>
                        )}
                        <span className="inline-block mr-2"></span>
                      </div>
                      <div className="text-muted">
                        <small style={{ fontSize: 12 }}>
                          Last Login:{" "}
                          {`${moment(
                            props.user?.lastLoginDateDisplay || new Date()
                          ).format("LLL")}`}
                        </small>
                      </div>
                    </div>
                    <div className="text-center text-sm-right">
                      <div className="text-muted">
                        <div style={{ fontSize: 10 }}>
                          Joined:{" "}
                          {`${moment(props.user?.joinDate || new Date()).format(
                            "ll"
                          )}`}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item"></li>
                <li className="list-group-item d-flex justify-content-between">
                  <div> {props.user?.userId}</div>
                  <FaPortrait />
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <div>{props.user?.email}</div>
                  <FaEnvelope />
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <div>{props.user?.role}</div>
                  <FaShieldAlt />
                </li>
                <li className="list-group-item ">
                  {props.user?.notLocked ? (
                    <div className="d-flex">
                      <div>Account Locked</div>
                      <FaLock color="#dc3545" className="ml-auto" />
                    </div>
                  ) : (
                    <div className="d-flex">
                      <div>Account Unlocked</div>
                      <FaUnlock color="#28a745" className="ml-auto" />
                    </div>
                  )}
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
            onClick={props.handleClose}
          >
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default UserInfoModal;
