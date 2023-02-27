import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaCogs, FaUser, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <React.Fragment>
      <Row className="mb-2 mt-2 text-center">
        <Col md={4}></Col>
        <Col md={4}>
          <h5>User Management Portal</h5>
          <small>Gimhana</small>
        </Col>
        <Col md={4}></Col>
      </Row>
      <nav className="navbar navbar-expand-md breadcrumb  rounded">
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="nav nav-pills d-flex w-100">
            <div className="d-flex">
              <Link to="/auth/dashboard" className="nav-item nav-link ml-1">
                <FaUsers />
                Users
              </Link>

              <Link to="/auth/settings" className="nav-item nav-link ml-1">
                <FaCogs className="text-primary mr-2" />
                Settings
              </Link>
            </div>

            <div className="ml-auto">
              <Link
                to="/auth/profile"
                className="nav-item nav-link ml-auto inline-block"
              >
                Welcome,
                <FaUser className="text-primary mr-2" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Header;
