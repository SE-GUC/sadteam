 import React, { Component } from 'react'
 import axios from 'axios'
 import Row from './Row'
class ViewTasks extends React.Component {
 constructor(props)
  {
    super(props);
    this.state = {
          tasks: []
    }
    //this.handleClick = this.handleClick.bind(this);
  }
   
  //viewing all tasks
  componentDidMount() {
    axios.get("http://localhost:3001/api/tasks").then(res => this.setState({tasks: res.data.data})).catch(err => console.log(err))
    
  }
  listView() {
    return this.state.tasks.map(function(currentTask, i){
        return <Row task={currentTask} key={i} />;
    })
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
                            <th>Current State</th>
                            <th>Reviewed</th>
                            <th></th>
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
