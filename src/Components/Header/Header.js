import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./_Header.scss";
import siteLogo from "../../assets/Fiserv-logo-1024x577-1451217154.png";

class Header extends Component {
  render() {
    return (
      <div className="App--header">
        {/* <link to="/"> */}
        <img src={siteLogo} alt="Fiserv Logo" className="App--logo" />
        {/* </link> */}
        <div className="App--SubHeader">
          <div className="App--SubHeader__left">
            <h3 className="Hero__text">Thank you for dining with us</h3>
          </div>
          <div className="App--SubHeader__right">
            <h4>3 Guests</h4>
          </div>
        </div>
        <button type="text" className="App--SubHeader__Button">
          {" "}
          Request your server, Jack
        </button>
      </div>
    );
  }
}
export default Header;
