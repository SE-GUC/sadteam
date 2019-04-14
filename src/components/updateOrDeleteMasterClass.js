import React, { Component } from 'react';
import logo from './logo.svg';
import './updateOrDeleteMasterClass.css';



class App extends Component {
  render() {
    return (
      <div className="App">
     <header >
       <h1 >Update or Delete Masterclass</h1>
     </header>
     <body>
       <h2>Update Name</h2><br></br>
       <input></input>
       <button>update name</button>
       <h2>Update description</h2><br></br>
       <input className = "textArea"></input>
       <button>update description</button><br></br><br></br><br></br>
       <button className = "delete">Delete</button>
      
     </body>
      </div>
    );
  }
}

export default App;
