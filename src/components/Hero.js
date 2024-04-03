export default function Hero() {
  return (
    <section className="hero">
      <div className="description">
        <h1 className="title">More than just shorter links</h1>
        <p>
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className="get-started-button">Get Started</button>
      </div>
      <img
        className="hero-img"
        src={process.env.PUBLIC_URL + "/images/illustration-working.svg"}
      />
    </section>
  );
}
