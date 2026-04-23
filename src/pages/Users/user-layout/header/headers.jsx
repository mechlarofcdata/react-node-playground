import { Link } from 'react-router-dom'

// header functional components
function Header() {
  return (
    <header className="header">
      <div className="h-logo">
        <div className="h-logo-icon">⚡</div>
        MyPlatform
      </div>

      {/* linking route path */}
      <div className="h-nav">
        <div className="h-nav-item"><Link to='/'>Home</Link></div>
        <div className="h-nav-item"><Link to="/layout/usrblog">Blog</Link></div>
        <div className="h-nav-item active"><Link to="/layout/profile">Profile</Link></div>
      </div>

      <div className="h-right">
        <div className="avatar">AS</div>
      </div>
    </header>
  );
}

export default Header;