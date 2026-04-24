import { useState } from "react";
import Sidebar from "../dashboard/adminsidebar";
import "./userrecord.css";

const initialUsers = [
  {
    id: 1,
    name: "John Doe",
    initials: "JD",
    username: "john_doe",
    status: "Active",
    joined: "Apr 10, 2025",
    initials: "JD",
  },
  {
    id: 2,
    name: "Alice Smith",
    initials: "AS",
    email: "alice@mail.com",
    username: "alice_s",
    status: "Active",
    joined: "Mar 28, 2025",
    initials: "AS",
  },
  {
    id: 3,
    name: "Bob Roberts",
    initials: "BR",
    email: "bob@mail.com",
    username: "bob_r",
    status: "Inactive",
    joined: "Feb 15, 2025",
    initials: "BR",
  },
  {
    id: 4,
    name: "Clara Lane",
    initials: "CL",
    email: "clara@mail.com",
    username: "clara_l",
    status: "Active",
    joined: "Jan 3, 2025",
    initials: "CL",
  },
  {
    id: 5,
    name: "Dan Miller",
    initials: "DM",
    email: "dan@mail.com",
    username: "dan_m",
    status: "Inactive",
    joined: "Dec 20, 2024",
    initials: "DM",
  },
];

export default function UserRecord() {
  const [users, setUsers] = useState(initialUsers);
  return (
    <div className="user-layout">
      <Sidebar />

      <main className="user-main">
        <div className="user-topbar">
          <div className="user-page-title">User Records</div>
          <div className="user-page-sub">
            Manage all registered users — view, edit and delete.
          </div>
        </div>

        <div className="user-toolbar">
          <input
            type="text"
            className="user-search-input"
            placeholder="Search users..."
          />
          <div className="user-toolbar-right">
            <button className="user-btn">Filter</button>
            <button className="user-btn">Export</button>
            <button className="user-btn">Add User</button>
          </div>
        </div>

        <div className="user-card-user">
          <table>
            <thead>
              <tr>
                <th>User</th>
                <th>Username</th>
                <th>Password</th>
                <th>Status</th>
                <th>Joined</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td className="user-user-cell">
                    <div className="user-avatar">{user.initials}</div>
                    <span className="user-user-name">{user.name}</span>
                  </td>
                  <td>{user.username}</td>
                  <td>********</td>
                  <td>{user.status}</td>
                  <td>{user.joined}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
