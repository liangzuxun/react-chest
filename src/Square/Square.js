import React from 'react'
// export class SquareComponent extends React.Component{
//   render(){
//     return(
//       <button className="square" onClick={()=>this.props.onClick()}>
//       this.props.value
//       </button>
//     )
//   }
// }
export const SquareComponent = function(props){
  return(
    <button className="square" onClick={props.onClick}>
    {props.value}
    </button>
  )
}