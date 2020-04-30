import React, { Component } from "react";

export default class Interactive extends Component {
  constructor(props) {
    super(props);

    this.state = {
      words: [],
      lessThanThree: false,
    };

    this.submitHandler = this.submitHandler.bind(this);
    this.wordsInputHandler = this.wordsInputHandler.bind(this);
    this.addHandler = this.addHandler.bind(this);
    this.showMessageHandler = this.showMessageHandler.bind(this);
  }

  submitHandler(e) {
    e.preventDefault();
  }

  wordsInputHandler(e) {
    // console.log(e.target.value);
    this.valueInput = e.target.value;
  }

  addHandler() {
    const wordsArr = [...this.state.words];
    this.setState({
      words: [...wordsArr, this.valueInput],
    });
    console.log(this.state.words);
  }

  showMessageHandler() {
    if (this.state.words.length < 3) {
      this.setState({
        lessThanThree: true,
      });
    }
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.submitHandler}>
          <div>Add words</div>
          <input type="text" onChange={this.wordsInputHandler} />
          {this.state.lessThanThree && <p>At least 3 words to continue</p>}
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
