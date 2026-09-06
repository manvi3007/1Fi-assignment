import "./AppShell.css";

function AppShell({ children }) {
  return (
    <div className="app-background">
      <div className="app-shell">
        <main className="app-content">{children}</main>

        <nav className="bottom-nav">
          <NavItem icon="⌂" label="Home" />
          <NavItem icon="▣" label="Shop" active />
          <NavItem icon="▤" label="EMI Dues" />
          <NavItem icon="⌁" label="Limit" />
          <NavItem icon="♙" label="Profile" />
        </nav>
      </div>
    </div>
  );
}

function NavItem({ icon, label, active = false }) {
  return (
    <button className={`nav-item ${active ? "active" : ""}`}>
      <span className="nav-icon">{icon}</span>
      <span className="nav-label">{label}</span>
    </button>
  );
}

export default AppShell;
