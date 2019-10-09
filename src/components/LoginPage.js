import React, { Component } from "react";
import { startLogin } from "../redux/actions/auth";
import { connect } from "react-redux";

export class LoginPage extends Component {
  Login = () => {
    this.props.startLogin();
  };
  render() {
    return (
      <div>
        <button onClick={this.Login}>Login</button>
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
