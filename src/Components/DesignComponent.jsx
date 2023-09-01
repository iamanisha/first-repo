import React, { Component } from 'react'
//rce
export class DesignComponent extends Component {
    //rcons
    constructor(props) {
      super(props)

      this.state = {
         btnStyle:{
            width: '200px',
            height:'50px',
            border: '4px solid blue',
            background: 'yellow',
            borderRadius: '5px'

         }
      }
    }
  render() {
    return (
      <>
      <button style={this.state.btnStyle}>With CSS</button></>
    )
  }
}

export default DesignComponent
