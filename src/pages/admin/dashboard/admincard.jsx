export default function AdminCard({ title, children }) {
  return (
    <div className="admincard">
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  );
}
