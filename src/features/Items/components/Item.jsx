import { Alert, Snackbar } from "@mui/material";
import { useOrderCartStore } from "../../../stores/orders/order.store";
import "../items.style.css";
import { useState } from "react";

const Item = ({ item }) => {
  const { addItemToOrderCart } = useOrderCartStore();

  const [open, setOpen] = useState(false);

  const addNewItem = (id) => {
    addItemToOrderCart(id);
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === `clickaway`) {
      return;
    }

    setOpen(false);
  };

  return (
    <div className="item">
      <img src={item.image} alt={item.title} />
      <div className="item_description">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <p>€ {item.price}</p>
        <button onClick={() => addNewItem(item)}>Add to cart</button>
      </div>
      <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          This orders success add.
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Item;
