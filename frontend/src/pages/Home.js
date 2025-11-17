import { Link } from "react-router-dom";
import '../styles/buttons.css';
import '../styles/hero.css';  

export default function Home() {
  return (
    <>
      <div className="hero">
        <h1>Your college canteen,<br />now just a click away.</h1>

        <p>Fresh, fast, affordable meals delivered right from your campus kitchens.</p>

        <div className="hero-buttons">
          <a className="btn" href="/specials">Today’s Specials</a>
          <a className="btn" href="/cart">View Cart</a>
        </div>
      </div>

      <div className="container">
        <h1>PESU Canteen Menus</h1>

        <ul style={{ listStyle: "none", padding: 0 }}>
          <li><Link to="/messes">List of Messes</Link></li>
          <li><Link to="/specials">Today's Specials</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/checkout">Checkout</Link></li>
        </ul>
      </div>
    </>
  );
}

