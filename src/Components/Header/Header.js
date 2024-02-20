import "./HeaderStyles.scss";
import React, { Component } from "react";

import background from "../../assets/images/Ellipse 51.png";

class Header extends Component {
  render() {
    return (
      <div className="App--header">
        <div className="blackbox"></div>
        <div className="frame">
          <img className="image" src={background} />
        </div>
        <div className="App--header__text">
          <h1 className="title">uni</h1>
          <div className="App--header__subtext">
            <p>33 E 20th St, New York, NY, 10003 </p>
            <p>(212) - 000 - 0000</p>
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
