import React, { Component } from 'react';
import ChatIcon from '../../../assets/icons/Workgroup.png';
require('../styles/index.css');

export default class ChatExe extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   name: this.props.name
    // };
  }

  handleDoubleClick() {
    const { onDoubleClick } = this.props;
    onDoubleClick();
  }

  render() {
    return (
      <figure className="exe" onDoubleClick={this.handleDoubleClick.bind(this)}>
        <p><img src={ChatIcon} alt="" /></p>
        <figcaption>D-Chat</figcaption>
      </figure>
    )
  }
}
