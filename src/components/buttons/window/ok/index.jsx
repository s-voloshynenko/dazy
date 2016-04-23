import React, { Component } from 'react';

export default class OkButton extends Component {
  handleAction () {
    const { windowId, action } = this.props;

    action(windowId);
  }

  render() {
    return (
      <input className="ok-btn"
             type="button"
             value="Ok"
             onClick={this.handleAction.bind(this)} />
    )
  }
}
