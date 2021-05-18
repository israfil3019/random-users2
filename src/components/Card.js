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
  const [personel, setPersonel] = useState("name");
  const [loading, setLoading] = useState(false);
  const [userList, setUserList] = useState([]);

  const fetchData = () => {
    setLoading(true);
    axios.get("https://randomuser.me/api/").then((res) => {
      setRandomUser(res.data.results[0]);
      setInformation([
        res.data.results[0].name.first,
        res.data.results[0].name?.last,
      ]);
      setPersonel("name");
      setLoading(false);
    });
  };

  const addUser = () => {
    if (
      userList.filter((user) => user.email === randomUser?.email).length > 0
    ) {
      alert("You have already add this user!");
    } else {
      setUserList([
        ...userList,
        {
          name: randomUser?.name?.first,
          email: randomUser?.email,
          phone: randomUser?.phone,
          age: randomUser?.dob?.age,
        },
      ]);
    }
  };
  const handleClick = (information, personel) => {
    setInformation(information);
    setPersonel(personel);
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
            {loading ? (
              <img src={loadingGif} alt="loading" className="loading" />
            ) : (
              <div>
                <div className="profile-photo">
                  <img src={randomUser?.picture?.large} alt="profil" />
                </div>
                <div className="profile-info">
                  <h4 className="profile-info-header">My {personel} is</h4>
                  <h4 className="profile-info-info">
                    {information?.map((randomUser, index) => (
                      <span key={index}>{randomUser + " "} </span>
                    ))}
                  </h4>
                </div>
              </div>
            )}
          </div>
          <div className="logos">
            <button className="logo">
              <img
                src={randomUser?.gender === "male" ? man : woman}
                alt="man-woman"
                onClick={() =>
                  handleClick(
                    [randomUser?.name?.first, randomUser?.name?.last],
                    "name"
                  )
                }
              />
            </button>
            <button className="logo">
              <img
                src={email}
                alt="email"
                onClick={() => handleClick([randomUser?.email], "email")}
              />
            </button>
            <button className="logo">
              <img
                src={
                  randomUser?.gender === "female" ? growingWoman : growingMan
                }
                alt="age"
                onClick={() => handleClick([randomUser?.dob?.age], "age")}
              />
            </button>
            <button className="logo">
              <img
                src={location}
                alt="map"
                onClick={() =>
                  handleClick(
                    [randomUser?.location?.city, randomUser?.location?.country],
                    "address"
                  )
                }
              />
            </button>
            <button className="logo">
              <img
                src={phone}
                alt="telephone"
                onClick={() => handleClick([randomUser?.phone], "number")}
              />
            </button>
            <button className="logo">
              <img
                src={password}
                alt="padlock"
                onClick={() =>
                  handleClick([randomUser?.login?.password], "password")
                }
              />
            </button>
          </div>
          <div className="buttons">
            <button className="button" onClick={fetchData}>
              New User
            </button>
            <button className="button" onClick={addUser}>
              Add User
            </button>
          </div>
          <div className="addUser-container">
            {userList.length > 0 && (
              <table>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Age</th>
                  </tr>
                </thead>
                <tbody>
                  {userList?.map((user, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.phone}</td>
                      <td>{user.age}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
        <div className="footer">
          <img src={design} alt="design" />
          <strong>MY Way</strong>
          <img src={design} alt="design" />
        </div>
      </div>
    </div>
  );
};

export default Card;
