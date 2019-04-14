import React, { Component } from 'react'
import axios from 'axios'
class CreateMasterclass extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
          name: "",
          description: ""
    }
    this.handleClick = this.handleClick.bind(this);
  }
  //adding a masterclass
  handleClick() {
                axios.post("http://localhost:3000/api/masterclasses", {
                  name: this.state.name,
                  description: this.state.description
                })
  render() {
    return (
      <div className="CreateMasterclass">
         Task Name: <input type = "text" name = "name"  onChange={e => this.setState({ name: e.target.value })} />
         <br>
         Description: <input type = "text" name = "description" onChange={e => this.setState({ description: e.target.value })} />
         <br>
          <button onClick={this.handleClick}>Submit Masterclass</button>   
        </div>
    );
  }
}

 export default CreateMasterclass;
