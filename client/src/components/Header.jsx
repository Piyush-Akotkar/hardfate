import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Container } from "react-bootstrap";
import "./header.css";
import axios from "axios";

function Header() {
  let userId = localStorage.getItem("user_id");
  let token = localStorage.getItem("token");
  const [userdata, setUserData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/users/getUserById/${userId}`, {
        headers: { authorization: `bearer ${token}` },
      })
      .then((res) => {
        setUserData(res.data);
        // console.log(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userId, token]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user_type");
    localStorage.removeItem("user_id");
    navigate("/login");
    window.location.reload();
  };

  return (
    <div>
      <Navbar fixed="top">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="nav-link text-light">
              HF
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              {token !== "" ? (
                <Link to="/profile" className="nav-link text-light">
                  Welcome, {userdata[0]?.first_name}
                  <span className="btn btn-warning ms-2" onClick={handleLogout}>
                    Logout
                  </span>
                </Link>
              ) : (
                <Link to="/login" className="nav-link text-light">
                  Login{" "}
                </Link>
              )}
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
