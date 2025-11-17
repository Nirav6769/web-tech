import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MessList from "./pages/MessList";
import Specials from "./pages/Specials";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import MessMenu from "./pages/MessMenu";
import ItemPage from "./pages/ItemPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />   {/* Navbar must be inside BrowserRouter */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/messes" element={<MessList />} />
        <Route path="/specials" element={<Specials />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/mess/:name" element={<MessMenu />} />
        <Route path="/item/:name" element={<ItemPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

