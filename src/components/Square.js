import React, { Component } from "react";

export default class Square extends Component {
  constructor(props) {
    super(props);

    this.state = { value: null };

    // this.handleEvent = this.handleEvent.bind(this);
  }

  // Prototype methods, Bind in Constructor (ES2015)
  //   handleEvent() {}

  // Class Properties (Stage 3 Proposal)
  //   handler = () => {
  //     this.setState();
  //   };

  render() {
    return (
      <button className="square" onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }

  //   render() {
  //     return (
  //       <button
  //         className="square"
  //         onClick={() => {
  //           this.setState({ value: this.state.value });
  //         }}
  //       >
  //         {this.state.value}
  //       </button>
  //     );
  //   }
}
