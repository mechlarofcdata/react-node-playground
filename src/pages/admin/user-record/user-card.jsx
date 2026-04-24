export function UserCard({ user }) {
  return (
    <div className="user-card">
      <div className="user-avatar">{user.name[0]}</div>
      <div className="user-info">
        <div className="user-name">{user.name}</div>
        <div className="user-username">@{user.username}</div>
        <div className="user-email">{user.email}</div>
        <div className={`user-status ${user.status.toLowerCase()}`}>
          {user.status}
        </div>
      </div>
    </div>
  );
}
