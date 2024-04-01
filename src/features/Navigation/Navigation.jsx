import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <>
      <div className="navigationDiv">
        <Link to={{ pathname: "/" }}>Home</Link>
        <Link to={{ pathname: "/about" }}>About</Link>
        <Link to={{ pathname: "/works" }}>Works</Link>
        <Link to={{ pathname: "/contact" }}>Contact</Link>
      </div>
    </>
  );
};

export default Navigation;
