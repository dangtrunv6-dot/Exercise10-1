import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Button } from "react-bootstrap";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="d-flex justify-content-between align-items-center py-3 border-bottom mb-3">
      <h4 className="m-0">Mini Task Manager</h4>
      <Button variant={theme === "dark" ? "outline-light" : "outline-dark"} size="sm" onClick={toggleTheme}>
        {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
      </Button>
    </div>
  );
};

export default Header;