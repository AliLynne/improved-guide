import React from "react";

const ThemeToggle = ({ themeSwitch }) => {
  return (
    <button
      className="themeToggle"
      onClick={themeSwitch}
      aria-label="change theme color"
    >
      Toggle Colors
    </button>
  );
};

export default ThemeToggle;
