import React, { Component } from "react";

export default class Interactive extends Component {
  constructor(props) {
    super(props);

    this.state = {
      words: [],
      inputValue: "",
      lessThanThree: false,
      error: false,
    };

    this.wordsInputHandler = this.wordsInputHandler.bind(this);
    this.addHandler = this.addHandler.bind(this);
    this.showMessageHandler = this.showMessageHandler.bind(this);
    this.clearInput = this.clearInput.bind(this);
  }

  submitHandler(e) {
    e.preventDefault();
    e.target.reset(); // beautiful little trick!
  }

  clearInput() {
    this.setState({
      inputValue: "",
    });
  }

  wordsInputHandler(e) {
    this.setState({
      inputValue: e.target.value,
    });
  }

  addHandler() {
    this.clearInput();

    const wordsArr = [...this.state.words];

    if (!this.state.inputValue) {
      this.setState({
        error: false,
      });
    } else {
      this.setState({
        words: [...wordsArr, this.state.inputValue],
        error: false,
      });
    }
  }

  showMessageHandler() {
    this.clearInput();

    if (this.state.words.length < 3) {
      this.setState({
        error: true,
      });
    } else {
      this.props.showDemo(this.state.words);
    }
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.submitHandler}>
          <div>Add words</div>
          <input
            type="text"
            onChange={this.wordsInputHandler}
            // value={this.state.reset}
          />
          {this.state.error && <p>At least 3 words to continue</p>}
          <div className="buttons">
            <button onClick={this.showMessageHandler}>
              Show me the message
            </button>
            <button onClick={this.addHandler}>Add new word</button>
          </div>
        </form>
      </div>
    );
  }
}
