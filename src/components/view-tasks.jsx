 import React, { Component } from 'react'
 import axios from 'axios'
class ViewTasks extends React.Component {
 constructor(props)
  {
    super(props);
    this.state = {
          tasks: []
    }
    this.handleClick = this.handleClick.bind(this);
  }
    listView() {
        return this.state.tasks.map(function(currentTask, i){
            return <Task task={currentTask} key={i} />;
        })
    }
  //viewing all tasks
  componentDidMount() {
    axios.get("http://localhost:3000/api/tasks").then(res => this.setState({tasks: res.data.data})).catch(err => console.log(err))
  }
render() {
        return (
            <div>
                <h3>Tasks</h3>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Applicants</th>
                            <th>Skills Required</th>
                            <th>Reviewed</th>
                            <th>Assignee</th>
                            <th>Current State</th>
                            <th>Consultancy</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.listView() }
                    </tbody>
                </table>
            </div>
        )
    }
}
export default ViewTasks;
