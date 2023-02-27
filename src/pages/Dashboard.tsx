import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { FaEdit, FaPlus, FaRedoAlt, FaTrash } from "react-icons/fa";
import EditUserModal from "../components/EditUserModal";
import UserService from "../service/UserServices";

const Dashboard = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    UserService.getUsers()
      .then((users) => {
        console.log("USERS ", users);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <Container>
      <div className="tab-pane fade show active" id="users">
        <div className="mb-3 float-right">
          <div className="btn-group mr-2">
            <form className="form-inline my-2 my-lg-0 justify-content-center">
              <input
                name="searchTerm"
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search users..."
              />
            </form>
            <button
              type="button"
              className="btn btn-info"
              data-toggle="modal"
              data-target="#addUserModal"
            >
              <FaPlus className="mr-2" />
              New User
            </button>
          </div>
          <div className="btn-group">
            <button type="button" onClick={() => {}} className="btn btn-info">
              <FaRedoAlt />
            </button>
          </div>
        </div>
        <table className="table table-hover">
          <thead className="table-borderless">
            <tr className="text-center">
              <th>Photo</th>
              <th>User ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td>
                <img
                  height="40"
                  width="40"
                  src="https://www.nme.com/wp-content/uploads/2022/02/2022_thebatman_alamy_2000x1270-1392x884.jpg"
                  className="rounded-circle img-fluid img-thumbnail"
                  alt=""
                />
              </td>
              <td>id</td>
              <td>firstName</td>
              <td>lastName</td>
              <td>username</td>
              <td>email</td>
              <td>
                <span className="badge badge-success">Active</span>
                <span className="badge badge-danger">Inactive</span>
              </td>
              <td className="">
                <div className="btn-group">
                  <button className="btn btn-outline-info" onClick={() => {}}>
                    <FaEdit />
                  </button>
                  <button className="btn btn-outline-danger" onClick={() => {}}>
                    <FaTrash />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <button onClick={handleShow}>show modal</button>
      <EditUserModal handleClose={handleClose} show={show} />
    </Container>
  );
};

export default Dashboard;
