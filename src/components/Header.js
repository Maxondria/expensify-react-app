import React from "react";
import { Link } from "react-router-dom";
import { startLogout } from "../redux/actions/auth";
import { connect } from "react-redux";

export const Header = props => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/dashboard">
          <h1>Expensify</h1>
        </Link>
        <button className="button button__link" onClick={props.startLogout}>
          Logout{" "}
        </button>
      </div>
    </div>
  </header>
);

const matchDispatchToProps = {
  startLogout
};

export default connect(
  undefined,
  matchDispatchToProps
)(Header);
