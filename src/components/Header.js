import { LOGO_URL } from "../utils/Urls";
import {Link} from "react-router-dom";
const Header = () => {
  return (
    <div className="flex justify-between ">
      <Link to="/"><img className="logo" src={LOGO_URL} alt="logo"></img></Link>
      <div className="nav-items">
        <ul className="flex m-5 ">
          <li className="px-4 text-xl "><Link to={"/"}>Home</Link></li>
          <li className="px-4 text-xl"><Link to={"/about"}>About</Link></li>
          <li className="px-4 text-xl"><Link to={"/contact"}>Contacts</Link></li>
          <li className="px-4 text-xl">Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
