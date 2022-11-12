import { AiOutlineVideoCamera } from "react-icons/ai";
import "./index.css";

const Header = () => {
  return (
    <div className="Header">
      <div className="container">
        <h1>
          <strong>Virtual Cards</strong>
        </h1>
        <AiOutlineVideoCamera className="camera" />
        <p
          style={{
            color: "blue",
          }}
        >
          Learn more
        </p>
      </div>
      <p className="card-holder">+ Virtual cards</p>
    </div>
  );
};

export default Header;
