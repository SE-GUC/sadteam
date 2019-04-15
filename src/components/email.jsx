import React, { Component } from "react";
class Email extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: props.email
    };
  }

  render() {
    const { email } = this.state;
    return (
      <div>
        <span className="Email text-muted font-weight-bold font-italic">
          Email:{email}
        </span>
      </div>
    );
  }
}

export default Email;
