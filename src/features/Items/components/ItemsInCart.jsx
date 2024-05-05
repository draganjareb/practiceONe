import { useOrderCartStore } from "../../../stores/orders/order.store";
import recycleBin from "../../../assets/pictures/recycle bin.png";
import "../items.style.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Alert, Snackbar } from "@mui/material";

const ItemsInCart = () => {
  const router = useNavigate();
  const {
    orders,
    clearOrderCart,
    removeItemFromOrderCart,
    increaseItemQuantity,
    decreaseItemQuantity,
  } = useOrderCartStore();

  const total = orders.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleOrder = () => {
    clearOrderCart();
    setIsSuccessOrder(true);
    setTimeout(() => {
      router("/items");
    }, 2000);
  };

  const [remove, setRemove] = useState(false);
  const [seccessOrder, setIsSuccessOrder] = useState(false);

  const deletedItem = (id) => {
    removeItemFromOrderCart(id);
    setRemove(true);
  };

  const handleClose = (event, reason) => {
    if (reason === `clickaway`) {
      return;
    }

    setRemove(false);
    seccessOrder(false);
  };

  return (
    <div>
      {orders.length ? (
        <>
          <h1>Items in Cart</h1>
          <div className="cartWrapper">
            {orders.map((item) => (
              <div key={item.id} className="addItemWrapper">
                <img
                  src={item.image}
                  alt={item.title}
                  className="cartPictures"
                />
                <div className="dataOfOrders">
                  <h2>{item.title}</h2>
                  <div className="addItemText">
                    <div className="itemPrice">
                      <p>$ {item.price}</p>
                    </div>
                    <div className="cartButtons">
                      <span onClick={() => decreaseItemQuantity(item.id)}>
                        -
                      </span>
                      <span>{item.quantity}</span>
                      <span onClick={() => increaseItemQuantity(item.id)}>
                        +
                      </span>
                    </div>
                  </div>
                  <img
                    src={recycleBin}
                    alt="recycle bin"
                    onClick={() => deletedItem(item.id)}
                    className="recycleBin"
                  />
                </div>
              </div>
            ))}
            <p>Total price for all items: $ {total.toFixed(2)}</p>
            <button onClick={() => handleOrder()} className="bottomButton">
              Order
            </button>
          </div>
        </>
      ) : (
        <h2>No items in cart</h2>
      )}
      <Snackbar open={remove} autoHideDuration={1500} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="warning"
          variant="filled"
          sx={{ width: "100%" }}
        >
          This orders was deleted!
        </Alert>
      </Snackbar>
      <Snackbar
        open={seccessOrder}
        autoHideDuration={1500}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity="error"
          variant="filled"
          sx={{ width: "100%" }}
        >
          All orders was deleted!
        </Alert>
      </Snackbar>
    </div>
  );
};
export default ItemsInCart;
