import React, { Component } from 'react'
import axios from 'axios'
class EditTask extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
            id: "",
          name: "",
          description: "",
          reviewed: false,
          currentState: ""
    }
    this.handleClick = this.handleClick.bind(this);
  }
  //adding a task
  handleClick() {
                axios.put("http://localhost:3001/api/tasks/"+this.state.id, {
                  name: this.state.name,
                  description: this.state.description,
                  reviewed: Boolean(this.state.reviewed),
                  currentState: this.state.currentState
                })
              }
  render() {
    return (
      <div className="EditTask">
            ID: <input type = "text" name = "ID"  onChange={e => this.setState({ id: e.target.value })} />
         <br></br>
         <br></br>
         Task Name: <input type = "text" name = "name"  onChange={e => this.setState({ name: e.target.value })} />
         <br></br>
         <br></br>
         Description: <input type = "text" name = "description" onChange={e => this.setState({ description: e.target.value })} />
         <br></br>
         <br></br>
         Current State: <input type = "text" name = "currentState" onChange={e => this.setState({ currentState: e.target.value })} />
        <br></br>
        <br></br>
        Reviewed: <input type = "text" name = "reviewed" onChange={e => this.setState({ reviewed: e.target.value })} />
        <br></br>
        <br></br>
          <button onClick={this.handleClick}>Confirm Changes</button>   
        </div>

    )
    }

}

export default EditTask
