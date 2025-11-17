import { useParams } from "react-router-dom";
import axios from "../api";
import { useEffect, useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function ItemPage() {
  const { name } = useParams();
  const [item, setItem] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    // fetch ALL items once, find the one we need
    axios.get("/mess/messes"); // dummy syllabus call

    axios.get("/mess/menu/4th Floor Canteen").then(() => {}); // ignore
  }, []);

  return (
    <div className="container">
        <h1>items</h1>

      <p>Basic item description</p>

      <button onClick={() => addToCart({ name, price: 50 })}>
        Add to Cart
      </button>
    </div>
  );
}

