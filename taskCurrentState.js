import React, { Component } from "react";
import "./App1.css";
 class CurrentState extends Component{
  constructor(props){
    super(props);
    this.state = {
      currentState : 'available'
    }
    this.changeCurrentState = this.changeCurrentState.bind(this);
  }
  changeCurrentState(){
    const newState = document.getElementById('addInput');
    if (newState === 'running' | 'finished'){
      this.setState = newState;
      alert('current state had been changed')
    }
    else{
      alert('incorrect state')
    }

  }
  render(){
    return (
      <div>
        <input
          type="text"
          className="input"
          id="addInput"
          placeholder="Something that needs to be done..."
        />
        <button onClick={this.changeCurrentState}>
          change current state
        </button>
      </div>
    );
  }
}

export default CurrentState;