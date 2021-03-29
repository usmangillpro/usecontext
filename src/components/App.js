import React from "react";
import ThemeToggle from "./ThemeToggle";

import "./style.css";

export const Theme = React.createContext();

class App extends React.Component {
  state = { dark: true };

  contextChange = () => {
    this.setState({ dark: !this.state.dark });
  };

  render() {
    const value = this.state.dark ? "light" : "dark";

    return (
      <div className="container">
        <Theme.Provider value={value}>
          <ThemeToggle />
        </Theme.Provider>

        <button onClick={this.contextChange}>change</button>
      </div>
    );
  }
}

export default App;
