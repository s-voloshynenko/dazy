import React, { Component } from 'react';
import Draggable from 'react-draggable';
import HideWindowButton from '../../buttons/window/hide';
import FullScreenButton from '../../buttons/window/fullscreen';
import CloseWindowButton from '../../buttons/window/close';
import TxtWindow from './txt';

export default class FileWindow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fileWindow: this.props.fileWindow
    };
  }

  render() {
    const { hoist, fileWindow, close } = this.props;

    if (!fileWindow.isOpen) return null;

    return (
      <Draggable handle=".window-bar-header"
                 bounds="#desktop">
        <div className="window-wrap"
             onClick={hoist.bind(this, this.state.fileWindow.id)}
             style={{zIndex: fileWindow.zIndex}}>
        <div id={this.state.fileWindow.id} className="window">
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
          { this.state.fileWindow.type === 'txt' &&
            <TxtWindow data={this.state.fileWindow.data} />
          }
        </div>
        </div>
      </Draggable>
    )
  }
}
