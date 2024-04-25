import { useNavigate } from "react-router-dom";
import cart from "../../../assets/pictures/shopping-cart.png";
import "../items.style.css";
import { useOrderCartStore } from "../../../stores/orders/order.store";

const CartIcon = () => {
  const router = useNavigate();
  const { orders } = useOrderCartStore();
  const handleClickCart = () => {
    router("/orders");
  };
  return (
    <div className="cart_icon" onClick={() => handleClickCart()}>
      <span>{orders.length}</span>
      <img src={cart} alt="cart" />
    </div>
  );
};

export default CartIcon;
