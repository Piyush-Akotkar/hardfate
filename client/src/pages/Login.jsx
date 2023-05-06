import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import "./login.css";
import axios from "axios";

function Login() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (token !== "" && token != null) {
      navigate("/");
    } else {
      console.log("No Token");
    }
  }, [token, navigate]);

  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [err, setError] = useState(null);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(`${process.env.REACT_APP_BASE_URL}/auth/login`, inputs)
        .then((res) => {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("user_type", res.data.user_type);
          localStorage.setItem("user_id", res.data.user_id);
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box w-50 mx-auto mt-5 text-light p-5">
        <h1 className="metorius text-center">Login</h1>
        <Form method="POST">
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label className="metorius">Email Id</Form.Label>
            <Form.Control type="email" name="email" onChange={handleChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label className="metorius">Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              onChange={handleChange}
            />
          </Form.Group>
          <div className="mt-4">
            <button
              className="btn btn-login btn-lg w-100"
              onClick={handleSubmit}
            >
              Login
            </button>
          </div>

          {err && <p>{err}</p>}

          <p className="metorius mt-3 text-center">
            Don't have account?{" "}
            <Link to="/register" className="metorius">
              Register Now
            </Link>
          </p>
        </Form>
      </div>
    </div>
  );
}

export default Login;
