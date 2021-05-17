import "./Card.css";

const Card = () => {
  return (
    <div>
      <div className="container">
        <div className="header">Dummy users profile info</div>
        <div className="card-container">
          <div className="card-header">
            <div className="profil-photo"></div>
            <div className="profil-info">my name is</div>
          </div>
          <div className="logos">
            <button>
              <img src="" alt="" />
            </button>
            <button>
              <img src="" alt="" />
            </button>
            <button>
              <img src="" alt="" />
            </button>
            <button>
              <img src="" alt="" />
            </button>
            <button>
              <img src="" alt="" />
            </button>
            <button>
              <img src="" alt="" />
            </button>
          </div>
          <div className="buttons">
            <button>New User</button>
            <button>Add User</button>
          </div>
          <div className="addUser-container"></div>
        </div>
        <div className="footer">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Card;
