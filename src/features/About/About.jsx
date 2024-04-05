import Developer from "../../assets/pictures/developer.jpg";
import "./About.style.css";

const About = () => {
  // const listItems = [
  //   { label: "First Name", value: "Dragan" },
  //   { label: "Last Name", value: "Jareb" },
  //   { label: "Age", value: "30 years" },
  //   { label: "Nationality", value: "Serbian" },
  //   { label: "Languages", value: "English" },
  //   { label: "Adress", value: "Voždovačka 24" },
  // ];

  return (
    <div className="divWrapper">
      <h2>ABOUT</h2>
      <div className="divAbout">
        <img src={Developer} className="pageTwoPictures" />
        <div className="rightSide">
          <h3>
            Hi, I am <span>Dragan Jareb</span>
          </h3>
          <ul className="ulList">
            <li>First Name: Dragan</li>
            <li>Last Name: Jareb</li>
            <li>Age: 30 years</li>
            <li>Nationallity: Serbian</li>
            <li>Adress: Voždovačka 24</li>
          </ul>
          <button>DOWNLOAD RESUME</button>
        </div>
      </div>
    </div>
  );
};

export default About;
