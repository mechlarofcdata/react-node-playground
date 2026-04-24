import Sidebar from "./adminsidebar";
import Topbar from "./topbar";
import StatsCard from "./statcard";
import "./dashboard.css";

export default function Dashboard() {
  return (
    <div className="dashboard-app">
      <Sidebar />

      <main className="dashboard-main-content">
        <Topbar />

        <div className="dashboard-stats-grid">
          <StatsCard
            title="Total Users"
            value="142"
            change="↑ 12 this week"
            type="up"
          />
          <StatsCard
            title="Blog Posts"
            value="38"
            change="↑ 4 this month"
            type="up"
          />
          <StatsCard
            title="New Today"
            value="6"
            change="↑ 2 vs yesterday"
            type="up"
          />
          <StatsCard
            title="Inactive Users"
            value="3"
            change="↑ 1 this week"
            type="down"
          />
        </div>

        <div className="dashboard-grid2">
          <div>
            <div className="dashboard-card">
              <div className="dashboard-card-header">
                <span className="dashboard-card-title">Recent Blog Posts</span>
                <button className="dashboard-btn-sm">View all</button>
              </div>
              <table>
                <tr>
                  <th>Title</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
                <tr>
                  <td>Getting started guide</td>
                  <td style={{ color: "#9aa3b2" }}>Apr 18</td>
                  <td>
                    <span className="dashboard-tag dashboard-tag-green">
                      Published
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Platform update v2.1</td>
                  <td style={{ color: "#9aa3b2" }}>Apr 14</td>
                  <td>
                    <span className="dashboard-tag dashboard-tag-green">
                      Published
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>Feature preview: analytics</td>
                  <td style={{ color: "#9aa3b2" }}>Apr 10</td>
                  <td>
                    <span className="dashboard-tag dashboard-tag-amber">
                      Draft
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>API walkthrough</td>
                  <td style={{ color: "#9aa3b2" }}>Apr 8</td>
                  <td>
                    <span className="dashboard-tag dashboard-tag-green">
                      Published
                    </span>
                  </td>
                </tr>
              </table>
            </div>
          </div>

          <div>
            <div className="dashboard-card">
              <div className="dashboard-card-header">
                <span className="dashboard-card-title">Quick Actions</span>
              </div>
              <div className="dashboard-quick-actions">
                <button className="dashboard-btn-sm dashboard-btn-primary-sm">
                  + Add Blog Post
                </button>
                <button className="dashboard-btn-sm">View Users</button>
                <button className="dashboard-btn-sm">Export Users CSV</button>
                <button className="dashboard-btn-sm">Manage Categories</button>
                <button className="dashboard-btn-sm">View Drafts</button>
              </div>

              <div
                style={{ padding: "16px 20px", borderTop: "1px solid #eef0f4" }}
              >
                <div
                  style={{
                    fontSize: "12px",
                    fontWeight: "600",
                    color: "#1a2332",
                    marginBottom: "10px",
                  }}
                >
                  Recent signups
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      fontSize: "13px",
                    }}
                  >
                    <div className="dashboard-avatar">JD</div>
                    <div>
                      <div>john_doe</div>
                      <div style={{ fontSize: "11px", color: "#9aa3b2" }}>
                        Today, 9:14am
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      fontSize: "13px",
                    }}
                  >
                    <div
                      className="dashboard-avatar"
                      style={{ background: "#f0fff4", color: "#276749" }}
                    >
                      AS
                    </div>
                    <div>
                      <div>alice_s</div>
                      <div style={{ fontSize: "11px", color: "#9aa3b2" }}>
                        Today, 7:02am
                      </div>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      fontSize: "13px",
                    }}
                  >
                    <div
                      className="dashboard-avatar"
                      style={{ background: "#fffaf0", color: "#975a16" }}
                    >
                      BR
                    </div>
                    <div>
                      <div>bob_r</div>
                      <div style={{ fontSize: "11px", color: "#9aa3b2" }}>
                        Yesterday, 4:48pm
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
