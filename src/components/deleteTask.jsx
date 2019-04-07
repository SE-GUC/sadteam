import React, { Component } from 'react'
import axios from 'axios'
class DeleteTask extends React.Component {
	
	
	
	 constructor(props)
  {
    super(props);
    this.state = {
          name: "",
          description: ""
    }
    this.handleClick = this.handleClick.bind(this);
  }
	
	handleClick = async task => {
     axios.delete("http://localhost:3000/api/tasks" + '/' + task.id);
    const task = this.state.task.filter(p => p.id !== task.id);
    this.setState({ task });
	  render() {
    return (
      <div className="DeleteTask">
          <button onClick={this.handleClick}>Delete Task</button>   
        </div>
    );
  }
	};
	}

 export default DeleteTask;
