import { useState } from "react";
import { useMediaQuery } from "react-responsive";

export default function Shorten() {
  const isMobileDevice = useMediaQuery({
    query: "(max-width: 800px)",
  });

  const [inputValue, setInputValue] = useState("");
  const [invalidValue, setInvalidValue] = useState(false);

  const handleChange = (e) => {
    setInputValue(e.target.value);

    if (!inputValue) setInvalidValue(true);
    else setInvalidValue(false);
  };

  const handleSubmit = () => {
    if (!inputValue) setInvalidValue(true);
    else setInvalidValue(false);

    setInputValue("");
  };

  return (
    <section className="shorten">
      <div className="input-box">
        <img
          src={
            isMobileDevice
              ? process.env.PUBLIC_URL + "/images/bg-shorten-mobile.svg"
              : process.env.PUBLIC_URL + "/images/bg-shorten-desktop.svg"
          }
        />
        <div className="input-content">
          <input
            type="text"
            value={inputValue}
            onChange={handleChange}
            placeholder="Shorten a link here..."
            className={invalidValue && "invalid"}
          />
          {invalidValue && <p className="error-mobile">Please add a link.</p>}
          <button onClick={handleSubmit}>Shorten It!</button>
        </div>
        {invalidValue && <p className="error">Please add a link.</p>}
      </div>
    </section>
  );
}
