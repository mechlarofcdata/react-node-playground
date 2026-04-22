import { useState, useEffect } from 'react';
import UserRegister from './user-register';
import { Link } from "react-router-dom";

function UserLogin() {

    const [ data, setData ] = useState({
        userName:"",
        password:""
    });

    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!data.userName || !data.password) {
            alert("Fill all fields");
            return;
        }
        console.log("UserName: " , data.userName);
        console.log("Password: ", data.password);
    }

    return (
        <div>
            <div>
                <h1>Welcome Back</h1>
                <h3>Sign in to continue to your account</h3>
            </div>
            <h1>Log in</h1>
            <form onSubmit={handleSubmit}>

                <div id='usrnm'>
                    <label>UserName</label>
                    <input 
                    id='userName'
                    type='text'
                    name='userName'
                    placeholder='Enter Your UserName'
                    value={data.userName}
                    onChange={handleChange}
                    />
                </div>

                <div id='pw'>
                    <label>Password</label>
                    <input
                    id='password'
                    type='text'
                    name='password'
                    placeholder='Enter your Password'
                    value={data.password}
                    onChange={handleChange}
                    />
                    <div>Forgot password?</div>
                </div>
                <button type='submit'>Sign in to my account</button>
            </form>
            <div>
                <div>or continue with</div>
                <button type='sumbit'>Continue with Google</button>
                <div>Don't have an account?{" "}
                    <Link to="/register">Go to Register</Link>
                </div>
                <Link to="/layout">Go to Main</Link>
            </div>
        </div>
    )
}
export default UserLogin;