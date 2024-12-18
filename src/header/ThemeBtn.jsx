import { useEffect, useState } from "react";

export default function ThemeBtn() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      localStorage.setItem("theme", "dark");
    }

    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div>
      <div className="theme-btn-container" onClick={toggleTheme}>
        <div className="theme-btn-ball"></div>
      </div>
    </div>
  );
}
