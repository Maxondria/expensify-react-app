import React from "react";
import { NavLink } from "react-router-dom";
import { startLogout } from "../redux/actions/auth";
import { connect } from "react-redux";

export const Header = props => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName="is-active">
      Home
    </NavLink>
    {" | "}
    <NavLink activeClassName="is-active" to="/create">
      Add Expense
    </NavLink>
    {" | "}
    <button onClick={props.startLogout}>Logout </button>
  </header>
);

const matchDispatchToProps = {
  startLogout
};

export default connect(
  undefined,
  matchDispatchToProps
)(Header);
