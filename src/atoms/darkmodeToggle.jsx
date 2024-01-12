// DarkModeToggle.js
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
library.add(faSun, faMoon);

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Menyimpan preferensi mode gelap pada local storage
    const savedDarkMode = localStorage.getItem("darkMode");
    if (savedDarkMode) {
      setDarkMode(JSON.parse(savedDarkMode));
    }
  }, []);

  useEffect(() => {
    // Mengatur class 'dark' pada body sesuai dengan state darkMode
    document.body.classList.toggle("dark", darkMode);

    // Menyimpan preferensi mode gelap pada local storage
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="flex items-center space-x-2 mt-3 ms-6 mr-4">
      <button
        onClick={toggleDarkMode}
        className={`p-1 text-white  ${darkMode ? "" : "text-blue-500"}`}
      >
        <FontAwesomeIcon
          icon={darkMode ? "sun" : "moon"}
          size="xl"
          className={`p-1  ${darkMode ? "" : ""}`}
        />
      </button>
    </div>
  );
};

export default DarkModeToggle;
