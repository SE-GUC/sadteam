import React, { Component } from 'react'
import axios from 'axios'
class userAddReview extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            id: "",
            reviewText: ""
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        axios.put("http://localhost:3000/api/users/:id", {
        reviewText: this.state.reviewText
        })
    }
    render() {
        return (
            <div className="userAddReview">
            User ID: <input type = "text" id = "id"  onChange={e => this.setState({ id: e.target.value })} />
            <br></br>
            Review: <input type = "text" id = "id"  onChange={e => this.setState({ reviewText: e.target.value })} />
            <br></br>
            <button onClick={this.handleClick}>Done</button>   
            </div>
            )
        }
    }
export default userAddReview
