import React, { Component } from 'react';
import File from '../../files/txt';
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
          <div className="row">
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
              <ul>
                <li>
                  <input type="button" className="window-nav-back" />
                </li>
                <li>
                  <input type="button" className="window-nav-forward" />
                </li>
              </ul>
             </div>
            <div className="window-content">
              <div className="pull-left col-md-3 right-divider window-menu">
                <ul>
                  <li>
                    <input type="button" className="window-menu-option" value="Home" />
                  </li>
                  <li>
                    <input type="button" className="window-menu-option" value="Desktop" />
                  </li>
                </ul>
              </div>
              <div className="pull-right col-md-9">
                <File name="help.txt" />
                <File name="Nodejs.txt" />
              </div>
            </div>
          </div>
        </div>
      </Draggable>
    )
  }
}
