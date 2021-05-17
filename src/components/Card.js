import "./Card.css";
import { useState, useEffect } from "react";
import axios from "axios";
import design from "../assets/design.svg";
import growingMan from "../assets/growing-up-man.svg";
import man from "../assets/man.svg";
import woman from "../assets/woman.svg";
import growingWoman from "../assets/growing-up-woman.svg";
import email from "../assets/mail.svg";
import location from "../assets/map.svg";
import password from "../assets/padlock.svg";
import phone from "../assets/phone.svg";
import loadingGif from "../assets/loading.gif";

const Card = () => {
  const [randomUser, setRandomUser] = useState();

  const fetchData = () => {
    axios.get("https://randomuser.me/api/").then((res) => {
      //   console.log(res);
      setRandomUser(res.data.results[0]);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <div className="container">
        <div className="header">Dummy users profile info</div>
        <div className="card-container">
          <div className="card-header">
            {/* <div><img src={loadingGif} alt="loading" /></div> */}
            <div className="profil-photo">
              <img src="" alt="profil" />
            </div>
            <div className="profil-info">my name is</div>
          </div>
          <div className="logos">
            <button>
              <img src={woman} alt="man-woman" />
            </button>
            <button>
              <img src={email} alt="email" />
            </button>
            <button>
              <img src={growingMan} alt="age" />
            </button>
            <button>
              <img src={location} alt="map" />
            </button>
            <button>
              <img src={phone} alt="telephone" />
            </button>
            <button>
              <img src={password} alt="padlock" />
            </button>
          </div>
          <div className="buttons">
            <button>New User</button>
            <button>Add User</button>
          </div>
          <div className="addUser-container"></div>
        </div>
        <div className="footer">
          <img src={design} alt="design" />
        </div>
      </div>
    </div>
  );
};

export default Card;
