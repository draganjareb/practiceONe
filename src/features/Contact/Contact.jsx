import "./Contact.style.css";
import phone from "../../assets/pictures/phone.jpg";
import latter from "../../assets/pictures/latter.jpg";
import tag from "../../assets/pictures/navigation.jpg";

const Contact = () => {
  return (
    <div className="wrapper">
      <h2>CONTACT</h2>
      <hr className="firstHr"></hr>
      <div className="data">
        <div className="leftData">
          <div>
            <h3>Contact information</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard
            </p>
          </div>
          <hr className="secondHr"></hr>
          <div className="contactData">
            <div className="dataCard">
              <img src={phone} alt="phone" className="contactPictures" />
              <div>
                <h4>Contact on phone</h4>
                <p>+012-3456-7891</p>
                <p>+012-3456-7892</p>
              </div>
            </div>
            <div className="dataCard">
              <img src={latter} alt="latter" className="contactPictures" />
              <div>
                <h4>Contact on mail</h4>
                <p>demomail@demo.com</p>
                <p>demomail2@demo.com</p>
              </div>
            </div>
            <div className="dataCard">
              <img src={tag} alt="tag" className="contactPictures" />
              <div>
                <h4>Contact adress</h4>
                <p>Voždovačka 24, Banja Luka</p>
              </div>
            </div>
          </div>
        </div>
        <div className="rightData">
          <div className="textAndInput">
            <h3>Name</h3>
            <input placeholder="Enter yours name..." className="inputSmall" />
            <h3>Email</h3>
            <input placeholder="Enter yours email..." className="inputSmall" />
            <h3>Subject</h3>
            <input placeholder="Enter subject..." className="inputSmall" />
            <h3>Message</h3>
            <input placeholder="Enter yours message..." className="inputBig" />
          </div>
          <button className="contactButton">SEND MAIL</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
