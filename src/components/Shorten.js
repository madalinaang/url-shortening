import { useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import axios from "axios";
import Url from "./Url";

export default function Shorten() {
  const isMobileDevice = useMediaQuery({
    query: "(max-width: 800px)",
  });

  const [inputValue, setInputValue] = useState("");
  const [invalidValue, setInvalidValue] = useState(false);

  const [urls, setUrls] = useState([]);

  const saveToLocalStorage = () => {
    localStorage.setItem("shortenedUrls", JSON.stringify(urls));
  };

  const readFromLocalStorage = () => {
    const storedUrls = localStorage.getItem("shortenedUrls");
    if (storedUrls) {
      setUrls(JSON.parse(storedUrls));
    }
  };

  useEffect(() => {
    readFromLocalStorage();
  }, []);

  useEffect(() => {
    saveToLocalStorage();
  }, [urls]);

  const handleChange = (e) => {
    setInputValue(e.target.value);

    setInvalidValue(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = async () => {
    if (inputValue === "") setInvalidValue(true);
    else {
      setInvalidValue(false);

      try {
        const response = await axios.get(
          `https://tinyurl.com/api-create.php?url=${encodeURIComponent(
            inputValue
          )}`
        );

        setUrls([...urls, { org_url: inputValue, short_url: response.data }]);
      } catch (error) {
        console.error("Error:", error);
      }
    }

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
            onKeyDown={handleKeyDown}
            placeholder="Shorten a link here..."
            className={invalidValue && "invalid"}
          />
          {invalidValue && <p className="error-mobile">Please add a link.</p>}
          <button onClick={handleSubmit}>Shorten It!</button>
        </div>
        {invalidValue && <p className="error">Please add a link.</p>}
      </div>
      <div className="results">
        {urls.map((el) => (
          <Url original={el.org_url} short={el.short_url} />
        ))}
      </div>
    </section>
  );
}
