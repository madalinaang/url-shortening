export default function Nav() {
  return (
    <nav className="nav-bar">
      <img className="logo" src={process.env.PUBLIC_URL + "/images/logo.svg"} />
      <div className="page-menu">
        <p className="menu-item">Features</p>
        <p className="menu-item">Pricing</p>
        <p className="menu-item">Resources</p>
      </div>
      <div className="login-menu">
        <p className="menu-item">Login</p>
        <button className="signup-button">Sign Up</button>
      </div>
    </nav>
  );
}
