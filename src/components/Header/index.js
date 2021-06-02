import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import operationAuth from '../../redux/operation/authorization';
import './style.scss';
import { PageHeader, Descriptions, Row, Divider, Col, Card, Space } from 'antd';
import { useState } from 'react';

const Header = ({ infoUserState, logOutUser, isUserAuth }) => {
  const [showHead, setShowHead] = useState(false);
  const { name, lastName } = infoUserState ? infoUserState : '';

  if (name !== '') {
  }

  const handleLogOutUser = e => {
    console.log(isUserAuth);
    logOutUser({ name });
  };
  return (
    showHead && (
      <header className="header">
        <nav className="header-nav">
          <div className="header__img">
            <p> Logo</p>
            <img alt="img" />
          </div>
          <ul className="header__list">
            <li className="header__item">1.Name {name}</li>
            <li className="header__item">2.LastName: {lastName}</li>
            {infoUserState && (
              <NavLink onClick={handleLogOutUser} to="/" exact>
                Exit
              </NavLink>
            )}
          </ul>
        </nav>
      </header>
    )
  );
};

const mapStateToProps = state => ({
  isUserAuth: state.token,
  infoUserState: state.user.userInfo,
});
const mapDispatchToProps = {
  logOutUser: operationAuth.logOut,
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
