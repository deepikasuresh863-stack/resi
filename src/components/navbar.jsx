import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{
      width: "100%",
      background: "#111",
      padding: "15px 0",
      display: "flex",
      justifyContent: "center",
      position: "fixed",
      top: 0,
      left: 0,
      zIndex: 1000,
    }}>
      <ul style={{
        display: "flex",
        gap: "30px",
        listStyle: "none",
        margin: 0,
        padding: 0,
      }}>
        <li><Link style={{ color: "#fff", textDecoration: "none", fontSize: "18px" }} to="/">Home</Link></li>
        <li><Link style={{ color: "#fff", textDecoration: "none", fontSize: "18px" }} to="/products">Products</Link></li>
        <li><Link style={{ color: "#fff", textDecoration: "none", fontSize: "18px" }} to="/dashboard">Dashboard</Link></li>
        <li><Link style={{ color: "#fff", textDecoration: "none", fontSize: "18px" }} to="/contact">Contact</Link></li>
        <li><Link style={{ color: "#fff", textDecoration: "none", fontSize: "18px" }} to="/cart">🛒 Cart</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

