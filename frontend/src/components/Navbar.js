import React from "react";
import '../styles/navbar.css';

export default function Navbar() {
  return (
    <nav>
      <div className="logo">WT</div>

      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/mess">Messes</a></li>
        <li><a href="/specials">Specials</a></li>
        <li><a href="/cart">Cart</a></li>
      </ul>
    </nav>
  );
}
