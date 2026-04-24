import { useState } from "react";
import "./admin-blog.css";

function AddBlog() {

  const [data, setData] = useState({
    title: "",
    slug: "",
    content: "",
    summary: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Title: ", data.title);
    console.log("Slug/Url: ", data.slug);
    console.log("Content: ", data.content);
    console.log("Summary: ", data.summary);
  }

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  return (
    <div className="no-flex-page">
      <div className="topbar">
        <div>
          <div className="page-title">New Blog Post</div>
          <div className="page-sub">Create and publish content to your users.</div>
        </div>
        <div className="status-badge">
          <span className="status-dot"></span>
          <span className="tag tag-amber">Draft</span>
        </div>
      </div>
      <div className="grid">
        <div > 
          <form className="card" onSubmit={handleSubmit}>
            <div className="card-title">Post content</div>

            <label>Title</label>
            <input
              type="text"
              name="title"
              placeholder="Enter a compelling title for your post…"
              value={data.title}
              onChange={handleChange}
            />

            <label>Slug / URL</label>
            <input
              type="text"
              name="slug"
              placeholder="your-post-slug-here"
              value={data.slug}
              onChange={handleChange}
            />

            <label>Content</label>
            <div className="editor-toolbar">
              <button title="Bold" type="button"><b>B</b></button>
              <button title="Italic" type="button"><i>I</i></button>
              <button title="Underline" type="button"><u>U</u></button>
              <div className="divider"></div>
              <button title="H1" type="button">H1</button>
              <button title="H2" type="button">H2</button>
              <button title="H3" type="button">H3</button>
              <div className="divider"></div>
              <button title="Link" type="button">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                </svg>
              </button>
              <button title="List" type="button">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                  <line x1="8" y1="6" x2="21" y2="6" />
                  <line x1="8" y1="12" x2="21" y2="12" />
                  <line x1="8" y1="18" x2="21" y2="18" />
                  <line x1="3" y1="6" x2="3.01" y2="6" />
                  <line x1="3" y1="12" x2="3.01" y2="12" />
                  <line x1="3" y1="18" x2="3.01" y2="18" />
                </svg>
              </button>
              <button title="Quote" type="button">"</button>
              <button title="Code" type="button">&lt;/&gt;</button>
            </div>
            <textarea className="editor"
              name="content"
              value={data.content}
              placeholder="Write your post content here…&#10;&#10;You can use markdown or format with the toolbar above."
              onChange={handleChange}
            />

            <label>Excerpt / Summary</label>
            <textarea
              name="summary"
              placeholder="Short description shown in blog listing…"
              value={data.summary}
              onChange={handleChange}
            />
          </form>
        </div>

        <div>
          <div className="card">
            <div className="card-title">Publish settings</div>
            <label>Status</label>
            <select>
              <option>Draft</option>
              <option>Published</option>
              <option>Scheduled</option>
            </select>

            <label>Category</label>
            <select>
              <option>General</option>
              <option>Updates</option>
              <option>Tutorials</option>
              <option>Announcements</option>
            </select>

            <label>Author</label>
            <select>
              <option>Admin User</option>
              <option>Alice Smith</option>
            </select>

            <label>Tags</label>
            <div className="tags-input">
              <span className="tag-pill">platform <span>×</span></span>
              <span className="tag-pill">guide <span>×</span></span>
            </div>
            <div className="hint" >Press Enter to add a tag</div>
            <div className="action-row" >
              <button className="btn btn-primary"
              type="submit"
              >Publish post
              </button>

              <button className="btn btn-ghost" type="button"
              onClick={() => console.log("Saved as draft", data)}
              >Save as draft</button>

              <button className="btn btn-red" type="button"
              onClick={() => setData({
                title: "",
                slug: "",
                content: "",
                summary: ""
              })}
              >Discard</button>
            </div>
          </div>
          <div className="card">
            <div className="card-title">Featured image</div>
            <div className="image-drop">
              <div className="image-drop-icon">
                <svg viewBox="0 0 24 24">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
              </div>
              <div className="image-drop-text">Drop image here or click to upload</div>
              <div className="image-drop-sub">PNG, JPG, WebP — max 5MB</div>
            </div>

            <label >Or paste image URL</label>
            <input
              type="url"
              placeholder="https://example.com/image.jpg"
            />
          </div>
          <div className="card">
            <div className="card-title">SEO preview</div>
            <div >
              <div >{data.title || "Your post title here"} — AdminPanel</div>
              <div >adminpanel.com/blog/your-post-slug</div>
              <div>{data.summary || "Short description will appear here..."}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddBlog;