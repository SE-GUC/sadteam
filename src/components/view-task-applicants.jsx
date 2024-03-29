import React, { Component } from 'react'
import axios from 'axios'
class ViewTaskApplicants extends React.Component {
constructor(props)
 {
   super(props);
   this.state = {
         applicants: []
   }
   this.handleClick = this.handleClick.bind(this);
 }
   listView() {
       return this.state.applicants.map(function(currentUser, i){
           return <User user={currentUser} key={i} />;
       })
   }
 //viewing all tasks
 async componentWillMount() {
   await axios.get("http://localhost:3000/api/tasks/${id}").then(res => this.setState({applicants: res.data.data})).catch(err => console.log(err))
 }
render() {
       return (
           <div>
               <h3>Tasks</h3>
               <table className="table table-striped" style={{ marginTop: 20 }} >
                   <thead>
                       <tr>
                           <th>First Name</th>
                           <th>Middle Name</th>
                           <th>Last Name</th>
                           <th>Age</th>
                           <th>Birth Date</th>
                           <th>Email</th>
                           <th>Educational Background</th>
                           <th>Skills</th>
                           <th>Skills</th>
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
export default ViewTaskApplicants;
