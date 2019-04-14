import React, { Component } from 'react'
import axios from 'axios'
class ApplyToTask extends React.Component {
  constructor(props)
  {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  //adding a task
  handleClick() {
                axios.put("http://localhost:3000/api/tasks/${id}/${userid}")
              }
  render() {
    return (
      <div className="ApplyToTask">
          <button onClick={this.handleClick}>Apply to Task</button>   
        </div>
    );
  }

}

export default ApplyToTask;
