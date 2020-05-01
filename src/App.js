import React from "react";
import "./App.css";
import Interactive from "./components/interactive";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: false,
      display: "",
    };

    this.showDemoHandler = this.showDemoHandler.bind(this);
    // this.initAnimationHandler = this.initAnimationHandler.bind(this);
  }

  showDemoHandler(arrWords) {
    this.setState({
      data: arrWords,
    });

    let dataIndex = 0;

    setInterval(() => {
      console.log(dataIndex);
      // DO NOT USE CONSOLE.LOG WITH "++" FOR IT ADDS UP!!!
      if (dataIndex === this.state.data.length) {
        this.setState({
          display: this.state.data[0],
        });

        dataIndex = 1;
      } else {
        this.setState({
          display: this.state.data[dataIndex],
        });

        dataIndex++;
      }
    }, 1000);
  }

  // initAnimationHandler() {
  // }

  render() {
    return (
      <div className="main">
        {!this.state.data ? (
          <div className="App">
            <Interactive showDemo={this.showDemoHandler} />
          </div>
        ) : (
          <div className="demo">
            <div className="message">
              I am a <span className="cycler">{this.state.display}</span>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;
