import React, { Component } from "react";
import { Theme } from "./App";
class DarkTheme extends Component {
  render() {
    return (
      <div>
        <Theme.Consumer>
          {(val) => {
            return (
              <div className={val}>
                <h4 className="container">Usman Gill</h4>
              </div>
            );
          }}
        </Theme.Consumer>
      </div>
    );
  }
}
export default DarkTheme;
