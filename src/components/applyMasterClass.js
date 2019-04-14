import React, { Component } from "react";
import "./App1.css";


class ApplyMasterClass extends Component{
  constructor(props){
    super(props)
    this.state = {appliedFor : false}
     this.apply= this.apply.bind(this);
   
  }
  apply(){
    const applyFor = this.state.appliedFor
    if(applyFor === false){
      this.setState({appliedFor : true})
    }
    else{
      this.setState({ appliedFor: false });
    }
    
    alert('applying for master class ' );
  }
  render(){
    return(
      <div>
      <h1>Apply for master class</h1>
      <button onClick = {this.apply}>Apply </button>
      </div>

    );
  }
}

export default ApplyMasterClass;
