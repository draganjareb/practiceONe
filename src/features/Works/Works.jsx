import "./Works.style.css";
import cream from "../../assets/pictures/candle cream.jpg";
import brandCream from "../../assets/pictures/brand cream.jpg";
import pictures from "../../assets/pictures/slike u ramu.avif";
import mobile from "../../assets/pictures/mobile.jfif";
import oil from "../../assets/pictures/three dots oil.jfif";
import dots from "../../assets/pictures/three dots.png";

const Works = () => {
  return (
    <div>
      <div>
        <h2>MY WORKS</h2>
      </div>
      <div className="divWorksUp">
        <p style={{ backgroundColor: " green", color: " rgb(47, 57, 48)" }}>
          ALL
        </p>
        <p>UI/UX DESIGN</p>
        <p>HTML & CSS</p>
        <p>REACT JS</p>
        <p>NODE JS</p>
      </div>
      <div className="product">
        <div className="worksCard">
          <img src={cream} alt="cream" className="imageWorks" />
          <h3>Candle</h3>
          <p>Creative Candle Light</p>
        </div>
        <div className="worksCard">
          <img src={brandCream} alt="cream" className="imageWorks" />
          <h3>Cream</h3>
          <p>Create cream box design</p>
        </div>
        <div className="worksCard">
          <img src={pictures} alt="cream" className="imageWorks" />
          <h3>Paint</h3>
          <p>Creative wall painting</p>
        </div>
        <div className="worksCard">
          <img src={mobile} alt="cream" className="imageWorks" />
          <h3>UI/UX Simple</h3>
          <p>UI/UX Simple design mockup</p>
        </div>
        <div className="worksCard">
          <img src={oil} alt="cream" className="imageWorks" />
          <h3>Packet</h3>
          <p>Packet design mockup</p>
        </div>
        <div className="worksCard">
          <img src={dots} alt="cream" className="imageWorks" />
          <h3>Packet</h3>
          <p>Another packet design mockup</p>
        </div>
      </div>
    </div>
  );
};

export default Works;
