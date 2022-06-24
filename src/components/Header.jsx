import { useState } from "react";
import light from "../assets/icon-sun.svg";
import dark from "../assets/icon-moon.svg";

export default function Header() {
  const [isDark, setIsDark] = useState(true);

  return (
    <header className="flex justify-between">
      <h1 className="text-5xl font-bold tracking-[0.5em] text-lightPrimary">TODO</h1>
      <img
        src={isDark ? dark : light}
        onClick={() => setIsDark((prevState) => !prevState)}
        className="w-12 origin-right scale-50 cursor-pointer"
      />
    </header>
  );
}
