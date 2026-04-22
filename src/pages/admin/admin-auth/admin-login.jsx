
import { useState } from "react";
import { Link } from "react-router-dom";
import "./adminlogin.css";

export default function AdminLogin() {
    const [ username, setusername ] = useState("admin");
    const [ password, setpassword ] = useState("admin123");

    return (
        <div className="admin-login-container">
            <h1>Admin Panel</h1>
            <p>Sign in to manage your platform</p>
            <form>
                <div id='username'>
                    <label>Email Address</label>
                    <input 
                    id='username'
                    type='text'
                    name='username'
                    placeholder='Enter Your Username'
                    value={username}
                    onChange={(e) => setusername(e.target.value)} //menaning of this line is that everytime the  e that is the event listener e.target.value abhi ka current value btata hai.
                    />
                </div>

                <div id='password'>
                    <label>Password</label>
                    <input
                    id='password'
                    type='text'
                    name='password'
                    placeholder='Enter your Password'
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                    />
                </div>

                
                <Link to="/admin/dashboard">Go to Dashboard</Link>
                <div id ="forgot-password">Forgot password?</div>
            </form>
        </div>
    );
}

