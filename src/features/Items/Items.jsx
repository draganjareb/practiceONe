import { itemsa } from "../../data/items";
import "./items.style.css";
import Item from "./components/Item";

const Items = () => {
  return (
    <div className="items_list">
      {itemsa.map((item) => (
        <Item key={item.key} item={item} />
      ))}
    </div>
  );
};

export default Items;
