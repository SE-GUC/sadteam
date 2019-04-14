import React, { Component } from 'react'
import axios from 'axios'
class taskSetReviewed extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            id: "",
            Reviewed: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        axios.put("http://localhost:3000/api/tasks/", {
        id: this.state.id,
        Reviewed: true
        })
    }
    render() {
        return (
            <div className="taskSetReviewed">
            Task ID: <input type = "text" id = "id"  onChange={e => this.setState({ id: e.target.value })} />
            <br></br>
            <button onClick={this.handleClick}>Done</button>   
            </div>
            )
        }
    }
export default taskSetReviewed
