import React, { Component } from "react";
import { startLogin } from "../redux/actions/auth";
import { connect } from "react-redux";

export class LoginPage extends Component {
  Login = () => {
    this.props.startLogin();
  };
  render() {
    return (
      <div className="box-layout">
        <div className="box-layout__box">
          <h1 className="box-layout__title">Expensify App</h1>
          <p>It's time to get your expenses under control</p>
          <button onClick={this.Login}>Login{process.env.PUBLIC_URL}</button>
        </div>
      </div>
    );
  }
}

const matchDispatchToProps = {
  startLogin
};
export default connect(
  undefined,
  matchDispatchToProps
)(LoginPage);
