import React, { Component } from 'react'
import axios from 'axios'
class CreateTask extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
          name: "",
          description: ""
    }
    this.handleClick = this.handleClick.bind(this);
  }
  //adding a task
  handleClick() {
                axios.post("http://localhost:3000/api/tasks", {
                  name: this.state.name,
                  description: this.state.description
                })
              }
  render() {
    return (
      <div className="CreateTask">
         Task Name: <input type = "text" name = "name"  onChange={e => this.setState({ name: e.target.value })} />
         <br></br>
         Description: <input type = "text" name = "description" onChange={e => this.setState({ description: e.target.value })} />
         <br></br>
          <button onClick={this.handleClick}>Submit Description For Review</button>   
        </div>
    );
  }

}

export default CreateTask;
