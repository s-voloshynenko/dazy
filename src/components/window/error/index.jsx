import React, { Component } from 'react';
import CloseWindowButton from '../../buttons/window/close';
import OkButton from '../../buttons/window/ok';
import Draggable from 'react-draggable';

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
    const { hoist, close, errorWindow } = this.props;

    if (!errorWindow.isOpen) return null;

    return (
      <Draggable handle=".window-bar-header"
                 bounds="#desktop">
        <div className="window-wrap"
             onClick={hoist.bind(this, 'test')}
             style={{zIndex: errorWindow.zIndex}}>
        <div id={this.state.id} className="window" >
          <div className="row">
            <div className="window-bar">
              <div className="window-bar-btns">
                <CloseWindowButton windowId={this.state.id} close={close} />
              </div>
              <div className="window-bar-header">
                {this.state.title}
              </div>
              <div className="window-content">
                {this.state.message}
                <div className="row">
                  <OkButton windowId={this.state.id} action={close} />
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </Draggable>
    );
  }
}
