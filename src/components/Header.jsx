import { useState } from "react";
import light from "../assets/icon-sun.svg";
import dark from "../assets/icon-moon.svg";

export default function Header() {
  const [isDark, setIsDark] = useState(true);
  return (
    <div>
      <h1>TODO</h1>
      <img src={isDark ? dark : light} onClick={() => setIsDark((prevState) => !prevState)} />
    </div>
  );
}
