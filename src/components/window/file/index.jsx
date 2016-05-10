import React, { Component } from 'react';
import Draggable from 'react-draggable';
import HideWindowButton from '../../buttons/window/hide';
import FullScreenButton from '../../buttons/window/fullscreen';
import CloseWindowButton from '../../buttons/window/close';
import TxtWindow from './txt';

export default class FileWindow extends Component {
  constructor() {
    super();

    this.state = {
      type: this.props.type,
      fileWindow: this.props.fileWindow
    };
  }

  render() {
    const { folder, close } = this.props;

    if (!folder.isOpen) return null;

    return (
      <Draggable handle=".window-bar-header" bounds="#desktop">
        <div id={this.state.fileWindow.id} className="window" onClick={this.disableChildClick.bind(this)}>
          <div className="row">
            <div className="window-bar">
              <div className="window-bar-btns">
                <HideWindowButton />
                <FullScreenButton />
                <CloseWindowButton windowId={this.state.fileWindow.id} close={close} />
              </div>
              <div className="window-bar-header">
                {this.state.fileWindow.name}
              </div>
            </div>
          </div>
          { this.state.type === 'txt' &&
            <TxtWindow data={this.state.fileWindow.data} />
          }
        </div>
      </Draggable>
    )
  }
}
