import "./App.css";
import Navigation from "./features/Navigation/Navigation";
import Home from "./features/Home/Home";
import About from "./features/About/About";
import Contact from "./features/Contact/Contact";
import Works from "./features/Works/Works";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Clicks from "./features/Clicks/Clicks";
// import Posts from "./features/Posts/Posts";
import Items from "./features/Items/Items";

// import Cart from "./features/Cart/Cart";
import ItemsInCart from "./features/Items/components/ItemsInCart";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          {/* <Route path="/posts" element={<Posts />} /> */}
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/clicks" element={<Clicks />} /> */}
          {/* <Route path="/cart" element={<Cart />} /> */}
          <Route path="/items" element={<Items />} />
          <Route path="/orders" element={<ItemsInCart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
