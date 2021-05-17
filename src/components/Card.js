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
  const [information, setInformation] = useState();

  const fetchData = () => {
    axios.get("https://randomuser.me/api/").then((res) => {
      console.log(res);
      setRandomUser(res.data.results[0]);
    });
  };

  const handleClick = (information) => {
    setInformation(information);
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
            <div className="profile-photo">
              <img src={randomUser?.picture?.large} alt="profil" />
            </div>
            <div className="profile-info">
              <h4>My {} is</h4>
              <h4>
                {information?.map((randomUser, index) => (
                  <span key={index}>{randomUser + " "} </span>
                ))}
              </h4>
            </div>
          </div>
          <div className="logos">
            <button>
              <img
                src={randomUser?.gender === "male" ? man : woman}
                alt="man-woman"
                onClick={() =>
                  handleClick([randomUser?.name?.first, randomUser?.name?.last])
                }
              />
            </button>
            <button>
              <img
                src={email}
                alt="email"
                onClick={() => handleClick([randomUser?.email])}
              />
            </button>
            <button>
              <img
                src={
                  randomUser?.gender === "female" ? growingWoman : growingMan
                }
                alt="age"
                onClick={() => handleClick([randomUser?.dob?.age])}
              />
            </button>
            <button>
              <img
                src={location}
                alt="map"
                onClick={() =>
                  handleClick([
                    randomUser?.location?.city,
                    randomUser?.location?.country,
                  ])
                }
              />
            </button>
            <button>
              <img
                src={phone}
                alt="telephone"
                onClick={() => handleClick([randomUser?.cell])}
              />
            </button>
            <button>
              <img
                src={password}
                alt="padlock"
                onClick={() => handleClick([randomUser?.login?.password])}
              />
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
