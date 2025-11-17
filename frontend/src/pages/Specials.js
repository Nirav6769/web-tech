import { useEffect, useState } from "react";
import axios from "../api";
import '../styles/buttons.css';
import '../styles/card.css';



export default function Specials() {
  const [specials, setSpecials] = useState([]);

  useEffect(() => {
    axios.get("/mess/specials").then((res) => {
      setSpecials(res.data);
    });
  }, []);

  return (
    <div className="container">
        <h1>Today's Specials</h1>


      <ul style={{ listStyle: "none", padding: 0 }}>
        {specials.map((item) => (
          <li key={item.name}>
            {item.name} — ₹{item.price} {item.veg ? "(Veg)" : "(Non-Veg)"}
          </li>
        ))}
      </ul>
    </div>
  );
}
