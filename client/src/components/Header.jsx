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
    if (userId && token) {
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
    }
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
              {token !== "" && token != null ? (
                <div className="d-flex">
                  <span className="text-light align-self-center">Welcome,</span>
                  <Link to="/profile" className="nav-link text-light mx-2">
                    {userdata[0]?.first_name}
                    <span className="ms-2 mb-2" onClick={handleLogout}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-box-arrow-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
                        />
                        <path
                          fillRule="evenodd"
                          d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                        />
                      </svg>
                    </span>
                  </Link>
                </div>
              ) : (
                <Link
                  to="/login"
                  className="nav-link btn btn-warning px-2 pb-1"
                >
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
