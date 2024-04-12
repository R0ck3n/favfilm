import React, { Component } from "react"; 
import './Synopsis.css';


class Synopsis extends Component {

  render() {
    const { state , description} = this.props;

    return (
      <p className = {state ? "" : "active"}>
        <strong>Synopsis :</strong> {state ? description.substring(0, 10) + "..." : description}
      </p>
    );
  }
}

export default Synopsis;
