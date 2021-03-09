import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import "./style.scss";
const Header = ({ infoUserState }) => {
  const info = { name: "Dima", lastName: "Oil" };
  return (
    <header className="header">
      <nav className="header-nav">
        <div className="header__img">
          <p> Logo</p>
          <img alt="img" />
        </div>
        <ul className="header__list">
          <li className="header__item">1.Name {info.name}</li>
          <li className="header__item">2.LastName: {info.lastName}</li>
          <NavLink to="/">Exit</NavLink>
        </ul>
      </nav>
    </header>
  );
};

const mapStateToProps = (state) => ({
  infoUserState: state.user.userInfo,
});
export default connect(mapStateToProps, null)(Header);
