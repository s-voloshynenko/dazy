import React, { Component } from 'react';
require('../styles/index.css');

export default class CloseWindowButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      windowId: this.props.windowId
    };
  }

  closeWindow() {
    this.props.close(this.props.windowId);
  }

  render() {
    return (
      <div className="window-bar-btn bar-close"
           onClick={this.closeWindow.bind(this)}>
      </div>
    )
  }
}
