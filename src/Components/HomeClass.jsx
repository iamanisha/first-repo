import React,{Component} from "react";

export class HomeClass extends Component{
  constructor(props) {
    super(props)

    this.state = {
        name : this.props.name,
        work : this.props.work
    }
  }
    render(){
      this.state.name="HOME class component"
      this.state.work="developer"
      return (
          <div>HOMEClass<br></br>
          {this.state.name}<br></br>
          {this.state.work}
          </div>
      )
    }
}
export default HomeClass
