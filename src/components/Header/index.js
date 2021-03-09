import { NavLink } from "react-router-dom";
import "./style.scss";
const Header = () => {
  return (
    <header className="header">
      <nav className="header-nav">
        <div className="header__img">
          <p> Logo</p>
          <img alt="img" />
        </div>
        <ul className="header__list">
          <li className="header__item">1. Name</li>
          <li className="header__item">2. LastName</li>
          <NavLink to="/">Exit</NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
