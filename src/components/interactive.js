import React, { Component } from "react";

export default class Interactive extends Component {
  constructor(props) {
    super(props);

    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.submitHandler}>
          <div>Add words</div>
          <input type="text" />
          <div className="buttons">
            <button>Show me the message</button>
            <button>Add new word</button>
          </div>
        </form>
      </div>
    );
  }
}
