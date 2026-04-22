import { Link } from 'react-router-dom'

function Header() {
    return (
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <div>My Platform</div>
            <div>
                <div>Home</div>
                <div>Blog</div>
                <Link to="/profile">Profile</Link>
            </div>
        </div>
    );
}

export default Header;