import React, { useState } from "react";
import { Link} from 'react-router-dom';

import './styles.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="container">
      <h2 className="m-5 text-center">Login Form</h2>
      <form className="col-md-5 mx-auto">
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            value={email}
            className="form-control"
            placeholder="Enter email"
            onChange={(e) => {setEmail(e.target.value)}}
            required
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            value={password}
            className="form-control"
            placeholder="Password"
            onChange={(e) => {setPassword(e.target.value)}}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary mb-5">
          Submit
        </button>
      </form>
      <Link to="/register" className="form-switch text-center mt-5"><h5>👉 Not a member? Register Here!</h5></Link>
    </div>
  );
}

export default Login;
