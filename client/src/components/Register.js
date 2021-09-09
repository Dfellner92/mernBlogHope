import React from "react";
import { Link } from 'react-router-dom';

import './styles.css'

function Register() {
  return (
    <div className="container">
      <h2 className="m-5 text-center">Register Form</h2>
      <form className="col-md-5 mx-auto">
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            required
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mb-5">
          Submit
        </button>
      </form>
      <Link to="/" className="form-switch text-center mt-5">
        <h5>👉 Already a member? Login Here!</h5>
      </Link>
    </div>
  );
}

export default Register;
