import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostById = () => {
  const { postId } = useParams();
  const [post, setPost] = useState({});

  //ovo će mi možda trebati na dugme
  const fetchPostById = async () => {
    try {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      setPost(res.data);
    } catch (err) {
      console.log(err, `ERR`);
    }
  };

  useEffect(() => {
    fetchPostById();
  }, [postId]);

  console.log(post, `POST`);

  return (
    <div style={{ maxWidth: "200px", width: "100%", border: "1px solid grey" }}>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};
export default PostById;
