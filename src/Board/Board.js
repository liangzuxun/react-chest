import React,{Component} from 'react'
import {SquareComponent} from '../Square/Square'

export class BoardComponent extends React.Component{
    // constructor(){
    //   super()
    //   this.state ={
    //     squares:Array(9).fill(null),
    //     xIsNext:true
    //   }
    // }
    renderSquare(i){
      return(
        <SquareComponent
        value={this.props.squares[i]}
        onClick={()=>this.props.onClick(i)}
        />
      )
    }
    // handleClick(i){
    //   const squares = this.state.squares.slice()
    //   if(calculateWinner(squares)||squares[i]){
    //     return
    //   }
    //   squares[i] = this.state.xIsNext?'X':'O'
    //   this.setState({squares:squares,
    //   xIsNext:!this.state.xIsNext
    //   })
    // }
    render(){
      return(
        <div>
      
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
        </div>
      )
    }
}