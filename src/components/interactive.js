import React, { Component } from "react";

export default class Interactive extends Component {
  constructor(props) {
    super(props);

    this.state = {
      words: [],
    };

    this.submitHandler = this.submitHandler.bind(this);
    this.wordsInputHandler = this.wordsInputHandler.bind(this);
    this.addHandler = this.addHandler.bind(this);
  }

  submitHandler(e) {
    e.preventDefault();
  }

  wordsInputHandler(e) {
    console.log(e.target.value);
  }

  addHandler(e) {
    const wordsArr = [...this.state.words];
    this.setState({
      words: [...wordsArr, e.target.value],
    });
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.submitHandler}>
          <div>Add words</div>
          <input type="text" onChange={this.wordsInputHandler} />
          <div className="buttons">
            <button>Show me the message</button>
            <button onClick={this.addHandler}>Add new word</button>
          </div>
        </form>
      </div>
    );
  }
}
