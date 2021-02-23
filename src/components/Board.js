import React, { Component } from "react";
import Square from "./Square";
import calculateWinner from "./Game";

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }

  handleClick(i) {
    if (calculateWinner(this.state.squares) == null) {
      if (this.state.squares[i] === null) {
        const squares = this.state.squares.slice();
        squares[i] = this.state.xIsNext ? "X" : "O";
        this.setState({
          squares: squares,
          xIsNext: !this.state.xIsNext,
        });
      }
    }
  }

  reset() {
    this.setState({
      squares: Array(9).fill(null),
      xIsNext: true,
      winner: false,
    });
  }
  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const status =
      calculateWinner(this.state.squares) != null
        ? `${this.state.xIsNext ? "O" : "X"} is the winner!`
        : `"Next player: ${this.state.xIsNext ? "X" : "O"}`;
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
        <div className="board-row">
          <button className="btn" onClick={() => this.reset()}>
            New Game
          </button>{" "}
        </div>
      </div>
    );
  }
}
