import React from "react";

export class Header extends React.Component{
  render(){
    return(
      <div className = "heading">
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    )
  }
}
