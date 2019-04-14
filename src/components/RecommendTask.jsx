import React from "react";
class RecommendTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: props.email
    };
  }
  getRecommendedTasks = () => {
    var RecommendTaskUrl =
      "api/users/records/" +
      this.state.email +
      "/recommendations";
    window.location.replace(RecommendTaskUrl);
  };
  render() {
    return (
      <div>
        <button
          type="button"
          className="btn btn-success"
          onClick={this.getRecommendedTasks.bind(this)}
        >
          Recomend Task!
        </button>
      </div>
    );
  }
}

export default RecommendTask;
