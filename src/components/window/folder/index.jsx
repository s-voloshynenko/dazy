import React, { Component } from 'react';
import HideWindowButton from '../../buttons/window/hide';
import FullScreenButton from '../../buttons/window/fullscreen';
import CloseWindowButton from '../../buttons/window/close';
import Draggable from 'react-draggable';
require('../styles/index.css');

export default class FolderWindow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.name
    };
  }

  render() {
    return (
      <Draggable handle=".window-bar-header" bounds="#desktop">
        <div id="test9" className="window">
          <div className="window-bar">
            <div className="window-bar-btns">
              <HideWindowButton />
              <FullScreenButton />
              <CloseWindowButton windowId="test9" />
            </div>
            <div className="window-bar-header">
              {this.state.name}
            </div>
          </div>
          <div className="window-nav">
            {'test'}
          </div>
        </div>
      </Draggable>
    )
  }
}
