import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
class Row extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
}
delete() {
    axios.delete('http://localhost:3001/api/tasks/'+this.props.task._id)
        .then(console.log('Deleted'))
        .catch(err => console.log(err))
}
  render() {
    return (
      
        <tr>
          <td>
            {this.props.task.name}
          </td>
          <td>
            {this.props.task.description}
          </td>
          <td>
            {this.props.task.currentState}
          </td>
          <td>
          {String(this.props.task.reviewed)}        
          </td>
          <td>
            <button onClick={this.delete} className="btn btn-danger">Delete</button>
          </td>
        </tr>
    );
  }
}

export default Row;