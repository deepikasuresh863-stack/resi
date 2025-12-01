import { useCart } from "../context/CartContext";
import productsData from "../data/products";
import { Link } from "react-router-dom";
import "../pages/dashboard.css";




const dashboard = () => {
  const { cart } = useCart();

  const totalRevenue = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ padding: "30px", backgroundColor: "#f7f7f7", minHeight: "100vh" }}>
      <h1 style={{ textAlign: "center", marginBottom: "25px" }}>Dashboard</h1>

      <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}>
        
        {/* Total Products */}
        <div style={cardStyle}>
          <h3>Total Products</h3>
          <p style={countStyle}>{productsData.length}</p>
        </div>

        {/* Cart Items */}
        <div style={cardStyle}>
          <h3>Items in Cart</h3>
          <p style={countStyle}>{cart.length}</p>
        </div>

        {/* Revenue */}
        <div style={cardStyle}>
          <h3>Total Revenue</h3>
          <p style={countStyle}>₹{totalRevenue}</p>
        </div>
      </div>

      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <Link to="/products" style={buttonStyle}>View Products</Link>
        <Link to="/cart" style={buttonStyle}>View Cart</Link>
      </div>
    </div>
  );
};

// Card Style
const cardStyle = {
  width: "28%",
  backgroundColor: "#fff",
  padding: "20px",
  borderRadius: "10px",
  textAlign: "center",
  marginBottom: "20px",
  boxShadow: "0px 5px 15px rgba(0,0,0,0.1)"
};

// Count text style
const countStyle = {
  fontSize: "32px",
  fontWeight: "bold",
  marginTop: "10px"
};

// Button Style
const buttonStyle = {
  margin: "10px",
  padding: "10px 20px",
  backgroundColor: "#111",
  color: "#fff",
  borderRadius: "6px",
  textDecoration: "none",
  fontSize: "18px"
};





export default dashboard;
