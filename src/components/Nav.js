import { useState } from "react";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="nav-bar">
      <img className="logo" src={process.env.PUBLIC_URL + "/images/logo.svg"} />
      <div className="page-menu">
        <p>Features</p>
        <p>Pricing</p>
        <p>Resources</p>
      </div>
      <div className="login-menu">
        <p>Login</p>
        <button className="signup-button">Sign Up</button>
      </div>
      <button className="menu-icon" onClick={toggleMenu}>
        <img src={process.env.PUBLIC_URL + "/images/hamburger_icon.svg"} />
      </button>
      {menuOpen && (
        <div className="mobile-menu">
          <p>Features</p>
          <p>Pricing</p>
          <p>Resources</p>
          <div className="divider" />
          <p>Login</p>
          <button className="signup-button">Sign Up</button>
        </div>
      )}
    </nav>
  );
}
