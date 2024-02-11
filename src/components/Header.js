import { LOGO_URL } from "../utils/Urls";
import {Link} from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={LOGO_URL} alt="logo"></img>
      <div className="nav-items">
        <ul>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/about"}>About</Link></li>
          <li><Link to={"/contact"}>Contacts</Link></li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
