import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";
import AddNewUserModal from "../components/AddNewUserModal";
import EditUserModal from "../components/EditUserModal";
import LoadingIndicator from "../components/LoadingIndicator";
import UserInfoModal from "../components/UserInfoModal";
import User from "../models/User";
import UserService from "../service/UserServices";

const Dashboard = () => {
  const [show, setShow] = useState(false);
  const [addNewModal, setAddNewModal] = useState(false);
  const [userInfoModal, setUserInfoModal] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAddNewModalClose = () => setAddNewModal(false);
  const handleAddNewModalShow = () => setAddNewModal(true);

  const handleUserInfoModalClose = () => setUserInfoModal(false);
  const handleUserInfoModallShow = () => setUserInfoModal(true);

  const [data, setData] = useState<{
    users: User[];
    selectedUser: User | null;
    isLoading: boolean;
    searchTerm: string;
  }>({ users: [], selectedUser: null, isLoading: false, searchTerm: "" });

  useEffect(() => {
    isLoadingHandler(true);
    UserService.getUsers()
      .then((response) => {
        setData((ps) => ({ ...ps, users: response.data }));
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        isLoadingHandler(false);
      });
  }, []);

  const isLoadingHandler = (value: boolean) => {
    setData((ps) => ({ ...ps, isLoading: value }));
  };

  const setUpdateUser = (user: User) => {
    const usersClone = [...data.users];
    const idx = usersClone.map((u) => u.username).indexOf(user.username);
    usersClone[idx] = user;
    setData((ps) => ({ ...ps, users: usersClone }));
  };

  const setAddNewUser = (user: User) => {
    const usersClone = [...data.users, user];
    setData((ps) => ({ ...ps, users: usersClone }));
  };

  const searchHandler = (searchTerm: string) => {
    setData((ps) => ({ ...ps, searchTerm: searchTerm }));
  };

  return (
    <Container>
      {data.isLoading ? <LoadingIndicator /> : <></>}
      <div className="tab-pane fade show active" id="users">
        <div className="mb-3 float-right">
          <div className="btn-group mr-2">
            <form className="form-inline my-2 my-lg-0 justify-content-center">
              <input
                name="searchTerm"
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search users..."
                onChange={(e) => {
                  searchHandler(e.target.value);
                }}
              />
            </form>
            <button
              type="button"
              className="btn btn-info"
              onClick={handleAddNewModalShow}
            >
              <FaPlus className="mr-2" />
              New User
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
            {data.users
              .filter(
                (user) =>
                  user.username.trim() &&
                  user.username
                    .trim()
                    .toUpperCase()
                    .startsWith(data.searchTerm.trim().toUpperCase())
              )
              .map((user) => {
                return (
                  <tr
                    className="text-center"
                    onClick={() => {
                      setData((ps) => ({
                        ...ps,
                        selectedUser: user,
                      }));
                      setUserInfoModal(true);
                    }}
                  >
                    <td>
                      <img
                        height="40"
                        width="40"
                        src={user.profileImageUrl || ""}
                        className="rounded-circle img-fluid img-thumbnail"
                        alt=""
                      />
                    </td>
                    <td>{user.userId}</td>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>
                      {user.active ? (
                        <span className="badge badge-success">Active</span>
                      ) : (
                        <></>
                      )}
                      {user.notLocked ? (
                        <span className="badge badge-danger">Inactive</span>
                      ) : (
                        <></>
                      )}
                    </td>
                    <td className="">
                      <div className="btn-group">
                        <button
                          className="btn btn-outline-info"
                          onClick={(e) => {
                            handleShow();
                            setData((ps) => ({
                              ...ps,
                              selectedUser: user,
                            }));
                            e.stopPropagation();
                          }}
                        >
                          <FaEdit />
                        </button>
                        <button
                          className="btn btn-outline-danger"
                          onClick={() => {}}
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>

      <EditUserModal
        show={show}
        user={data.selectedUser}
        handleClose={handleClose}
        setUpdateUser={setUpdateUser}
        isLoadingHandler={isLoadingHandler}
      />
      <AddNewUserModal
        show={addNewModal}
        handleClose={handleAddNewModalClose}
        isLoadingHandler={isLoadingHandler}
        setAddNewUser={setAddNewUser}
      />

      <UserInfoModal
        show={userInfoModal}
        user={data.selectedUser}
        handleClose={handleUserInfoModalClose}
      />
    </Container>
  );
};

export default Dashboard;
