import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container">
        <h1>PESU Canteen Menus</h1>


      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>
          <Link to="/messes">List of Messes</Link>
        </li>
        <li>
          <Link to="/specials">Today's Specials</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          <Link to="/checkout">Checkout</Link>
        </li>
      </ul>
    </div>
  );
}
