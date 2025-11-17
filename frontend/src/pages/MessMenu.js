import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "../api";
import '../styles/buttons.css';
import '../styles/card.css';



export default function MessMenu() {
  const { name } = useParams();
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [vegFilter, setVegFilter] = useState("All");

  useEffect(() => {
    axios.get(`/mess/menu/${name}`).then((res) => {
      setItems(res.data);
    });
  }, [name]);

  const filtered = items
    .filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((item) =>
      category === "All" ? true : item.category === category
    )
    .filter((item) => {
      if (vegFilter === "All") return true;
      if (vegFilter === "Veg") return item.veg === true;
      if (vegFilter === "Non-Veg") return item.veg === false;
      return true;
    });

  return (
    <div className="container">
        <h1>Menus</h1>


      {/* Search */}
      <input
        type="text"
        placeholder="Search items"
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginRight: "10px", padding: "5px" }}
      />

      {/* Category Filter */}
      <select
        onChange={(e) => setCategory(e.target.value)}
        style={{ marginRight: "10px", padding: "5px" }}
      >
        <option value="All">All</option>
        <option value="Drinks">Drinks</option>
        <option value="Snacks">Snacks</option>
        <option value="Meals">Meals</option>
      </select>

      {/* Veg / Non-Veg */}
      <select
        onChange={(e) => setVegFilter(e.target.value)}
        style={{ padding: "5px" }}
      >
        <option value="All">All</option>
        <option value="Veg">Veg</option>
        <option value="Non-Veg">Non-Veg</option>
      </select>

      <ul style={{ marginTop: "20px", listStyle: "none", padding: 0 }}>
        {filtered.map((item) => (
          <li key={item.name} className="card">
        <strong>{item.name}</strong> — ₹{item.price}
         <br />
        <Link to={`/item/${item.name}`}>View</Link>
        </li>

        ))}
      </ul>
    </div>
  );
}
