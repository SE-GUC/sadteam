import React from "react";
import Avatar from "react-avatar-edit";
class ProfilePic extends React.Component {
  constructor(props) {
    super(props);
    const src = "";
    this.state = {
      name: null,
      src
    };
    this.onCrop = this.onCrop.bind(this);
    this.onClose = this.onClose.bind(this);
    this.onImageLoad = this.onImageLoad.bind(this);
    this.onBeforeFileLoad = this.onBeforeFileLoad.bind(this);
  }

  onClose() {
    this.setState({ name: null });
  }

  onCrop(name) {
    this.setState({ name });
  }
  onImageLoad(name) {
    this.setState({ name });
  }
  onBeforeFileLoad(name) {
    if (name.target.files[0].size > 308040) {
      alert("Image File is too big!");
      name.target.value = "";
    }
  }
  onPositionChange() {
    this.setState({ name: null });
  }
  render() {
    return (
      <div>
        <Avatar
          right={200}
          width={200}
          height={200}
          onPositionChange={this.onPositionChange}
          onCrop={this.onCrop}
          onClose={this.onClose}
          onImageLoad={this.onImageLoad}
          onBeforeFileLoad={this.onBeforeFileLoad}
          src={this.state.src}
        />
        <img className="edit-Profile-Pic" src={this.state.name} />
      </div>
    );
  }
}
export default ProfilePic;
