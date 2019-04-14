import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: 'User'
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      username: e.target.value
    });
  }

  render() {
    return (
      <div>
        Edit {this.state.username} <br />
        Change firstname:
        <input type="text"   />
        <button type="button" class="btn btn-primary">Edit</button>
        Change middlename:
        <input type="text"  />
        <button type="button" class="btn btn-primary">Edit</button>
        Change lastname:
        <input type="text"  />
        <button type="button" class="btn btn-primary">Edit</button>
        Change age :
        <input type="text"   />
        <button type="button" class="btn btn-primary">Edit</button>
        Change email:
        <input type="text"   />
        <button type="button" class="btn btn-primary">Edit</button>
        Change password:
        <input type="text"   />
        <button type="button" class="btn btn-primary">Edit</button>

      </div>
    );
  }
}

export default App;