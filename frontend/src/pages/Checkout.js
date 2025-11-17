import { useContext, useState } from "react";
import axios from "../api";
import { CartContext } from "../context/CartContext";
import '../styles/buttons.css';


export default function Checkout() {
  const { cart } = useContext(CartContext);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [payment, setPayment] = useState("Cash");
  const [message, setMessage] = useState("");

  function submitOrder() {
    axios
      .post("/order/create", {
        customer: name,
        phone: phone,
        payment: payment,
        items: cart,
      })
      .then((res) => {
        setMessage("Order confirmed!");
      })
      .catch(() => {
        setMessage("Error submitting order");
      });
  }

  return (
    <div className="container">
        <h1>Checkout</h1>


      <div>
        <input
          type="text"
          placeholder="Your Name"
          onChange={(e) => setName(e.target.value)}
          style={{ marginBottom: "10px", display: "block", padding: "5px" }}
        />

        <input
          type="text"
          placeholder="Phone Number"
          onChange={(e) => setPhone(e.target.value)}
          style={{ marginBottom: "10px", display: "block", padding: "5px" }}
        />

        <select
          onChange={(e) => setPayment(e.target.value)}
          style={{ marginBottom: "10px", display: "block", padding: "5px" }}
        >
          <option value="Cash">Cash</option>
          <option value="UPI">UPI</option>
        </select>

        <button onClick={submitOrder}>Submit Order</button>
      </div>

      {message && <p>{message}</p>}
    </div>
  );
}
