import React, { Component } from 'react';
import CloseWindowButton from '../../buttons/window/close';
import Draggable from 'react-draggable';
require('../styles/index.css');

export default class ErrorWindow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.id,
      message: this.props.message
    };
  }

  render() {
    return (
      <Draggable handle=".window-bar-header" bounds="#desktop">
        <div id={this.state.id} className="window" onClick={this.disableChildClick.bind(this)}>
          <div className="row">
            <div className="window-bar">
              <div className="window-bar-btns">
                <CloseWindowButton windowId={this.state.id} />
              </div>
              <div className="window-bar-header">
                System error
              </div>
            </div>
          </div>
        </div>
      </Draggable>
    )
  }
}
