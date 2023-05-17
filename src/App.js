import "./App.css";
import image from "./cell.png";
import arrow from "./Icon.png";
import { Link, useLocation } from "react-router-dom";
import doublearrow from "./icon.png";
import Profile from "./Profile.png";
import Text from "./text.png";
import Dot from "./dot.png";
function App() {
  return (
    <div className="main-header">
      <div className="header">
        <div className="time">9:41</div>
        <div>
          <img src={image} />
        </div>
      </div>
      <div className="section2">
        <div className="header2">
          <Link to="/">
            <div>
              {" "}
              <img src={arrow} className="arrow" />
            </div>
          </Link>
          <div className="trip">Trip 1</div>
        </div>
        <div className="doublearrow">
          <img src={doublearrow} className="darrow" />
        </div>
      </div>
      <div className="section4">
        <div className="section3">
          <div>
            <img src={Profile} className="profile" />
          </div>
          <div>
            <img src={Text} className="text" />
          </div>
        </div>
        <div className="Dot">
          <img src={Dot} />
        </div>
      </div>
    </div>
  );
}

export default App;
