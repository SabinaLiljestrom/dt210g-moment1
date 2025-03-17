import React from "react";
import "./Header.css"; // Importera stil

const Header: React.FC<{ title: string }> = ({ title }) => {
  return (
    <header>
      <h1>{title}</h1>
      <img src= "/travel-banner.jpg" alt="Resebanner" />
    </header>
  );
};

export default Header;
