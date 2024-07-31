// Header Component
import cart from "../utils/cart.png";
import { Link } from "react-router-dom";
import RamenDiningIcon from "@mui/icons-material/RamenDining";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <div className="logo-icon-container">
          <RamenDiningIcon fontSize="large" className="logo" />
        </div>
        <div className="brand-name">Namaste Food</div>
      </div>
      <div className="nav-items">
        <div className="item">
          <Link to="/">Home</Link>
        </div>
        <div className="item">
          <a href="/about">About</a>
        </div>
        <div className="item">
          <Link to="/contact">Contact</Link>
        </div>
        <div className="item">
          <Link to="/profile">Profile</Link>
        </div>
        <div className="item">
          <Link to="/grocery">Grocery</Link>
        </div>
        <div className="cart-container">
          <img className="cart" src={cart} />
        </div>
      </div>
    </div>
  );
};

export default Header;
