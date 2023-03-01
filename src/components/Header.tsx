import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaCogs, FaUser, FaUsers } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const text =
    location.pathname === "/auth/profile"
      ? "Profile"
      : location.pathname === "/auth/settings"
      ? "Settings"
      : "Dashboard";

  return (
    <React.Fragment>
      <Row className="mb-2 mt-2 text-center">
        <Col md={4}></Col>

        <Col md={4}>
          <h5>User Management Portal</h5>
          <small>{text}</small>
        </Col>

        <Col md={4}></Col>
      </Row>
      <nav className="navbar navbar-expand-md breadcrumb  rounded">
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="nav nav-pills d-flex w-100">
            <div className="d-flex">
              <NavLink
                to="/auth/dashboard"
                className="nav-item nav-link d-flex align-items-center"
              >
                <FaUsers className="mr-2" />
                <div>Users</div>
              </NavLink>

              <NavLink
                to="/auth/settings"
                className="nav-item nav-link d-flex align-items-center"
              >
                <FaCogs className="mr-2" />
                Settings
              </NavLink>
            </div>

            <div className="ml-auto">
              <NavLink
                to="/auth/profile"
                className="nav-item nav-link d-flex align-items-center"
              >
                <FaUser className="mr-2" />
                Profile
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Header;
