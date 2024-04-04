export default function Statistics() {
  return (
    <section className="statistics">
      <h3>Advanced Statistics</h3>
      <p className="description">
        Track how your links are performing across the web with our advanced
        statistics dashbord.
      </p>

      <div className="cards">
        <div className="bg-line" />
        <article className="card">
          <div className="icon">
            <img
              src={
                process.env.PUBLIC_URL + "/images/icon-brand-recognition.svg"
              }
            />
          </div>
          <h5>Brand Recognition</h5>
          <p>
            Boost your brand recognition with each click. Generic links don't
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </article>
        <article className="card second">
          <div className="icon">
            <img
              src={process.env.PUBLIC_URL + "/images/icon-detailed-records.svg"}
            />
          </div>
          <h5>Detailed Records</h5>
          <p>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </article>
        <article className="card third">
          <div className="icon">
            <img
              src={
                process.env.PUBLIC_URL + "/images/icon-fully-customizable.svg"
              }
            />
          </div>
          <h5>Fully Customizable</h5>
          <p>
            Improve brand awareness and content discoverability through
            customizable link, supercharging audience engagement.
          </p>
        </article>
      </div>
    </section>
  );
}
