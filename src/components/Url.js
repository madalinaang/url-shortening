import { useState } from "react";

export default function Url({ original, short }) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };
  return (
    <article className="url">
      <p className="original-url">{original}</p>
      <p className="short-url">{short}</p>
      <div className="divider" />
      <button className={clicked && "copied"} onClick={handleClick}>
        {clicked ? "Copied!" : "Copy"}
      </button>
    </article>
  );
}
