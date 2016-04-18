import React, { Component } from 'react';
import CloseWindowButton from '../../buttons/window/close';
import Draggable from 'react-draggable';
require('../styles/index.css');

export default class ErrorWindow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.errorWindow.id,
      title: this.props.errorWindow.title,
      message: this.props.errorWindow.message
    };
  }

  render() {
    const { close, errorWindow } = this.props;

    if (!errorWindow.isOpen) return null;

    return (
      <Draggable handle=".window-bar-header" bounds="#desktop">
        <div id={this.state.id} className="window" >
          <div className="row">
            <div className="window-bar">
              <div className="window-bar-btns">
                <CloseWindowButton windowId={this.state.id} close={close} />
              </div>
              <div className="window-bar-header">
                {this.state.title}
              </div>
            </div>
          </div>
        </div>
      </Draggable>
    )
  }
}
