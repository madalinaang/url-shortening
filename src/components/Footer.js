export default function Footer() {
  return (
    <footer className="footer">
      <img
        className="footer-logo"
        src={process.env.PUBLIC_URL + "/images/logo_white.svg"}
      />
      <div className="footer-column">
        <p className="footer-title">Features</p>
        <div className="column-elements">
          <p className="footer-item">Link Shortening</p>
          <p className="footer-item">Branded Links</p>
          <p className="footer-item">Analytics</p>
        </div>
      </div>
      <div className="footer-column">
        <p className="footer-title">Resources</p>
        <div className="column-elements">
          <p className="footer-item">Blog</p>
          <p className="footer-item">Developers</p>
          <p className="footer-item">Support</p>
        </div>
      </div>
      <div className="footer-column">
        <p className="footer-title">Company</p>
        <div className="column-elements">
          <p className="footer-item">About</p>
          <p className="footer-item">Our Team</p>
          <p className="footer-item">Careers</p>
          <p className="footer-item">Contact</p>
        </div>
      </div>
      <div className="social-media">
        <img
          src={process.env.PUBLIC_URL + "/images/icon-facebook.svg"}
          className="footer-item-img"
        />
        <img
          src={process.env.PUBLIC_URL + "/images/icon-twitter.svg"}
          className="footer-item-img"
        />
        <img
          src={process.env.PUBLIC_URL + "/images/icon-pinterest.svg"}
          className="footer-item-img"
        />
        <img
          src={process.env.PUBLIC_URL + "/images/icon-instagram.svg"}
          className="footer-item-img"
        />
      </div>
    </footer>
  );
}
