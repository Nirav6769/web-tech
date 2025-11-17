import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { cart, updateQty, removeFromCart } = useContext(CartContext);

  return (
    <div className="container">
        <h2>CART</h2>


      {cart.length === 0 && <p>Cart is empty</p>}

      {cart.map((item) => (
        <div key={item.name} style={{ marginBottom: "10px" }}>
          <strong>{item.name}</strong> — ₹{item.price}

          <div>
            Qty:
            <input
              type="number"
              value={item.qty}
              onChange={(e) => updateQty(item.name, parseInt(e.target.value))}
              style={{ width: "50px", marginLeft: "10px" }}
            />
          </div>

          <button onClick={() => removeFromCart(item.name)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

