// Header Component
import logo from "../utils/logo.png";
import cart from "../utils/cart.png";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={logo} />
        <div className="brand-name">Namaste Food</div>
      </div>
      <div className="nav-items">
        <div className="item">Home</div>
        <div className="item">About</div>
        <div className="item">Contact</div>
        <div className="cart-container">
          <img className="cart" src={cart} />
        </div>
      </div>
    </div>
  );
};

export default Header;
