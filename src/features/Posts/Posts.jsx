import { useEffect, useState } from "react";
import axios from "axios";
import "./Posts.css";
import { useNavigate } from "react-router-dom";
import { useCartStore } from "../../stores/cart/cart";
import { useClicksStore } from "../Stores/Clicks/Clicks.store";

const Posts = () => {
  const { addItemToCart, cart } = useCartStore();
  const { incrementNumberOfClicks } = useClicksStore();
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setData(res.data.splice(0, 10));
      })
      .catch((err) => {
        console.log(err, "ERR");
      });
  }, []);

  const handleNavigateToPostId = (postId) => {
    navigate(`/posts/${postId}`);
  };

  const handleDeletePostById = async (postId) => {
    try {
      await axios.delete(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      setData((prevData) => prevData.filter((post) => post.id !== postId));
      alert(`Post ${postId} Deleted`);
    } catch (err) {
      console.log(err, `ERR`);
    }
  };

  return (
    <div className="divPost">
      {data.map((post) => (
        <div key={post.id} className="divPostId">
          <h2 onClick={() => handleNavigateToPostId(post.id)}>{post.title}</h2>
          <p>{post.body}</p>
          <div className="postsButton">
            <button onClick={() => handleDeletePostById(post.id)}>
              Delete
            </button>
            <button
              onClick={() =>
                addItemToCart({
                  // id: post.id,
                  postId: post.id,
                  id: Math.random(),
                  title: post.title,
                }) & incrementNumberOfClicks()
              }
            >
              Add to cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
