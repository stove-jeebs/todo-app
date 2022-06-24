import { useState } from "react";
import light from "../assets/icon-sun.svg";
import dark from "../assets/icon-moon.svg";

export default function Header() {
  const [isDark, setIsDark] = useState(true);

  return (
    <div className="inline-block">
      <h1 className="text-lightPrimary">TODO</h1>
      <img
        src={isDark ? dark : light}
        onClick={() => setIsDark((prevState) => !prevState)}
        className="cursor-pointer"
      />
    </div>
  );
}
