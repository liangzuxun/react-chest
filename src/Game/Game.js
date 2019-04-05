import React from 'react';
import {BoardComponent} from '../Board/Board';
import calculateWinner from '../Board/CalculateWinner';

export class Game extends React.Component {
  constructor () {
    super ();
    this.state = {
      history: [
        {
          squares: Array (9).fill (null),
        },
        {
          squares: Array (9).fill (null),
        },
      ],
      xIsNext: true,
      stepNumber:0,
    };
  }
  handleClick (i) {
    console.log (i, '123');
    const history = this.state.history;
    const current = history[history.length - 1];
    const squares = current.squares.slice ();
    if (calculateWinner (squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState ({
      history: history.concat ([
        {
          squares: squares,
        },
      ]),
      xIsNext: !this.state.xIsNext,
      stepNumber: history.length,
    });
  }
  jumpTo (step) {
    this.setState ({
      stepNumber: step,
      xIsNext: step % 2 ? false : true,
    });
  }
  render () {
    const history = this.state.history.slice(0,this.state.stepNumber+1);
    const current = history[this.state.stepNumber]
    const winner = calculateWinner (current.squares);
    const moves = history.map ((step, move) => {
      const desc = move ? 'Move #' + move : 'Game start';
      return (
        <li key={move}>
          <a href="#" onClick={() => this.jumpTo (move)}>{desc}</a>
        </li>
      );
    });
    let status;
    if (winner) {
      status = 'Winner:' + winner;
    } else {
      status = 'Next player:' + this.state.xIsNext ? 'X' : 'O';
    }
    return (
      <div className="game">
        <div className="game-board">
          <BoardComponent
            squares={current.squares}
            onClick={i => this.handleClick (i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}
