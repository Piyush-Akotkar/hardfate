import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Form } from 'react-bootstrap'
import './login.css'
import axios from 'axios';

const Register = () => {
  const [inputs, setInputs] = useState({
    username:"",
    email:"",
    password:""
  });
  const [err, setError] = useState(null)

  const navigate = useNavigate()

  const handleChange = e => {
    setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
  }

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post("auth/register", inputs);
      navigate("/login")
    } catch (err) {
      setError(err.response.data)
    }
  }

  return (
    <div>
      <div className='login-container'>
        <div className="login-box w-50 mx-auto mt-5 text-light p-5">
          <h1 className='metorius text-center'>Register</h1>
          <Form method='POST'>
            <Form.Group className="mb-3" controlId="formGroupUsername">
              <Form.Label className='metorius'>Username</Form.Label>
              <Form.Control type="text" name='username' onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label className='metorius'>Email address</Form.Label>
              <Form.Control type="email" name='email' onChange={handleChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label className='metorius'>Password</Form.Label>
              <Form.Control type="password" name="password" onChange={handleChange} />
            </Form.Group>

            {err && <p>{err}</p>}
            
            <div className="mt-4">
              <button className='btn btn-login btn-lg w-100' onClick={handleSubmit}>Register</button>
            </div>
            <p className='metorius mt-3 text-center'>Already have account? <Link to="/login" className='metorius'>Login Now</Link></p>
            
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Register