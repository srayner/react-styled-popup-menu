import React, { Component } from "react";
import Menu from "./Components/Menu";

const myClickHandler = itemId => {
  console.log("Clicked: " + itemId);
};

const myCloseHandler = menuId => {
  console.log("Closed: " + menuId);
};

const menuData = {
  id: "LIST_ACTIONS_MENU",
  title: "List Actions",
  position: {
    top: "75px",
    left: "25px"
  },
  items: [
    [
      { id: "ADD_TASK", caption: "Add task..." },
      { id: "COPY_LIST", caption: "Copy list..." },
      { id: "MOVE_LIST", caption: "Move list..." },
      { id: "WATCH_LIST", caption: "Watch", disabled: true }
    ],
    [
      { id: "MOVE_ALL_TASKS", caption: "Move all tasks in this list..." },
      { id: "ARCHIVE_ALL_TASKS", caption: "Archive all tasks in this list..." }
    ],
    [{ id: "ARCHIVE_LIST", caption: "Archive this list..." }]
  ],
  onItemClick: myClickHandler,
  onClose: myCloseHandler
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
