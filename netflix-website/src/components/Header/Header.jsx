import React from "react";
import './Header.css'

export default ({blackHeader}) => {
  return (
    <header className={`${blackHeader && "black"}`}>
      <div className="logo">
        <a href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix Logo"
          />
        </a>
      </div>
      <div className="user">
        <a href="/">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="User Icon" />
        </a>
      </div>
    </header>
  );
};
