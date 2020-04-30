import React from "react";
import "./App.css";
import Interactive from "./components/interactive";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
    };
  }

  render() {
    return (
      <div className="main">
        {this.state.show ? (
          <div className="App">
            <Interactive />
          </div>
        ) : (
          <div className="demo">
            <div className="message">I am a ...</div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
