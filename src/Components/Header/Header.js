import React, { Component } from "react";
import "./_Header.scss";

class Header extends Component {
  render() {
    return (
      <div className="App--header">
        <div className="App--header__text">
          <h1>uni</h1>
          <div className="App--header__Subtext">
            <p>33 E 20th St, New York, NY, 10003 </p>
            <p>(212)- 000- 0000</p>
          </div>
        </div>
        <button type="text" className="App--SubHeader__Button">
          Request your server, Jack
        </button>
      </div>
    );
  }
}
export default Header;
