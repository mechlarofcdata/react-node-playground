import Header from "../header/headers";
import { useState } from "react";
import "./blog.css";

// user blog functional comoponent
function UserBlog() {

  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const [fiterPst, setFiterPst] = useState([]);

  // take some dummy posts
  const posts = [
    {
      title: "Getting started guide — everything you need to know",
      category: "Updates",
      date: "Apr 18, 2025",
      read: "5 min read",
      excerpt:
        "Everything you need to know to get up and running quickly...",
      author: "Admin User",
      initials: "AD",
      featured: true,
    },
    {
      title: "Platform update v2.1 — faster, smarter, fresher",
      category: "Announcements",
      date: "Apr 14, 2025",
      read: "3 min read",
      excerpt:
        "New features landed this week: improved dashboard performance...",
      author: "Admin User",
      initials: "AD",
    },
    {
      title: "How to use the API — a beginner's walkthrough",
      category: "Tutorials",
      date: "Apr 8, 2025",
      read: "8 min read",
      excerpt:
        "A step-by-step look at authenticating, making your first request...",
      author: "Admin User",
      initials: "AD",
    },
  ];
  
  // set search state from user input
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  // submit, check first,input given by user is included in posts title or not and show error or not
  const handleSubmit = (e) => {
    e.preventDefault();

    const result = posts.filter((post) => post.title.toLowerCase().includes(search.toLowerCase()));

    if(result.length > 0){
      setFiterPst(result);
      setError("");
    }else {
      setFiterPst([]);
      setError("No Blog found with this search");
    }
  }

  // check length of filter post 
  const displayPosts = fiterPst.length > 0 ? fiterPst : posts;

  return (
    <div>

      <div className="hero">
        <div className="hero-inner">
          <div className="hero-tag">📝 Latest articles</div>

          <div className="hero-title">
            Stories, guides & updates <br /> from our team
          </div>

          <p className="hero-sub">
            Tutorials, news, and insights — fresh content added every week.
          </p>

          
          {/* search input component */}
          <div className="hero-search">
            <form onSubmit={handleSubmit} className="hero-search">
              <input
              type="text"
              name="search"
              placeholder="Search articles…"
              value={search}
              onChange={handleSearch}
            />
            <button type='submit'>Search</button>
            </form>
          </div>
        </div>
      </div>

      <div className="filter-bar">
        <span className="filter-label">Filter:</span>
        <button className="filter-btn active">All</button>
        <button className="filter-btn">Updates</button>
        <button className="filter-btn">Tutorials</button>
        <button className="filter-btn">Announcements</button>
        <button className="filter-btn">General</button>
      </div>


      <div className="main">
        <div>
          {/* mapping post  their index, img, ad written content via functional component*/}
          {error && <p style={{ color: "red" }}>{error}</p>}
          {displayPosts.map((post, index) => (
            <div
              key={index}
              className={`post-card ${post.featured ? "featured" : ""}`}
            >
              {post.featured && (
                <div className="post-img">
                  📘
                  <div className="post-img-label">Featured</div>
                </div>
              )}

              <div className="post-body">
                <div className="post-meta">
                  {post.category} • {post.date} • {post.read}
                </div>

                <div className="post-title">{post.title}</div>

                <p className="post-excerpt">{post.excerpt}</p>

                <div className="post-footer">
                  <div className="author-chip">
                    <div className="author-av">{post.initials}</div>
                    <span className="author-name">{post.author}</span>
                  </div>

                  <button className="read-btn">Read more →</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <aside>
          <div className="sidebar-card">
            <div className="sidebar-title">Most recent</div>

            {posts.map((p, i) => (
              <div className="recent-post" key={i}>
                <div className="recent-num">{i + 1}</div>
                <div>
                  <div className="recent-title">{p.title}</div>
                  <div className="recent-date">{p.date}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="sidebar-card">
            <div className="sidebar-title">Browse by category</div>
            <div className="cat-item">Updates</div>
            <div className="cat-item">Tutorials</div>
            <div className="cat-item">Announcements</div>
            <div className="cat-item">General</div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default UserBlog;