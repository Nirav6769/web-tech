import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "../api";

export default function MessList() {
  const [messes, setMesses] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("/mess/messes").then((res) => {
      setMesses(res.data);
    });
  }, []);

  const filtered = messes.filter((m) =>
    m.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
         <h2>List of Messes</h2>


      <input
        type="text"
        placeholder="Search mess"
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: "10px", padding: "5px" }}
      />

      <ul style={{ listStyle: "none", padding: 0 }}>
        {filtered.map((m) => (
          <li key={m} className="card">
         <Link to={`/mess/${m}`}>{m}</Link>
        </li>

        ))}
      </ul>
    </div>
  );
}
