import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import UserLogin from './user-login';

function UserRegister() {
  const [ error, setError ] = useState("");

  const [ data, setData ] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setData({...data, [e.target.name]: e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("First Name: ", data.firstName);
    console.log("Last Name: ", data.lastName);
    console.log("User-Name: ", data.userName);
    console.log("Email: ", data.email);
    console.log("Password: ", data.password);
    console.log("Confirm Password: ", data.confirmPassword);

    if (data.password !== data.confirmPassword) {
      setError("password do not matched");
      return;
    }

    setError("");
    console.log("Form submitted successfully");
  }

  return (
    <div>
      <div>
        <h1>Welcome Back</h1>
        <h3>Sign Up to create account</h3>
      </div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>

        <div>
          <label>First Name</label>
          <input 
          id='firstName'
          type='text'
          name='firstName'
          placeholder='Enter your First-Name'
          value={data.firstName}
          onChange={handleChange}
          />
        </div>

        <div>
          <label>Last Name</label>
          <input 
          id='lastName'
          type='text'
          name='lastName'
          placeholder='Enter your Last-Name'
          value={data.lastName}
          onChange={handleChange}
          />
        </div>

        <div>
          <label>UserName</label>
          <input 
          id='userName'
          type='text'
          name='userName'
          placeholder='Enter your Unique User-Name'
          value={data.userName}
          onChange={handleChange}
          />
        </div>

        <div>
          <label>Email</label>
          <input 
          id='email'
          type='email'
          name='email'
          placeholder='Enter your Email'
          value={data.email}
          onChange={handleChange}
          />
        </div>

        <div>
          <label>Password</label>
          <input 
          id='password'
          type='password'
          name='password'
          placeholder='Enter your Password'
          value={data.password}
          onChange={handleChange}
          />
        </div>
        <div>
          <label>Confirm Password</label>
          <input 
          id='confirmPassword'
          type='password'
          name='confirmPassword'
          placeholder='Confirm Password'
          value={data.confirmPassword}
          onChange={handleChange}
          />
        </div>
        <button type='submit'>Submit</button>
      </form>

      <div>Already have an account?{" "}
        <Link to="/">Go to Login</Link>        
      </div>
    
    </div>
  )
}

export default UserRegister;