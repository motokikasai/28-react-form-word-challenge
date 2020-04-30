import React from "react";
import "./App.css";
import Interactive from "./components/interactive";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
    };

    this.showDemoHandler = this.showDemoHandler.bind(this);
  }

  showDemoHandler(trigger) {
    this.setState({
      show: trigger,
    });
  }

  render() {
    return (
      <div className="main">
        {!this.state.show ? (
          <div className="App">
            <Interactive showDemo={this.showDemoHandler} />
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
