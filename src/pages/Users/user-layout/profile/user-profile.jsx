import { useState } from 'react';

function UserProfile() {

    const [ error, setError ] = useState("");

    const [ data, setData ] = useState({
        firstName: "Aditi",
        lastName: "Shukla",
        userName: "X-N-aditi",
        email: "aditi@gmail.com",
        bio: "Do it like it is a piece of cake for you",
        currentPassword: "",
        newPassword: "",
        confirmPassword: ""
    });

    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    }

    const handleSubmit =(e) => {
        e.preventDefault();
        console.log("First Name: ", data.firstName);
        console.log("Last name: ", data.lastName);
        console.log("UserName: ", data.userName);
        console.log("Email: ", data.email);
        console.log("Bio: ", data.bio);
    }

    const handlePasswordUpdt = (e) => {
        if(data.newPassword !== data.confirmPassword) {
            setError("Password do not match");
            return;
        }
    };

    return (
        <div>
            <div className='main'>
                <aside className='LeftBar'>
                    <div className='photo'>AS</div>
                    <div>Aditi Shukla</div>
                    <div>@X-N-aditi</div>
                </aside>

                <div className='RightBar'>
                    <div>
                        <div>Personal information</div>
                        <div>Update your name, email, and bio.</div>
                    </div>
                    <div>
                        <form onSubmit={handleSubmit}>

                            <div>
                                <label>First Name</label>
                                <input
                                type='text'
                                name='firstName'
                                placeholder='Enter your First Name'
                                value={data.firstName}
                                onChange={handleChange}
                                 />
                            </div>

                            <div>
                                <label>Last Name</label>
                                <input
                                type='text'
                                name='lastName'
                                placeholder='Enter your Last Name'
                                value={data.lastName}
                                onChange={handleChange}
                                 />
                            </div>

                            <div>
                                <label>UserName</label>
                                <input
                                type='text'
                                name='userName'
                                placeholder='Enter your UserName'
                                value={data.userName}
                                onChange={handleChange}
                                 />
                            </div>

                            <div>
                                <label>Email</label>
                                <input
                                type='email'
                                name='email'
                                placeholder='Enter your Email'
                                value={data.email}
                                onChange={handleChange}
                                 />
                            </div>

                            <div>
                                <label>Bio</label>
                                <input
                                type='text'
                                name='bio'
                                placeholder='Enter your Bio'
                                value={data.bio}
                                onChange={handleChange}
                                 />
                            </div>
                            <button type='submit'>Save</button>
                            <button>Cancel</button>
                        </form>
                    </div>

                    <div>
                        <div>
                            <div>Change password</div>
                            <div>Keep your account secure with a strong password.</div>
                        </div>

                        <form onSubmit={handleSubmit}>
                            <div>
                                <label>Current Password</label>
                                <input
                                type='password'
                                name='currentPassword'
                                placeholder='Enter your current password'
                                value={data.currentPassword}
                                onChange={handleChange}
                                />
                            </div>

                            <div>
                                <label>New Password</label>
                                <input
                                type='password'
                                name='newPassword'
                                placeholder='Enter your new password'
                                value={data.newPassword}
                                onChange={handleChange}
                                />
                            </div>

                            <div>
                                <label>Confirm new password</label>
                                <input
                                type='password'
                                name='confirmPassword'
                                placeholder='Enter to confirm your password'
                                value={data.confirmPassword}
                                onChange={handleChange} 
                                />
                            </div>

                            <button type='submit'>Update Password</button>
                            <button>Cancel</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserProfile;