import NavBar from "./NavBar";
import "./Header.css";


const Header = () => {
  return (
    <header className="header">
      <div className="head">
        <div className="name-logo">
          V Shravanth
        </div>
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
