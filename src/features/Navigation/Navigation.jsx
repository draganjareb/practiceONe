import { Link } from "react-router-dom";
import "./Navigation.css";
import CartIcon from "../Items/components/CartIcon";

const Navigation = () => {
  return (
    <>
      <div className="navigationDiv">
        <div className="navigation_list">
          <Link to={{ pathname: "/" }}>Home</Link>
          <Link to={{ pathname: "/about" }}>About</Link>
          <Link to={{ pathname: "/works" }}>Works</Link>
          {/* <Link to={{ pathname: "/posts" }}>Posts</Link> */}
          <Link to={{ pathname: "/contact" }}>Contact</Link>
          {/* <Link to={{ pathname: "/cart" }}>Cart</Link> */}
          {/* <Link to={{ pathname: "/clicks" }}>Clicks</Link> */}
          <Link to={{ pathname: "/items" }}>Items</Link>
        </div>
        <CartIcon />
      </div>
    </>
  );
};

export default Navigation;
