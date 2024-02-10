import { LOGO_URL } from "../utils/Urls";
const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={LOGO_URL} alt="logo"></img>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contacts</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
