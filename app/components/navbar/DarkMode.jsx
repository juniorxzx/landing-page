import React, { useEffect, useState } from "react";
import { BsSun, BsMoon, BsPcDisplayHorizontal } from "react-icons/bs";
const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
  );
  const element = document.documentElement;
  const darkQ = window.matchMedia("(prefers-color-scheme: dark)");

  const options = [
    { icon: <BsSun size={15}/>, text: "light" },
    { icon: <BsMoon size={15}/>, text: "dark" },
    { icon: <BsPcDisplayHorizontal size={15}/>, text: "system" },
  ];

  function onWindowMatch() {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && darkQ.matches)
    ) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }
  onWindowMatch();

  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;
      default:
        localStorage.removeItem("theme");
        onWindowMatch();
        break;
    }
  }, [theme]);

  darkQ.addEventListener("change", (event) => {
    if (!("theme" in localStorage)) {
      if (event.matches) {
        element.classList.add("dark");
      } else {
        element.classList.remove("dark");
      }
    }
  });
  return (
    <div className="rounded-full bg-slate-400 p-1">
      {options?.map((op) => (
        <button
          key={op.text}
          onClick={() => setTheme(op.text)}
          className={`w-8 h-8 leading-9 text-xl rounded-full m-1 ${
            theme === op.text && "text-purple-300"
          }`}
        >
          {op.icon}
        </button>
      ))}
    </div>
  );
};

export default DarkMode;
