import React from "react";

const Header = () => {
  return (
    <header style={{ background: "black", color: "white", padding: "12px", height: "100px" }}>
      <span>
        Logo
      </span>
      <nav>
        <ul>
          <li>Nav Link 1</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;