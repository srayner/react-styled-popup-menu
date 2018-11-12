import React, { Component } from "react";
import Menu from "./Components/Menu";

const menuData = {
  title: "List Actions",
  position: {
    top: "75px",
    left: "25px"
  },
  items: [
    ["Add task...", "Copy list...", "Move list...", "Watch"],
    ["Move all tasks in this list...", "Archive all tasks in this list..."],
    ["Archive this list..."]
  ]
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Popup Menu</h1>
        <Menu {...menuData} />
      </div>
    );
  }
}

export default App;
