import "./Home.style.css";
import first from "../../assets/pictures/first.jpg";
import face from "../../assets/pictures/face.png";
import twitter from "../../assets/pictures/twitter.png";
import profile from "../../assets/pictures/profile-pictures.jpg";
import linked from "../../assets/pictures/linked.png";
import git from "../../assets/pictures/git.png";
import { useClicksStore } from "../Stores/Clicks/Clicks.store";

const Home = () => {
  const socialNetworks = [
    { imageLink: first },
    { imageLink: face },
    { imageLink: twitter },
    { imageLink: linked },
    { imageLink: git },
  ];

  const { decrementNumberOfClicks } = useClicksStore();
  return (
    <>
      <div className="homeDiv">
        <div className="picturesAndText">
          <img src={profile} className="profilePictures" />
          <h1>
            Hi, I am <span>Dragan Jareb</span>
          </h1>
          {/* <h2>Increment number of clicks</h2> */}
          {/* <button onClick={() => decrementNumberOfClicks()}>Clicks here</button> */}
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="imageDiv">
          {socialNetworks.map((image) => {
            return <img key={image.imageLink} src={image.imageLink} alt="" />;
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
