import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CreateTask from './components/create-task'
import EditTask from './components/edit-task'

import ViewTasks from './components/view-tasks'
class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/'} className="navbar-brand">LirtenHub</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                  <Link to={'/view-tasks'} className="nav-link">View Tasks</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/create-task'} className="nav-link">Create Task</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/edit-task'} className="nav-link">Edit Task</Link>
                </li>
              </ul>
            </div>
          </nav> <br/>
          <h2>LirtenHub</h2> <br/>
          <Switch>
              <Route exact path='/view-tasks' component={ ViewTasks } />
              <Route exact path='/create-task' component={ CreateTask } />
              <Route exact path='/edit-task' component={ EditTask } />

          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
