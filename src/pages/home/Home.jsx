import { Link } from "react-router-dom";
import "./home.css";

// home function component
function Home() {
  return (
    <>
      <div className="header">
        <div className="title">Project UI Screens</div>
        <div className="sub">
          7 screens — Admin side (4) + User side (3) · Click any card to open
        </div>
      </div>

      <div className="max">

        {/* -------- Admin related cards -------- */}
        <div className="section-label">Admin Side</div>
        <div className="grid-home">

          <Link to="/admin/login" className="card">
            <div><span className="badge badge-admin">Admin</span></div>
            <div className="card-name">01 · Admin Login</div>
            <div className="card-desc">
              Clean login screen with email/password for admin access
            </div>
          </Link>

          <Link to="/admin/dashboard" className="card">
            <div><span className="badge badge-admin">Admin</span></div>
            <div className="card-name">02 · Admin Dashboard</div>
            <div className="card-desc">
              Stats cards, recent posts table, quick actions & user activity
            </div>
          </Link>

          <Link to="/admin/users" className="card">
            <div><span className="badge badge-admin">Admin</span></div>
            <div className="card-name">03 · User Records</div>
            <div className="card-desc">Full user table with edit/delete, search, filter, pagination &amp; edit modal</div>
          </Link>

          <Link to="/admin/blog" className="card">
            <div><span className="badge badge-admin">Admin</span></div>
            <div className="card-name">04 · Add Blog Post</div>
            <div className="card-desc">Full post editor with toolbar, SEO preview, image upload, category &amp; tags</div>
          </Link>

        </div>

        {/* -------- User related cards -------- */}
        <div className="section-label">User Side</div>
        <div className="grid-home">

          <Link to="/login" className="card">
            <div><span className="badge badge-user">User</span></div>
            <div className="card-name">05 · User Login</div>
            <div className="card-desc">
              Split-layout login with branding panel
            </div>
          </Link>

          <Link to="/layout/profile" className="card">
            <div><span className="badge badge-user">User</span></div>
            <div className="card-name">06 · User Profile</div>
            <div className="card-desc">
              Profile card, editable info & password change
            </div>
          </Link>

          <Link to="/layout/usrblog" className="card">
            <div><span className="badge badge-user">User</span></div>
            <div className="card-name">07 · Blog Listing</div>
            <div className="card-desc">
              Blog listing with filters and sidebar
            </div>
          </Link>

        </div>
      </div>
    </>
  );
}

export default Home;