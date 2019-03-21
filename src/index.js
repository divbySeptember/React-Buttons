import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";
import HelloMessage from "./components/HelloMessage";
import Navigation from "./components/Navigation";
import MagicButton from "./components/MagicButton";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      newList: ["Cartier", "David", "Elizabeth", "Anthony", "Vicky", "Bobby"]
    };
  }
  render() {
    return (
      <div className="App">
        <Navigation />
        <HelloMessage />
        {this.state.newList.map(function(item, index) {
          return <MagicButton firstName={item} key={index} />;
        })}
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
