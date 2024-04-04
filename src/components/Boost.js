import { useMediaQuery } from "react-responsive";

export default function Boost() {
  const isMobileDevice = useMediaQuery({
    query: "(max-width: 800px)",
  });

  return (
    <section className="boost-section">
      <img
        className="boost-img"
        src={
          isMobileDevice
            ? process.env.PUBLIC_URL + "/images/bg-boost-mobile.svg"
            : process.env.PUBLIC_URL + "/images/bg-boost-desktop.svg"
        }
      />
      <div className="boost-content">
        <h3>Boost your links today</h3>
        <button>Get Started</button>
      </div>
    </section>
  );
}
