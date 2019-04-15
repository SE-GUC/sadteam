import React, { Component } from "react";
import "./App1.css";

class PreviousProjects extends Component{
  constructor(props){
    super(props)
    this.state = { 
      List : [
        'project1',
        'project2',
        'project3'
      ]
    }
  }
  render(){
    return (
      <div>
        <section className="section">
        <h2>Previous Projects</h2><br></br>
          <ul>
            {this.state.List.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </div>
    );
  }
}

export default PreviousProjects;