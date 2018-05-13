import React from "react";

export class Footer extends React.Component{
  render(){
    return(
      <div className = "footer">
        <img alt = "Fullstack Logo" src = "public/styles/fa-logo@2x.png" className = "image" />
        {this.props.message}
        <img alt = "Grace Hopper Logo" src = "public/styles/grace_hopper_academy.png" className = "image" />
      </div>
    )
  }
}
